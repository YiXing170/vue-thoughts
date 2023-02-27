import { ref } from './vue'

export default {
  template: '<button @click="count++">{{ count }}</button>',
  setup() {
    const count = ref(0)

    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count
    }
  },
}