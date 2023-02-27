function getDataType(data) {
  return Object.prototype.toString.call(data).toLowerCase()
}




function Vue(options) {

  // 初始化配置
  this.$options = options


  // 初始化当前实例的上下级关系
  vm.$parent = parent
  vm.$root = parent ? parent.$root : vm
  vm.$children = []
  vm.$refs = {}



  // 初始化当前实例的事件监听 主要是在父组件中有监听当前实例的一些行为 特别是组件更新时也要更新事件
  vm._events = Object.create(null)
  vm._hasHookEvent = false
  // init parent attached events
  const listeners = vm.$options._parentListeners
  if (listeners) {
    // updateComponentListeners(vm, listeners)
    // vm.$on(event, fn)
  }


  // 初始化vnode 为null  拿到$slots $scopedSlots 初始化$createElement方法
  vm.$vnode = {}
  vm.$slots = {}
  vm.$scopedSlots = {}

  vm.$createElement = () => { }

  // 再调用beforeCreate 钩子

  // 解析inject



  // 状态初始化 data props methods



  // 解析provider

  //created 钩子 callHook(vm, 'created')


  // 再挂载  

  this.mount = function (rootContainer) {
    if (getDataType(rootContainer) === 'string') {
      const root = document.querySelector(rootContainer)
      root.appendChild(this.$el)
    }
    return this
  }
}


// Vue.prototype.







// export function createApp(options) {
//   // 返回组件实例 实例上有mount方法
//   // 应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项
//   // 应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件： 全局可用
//   const instance = new Vue(options)
//   return instance
// }
// export function onMounted(cb) {
// }

// export function ref(val) {

// }

// export function reactive(obj) {
//   const p = new Proxy(obj, {
//     set(target, prop, value) {
//       console.log('触发更新')
//       target[prop] = value
//       return true
//     },
//     get(target, prop) {
//       console.log('收集依赖')
//       return target[prop]
//     },
//   })
//   return p
// }

