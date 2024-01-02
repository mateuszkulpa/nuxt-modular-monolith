import {defineNuxtModule, createResolver, addServerScanDir} from '@nuxt/kit'
export default defineNuxtModule(() => {
    const resolver = createResolver(import.meta.url)
    addServerScanDir(resolver.resolve('./server'))
})