<script setup lang="ts">
const router = useRouter()
const canGoBack = useCanGoBack()

const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <header class="mb-12">
    <div class="flex items-baseline justify-between gap-4 mb-4">
      <h1 class="font-mono text-3xl sm:text-4xl font-medium">
        {{ title }}
      </h1>
      <button
        type="button"
        class="inline-flex items-center gap-2 font-mono text-sm text-fg-muted hover:text-fg transition-colors duration-200 rounded focus-visible:outline-accent/70 shrink-0"
        @click="router.back()"
        v-if="canGoBack"
      >
        <span class="i-carbon:arrow-left rtl-flip w-4 h-4" aria-hidden="true" />
        <span class="hidden sm:inline">{{ $t('nav.back') }}</span>
      </button>
    </div>
    <p class="text-fg-muted text-lg">
      <slot />
    </p>
  </header>
</template>
