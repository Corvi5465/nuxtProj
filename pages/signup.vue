<script setup lang="ts">
import { ref } from 'vue';
import { userSignUpStore } from '@/store/signup'

const signUp = userSignUpStore();
const { createUserData } = userSignUpStore()
const create=()=>{
  createUserData({
    firstName: form.value.firstname,
    middleName: form.value.middlename,
    lastName: form.value.lastname,
    suffix: form.value.suffix,
    gender: form.value.gender,
    mobileNumber: form.value.number,
    birthdate: form.value.birthdate,
    age: form.value.age,
    email: form.value.email,
    password: form.value.password,
    dataconsent: form.value.dataconsent
  });
}

const form = ref({
  firstname: '',
  middlename: '',
  lastname: '',
  suffix: '',
  gender: '',
  number: '',
  birthdate: '',
  age: '',
  email: '',
  password: '',
  dataconsent: false
});

const nameRules = [
  (value: string) => {
    if (value) return true;
    return 'Name is required.';
  },
  (value: string | undefined) => {
    if (value && value.length <= 10) return true;
    return 'Name must be less than 10 characters.';
  },
];

const numRules = [
  (value:string) => {
    if (/^\d*$/.test(value)) return true;
    return 'Only numerical characters are allowed';
  }
]

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
  <div>
    <div class="flex -mt-10">
      <h2 class="text-[#ffa31a] font-bold mt-15 text-2xl mx-auto">Sign Up</h2>
    </div>

    <div class="flex-1 mt-10">
        <v-card color="#212121">
          <v-form>
            <v-container>    
              <v-row>
                <v-col cols="12" md="3">
                  <v-text-field class="text-white" v-model="form.firstname" :counter="15" :rules="nameRules"
                    label="First name" hide-details required></v-text-field>
                </v-col>
    
                <v-col cols="12" md="3">
                  <v-text-field class="text-white " v-model="form.middlename" :counter="10" :rules="nameRules"
                    label="Middle name" hide-details required></v-text-field>
                </v-col>
    
                <v-col cols="12" md="3">
                  <v-text-field class="text-white " v-model="form.lastname" :rules="nameRules" label="Last name"
                    hide-details required></v-text-field>
                </v-col>
    
                <v-col cols="12" md="3">
                  <v-select class="text-white " label="Suffix" v-model="form.suffix"
                    :items="['Sr.', 'Jr.', 'III', 'IV', 'V', 'VI']"></v-select>
                </v-col>
    
              </v-row>
    
              <v-row>
                <v-col cols="12" md="3">
                  <v-select class="text-white " label="Gender" v-model="form.gender" :items="['Male', 'Female']"></v-select>
                </v-col>
    
                <v-col cols="12" md="3">
                  <v-text-field class="text-white " v-model="form.number" type="tel"  label="Mobile Number" maxlength="11"
                    required :rules="numRules"></v-text-field>
                </v-col>
    
                <v-col cols="12" md="3">
                  <v-text-field class="text-white " type="date" v-model="form.birthdate" label="Date of Birth"
                    required></v-text-field>
                </v-col>
    
                <v-col cols="12" md="3">
                  <v-text-field class="text-white" v-model="form.age" type="tel" label="Age" maxlength="2"
                    required :rules="numRules"></v-text-field>
                </v-col>
              </v-row>
    
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field class="text-white" v-model="form.email" :rules="emailRules"
                    label="E-mail" hide-details required></v-text-field>
                </v-col>
    
                <v-col cols="12" md="6">
                  <v-text-field class="text-white " label="Password" v-model="form.password" type="password"
                    required></v-text-field>
                </v-col>
              </v-row>
    
              <v-col cols="12" md="6">
                <v-checkbox label="Data Privacy Act" class="text-white w-60 -mt-6" v-model="form.dataconsent" required></v-checkbox>
              </v-col>
  
  
              <div class="flex justify-center">
                <v-btn @click="create" variant="tonal" color="#ffa31a" class="bg-[#ffa31a] text=black font-semibold w-60"
                >Sign UP</v-btn>
              </div>
            </v-container>
          </v-form>
        </v-card>
    </div>
  </div>
</template>