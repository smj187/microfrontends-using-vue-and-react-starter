<template>
  <div
    class="z-20 sticky top-0 left-0 h-16 w-full px-3 flex justify-between items-center border-slate-200 border-b dark:border-slate-700 bg-white dark:bg-slate-900"
  >
    <div class="flex space-x-3 lg:hidden">
      <button class="hoverable h-12 w-12 peer" @click="toggleAsideOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div
      class="cursor-pointer select-none h-12 flex items-center justify-center px-3"
    >
      <img src="../assets/logo.png" alt="log" class="h-9 w-9" />
      <span class="pl-3 text-md font-semibold" v-if="props.appName">
        {{ props.appName }}
      </span>
    </div>

    <div class="flex-1 px-6">
      <slot />
    </div>

    <div class="flex space-x-3">
      <button class="hoverable h-12 w-12" @click="toggleDark">
        <svg
          v-if="isDark"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useShellStore } from "../store"

const props = defineProps({
  appName: String,
})

const { toggleAsideOpen } = useShellStore()
const isDark = ref(window.matchMedia("(prefers-color-scheme:dark)").matches)

onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
})

function toggleDark() {
  if (isDark.value) {
    document.documentElement.classList.remove("dark")
  } else {
    document.documentElement.classList.add("dark")
  }

  isDark.value = !isDark.value
}
</script>

<style lang="postcss">
.hoverable {
  @apply hover:bg-gray-200 dark:hover:bg-slate-800 rounded flex items-center justify-center cursor-pointer select-none;
}
</style>
