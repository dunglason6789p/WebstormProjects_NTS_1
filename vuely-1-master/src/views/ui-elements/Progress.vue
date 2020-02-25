<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Default</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p>By default, progress circular uses the applications secondary color.</p>
            </div>
            <v-flex row text-xs-center>
              <v-progress-circular :value="20" color="primary"></v-progress-circular>
              <v-progress-circular :value="40" color="error"></v-progress-circular>
              <v-progress-circular :value="60" color="success"></v-progress-circular>
              <v-progress-circular :value="80" color="warning"></v-progress-circular>
              <v-progress-circular :value="100" color="info"></v-progress-circular>
            </v-flex>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Colored</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p>Alternate colors can be applied.</p>
            </div>
            <v-flex row justify-space-between text-xs-center>
              <v-progress-circular :value="100" color="blue-grey"></v-progress-circular>
              <v-progress-circular :value="80" color="deep-orange lighten-2"></v-progress-circular>
              <v-progress-circular :value="60" color="brown"></v-progress-circular>
              <v-progress-circular :value="40" color="lime"></v-progress-circular>
              <v-progress-circular :value="20" color="indigo darken-2"></v-progress-circular>
            </v-flex>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Indeterminate</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p>An indeterminate progress circular animates forever.</p>
            </div>
            <v-flex row justify-content-space-between text-xs-center>
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
              <v-progress-circular indeterminate color="red"></v-progress-circular>
              <v-progress-circular indeterminate color="purple"></v-progress-circular>
              <v-progress-circular indeterminate color="green"></v-progress-circular>
              <v-progress-circular indeterminate color="amber"></v-progress-circular>
            </v-flex>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Size & Width</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p>The progress circular component can have an altered width and size.</p>
            </div>
            <v-flex row justify-content-space-between text-xs-center>
              <v-progress-circular indeterminate :size="50" color="primary"></v-progress-circular>
              <v-progress-circular indeterminate :width="3" color="red"></v-progress-circular>
              <v-progress-circular indeterminate :size="70" :width="7" color="purple"></v-progress-circular>
              <v-progress-circular indeterminate :width="3" color="green"></v-progress-circular>
              <v-progress-circular indeterminate :size="50" color="amber"></v-progress-circular>
            </v-flex>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Rotate</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p>The progress origin can be rotated.</p>
            </div>
            <v-flex row justify-content-space-between text-xs-center>
              <v-progress-circular
                v-bind:size="100"
                v-bind:width="15"
                v-bind:rotate="360"
                v-bind:value="value"
                color="teal">
                {{ value }}
              </v-progress-circular>
              <v-progress-circular
                v-bind:size="100"
                v-bind:width="15"
                v-bind:rotate="-90"
                v-bind:value="value"
                color="primary">
                {{ value }}
              </v-progress-circular>
              <v-progress-circular
                v-bind:size="100"
                v-bind:width="15"
                v-bind:rotate="90"
                v-bind:value="value"
                color="red">
                {{ value }}
              </v-progress-circular>
              <v-progress-circular
                v-bind:size="100"
                v-bind:width="15"
                v-bind:rotate="180"
                v-bind:value="value"
                color="pink">
                {{ value }}
              </v-progress-circular>
            </v-flex>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Determinate</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p>The progress linear component can have a determinate state modified by <code>v-model</code>.</p>
            </div>
            <v-flex row justify-content-space-between text-xs-center>
               <v-progress-linear v-model="valueDeterminate" color="pink"></v-progress-linear>
            </v-flex>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Indeterminate</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p>Just as with the progress circular component, progress linear has an indeterminate state.</p>
            </div>
            <v-progress-linear :indeterminate="true" color="green"></v-progress-linear>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Buffer</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p>A buffer state represents two values simultaneously. The primary value is controlled by the model,
                whereas the buffer is controlled by the <code>buffer-value</code> prop.</p>
            </div>
            <v-progress-linear
              v-model="buffer"
              buffer
              :buffer-value="bufferValue"
              color="yellow"
            ></v-progress-linear>
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
        interval: {},
        value: 0,
        valueDeterminate: 50,
        buffer: 10,
        bufferValue: 20
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    methods: {
      startBuffer () {
        this.interval = setInterval(() => {
          this.buffer += Math.random() * (15 - 5) + 5
          this.bufferValue += Math.random() * (15 - 5) + 5
        }, 2000)
      }
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
      this.startBuffer()
    }
  }
</script>
