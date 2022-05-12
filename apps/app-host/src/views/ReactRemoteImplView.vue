<template>
  <div ref="reactRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { renderApp } from "react-remote/main"

const reactRef = ref<HTMLDivElement>()

onMounted(() => {
  renderApp(reactRef.value)
})
</script>
