<script setup lang="ts">
import DesktopNavigation from '~/components/Explore/DesktopNavigation.vue'
import type { ExploreCategoryGroup } from '~/pages/explore/types'
import PageHeader from '../Header/PageHeader.client.vue'

const { title, tagline } = defineProps<{
  title: string
  tagline: string
}>()

const categoryGroups: ExploreCategoryGroup[] = [
  {
    name: 'Discover',
    key: 'discover',
    items: [{ name: 'Popular', key: 'popular', href: '/', iconClass: 'i-carbon:star' }],
  },
  {
    name: 'Core',
    key: 'core',
    items: [
      { name: 'Framework', key: 'framework', iconClass: 'i-carbon:code' },
      { name: 'Library', key: 'library', iconClass: 'i-lucide:book' },
      { name: 'Utility', key: 'util', iconClass: 'i-carbon:tools' },
      { name: 'CLI', key: 'cli', iconClass: 'i-lucide:terminal' },
    ],
  },
  {
    name: 'Tooling',
    key: 'tooling',
    items: [
      { name: 'Build', key: 'build', iconClass: 'i-lucide:hammer' },
      { name: 'Bundler', key: 'bundler', iconClass: 'i-lucide:package' },
      { name: 'Compiler', key: 'compiler', iconClass: 'i-lucide:cpu' },
      {
        name: 'TypeScript',
        key: 'typescript',
        iconClass: 'i-simple-icons:typescript',
      },
    ],
  },
  {
    name: 'Quality',
    key: 'quality',
    items: [
      { name: 'Test', key: 'test', iconClass: 'i-carbon:tools-alt' },
      { name: 'Lint', key: 'lint', iconClass: 'i-lucide:check-square' },
      { name: 'Formatter', key: 'formatter', iconClass: 'i-lucide:align-left' },
      { name: 'Performance', key: 'performance', iconClass: 'i-lucide:gauge' },
    ],
  },
  {
    name: 'Frontend',
    key: 'frontend',
    items: [
      { name: 'UI', key: 'ui', iconClass: 'i-lucide:layout' },
      { name: 'CSS', key: 'css', iconClass: 'i-lucide:palette' },
      { name: 'Animation', key: 'animation', iconClass: 'i-lucide:zap' },
      { name: 'Chart', key: 'chart', iconClass: 'i-lucide:area-chart' },
    ],
  },
  {
    name: 'App Architecture',
    key: 'architecture',
    items: [
      { name: 'State', key: 'state', iconClass: 'i-lucide:layers' },
      { name: 'Router', key: 'router', iconClass: 'i-lucide:map' },
      { name: 'Form', key: 'form', iconClass: 'i-lucide:edit-3' },
      {
        name: 'Validation',
        key: 'validation',
        iconClass: 'i-lucide:check-circle',
      },
    ],
  },
  {
    name: 'Backend',
    key: 'backend',
    items: [
      { name: 'Backend', key: 'backend', iconClass: 'i-lucide:server' },
      { name: 'API', key: 'api', iconClass: 'i-lucide:plug' },
      { name: 'HTTP', key: 'http', iconClass: 'i-lucide:globe' },
      { name: 'Auth', key: 'auth', iconClass: 'i-lucide:key' },
      { name: 'Security', key: 'security', iconClass: 'i-lucide:shield' },
      { name: 'Database', key: 'database', iconClass: 'i-lucide:database' },
    ],
  },
  {
    name: 'Ops',
    key: 'ops',
    items: [
      { name: 'CI', key: 'ci', iconClass: 'i-lucide:workflow' },
      { name: 'Logging', key: 'logging', iconClass: 'i-lucide:file-text' },
      { name: 'Monitoring', key: 'monitoring', iconClass: 'i-lucide:activity' },
    ],
  },
  {
    name: 'Data & Utilities',
    key: 'data',
    items: [
      { name: 'File', key: 'file', iconClass: 'i-lucide:file' },
      { name: 'Date', key: 'date', iconClass: 'i-lucide:calendar' },
      { name: 'Time', key: 'time', iconClass: 'i-lucide:clock' },
      { name: 'Math', key: 'math', iconClass: 'i-lucide:calculator' },
    ],
  },
  {
    name: 'Hot',
    key: 'hot',
    items: [
      { name: 'AI', key: 'ai', iconClass: 'i-lucide:brain' },
      { name: 'ML', key: 'ml', iconClass: 'i-lucide:cpu' },
    ],
  },
  {
    name: 'Platforms',
    key: 'platforms',
    items: [
      { name: 'Browser', key: 'browser', iconClass: 'i-lucide:chrome' },
      { name: 'Extension', key: 'extension', iconClass: 'i-lucide:puzzle' },
      { name: 'Mobile', key: 'mobile', iconClass: 'i-lucide:smartphone' },
      { name: 'Desktop', key: 'desktop', iconClass: 'i-lucide:monitor' },
      { name: 'Game', key: 'game', iconClass: 'i-lucide:gamepad-2' },
    ],
  },
]
</script>

<template>
  <main class="container flex-1 py-12 sm:py-16 w-full">
    <div class="max-w-4xl mx-auto">
      <PageHeader :title="title">
        {{ tagline }}
      </PageHeader>
      <div class="my-8 grid grid-cols-[12.5rem_1fr] gap-6">
        <DesktopNavigation class="hidden md:flex" :categories="categoryGroups" />
        <slot />
      </div>
    </div>
  </main>
</template>
