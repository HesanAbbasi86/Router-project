// Creates the Vue application instance.
// This is the entry point of the entire application.
import { createApp } from 'vue'

// Root component that contains the whole application.
import App from './App.vue'

// Router handles navigation between pages without reloading the browser.
import router from './router'

// Global styles shared across the application.
import './style.css'

// Pinia is the official state management library for Vue.
import { createPinia } from 'pinia'

// Create a single Vue application instance.
const app = createApp(App)

/*
 Register Vue Router.

 Why?
 The application contains multiple pages and URLs.

 Alternative:
 We could manually switch components with v-if,
 but Vue Router provides:
 - Browser history
 - Dynamic routes
 - Route guards
 - Better scalability
*/
app.use(router)

/*
 Register Pinia.

 Why?
 Some data needs to be shared between different components.

 Alternative:
 - props / emits
 - provide / inject
 - Local state

 Pinia is the cleanest solution when state becomes global.
*/
app.use(createPinia())

// Mount the application into <div id="app"></div>
app.mount('#app')