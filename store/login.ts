import { defineStore } from 'pinia'
import { reactive } from 'vue'

export interface UserData {
    email: string;
    password: string;
}

export const userLogInStore = defineStore('login', () => {
    const loginInfo = reactive<UserData>({ email: '', password: '' });

    function loginUserData(user: UserData) {
        loginInfo.email = user.email;
        loginInfo.password = user.password;
    }

    return { loginUserData, loginInfo }
})
