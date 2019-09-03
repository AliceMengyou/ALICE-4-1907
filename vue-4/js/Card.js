const Card = {
  props: ['type'],
  data() {
    return {
      title: '你好',
    };
  },

  template: `
    <div class='input'>
        <slot>{{title}}</slot>
        <h1>哈哈哈</h1>
        <input v-show="type==='A'"/>
    </div>
    `,
  methods: {
    click() {
      alert('世界');
    },
  },
};
