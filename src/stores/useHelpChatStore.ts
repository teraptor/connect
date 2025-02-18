import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import { push } from 'notivue'
import { useUserStore } from './useUserStore'
import { HELP_CHAT } from '@/constants/websocket'

interface Message {
  text: string
  sender: 'Вы' | 'Поддержка'
  createdAt: string
}

interface HelpChatState {
  socket: WebSocket | null
  messages: Message[]
  newMessage: string
}

export const useHelpChatStore = defineStore('helpChat', {
  state: (): HelpChatState => ({
    socket: null,
    messages: loadMessagesFromLocalStorage(),
    newMessage: '',
  }),

  actions: {
    connectWebSocket() {
      this.socket = new WebSocket(HELP_CHAT)

      this.socket.onmessage = (event: MessageEvent) => {
        const response: string = event.data
        this.addMessage(response, 'Поддержка')
      }

      this.socket.onerror = (error: Event) => {
        push.error(`Произошла ошибка: ${error}`)
      }
    },

    sendMessage() {
      const userStore = useUserStore()
      const userId = userStore.getUserId()

      if (!userId) push.error('Пользователь не найден')

      if (this.newMessage.trim()) {
        const messageData = {
          UserID: `user${userId}`,
          OperatorID: 'operator1',
          Text: this.newMessage,
          CreatedAt: new Date().toISOString(),
        }

        const messageString = JSON.stringify(messageData)
        this.socket?.send(messageString)
        this.addMessage(this.newMessage, 'Вы')
        this.newMessage = ''
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
