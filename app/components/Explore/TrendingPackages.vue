<script setup lang="ts">
import PackageCard from '../Package/Card.vue'

const { data: trendingData, pending } = useLazyFetch(() => {
  return '/api/registry/explore/popular'
})
</script>

<template>
  <div v-if="pending">loading</div>
  <div v-if="trendingData">
    <div class="space-y-4">
      <PackageCard v-for="pkg in trendingData" :key="pkg.package.name" :result="pkg" />
    </div>
  </div>
</template>
