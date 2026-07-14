<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");

const router = useRouter();

// این دو مقدار روی خودِ router نصب شدن (توی router.js) و reactive هستن؛
// چون از useRouter() در زمان اجرا می‌گیریمشون (نه با import استاتیک)،
// همیشه به آخرین نسخه‌شون دسترسی داریم و به محض تغییر توی router.js،
// همون لحظه توی این کامپوننت هم آپدیت می‌شن.
const cameFrom = router.cameFrom;
const redirectPage = router.redirectPage;

function login() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    const destination = redirectPage.value || "/Dashboard";

    cameFrom.value = null;
    redirectPage.value = null;
    sessionStorage.removeItem("cameFrom");
    sessionStorage.removeItem("redirectPage");
    sessionStorage.removeItem("forcedRedirect");

    username.value = "";
    password.value = "";

    router.push(destination);
}
</script>

<template>

    <div class="h-[70dvh] w-screen flex items-center justify-center overflow-hidden">

        <div class="w-82.5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">

            <h1 class="text-2xl font-bold text-center text-gray-800 dark:text-white">
                Welcome Back
            </h1>

            <p v-if="cameFrom" class="text-gray-500 text-center mb-3">
                شما از صفحه
                <b>{{ cameFrom }}</b>
                به صفحه Login هدایت شدید.
            </p>

            <form @submit.prevent="login" class="flex flex-col gap-3">

                <input v-model="username" type="text" placeholder="Username"
                    class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none" />

                <input v-model="password" type="password" placeholder="Password"
                    class="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white outline-none" />

                <button class="mt-2 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
                    Login
                </button>

            </form>

        </div>

    </div>

</template>