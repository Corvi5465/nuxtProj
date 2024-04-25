import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface NewUserData {
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    gender: string;
    mobileNumber: string;
    age: string;
    birthdate: string;
    email: string;
    password: string;
    dataconsent: boolean;
}

export const userSignUpStore = defineStore('signup', () => {
    const signupInfo: NewUserData[] = reactive([]);

    async function createUserData(newUser: NewUserData) {
        signupInfo.push(newUser);
        const res = await fetch('http://localhost:4000/UserData',{
            method:'POST',
            body: JSON.stringify(newUser),
            headers: {'Content-Type': 'application/json'}
        })
        if (!res.ok) {
            console.error('Error:', res.statusText);
        }
  
    }

    return { signupInfo, createUserData };
});
