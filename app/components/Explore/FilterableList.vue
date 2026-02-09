<script setup lang="ts">
import PackageList from '../Package/List.vue'

const { keyword = '' } = defineProps<{
  keyword?: string
}>()

const pageSize = 25
const currentPage = shallowRef(1)

const isLoading = ref(false)
const isLoadingMore = ref(false)
const hasMore = ref(true)
const searchData = ref<NpmSearchResponse | null>(null)

const { search } = useNpmSearch()

onMounted(async () => {
  const data = await search(`keyword:${keyword}`, {
    from: (currentPage.value - 1) * pageSize,
    size: pageSize,
    popularity: 1,
    maintenance: 1,
  })

  searchData.value = data
})

async function loadMore() {
  if (isLoadingMore.value || !hasMore.value) return

  isLoadingMore.value = true
  try {
    const nextPage = currentPage.value + 1
    const from = (nextPage - 1) * pageSize

    const data = await search(`keyword:${keyword}`, {
      from,
      size: pageSize,
    })

    if (data.objects.length < pageSize) {
      hasMore.value = false
    }

    // Append new results to existing data
    searchData.value = {
      ...data,
      objects: [...(searchData.value?.objects || []), ...data.objects],
    }
    currentPage.value = nextPage
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error loading more packages:', error)
  } finally {
    isLoadingMore.value = false
  }
}
</script>

<template>
  <PackageList
    v-if="searchData && searchData.objects"
    :results="searchData.objects"
    :is-loading="isLoading || isLoadingMore"
    :current-page="currentPage"
    :has-more="hasMore"
    @load-more="loadMore"
  />
</template>
