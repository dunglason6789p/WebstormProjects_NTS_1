<!-- Shopping Cart Widget -->
<template>
  <div class="app-card mb-0">
    <div class="app-card-title">
      <h3>Shopping Cart</h3>
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
        item-key="image"
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
            <th v-for="header in props.headers" :key="header.text">
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <tr>
            <td>
              <v-checkbox
                primary
                hide-details
                v-model="props.selected"
              ></v-checkbox>
            </td>
            <td class="text-xs-center"> <img class="img-responsive" width="40" height="40" :src="props.item.image"></img></td>
            <td class="text-xs-center">{{ props.item.productName }}</td>
            <td class="text-xs-center">{{ props.item.quantity }}</td>
            <td class="text-xs-center"><span class="label" :class="props.item.labelClasses">{{ props.item.status }}</span</td>
            <td class="text-xs-center fw-bold">{{ props.item.amount }}</td>
            <td class="text-xs-center"><a href="javascript:;"><i class="ti-trash text-danger"></i></a></td>
          </tr>
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
          { text: 'Image', align: 'center', sortable: false, value: 'image' },
          { text: 'Product Name', align: 'center', sortable: false, value: 'productName' },
          { text: 'Quantity', align: 'center', sortable: false, value: 'quantity' },
          { text: 'Status', align: 'center', sortable: false, value: 'status' },
          { text: 'Amount', align: 'center', sortable: false, value: 'amount' }
        ],
        items: [
          {
            value: false,
            image: '/static/img/product1.png',
            productName: 'Ferrero Rocher',
            quantity: 2,
            status: 'DELIVERED',
            labelClasses: 'label-success',
            amount: '$235.00'
          },
          {
            value: false,
            image: '/static/img/product2.png',
            productName: 'Ferrero Rocher',
            quantity: 10,
            status: 'CANCELED',
            labelClasses: 'label-pink',
            amount: '$700.00'
          },
          {
            value: false,
            image: '/static/img/product3.png',
            productName: 'Ferrero Rocher',
            quantity: 12,
            status: 'DELIVERED',
            labelClasses: 'label-success',
            amount: '$523.00'
          },
          {
            value: false,
            image: '/static/img/product4.png',
            productName: 'Ferrero Rocher',
            quantity: 22,
            status: ' DELIVERED',
            labelClasses: 'label-success',
            amount: '$500.00'
          },
          {
            value: false,
            image: '/static/img/product5.png',
            productName: 'Ferrero Rocher',
            quantity: 8,
            status: ' CANCELED',
            labelClasses: 'label-pink',
            amount: '$499.00'
          },
          {
            value: false,
            image: '/static/img/product6.png',
            productName: 'Ferrero Rocher',
            quantity: 6,
            status: 'CANCELED',
            labelClasses: 'label-pink',
            amount: '$320.00'
          },
          {
            value: false,
            image: '/static/img/product1.png',
            productName: 'Ferrero Rocher',
            quantity: 2,
            status: 'DELIVERED',
            labelClasses: 'label-success',
            amount: '$235.00'
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
