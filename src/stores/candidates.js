import {defineStore} from 'pinia';

export const useCandidateStore = defineStore('candidateStore', {
    state: () => {
        return {count : 0}
    },
    actions: {
            increment() {
                this.count++
            },
        }
})