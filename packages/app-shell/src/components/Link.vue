<template>
  <div
    class="text-slate-900 dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400 font-semibold text-lg mb-2 py-2.5 px-3 cursor-pointer rounded"
  >
    {{ props.name }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps({
  name: String,
})
</script>
