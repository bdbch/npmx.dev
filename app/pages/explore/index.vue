<script setup lang="ts">
import FilterableList from '~/components/Explore/FilterableList.vue'
</script>

<template>
  <ExploreLayout :title="$t('explore.title')" :tagline="$t('explore.tagline')">
    <FilterableList keyword="" />
  </ExploreLayout>
</template>
