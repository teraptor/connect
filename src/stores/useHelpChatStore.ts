import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import { push } from 'notivue'
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
  isTyping: boolean
}

interface AIResponse {
  type: string,
  text?: string | undefined,
  chatId: string,
  createdAt: string
}

export const useHelpChatStore = defineStore('helpChat', {
  state: (): HelpChatState => ({
    socket: null,
    messages: [],
    newMessage: '',
    isTyping: false,
  }),

  actions: {
    connectWebSocket() {
      this.socket = new WebSocket(HELP_CHAT)

      this.socket.onmessage = (event: MessageEvent) => {
        this.isTyping = false

        const response: AIResponse = event.data
        if (response.type === 'message' && response.text !== undefined) this.addMessage(response.text, 'Поддержка');
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
          UserID: 'user1',
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

      this.messages.push(newMessage)
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