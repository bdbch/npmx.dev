<script setup lang="ts">
import FilterableList from '~/components/Explore/FilterableList.vue'
import ExploreLayout from '~/components/Explore/Layout.vue'

const { category } = useRoute().params as { category: string }
</script>

<template>
  <ExploreLayout
    :title="$t('explore.category.title', { category })"
    :tagline="$t('explore.category.tagline', { category })"
  >
    <FilterableList :keyword="category" />
  </ExploreLayout>
</template>
