export type ExploreCategory = {
  name: string
  key: string
  iconClass: string
  href?: string
}

export type ExploreCategoryGroup = {
  name: string
  key: string
  items: ExploreCategory[]
}
