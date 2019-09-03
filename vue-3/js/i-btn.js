Vue.component('Button', {
  data() {
    return {
      value: '这是一个按钮',
    };
  },
  props: ['color'],
  template: `
    <button 
      type='button' 
      :class="{
      btn:true,
      'btn-primary':color === 'primary',
      'btn-success':color === 'success',
      'btn-info':color === 'info',

      }"
    >
    <slot></slot>
      
    </button>
  
  
  `,
  methods: {
    click() {
      alert('别点我');
    },
  },
});
