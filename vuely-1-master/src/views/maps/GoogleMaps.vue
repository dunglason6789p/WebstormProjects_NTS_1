<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Google Map</h3>
      </div>
      <div class="app-card-content">
        <gmap-map :center="center" :zoom="9" style="width: '100%'; height: 400px">
          <gmap-marker :position="markers.position" :clickable="true" :draggable="false" @click="center=markers.position"></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'google-maps',
  data: function () {
    return {
      center: {lat: 30.7, lng: 76.7},
      markers: {
        position: {lat: 30.7, lng: 76.7}
      }
    }
  }
}
</script>
