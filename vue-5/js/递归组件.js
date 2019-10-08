Vue.component('Tree', {
  name: 'i-tree',
  props: {
    data: Array,
  },
  template: `
    <div class='app'>
        <ul>
            <li v-for='item in data'>
                <div class='title' @click='item.isShowChildren=!item.isShowChildren'>
                    {{item.name}}
                </div>
                <i-tree v-if='item.isShowChildren' :data='item.children'/>
            </li>
        </ul>
    
    </div>
    `,
});
