import { defineStore } from 'pinia'
import { reactive } from 'vue'
/* export const userLogInStore = defineStore('login', () => {
    const loginInfo = ref<string[][]>([])

    function addSignIn(email: string, password: string) {
        loginInfo.value.push([email, password]);
    }

    return { addSignIn, loginInfo }
})
 */
interface UserData {
    email: string;
    password: string;
}

export const userLogInStore = defineStore('login', () => {
    const loginInfo: UserData[] = reactive([]);

    function pushUserData(existingUser: UserData) {
        loginInfo.push(existingUser);
    }

    return { pushUserData, loginInfo }
})