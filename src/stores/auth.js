import {defineStore} from 'pinia';

export const AuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuth: false,
    }),
    actions: {
        login(userData) {
            this.user = userData;
            this.isAuth = true;
        },
        logout() {
            this.user = null;
            this.isAuth = false;
        }
    },
    getters: {
        getUser: (state) => state.user
    }
})