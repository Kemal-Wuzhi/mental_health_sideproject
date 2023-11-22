<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password">
            </div>
            <button type="submit">Login</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref('')
const password = ref('')

// login logic 

</script>

<style></style>