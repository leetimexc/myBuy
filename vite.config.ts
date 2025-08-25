import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './public/manifest.json'

// 修改manifest对象，确保content_scripts路径与源文件匹配
const modifiedManifest = {
  ...manifest,
  content_scripts: [
    {
      ...manifest.content_scripts[0],
      js: ['src/content/index.ts'] // 指向源文件
    }
  ]
}

export default defineConfig({
  plugins: [
    vue(),
    crx({ manifest: modifiedManifest }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
        options: resolve(__dirname, 'src/options/index.html'),
        background: resolve(__dirname, 'src/background/index.ts'),
        content: resolve(__dirname, 'src/content/index.ts'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // 移除文件名中已有的.js后缀，避免重复
          const name = chunkInfo.name.replace(/\.js$/, '');
          return `js/${name}.js`;
        },
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name][extname]';

          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]

          if (/\.(woff|woff2|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'fonts'
          } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'img'
          } else if (/\.css$/i.test(assetInfo.name)) {
            extType = 'css'
          }

          return `${extType}/[name][extname]`
        },
      },
      // 将chrome API标记为外部依赖，不进行打包
      external: ['chrome'],
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV === 'development',
  },
})
