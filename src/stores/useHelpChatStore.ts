import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import { push } from 'notivue'
import { HELP_CHAT } from '@/constants/websocket'

interface Message {
  text: string
  sender: 'Вы' | 'Поддержка'
  createdAt: string
}

interface SockerResponse {
  chatId: string,
  text?: string,
  type: string,
  createAt: string
}

interface HelpChatState {
  socket: WebSocket | null
  userId: string | null
  messages: Message[]
  newMessage: string
  isTyping: boolean
}

export const useHelpChatStore = defineStore('helpChat', {
  state: (): HelpChatState => ({
    socket: null,
    userId: null,
    messages: loadMessagesFromLocalStorage(),
    newMessage: '',
    isTyping: false,
  }),

  actions: {
    connectWebSocket() {
      this.socket = new WebSocket(HELP_CHAT)

      this.socket.onmessage = (event: MessageEvent) => {
        this.isTyping = false
      
        let response: { text: string; createdAt: string; chatId: string; type: string } | null = null
      
        try {
          response = JSON.parse(event.data)
        } catch (e) {
          push.error('Ошибка при получении сообщения от сервера')
          return
        }
      
        if (response) {

          const { text, createdAt, type, chatId } = response


          if (type === 'init') {
            return
          }
          console.log(this.userId, response)
          if(chatId) this.userId = chatId
      
          let sender: 'Вы' | 'Поддержка' = 'Поддержка'
      
          if (type === 'message') sender = 'Поддержка'
      
          if (text && createdAt) this.addMessage(text, sender)
        }
      }

      this.socket.onerror = (event: Event) => {
        this.isTyping = false

        const errorMessage =
          event instanceof ErrorEvent
            ? event.message
            : 'Проверьте интернет или попробуйте позже'

        push.error(`Ошибка соединения: ${errorMessage}`)
      }
    },

    sendMessage() {
      if (this.newMessage.trim()) {
        const messageData = {
          UserID: this.userId,
          OperatorID: 'operator1',
          Text: this.newMessage,
          CreatedAt: new Date().toISOString(),
        }

        const messageString = JSON.stringify(messageData)
        this.socket?.send(messageString)
        this.addMessage(this.newMessage, 'Вы')
        this.newMessage = ''

        this.isTyping = true
      }
    },

    addMessage(text: string, sender: 'Вы' | 'Поддержка') {
      const newMessage: Message = {
        text,
        sender,
        createdAt: new Date().toISOString(),
      }

      const twoHoursAgo = new Date().getTime() - 2 * 60 * 60 * 1000
      this.messages = this.messages.filter(
        msg => new Date(msg.createdAt).getTime() >= twoHoursAgo,
      )
      this.messages.push(newMessage)

      saveMessagesToLocalStorage(this.messages)
    },

    closeWebSocket() {
      if (this.socket) {
        this.socket.close()
      }
    },

    formatDate(date: string): string {
      return dayjs(date).format('DD.MM.YYYY, HH:mm')
    },
  },
})

function loadMessagesFromLocalStorage(): Message[] {
  const savedMessages = localStorage.getItem('chatMessages')
  if (savedMessages) {
    const messages: Message[] = JSON.parse(savedMessages)
    const twoHoursAgo = new Date().getTime() - 2 * 60 * 60 * 1000
    return messages.filter(
      msg => new Date(msg.createdAt).getTime() >= twoHoursAgo,
    )
  }
  return [
    {
      text: `Добрый день! Чем могу помочь?`,
      sender: 'Поддержка',
      createdAt: new Date().toISOString(),
    },
  ]
}

function saveMessagesToLocalStorage(messages: Message[]) {
  localStorage.setItem('chatMessages', JSON.stringify(messages))
}