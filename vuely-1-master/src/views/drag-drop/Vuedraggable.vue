<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Vue Draggable</h3>
      </div>
      <div class="app-card-content">
        <v-layout row wrap>
          <v-flex xs12 sm6 md6>
            <v-toolbar class="bg-primary">
              <v-toolbar-title class="text-xs-center white--text">List 1</v-toolbar-title>
            </v-toolbar>
            <v-list two-line>
              <draggable v-model="list" class="dragArea" :options="{group:'people'}">
                <template v-for="item in list">
                  <v-list-tile avatar v-bind:key="item.title" @click="">
                    <v-list-tile-avatar class="mr-3 d-inline-block">
                      <img :src="item.image" class="artical-user" />
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.name" class="fw-bold font-lg"></v-list-tile-title>
                      <v-list-tile-sub-title>"Project -- Setup the project..!</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </draggable>
            </v-list>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-toolbar class="bg-primary">
              <v-toolbar-title class="text-xs-center white--text">List 2</v-toolbar-title>
            </v-toolbar>
            <v-list two-line>
              <draggable v-model="list2" class="dragArea" :options="{group:'people'}">
                <template v-for="item in list2">
                  <v-list-tile avatar v-bind:key="item.title" @click="">
                    <v-list-tile-avatar class="mr-3 d-inline-block">
                      <img :src="item.image" class="artical-user" />
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.name" class="fw-bold font-lg"></v-list-tile-title>
                      <v-list-tile-sub-title>"Project -- Setup the project..!</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </draggable>
            </v-list>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data: function() {
    return {
      list: [
        {
          name: "John",
          image: "/static/img/user-6.jpg"
        },
        {
          name: "Joao",
          image: "/static/img/user-7.jpg"
        },
        {
          name: "Jean",
          image: "/static/img/user-8.jpg"
        }
      ],
      list2: [
        {
          name: "Juan",
          image: "/static/img/user-9.jpg"
        },
        {
          name: "Edgard",
          image: "/static/img/user-10.jpg"
        },
        {
          name: "Johnson",
          image: "/static/img/user-11.jpg"
        }
      ]
    };
  },
  components: {
    draggable
  }
};
</script>
