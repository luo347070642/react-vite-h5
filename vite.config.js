import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
import dotenv from 'dotenv'
import fs from 'fs'

export default ({ command, mode }) => {
  let NODE_ENV = process.env.NODE_ENV || 'development'
  let envFiles = []
  //根据不同的环境使用不同的环境变量
  if (command == 'serve') {
    envFiles = [
      /** default file */
      `.env`
    ]
  } else {
    envFiles = [
      /** default file */
      `.env`,
      /** mode file */
      `.env.${NODE_ENV}`
    ]
  }
  for (const file of envFiles) {
    const envConfig = dotenv.parse(fs.readFileSync(file))
    for (const k in envConfig) {
      process.env[k] = envConfig[k]
    }
  }
  return defineConfig({
    plugins: [
      reactRefresh(),
      styleImport({
        libs: [
          {
            libraryName: 'zarm',
            esModule: true,
            resolveStyle: name => `zarm/es/${name}/style/css`
          }
        ]
      })
    ],
    css: {
      modules: {
        localsConvention: 'dashesOnly'
      },
      preprocessorOptions: { less: { javascriptEnabled: true } }
    },
    server: {
      // 是否自动在浏览器打开
      open: true,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    // 服务端渲染
    ssr: false,
    base: process.env.VITE_BASE_URL,
    outDir: process.env.VITE_OUTPUT_DIR,
    define: {
      'process.env': {}
    }
  })
}
