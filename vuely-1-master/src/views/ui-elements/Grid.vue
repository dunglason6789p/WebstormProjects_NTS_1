<template >
  <v-container grid-list-xl fluid py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Grid</h3>
      </div>
      <div class="app-card-content text-xs-center">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class="theme--dark bg-primary">
              <v-card-text>12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4 v-for="{n, index} in 3" :key="index">
            <v-card class="bg-primary white--text">
              <v-card-text>6</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs3 v-for="{n, index} in 4" :key="index">
            <v-card class="theme--dark bg-primary">
              <v-card-text>3</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs3 md1 v-for="{n,index} in 12" :key="index">
            <v-card class="theme--dark bg-primary">
              <v-card-text>1</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
