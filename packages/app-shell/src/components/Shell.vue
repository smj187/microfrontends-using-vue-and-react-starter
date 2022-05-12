<script setup lang="ts">
import Header from "./Header.vue"
import Aside from "./Aside.vue"
import Main from "./Main.vue"

const props = defineProps({
  appName: String,
})
</script>

<template>
  <div
    class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white"
  >
    <Header :app-name="props.appName">
      <slot name="header"> header-slot-content </slot>
    </Header>

    <Aside>
      <slot name="aside"> aside-slot-content </slot>
    </Aside>

    <Main>
      <slot name="main"> main-slot-content </slot>
    </Main>
  </div>
</template>
