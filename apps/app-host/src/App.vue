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
        <RouterLink to="/react">
          <Link name="React View" />
        </RouterLink>
        <RouterLink to="/react-component">
          <Link name="React Component" />
        </RouterLink>
      </div>
    </template>

    <template #main>
      <RouterView />
    </template>
  </Shell>
</template>
