<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Continuous</h3>
          </div>
          <div class="app-card-content">
            <v-slider v-model="value1" step="0"></v-slider>
            <v-slider v-model="value2" step="0" disabled></v-slider>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Discrete</h3>
          </div>
          <div class="app-card-content">
            <v-slider v-model="value3" thumb-label step="10" ticks></v-slider>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Icons</h3>
          </div>
          <div class="app-card-content">
            <v-layout row wrap>
              <v-flex xs4>
                <v-subheader>Media volume</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-slider prepend-icon="volume_up" v-model="media"></v-slider>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs4>
                <v-subheader>Alarm volume</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-slider append-icon="alarm" v-model="alarm"></v-slider>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Editable numeric value</h3>
          </div>
          <div class="app-card-content">
            <v-card-media height="300px" v-bind:style="{ background: `rgb(${red}, ${green}, ${blue})` }"></v-card-media>
            <v-layout row wrap>
              <v-flex xs9>
                <v-slider label="R" v-bind:max="255" v-model="red"></v-slider>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="red" type="number"></v-text-field>
              </v-flex>
              <v-flex xs9>
                <v-slider label="G" v-bind:max="255" v-model="green"></v-slider>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="green" type="number"></v-text-field>
              </v-flex>
              <v-flex xs9>
                <v-slider label="B" v-bind:max="255" v-model="blue"></v-slider>
              </v-flex>
              <v-flex xs3>
                <v-text-field v-model="blue" type="number"></v-text-field>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Custom Colors</h3>
          </div>
          <div class="app-card-content">
            <v-slider :label="ex1.label" v-model="ex1.val" :color="ex1.color"></v-slider>
            <v-slider :label="ex2.label" v-model="ex2.val" :track-color="ex2.color"></v-slider>
            <v-slider :label="ex3.label" v-model="ex3.val" :thumb-color="ex3.color" thumb-label></v-slider>
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
        value1: 0,
        value2: 0,
        value3: 0,
        media: 0,
        alarm: 0,
        red: 64,
        green: 128,
        blue: 0,
        ex1: { label: 'color', val: 25, color: 'orange darken-3' },
        ex2: { label: 'track-color', val: 75, color: 'green lighten-1' },
        ex3: { label: 'thumb-color', val: 50, color: 'red' }
      }
    }
  }
</script>
