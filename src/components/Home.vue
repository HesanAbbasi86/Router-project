<script setup>
// Import the Pinia store
import { RouterLink } from 'vue-router';
import { useAppStore } from '../stores/button'
// Create an instance of the store
const appStore = useAppStore()
</script>

<template>
    <!-- Main container -->
    <div class="p-2.5 flex flex-col justify-center items-center mt-24 text-[50px] text-white">

        <!-- Display the page title -->
        <h1 class="text-shadow-lg text-shadow-red-500">
            Hello From Home Page
        </h1>

        <br>

        <!-- Call the store action when the button is clicked -->
        <button @click="appStore.toggleVisible()"
            class="bg-blue-500 text-white px-4 py-2 rounded dark:md:hover:bg-fuchsia-600" id="button">
            <!-- Display the current button label -->
            {{ appStore.nameButton }}
        </button>

        <!-- Bind the input value to the store -->
        <input v-model="appStore.userName" type="text" placeholder="متن را وارد کنید"
            class="focus:outline-hidden text-center">
    </div>
    <RouterView></RouterView>
</template>