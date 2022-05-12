<template>
  <div ref="vueRef" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { RenderElement, Button } from "vue-shared"

const vueRef = ref<HTMLDivElement>()

onMounted(() => {
  RenderElement(vueRef.value!)
})
</script>
