<script setup lang="ts">
import PackageList from '../Package/List.vue'

const { data: trendingData, pending } = useLazyFetch(() => {
  return '/api/registry/explore/popular'
})
</script>

<template>
  <PackageList :results="trendingData" :is-loading="pending" />
</template>
