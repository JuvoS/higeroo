import HiGerooBtn from "./HiGerooBtn"; // 导入组件
const HGR = {
    install(Vue, options) {
        Vue.component(HiGerooBtn.name, HiGerooBtn); // HiGerooBtn.name 组件的name属性
    }
};
if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(HGR);
}
export default HGR; // 导出..