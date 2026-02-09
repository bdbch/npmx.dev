<script setup lang="ts">
import type { ExploreCategoryGroup } from '~/pages/explore/types'

const { categories } = defineProps<{
  class?: string
  categories: ExploreCategoryGroup[]
}>()
</script>

<template>
  <nav :class="class" class="flex flex-col gap-4">
    <div v-for="category in categories" :key="category.key">
      <span
        class="block -mb-1 font-mono text-xs text-fg uppercase sticky top-14 bg-bg tracking-wider z-10 py-2 transition-all duration-200 pointer-events-none"
        >{{ category.name }}</span
      >
      <NuxtLink
        class="-mx-2 flex items-center justify-start w-full gap-2 p-2 rounded-md font-mono text-sm text-fg-muted hover:bg-bg-subtle hover:text-fg transition-colors duration-200"
        v-for="link in category.items"
        :key="link.key"
        :to="`/explore${link.href ?? `/${link.key}`}`"
      >
        <span :class="link.iconClass" class="size-4 text-fg-muted" aria-hidden="true" />
        {{ link.name }}
      </NuxtLink>
    </div>
  </nav>
</template>
