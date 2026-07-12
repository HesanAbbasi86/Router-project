<script setup>

import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";


const username = ref("");
const password = ref("");


const router = useRouter();
const route = useRoute();

function login() {

    const user = {
        username: username.value,
        password: password.value
    }


    localStorage.setItem(
        "user",
        JSON.stringify(user)
    )


    // خالی کردن input ها
    username.value = ""
    password.value = ""


    router.push("/Dashboard")

}
</script>



<template>


    <div class="h-screen w-screen flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">


        <div class="w-[330px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">


            <h1 class="text-2xl font-bold text-center text-gray-800 dark:text-white">
                Welcome Back
            </h1>


            <p class="text-center text-gray-500 dark:text-gray-300 mt-2 mb-5">
                Login to your account
            </p>



            <form @submit.prevent="login" class="flex flex-col gap-3">


                <input v-model="username" type="text" placeholder="Username" class="
            px-4
            py-3
            rounded-xl
            border
            border-gray-300
            dark:border-gray-600
            dark:bg-gray-700
            dark:text-white
            outline-none
            " />



                <input v-model="password" type="password" placeholder="Password" class="
            px-4
            py-3
            rounded-xl
            border
            border-gray-300
            dark:border-gray-600
            dark:bg-gray-700
            dark:text-white
            outline-none
            " />



                <button class="
            mt-2
            bg-indigo-600
            text-white
            py-3
            rounded-xl
            hover:bg-indigo-700
            transition
            ">

                    Login

                </button>



            </form>



        </div>


    </div>


</template>