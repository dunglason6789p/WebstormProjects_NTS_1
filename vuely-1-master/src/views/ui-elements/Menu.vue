<template>
  <v-container grid-list-xl fluid py-0>
    <v-layout row wrap>
      <v-flex xs12 sm4 md4>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Activator</h3>
          </div>
          <div class="app-card-content">
            <v-menu offset-y>
              <v-btn class="btn-primary" dark slot="activator">Dropdown</v-btn>
              <v-list>
                <v-list-tile v-for="item in list1" :key="item.title" @click="">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Hover</h3>
          </div>
          <div class="app-card-content">
            <v-menu open-on-hover top offset-y>
              <v-btn class="btn-danger" dark slot="activator">Dropdown</v-btn>
              <v-list>
                <v-list-tile v-for="item in list1" :key="item.title" @click="">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Menus</h3>
          </div>
          <div class="app-card-content">
            <v-menu bottom right>
              <v-btn icon slot="activator">
               <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile v-for="item in list1" :key="item.title" @click="">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      list1: [
        { title: 'Refresh' },
        { title: 'Settings' },
        { title: 'Help' },
        { title: 'Sign Out' }
      ]
    })
  }
</script>
