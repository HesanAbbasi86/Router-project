<template>
    <!-- Display the page title -->
    <h1
        class="p-2.5 flex justify-center items-center mt-24 text-[50px] text-blue-500 text-shadow-lg text-shadow-red-500">
        Hello From First Page
    </h1>

    <!-- Display the user's name only when the visibility flag is true -->
    <div v-if="appStore.isVisible"
        class="p-2.5 flex justify-center items-center mt-24 text-[50px] text-blue-500 text-shadow-lg text-shadow-red-500">
        Hey I'm show! {{ appStore.userName }}
    </div>
</template>

<script setup>
// Import the current route information
import { useRoute } from 'vue-router'

// Import the Pinia store
import { useAppStore } from '../stores/button'

// Create an instance of the store
const appStore = useAppStore()

// Access the current route
const route = useRoute()

// Log the route parameter to the console
console.log(route.params.id)
</script>

<style></style>