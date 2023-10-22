/*
 * @Author: coderFlyHorse 1953846199@qq.com
 * @Date: 2023-10-22 20:21:04
 * @LastEditors: coderFlyHorse 1953846199@qq.com
 * @LastEditTime: 2023-10-22 20:27:00
 * @FilePath: \blog_project\blog_dev\blog\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  }
})
