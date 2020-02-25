<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Tooltip</h3>
          </div>
          <div class="app-card-content">
            <v-tooltip top>
              <v-btn class="btn-primary" slot="activator">Top</v-btn>
              <span>Top tooltip</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn class="btn-warning" slot="activator">Right</v-btn>
              <span>Right tooltip</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn class="btn-info" slot="activator">Bottom</v-btn>
              <span>Bottom tooltip</span>
            </v-tooltip>
            <v-tooltip left>
              <v-btn class="btn-danger" slot="activator">Left</v-btn>
              <span>Left tooltip</span>
            </v-tooltip>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Visibility</h3>
          </div>
          <div class="app-card-content">
            <v-layout wrap>
              <v-flex xs6>
                <v-btn class="btn-primary" @click.native="show = !show">toggle</v-btn>
              </v-flex>
              <v-flex xs6>
                <v-tooltip v-model="show" top>
                  <v-btn icon slot="activator">
                    <v-icon color="grey darken-4">shopping_cart</v-icon>
                  </v-btn>
                  <span>Programmatic tooltip</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>
