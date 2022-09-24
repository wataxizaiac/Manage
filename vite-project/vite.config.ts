import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import eslintPlugin from 'vite-plugin-eslint'

const pathSrc = resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue','vue-router'],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // // Auto import icon components
        // // 自动导入图标组件  Bug：动态引入失效
        // IconsResolver({
        //   prefix: 'Icon',
        // }),
      ],

      dts: resolve(pathSrc, 'auto-imports.d.ts'),
    }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件 Bug：动态引入失效
        // IconsResolver({
        //   enabledCollections: ['ep'],
        // }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],

      dts: resolve(pathSrc, 'components.d.ts'),
    }),

    // Icons({
    //   autoInstall: true,
    // }),

    Inspect(),

    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    })
  ],

  //localhost打开
  // server: {
  //   host: '0.0.0.0', //ip地址
  //   // port: 8080, //端口号
  //   open: true //启动后是否自动打开浏览器
  // }
})