<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Default</h3>
          </div>
          <div class="app-card-content">
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
            </v-carousel>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Custom Transition</h3>
          </div>
          <div class="app-card-content">
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" v-bind:key="i" v-bind:src="item.src" transition="fade" reverseTransition="fade"></v-carousel-item>
            </v-carousel>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Custom Delimiter</h3>
          </div>
          <div class="app-card-content">
            <v-carousel delimiter-icon="stop">
             <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
           </v-carousel>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Hide Controls</h3>
          </div>
          <div class="app-card-content">
            <v-carousel hide-controls>
               <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
            </v-carousel>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Hide Delimiters</h3>
          </div>
          <div class="app-card-content">
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
            </v-carousel>
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
        items: [
          {
            src: '/static/img/carousel-slider-1.jpg'
          },
          {
            src: '/static/img/carousel-slider-2.jpg'
          },
          {
            src: '/static/img/carousel-slider-3.jpg'
          }
        ]
      }
    }
  }
</script>
