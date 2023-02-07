/*
 * @Author: xinxu
 * @Date: 2023-02-03 11:21:39
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-03 11:36:01
 * @FilePath: /Smart-UI/vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
