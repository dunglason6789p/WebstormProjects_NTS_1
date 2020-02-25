<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Draggable Resizable</h3>
      </div>
      <div class="app-card-content">
        <div style="height: 500px; border: 1px solid #ddd; position: relative;">
          <vue-draggable-resizable :w="300" :h="170" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
            <v-card hover height="100%">
              <v-card-text>
                <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
                <code>X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</code></p>
              </v-card-text>
            </v-card>
          </vue-draggable-resizable>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  },
  components: {
    VueDraggableResizable
  }
}
</script>
