<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- Chat Messages -->
    <ChatMessages :messages="messages" />

    <!-- Message Box -->
    <MessageBox :messages="messages" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatMessages from '../components/chat/ChatMessages.vue';
import MessageBox from '../components/chat/MessageBox.vue';
import type { ChatMessage } from '../interfaces/chat-message-interface';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola Mundo',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 3,
    message: 'Quieres ir a tomar café?',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/12-dafd576be23d3768641340f76658ddfe.gif',
  },
])
</script>