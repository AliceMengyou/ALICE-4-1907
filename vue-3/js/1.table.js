Vue.component('Table', {
  props: [],
  data() {
    return {
      column: [
        {
          title: '#',
          key: 'id',
        },
        {
          title: 'First Name',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          key: 'lastName',
        },
        {
          title: 'User Name',
          key: 'userName',
        },
      ],
      data: [
        {
          id: '1',
          firstName: 'Mark',
          lastName: 'Otto',
          userName: '@mdo',
        },
        {
          id: '2',
          firstName: 'Jacob',
          lastName: 'Thornton',
          userName: '@fat',
        },
        {
          id: '3',
          firstName: 'Larry',
          lastName: 'the Bird',
          userName: '@twitter',
        },
      ],
    };
  },

  template: `
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th v-for="item in column">{{item.title}}</th>
        </tr>
      </thead>
      <tbody v-for="value in data">
        <tr>
          <td v-for="col in column">{{value[col.key]}}</td>
        </tr>
      </tbody>
      
    </table>
    </div>
    `,
});
