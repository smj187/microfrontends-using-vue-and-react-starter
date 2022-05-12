<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <div class="bg-emerald-500 text-white flex justify-center space-x-3 p-3">
    <RouterLink to="/vue-remote/a"> View - A </RouterLink>
    <span>|</span>
    <RouterLink to="/vue-remote/b"> View - B </RouterLink>
    <span>|</span>
    <RouterLink to="/vue-remote/c"> View - C </RouterLink>
  </div>
  <RouterView />
</template>
