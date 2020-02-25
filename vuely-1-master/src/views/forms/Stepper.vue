<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Stepper</h3>
      </div>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="e1 > 1">Step 1</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="e1 > 2">Step 2</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3">Step 3</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn class="btn-primary" @click.native="e1 = 2">Continue</v-btn>
            <v-btn class="btn-danger">Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn class="btn-primary" @click.native="e1 = 3">Continue</v-btn>
            <v-btn class="btn-danger">Cancel</v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
            <v-btn class="btn-primary" @click.native="e1 = 1">Continue</v-btn>
            <v-btn class="btn-danger">Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e1: 0
      }
    }
  }
</script>
