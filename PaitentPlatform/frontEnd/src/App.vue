<template>
  <button @click="unhappy">UnHappy</button>
  <button @click="happy">Happy</button>
  <button @click="others">Others</button>
  <div class="message-container">
    <ul class="messages">
      <li>for the chatroom</li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
