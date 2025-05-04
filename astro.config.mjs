// @ts-check
import { defineConfig } from 'astro/config'
import svgLoader from 'vite-svg-loader'

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file',
        assets: 'compressed',
        assetsPrefix: './',
    },
    output: 'static',
    vite: {
        plugins: [svgLoader()],
        server: {
            watch: {
                usePolling: true,
                interval: 100,
            },
        },
    },
})
