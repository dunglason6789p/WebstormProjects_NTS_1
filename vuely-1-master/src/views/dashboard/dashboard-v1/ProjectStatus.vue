<!-- Shopping Cart Widget -->
<template>
  <div class="app-card mb-0">
    <div class="app-card-title">
      <h3>Project status</h3>
      <div class="app-contextual-link">
        <v-menu origin="center center" transition="scale-transition" bottom>
          <v-btn icon slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile @click="">
              <v-icon class="mr-1">settings</v-icon>
              <v-list-tile-title>Settings</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-icon class="mr-1">more</v-icon>
              <v-list-tile-title>View More</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-icon class="mr-1">notifications_off</v-icon>
              <v-list-tile-title>Disable notifications</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="app-full-content">
      <v-data-table
        :headers="headers"
        :items="items"
        v-model="selected"
        item-key="productName"
        select-all
        hide-actions>
        <template slot="headers" slot-scope="props">
          <tr>
            <th>
              <v-checkbox
                primary
                hide-details
                @click.native="toggleAll"
                :input-value="props.all"
                :indeterminate="props.indeterminate"
              ></v-checkbox>
            </th>
            <th v-for="header in props.headers" :key="header.text" class="text-xs-left">
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <td>
            <v-checkbox
              primary
              hide-details
              v-model="props.selected"
            ></v-checkbox>
          </td>
          <td class="text-xs-left text-blue fw-bold"><a href="javascript:;">{{ props.item.productName }}</a></td>
          <td class="text-xs-center" :class="props.item.priorityClasses">{{ props.item.priority }}</td>
          <td class="text-xs-center"><span class="label" :class="props.item.labelClasses">{{ props.item.status }}</span</td>
          <td class="text-xs-center">
            <ul class="list-inline">
              <li class="pa-0"><img src="/static/img/user-7.jpg" class="rounded-circle img-responsive" alt="user images" width="24" height="24"></li>
              <li class="pa-0"><img src="/static/img/user-8.jpg" class="rounded-circle img-responsive" alt="user images" width="24" height="24"></li>
              <li class="pa-0"><img src="/static/img/user-9.jpg" class="rounded-circle img-responsive" alt="user images" width="24" height="24"></li>
            </ul>
          </td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: [],
        headers: [
          { text: 'Project Name', align: 'left', sortable: false, value: 'productName' },
          { text: 'Priority', align: 'center', sortable: false, value: 'priority' },
          { text: 'Status', align: 'center', sortable: false, value: 'status' },
          { text: 'Team', align: 'center', sortable: false, value: 'team' }
        ],
        items: [
          {
            value: false,
            productName: 'Palestinian Territory',
            priority: 'Urgent',
            priorityClasses: 'text-danger fw-bold',
            status: 'Development',
            labelClasses: 'label-warning'
          },
          {
            value: false,
            productName: 'New Zealand',
            priority: 'Urgent',
            priorityClasses: 'text-danger fw-bold',
            status: 'Development',
            labelClasses: 'label-warning'
          },
          {
            value: false,
            productName: 'Uruguay',
            priority: 'Normal',
            priorityClasses: 'fw-bold',
            status: 'Designing',
            labelClasses: 'label-success'
          },
          {
            value: false,
            productName: 'Armenia',
            priority: 'Normal',
            priorityClasses: 'fw-bold',
            status: 'Designing',
            labelClasses: 'label-success'
          },
          {
            value: false,
            productName: 'Bouvet Island (Bouvetoya)',
            priority: 'Urgent',
            priorityClasses: 'fw-bold',
            status: 'Development',
            labelClasses: 'label-warning'
          },
          {
            value: false,
            productName: 'Uruguay',
            priority: 'Normal',
            priorityClasses: 'fw-bold',
            status: 'Designing',
            labelClasses: 'label-success'
          }
        ]
      }
    },
    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
      }
    }
  }
</script>
