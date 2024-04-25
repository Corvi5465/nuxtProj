import { defineStore } from 'pinia'

export const userLogInStore = defineStore('login', () => {
    const loginInfo = ref<string[][]>([])

    function addSignIn(email: string, password: string) {
        loginInfo.value.push([email, password]);
    }

    return { addSignIn, loginInfo }
})
