import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'
import imageminSvgo from 'imagemin-svgo'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'github-actions-prod' || mode === 'github-actions-build'
  
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), ''),
  }
  
  return {
    base: '/',
    server: {
      host: '0.0.0.0',
      https:
        mode === 'development'
          ? {
            key: './test-key.pem',
            cert: './test.pem',
          }
          : false,
    },
    optimizeDeps: {
      exclude: ['mp4-wasm'],
    },
    plugins: [
      react(),
      tsconfigPaths(),
      isProd && splitVendorChunkPlugin(),
      isProd && viteCompression(),
      isProd &&
      viteImagemin({
        plugins: {
          jpg: imageminMozjpeg(),
          png: imageminPngquant(),
          svg: imageminSvgo(),
        },
      }),
    ],
    assetsInclude: ['**/*.glb', '**/*.usdz', '**/*.hdr', '**/*.exr', '**/*.ktx2', '**/*.obj'],
    build: {
      sourcemap: true, // Production 배포시 False로 설정
      outDir: 'build',
      rollupOptions: {
        output: {
          entryFileNames: 'static/js/[name]-[hash].js',
          chunkFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').pop()
            if (/png|svg|jpe?g|ico|webp|gif|hdr|exr|ktx2/i.test(extType)) {
              extType = 'media/images'
            } else if (/glb|usdz/i.test(extType)) {
              extType = 'media/models'
            } else if (/mp3|wav/i.test(extType)) {
              extType = 'media/sounds'
            } else if (/mov|mp4|webm/i.test(extType)) {
              extType = 'media/videos'
            } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
              extType = 'media/fonts'
            } else if (/json/i.test(extType)) {
              extType = 'media/json'
            } else if (/tflite/i.test(extType)) {
              extType = 'media/tflite'
            }
            return `static/${extType}/[name]-[hash][extname]`
          },
        },
      },
    },
  }
})

