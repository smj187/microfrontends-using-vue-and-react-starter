<template>
  <div ref="reactRef" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import RenderElement from "react-remote/ReactView"

const reactRef = ref<HTMLDivElement>()

onMounted(() => {
  RenderElement(reactRef.value)
})
</script>
