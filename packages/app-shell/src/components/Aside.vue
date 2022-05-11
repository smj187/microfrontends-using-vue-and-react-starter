<template>
  <aside
    class="fixed z-50 top-0 h-screen w-72 bg-white dark:bg-slate-900 shadow-2xl p-3 -translate-x-72 transition duration-200"
    :class="{ 'translate-x-0': isAsideOpen }"
  >
    <slot />
  </aside>
  <aside
    class="fixed border-r border-slate-200 dark:border-slate-700 w-72 p-3 overflow-hidden hidden lg:block"
    :style="{ 'min-height': 'calc(100vh - 4rem)' }"
  >
    <slot />
  </aside>
  <div
    @click="toggleAsideOpen"
    v-show="isAsideOpen"
    class="fixed z-40 inset-0 w-screen h-screen bg-black bg-opacity-40"
  ></div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { useShellStore } from "../store"

const { toggleAsideOpen } = useShellStore()
const { isAsideOpen } = storeToRefs(useShellStore())
</script>
