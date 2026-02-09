import { createError } from 'h3'

export default defineCachedEventHandler(
  async _event => {
    try {
      const res = await fetch(
        `${NPM_REGISTRY}/-/v1/search?text=keywords:&size=40&from=0&popularity=1`,
      )
      const packages = await res.json()

      if (!packages) {
        createError({ statusCode: 404, message: 'No trending packages found' })
        return false
      }

      return packages.objects
    } catch (error) {
      createError({
        statusCode: 500,
        message:
          error instanceof Error ? error.message : 'Unknown error while fetching popular packages',
      })
    }
  },
  {
    maxAge: 60 * 60,
    swr: true,
    getKey: _event => {
      return `registry:explore:popular:v1`
    },
  },
)
