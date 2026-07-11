<script setup>
// Import RouterView to display the component
// that matches the current route.
import { RouterView, RouterLink } from 'vue-router'
const links = [{
  to: "/",
  class: "bg-indigo-950 text-white px-8 py-2.5 rounded no-underline bg-sky-500 hover:bg-sky-700",
  text: "Go To Home",
  id: 1
},
{
  to: "/Firstpage",
  class: "bg-indigo-950 text-white px-8 py-2.5 rounded no-underline bg-sky-500 hover:bg-sky-700 ",
  text: "Go To First Page",
  id: 2
},
{
  to: "/Secondpage",
  class: "bg-indigo-950 text-white px-8 py-2.5 rounded no-underline bg-sky-500 hover:bg-sky-700 ",
  text: "Go To Second Page",
  id: 3
}]
</script>

<template>
  <!--
    Main navigation of the application.

    Why?
    Keeping navigation inside App.vue makes the navigation
    available across all pages.

    Alternative:
    If the project grows, the navigation can be moved
    into a dedicated Layout component.
  -->
  <nav class="flex justify-center items-center mt-[100px] gap-5 text-[30px]">

    <!--
      RouterLink is styled as a button instead of wrapping
      it inside a <button> element.

      Why?
      RouterLink already renders an <a> element, so adding
      a <button> around it would create nested interactive
      elements, which is not considered good HTML practice.
    -->
    <RouterLink v-for="link in links" :key="link.id" :to="link.to" :class="link.class">
      {{ link.text }}

    </RouterLink>
  </nav>

  <!--
    RouterView acts as a placeholder.

    Why?
    It renders the component that matches the current route,
    allowing the navigation bar to remain unchanged while
    only the page content is updated.
  -->
  <RouterView />
</template>