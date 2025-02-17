<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useHelpChatStore } from '@/stores/useHelpChatStore';
import { onMounted, onBeforeUnmount } from 'vue';
import Button from '@/components/ui/Button.vue';
import InputField from '@/components/ui/InputField.vue';

const helpChatStore = useHelpChatStore();
const { messages, newMessage } = storeToRefs(helpChatStore);

const sendMessage = () => {
  helpChatStore.sendMessage();
};

onMounted(() => {
  helpChatStore.connectWebSocket();
});

onBeforeUnmount(() => {
  helpChatStore.closeWebSocket();
});
</script>
<template>
  <div class="help">
    <div class="help__chat">
      <h2 class="help__chat-title">Связь с поддержкой</h2>
      <div class="help__chat-messages">
        <div v-for="(message, index) in messages" :key="index" class="message" :class="{'message--right': message.sender === 'Вы', 'message--left': message.sender !== 'Вы'}">
          <p class="message__sender">{{ message.sender }}:</p>
          <p class="message__text">{{ message.text }}</p>
          <p class="message__time">{{ helpChatStore.formatDate(message.createdAt) }}</p>
        </div>
      </div>
      <div class="help__chat-button-group">
        <InputField
          v-model="newMessage"
          placeholder="Напишите сообщение ..."
          size="large"
        />
        <Button
          button-type="primary"
          text="Отправить"
          @click="sendMessage"
          type="button"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.help {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  &__chat {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 70vh;
    border: 2px solid $border-light;
    padding: 24px;
    background-color: $light-color;
    border-radius: 30px;
    gap: 16px;
    margin: 8px 0;
    position: relative;

    &-title {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }

    &-messages {
  overflow-y: auto;
  height: 100vh;
  padding: 20px;
  background: rgba(249, 250, 251, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &::-webkit-scrollbar { 
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $main-color;
  }

  &::-webkit-scrollbar-track {
    margin: 10px 0;
    background-color: $light-grey-color;
  }
}

.message {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 20%;
  max-width: 40%;
  width: auto;
  word-wrap: break-word;
  background-color: $light-color;
  padding: 12px;
  border-radius: 10px;

  &--left {
    background-color: rgba($success-color, 0.2);
    align-self: flex-start;
  }

  &--right {
    background-color: rgba($main-color, 0.2);
    align-self: flex-end;
  }

  &__sender {
    font-weight: 500;
  }

  &__text {
    font-weight: 300;
  }

  &__time {
    text-align: right;
    font-weight: 300;
    font-size: 10px;
    color: $help-color;
  }
}
    &-button-group {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      width: 100%;
      margin-top: auto;

      & > *:first-child {
        flex-basis: 80%;
      }

      & > *:nth-child(2) {
        flex-basis: 20%;
      }
    }
  }
}
</style>