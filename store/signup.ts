import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface UserData {
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    gender: string;
    mobileNumber: string;
    age: string;
    birthdate: Date;
    email: string;
    password: string;
    dataconsent: boolean;
}

export const userSignUpStore = defineStore('signup', () => {
    const signupInfo: UserData[] = reactive([]); // Changed to array




    // Function to push new user data
    function pushUserData(newUser: UserData) {
        signupInfo.push(newUser);
    }

    return {
        signupInfo,
        pushUserData
    };
});
