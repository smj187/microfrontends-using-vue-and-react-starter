<template>
  <div ref="vueRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { renderApp } from "vue-remote/main"

const vueRef = ref<HTMLDivElement>()

onMounted(() => {
  renderApp(vueRef.value)
})
</script>
