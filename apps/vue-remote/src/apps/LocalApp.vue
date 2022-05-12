<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import { Shell, Link } from "app-shell"
</script>

<template>
  <Shell app-name="Vue-Remote-App">
    <template #header>
      <div />
    </template>

    <template #aside>
      <div class="flex flex-col">
        <RouterLink :to="{ name: 'Home' }">
          <Link name="Home" />
        </RouterLink>
        <RouterLink :to="{ name: 'VueRemote' }">
          <Link name="Vue Remote" />
        </RouterLink>
      </div>
    </template>

    <template #main>
      <RouterView />
    </template>
  </Shell>
</template>
