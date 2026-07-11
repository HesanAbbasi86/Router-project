// Import the defineStore function from Pinia
import { defineStore } from 'pinia'

// Create a new Pinia store
export const useAppStore = defineStore('button', {

    // Define the reactive state
    state: () => ({
        userName: '',
        isVisible: false,
        nameButton: 'Show'
    }),

    // Define actions to update the state
    actions: {

        // Toggle the visibility and update the button text
        toggleVisible() {
            this.isVisible = !this.isVisible

            if (this.isVisible) {
                this.nameButton = 'Hide'
            } else {
                this.nameButton = 'Show'
            }
        }
    }
})