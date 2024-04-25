<script setup lang="ts">
import { ref } from 'vue';
import { userLogInStore } from '@/store/login'

const signIn = userLogInStore();
const { loginUserData } = userLogInStore();


const sign= ()=>{
  loginUserData({
    email: login.value.email,
    password: login.value.password
  })
}  

const login = ref({
  email:'',
  password: ''
})

const emailRules = [
  (value: string) => {
    if (value) return true;
    return 'E-mail is required.';
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;
    return 'E-mail must be valid.';
  },
];
</script>

<template>
    <div class="grid place-items-center">
        <h2 class="text-[#ffa31a] font-bold mt-15 text-2xl">Login</h2>
        <div>
            <v-form>
                <v-container>
                    <v-text-field v-model="login.email" class="text-white w-80 mt-10" label="E-mail" variant="underlined" type="email" :rules="emailRules"/>
                    <v-text-field v-model="login.password" class="text-white w-80" label="Password" variant="underlined" type="password"/>
                    <div class="flex justify-between">
                        <a href="#" class="text-[#ffa31a]">Send OTP</a>
                        <a href="#" class="text-[#ffa31a]">Forgot Password?</a>
                    </div>
                    <v-btn @click="sign" variant="tonal" color="#ffa31a" class="bg-[#ffa31a] text=black font-semibold mt-10 w-80">Log In</v-btn>
                </v-container>
            </v-form>
        </div>
    </div>
</template>


