<script setup lang="ts">
import { Shell } from "app-shell"
import { Link } from "app-shell"

import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <Shell app-name="Main-App">
    <template #header>
      <div />
    </template>

    <template #aside>
      <div class="flex flex-col">
        <RouterLink to="/">
          <Link name="Home" />
        </RouterLink>
        <RouterLink to="/about">
          <Link name="About" />
        </RouterLink>

        <RouterLink :to="{ name: 'SharedReact' }">
          <Link name="Shared React Button" />
        </RouterLink>

        <RouterLink :to="{ name: 'SharedVue' }">
          <Link name="Shared Vue Button" />
        </RouterLink>

        <RouterLink :to="{ name: 'VueRemote' }">
          <Link name="Vue Remote" />
        </RouterLink>

        <RouterLink :to="{ name: 'ReactRemote' }">
          <Link name="React Remote" />
        </RouterLink>
      </div>
    </template>

    <template #main>
      <RouterView />
    </template>
  </Shell>
</template>
