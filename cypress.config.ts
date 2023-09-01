import { defineConfig } from 'cypress'

export default defineConfig({
    chromeWebSecurity: false,
    video: false,
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },
})
