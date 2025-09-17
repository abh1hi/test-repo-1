// src/stores/authStore.js
import { defineStore } from 'pinia';
import apiClient from '@/services/api';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        isAuthenticated: !!localStorage.getItem('token')
    }),
    actions: {
        async login(email, password) {
            try {
                const response = await apiClient.post('/auth/login', { email, password });
                this.token = response.data.token;
                this.isAuthenticated = true;
                localStorage.setItem('token', this.token);
                apiClient.defaults.headers.common['x-auth-token'] = this.token;
                return true;
            } catch (error) {
                console.error('Login failed:', error.response.data);
                return false;
            }
        },
        logout() {
            this.token = null;
            this.isAuthenticated = false;
            localStorage.removeItem('token');
            delete apiClient.defaults.headers.common['x-auth-token'];
        }
    }
});