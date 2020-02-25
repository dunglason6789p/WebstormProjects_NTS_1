<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-content">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <h3 class="mb-3">List 1</h3>
            <div class="vue2-dragula-container" v-dragula="colOne" drake="first">
              <div v-for="text in colOne" :key="text">{{text}} [click me]</div>
            </div>
          </v-flex>
          <v-flex xs12 sm6>
            <h3 class="mb-3">List 2</h3>
            <div class="vue2-dragula-container" v-dragula="colTwo" drake="first">
              <div v-for="text in colTwo" :key="text">{{text}} [click me]</div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      colOne: [
        'Its is too amezing component try it !',
        'You can move these elements between these two containers',
        'Moving them anywhere else isn"t quite possible',
        'There"s also the possibility of moving elements around in the same container, changing their position'
      ],
      colTwo: [
        'This is the use case. You only need to specify the containers you want to use',
        'More interactive use cases lie ahead',
        'Another message',
        'Move on upper'
      ]
    }
  }
}
</script>
