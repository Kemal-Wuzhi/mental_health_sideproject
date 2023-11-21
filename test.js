<template>
  <div class="chat-container">
    <ul class="messages">
      <li v-for="message in messages" :key="message.id">
        {{ message.text }}
      </li>
    </ul>
    <input type="text" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message...">
  </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);
const newMessage = ref('');

function sendMessage() {
  if (newMessage.value.trim()) {
    messages.value.push({ id: Date.now(), text: newMessage.value });
    newMessage.value = '';
  }
}

</script>

<style>
.chat-container {
  width: 300px;
  margin: auto;
  border: 1px solid #ddd;
  padding: 10px;
}

.messages {
  list-style-type: none;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.messages li {
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
</style>
