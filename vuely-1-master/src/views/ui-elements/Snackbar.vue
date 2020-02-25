<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Snackbar</h3>
      </div>
      <div class="app-card-content">
        <div class="mb-3">
          <p>The standard snackbar is useful for calling attention to some function that has just happened.</p>
        </div>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <ul class="list-unstyled">
              <li><v-checkbox v-model="x" value="left" label="Left"></v-checkbox></li>
              <li><v-checkbox v-model="x" value="right" label="Right"></v-checkbox></li>
              <li><v-checkbox v-model="y" value="top" label="Top"></v-checkbox></li>
              <li><v-checkbox v-model="y" value="bottom" label="Bottom"></v-checkbox></li>
              <li><v-checkbox v-model="mode" value="multi-line" label="Multi-line (mobile)"></v-checkbox></li>
              <li><v-checkbox v-model="mode" value="vertical" label="Vertical (mobile)"></v-checkbox></li>
            </ul>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="text" type="text" label="Text"></v-text-field>
            <v-text-field v-model.number="timeout" type="number" label="Timeout"></v-text-field>
            <v-btn block class="btn-primary" @click.native="snackbar = true">Show Snackbar</v-btn>
          </v-flex>
        </v-layout>
        <v-snackbar
          :timeout="timeout"
          :top="y === 'top'"
          :bottom="y === 'bottom'"
          :right="x === 'right'"
          :left="x === 'left'"
          :multi-line="mode === 'multi-line'"
          :vertical="mode === 'vertical'"
          v-model="snackbar">
          <p class="ma-0">{{ text }}</p>
          <v-btn flat class="btn-danger" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
      </div>
    </div>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Contextual snackbar</h3>
      </div>
      <div class="app-card-content">
        <div class="mb-3">
          <p class="mb-0">You can also apply a color to the snackbar to better fit your implementation.</p>
        </div>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-radio-group v-model="color" row>
              <v-radio
                v-for="(colorValue, i) in ['success', 'info', 'error', 'cyan darken-2']"
                light
                :key="i"
                :value="colorValue"
                :label="colorValue"
                :color="colorValue"
              ></v-radio>
            </v-radio-group>
            <v-checkbox v-model="mode2" value="multi-line" label="Multi-line (mobile)" light></v-checkbox>
            <v-checkbox v-model="mode2" value="vertical" label="Vertical (mobile)" light></v-checkbox>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field v-model="text" type="text" label="Text"></v-text-field>
            <v-text-field v-model.number="timeout" type="number" label="Timeout"></v-text-field>
            <v-btn block class="btn-warning" @click.native="snackbar2 = true" dark>Show Snackbar</v-btn>
          </v-flex>
        </v-layout>
        <v-snackbar
          :timeout="timeout"
          :color="color"
          :multi-line="mode2 === 'multi-line'"
          :vertical="mode2 === 'vertical'"
          v-model="snackbar2"
        >
          {{ text }}
          <v-btn dark flat @click.native="snackbar2 = false">Close</v-btn>
        </v-snackbar>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbar2: false,
      y: "top",
      x: null,
      mode: "",
      mode2: "",
      timeout: 6000,
      text: "Hello, I'm a snackbar",
      color: ""
    };
  }
};
</script>
