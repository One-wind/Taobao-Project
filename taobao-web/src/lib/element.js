export default {
    install(Vue, opt) {
        Vue.prototype.$element={

        }
        Vue.prototype.$element.getLeft = function (el) {
            let result = 0; //记录距离
            while (el) {
                result += el.offsetLeft //不包含左边框的距离
                result += el.clientLeft //左边框 宽度
                el = el.offsetParent;
            }
            return result;

        }
        Vue.prototype.$element.getTop = function (el) {
            let result = 0;
            while (el) {
                result += el.offsetTop //不包含上边框的距离
                result += el.clientTop // 上边框宽度
                el = el.offsetParent;
            }

            return result;
        }
    }
}