import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Custom directives

Vue.directive('second', {
  bind(el, binding) {
    console.log(el);
    
    if(binding.arg == 'column') {
      el.style.background = 'blue';
      el.style.padding = '20px';
    }
  }
})

Vue.directive('theme', {
  bind(el,binding) {
    console.log(el);
    
    
    if(binding.value == "wide") {
      el.style.maxWidth = '1200px';
      el.style.margin = 'auto';
    } else if (binding.value == 'narrow') {
      el.style.background= 'aqua';
    }
  }
})

Vue.directive('colorLi', {
  bind(el) {
    el.style.color= "#"+Math.random().toString().slice(2, 8);
  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
