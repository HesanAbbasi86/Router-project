<script setup>
// Import the Pinia store
import { useAppStore } from '../stores/button'

// Create an instance of the store
const appStore = useAppStore()
defineProps({
  id: String,
  age: Number
})
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template>
  <!-- Display the page title -->
  <h1
    class="p-2.5 flex justify-center items-center mt-24 text-[50px] text-brown-500 text-shadow-lg text-shadow-red-500">
    Hello From Second Page
  </h1>
  <!-- Display the user's name only when the visibility flag is true -->
  <div v-if="appStore.isVisible"
    class="p-2.5 flex justify-center items-center mt-24 text-[50px] text-brown-500 text-shadow-lg text-shadow-red-500">
    Hey I'm show! {{ appStore.userName }}
  </div>
  <div> user{{ id }}</div>
  <div>user{{ age }}</div>
  <div
    class="p-2.5 flex justify-center items-center mt-24 text-[50px] text-brown-500 text-shadow-lg text-shadow-red-500"
    id="abbasi">
  </div>
</template>
