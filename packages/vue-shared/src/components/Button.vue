<template>
  <div
    @click="counter++"
    class="w-60 h-16 rounded bg-sky-400 text-white dark:bg-lime-500 dark:text-black cursor-pointer select-none flex items-center justify-center"
  >
    <span className="text-xl font-bold">Vue Button: {{ counter }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, createApp } from "vue"

const counter = ref(0)
</script>
