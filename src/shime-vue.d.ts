/*
 * @Author: xinxu
 * @Date: 2023-02-03 11:26:00
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-03 11:26:06
 * @FilePath: /Smart-UI/src/shime-vue.d.ts
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
