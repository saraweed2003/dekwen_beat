<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md">
      <h1 class="text-2xl font-semibold mb-4">Login</h1>
      <input v-model="username" placeholder="Username" class="w-full p-2 mb-2 border rounded">
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 mb-4 border rounded">
      <button @click="login" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Login
      </button>
      <p v-if="showErrorMessage" class="text-red-500 mt-2">Invalid username or password</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const showErrorMessage = ref(false);

const login = () => {
  if (username.value === 'admin' && password.value === '1234') {
    // Successful login logic here
    console.log('Logged in successfully');
    showErrorMessage.value = false;
  } else {
    showErrorMessage.value = true;
  }
};
</script>

<style>
/* Tailwind CSS classes and custom styles can be added here */
</style>
