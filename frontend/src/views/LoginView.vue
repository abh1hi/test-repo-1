<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = async () => {
    const success = await authStore.login(email.value, password.value);
    if (success) {
        router.push('/profile');
    } else {
        alert('Login failed. Please check your credentials.');
    }
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <button type="submit">Log In</button>
    </form>
  </div>
</template>