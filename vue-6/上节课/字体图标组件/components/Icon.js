Vue.component('Icon', {
  props: {
    type: String,
  },
  template: `
    <div class='app'>
        <i
            :class="[
                'iconfont',
                iconfontName
            ]"
        
        />
    </div>
    `,
  computed: {
    iconfontName() {
      if (this.type) {
        return 'icon-icon-' + this.type;
      } else {
        return '';
      }
    },
  },
});
