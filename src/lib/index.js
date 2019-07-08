import HiGeroo from './HiGeroo'

HiGeroo.install = function(Vue) {
    Vue.component('HiGeroo', HiGeroo)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(HiGeroo)
}

export default HiGeroo