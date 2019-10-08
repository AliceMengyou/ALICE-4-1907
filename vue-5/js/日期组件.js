Vue.component('DatePicker', {
  props: {
    before: [String, Date],
    after: [String, Date],
  },
  data() {
    return {
      iBefore: this.formatTime(this.before),
      iAfter: this.formatTime(this.after),
      beforeError: '',
    };
  },
  watch: {
    iBefore(newValue) {
      let data = new Date(newValue);
      if (data.toDateString() === 'Invalid Date') {
        this.beforeError = '日期格式有误';
      }
      // console.log(new Date(newValue));
      this.$emit('update:before', data);
    },
    iAfter(newValue) {
      console.log(newValue);
    },
  },
  methods: {
    formatTime(data) {
      if (typeof data === 'string') {
        return data;
      } else if (data instanceof Date) {
        const y = data.getFullYear();
        const M = data.getMonth() + 1;
        const d = data.getDate();
        return y + '-' + M + '-' + d;
      }
    },
  },
  template: `
    <div class='app'>
        <input type='text' v-model='iBefore'/>
        <span style='color:red'>{{beforeError}}</span>
        至
        <input type='text' v-model='iAfter'/>
    </div>
    `,
});
