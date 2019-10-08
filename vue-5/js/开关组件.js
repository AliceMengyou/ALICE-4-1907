Vue.component('Switcher', {
  props: {
    size: {
      type: String,
      default: 'default',
    },
    value: Boolean,
  },
  data() {
    return {
      iValue: this.value,
    };
  },
  watch: {
    value(newValue, oldValue) {
      // console.log('value发生了改变:', newValue);

      // 这里的代码是 当传过来的value值发生变化的时候 通知组件的iValue 也发生相应的变化
      this.iValue = newValue;
    },
    iValue(newValue, oldValue) {
      // console.log('iValue发生了改变:', newValue);

      // 这里的的意思是 当用户可以自己控制的iValue 发生变化的时候 通知父组件的value 也要发生相应的变化
      this.$emit('input', newValue);
    },
  },
  template: `
    <div @click='iValue=!iValue' :class="['switch',{
        'switch-large': size==='large',
        'switch-small': size==='small',
        'switch-default': size==='default',
        'switch-on': iValue
    }]">
        <span class='switch-btn'></span>
    </div>
    `,
  beforeCreate() {
    console.log('创建组件之前');
  },
  created() {
    console.log('新的组件已经创建好了');
  },
  beforeMount() {
    console.log('开始插入dom ');
  },
  mounted() {
    console.log('已经插入dom啦');
  },
  beforeUpdate() {
    console.log('当前数据正在发生改变');
  },
  updated() {
    console.log('数据更新完成');
  },
  beforeDestroy() {
    console.log('组件销毁之前');
  },
  destroyed() {
    console.log('组件已经销毁');
  },

  provide() {
    return {
      title: 'xxx',
      run() {
        alert(1);
      },
    };
  },
});
