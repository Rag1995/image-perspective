import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE_URL,
    plugins: [
      vue(),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages(),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports: [
          'vue',
          '@vueuse/core',
          'pinia',
        ],
        eslintrc: {
          enabled: true,
        },
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        directoryAsNamespace: true,
      }),
      // https://github.com/antfu/unplugin-icons
      Icons({
      // experimental
        autoInstall: true,
        compiler: 'vue3',
        scale: 1.2,
        defaultClass: 'unplugin-icon',
      }),
    ],
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, './src')}/`,
        '@cp/': `${resolve(__dirname, './src/components')}/`,
        '@img/': `${resolve(__dirname, './src/assets/img')}/`,
        '@style/': `${resolve(__dirname, './src/assets/style')}/`,
        '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      },
      extensions: ['.vue', '.js'],
    },
  }
})
