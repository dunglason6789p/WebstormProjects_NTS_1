<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Leaflet Maps</h3>
      </div>
      <div class="app-card-content">
        <v-map style="height: 400px" :zoom="zoom" :center="center">
          <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
        </v-map>
      </div>
    </div>
  </v-container>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet'

export default {
  name: 'leaflet-maps',
  components: {
    vMap: Vue2Leaflet.Map,
    vTilelayer: Vue2Leaflet.TileLayer,
    vMarker: Vue2Leaflet.Marker
  },
  data: function () {
    return {
      zoom: 13,
      center: [47.413220, -1.219482],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  }
}
</script>
