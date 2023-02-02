/*
 * @Author: xinxu
 * @Date: 2023-02-02 14:52:13
 * @LastEditors: xinxu
 * @LastEditTime: 2023-02-02 14:59:47
 * @FilePath: /smart-ui-vite/src/button/index.ts
 */
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "SButton",
  render() {
    return h("button", null, "MyButton");
  },
});
