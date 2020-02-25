<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Default</h3>
          </div>
          <div class="app-card-content">
            <v-chip close>Example Chip</v-chip>
            <v-chip>Example Chip</v-chip>
            <v-chip close>
              <v-avatar>
                <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
              </v-avatar>
              Trevor Hansen
            </v-chip>
            <v-chip>
              <v-avatar class="teal">A</v-avatar>
              ANZ Bank
            </v-chip>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Outline</h3>
          </div>
          <div class="app-card-content">
            <v-chip outline color="secondary">Outline</v-chip>
            <v-chip outline color="primary">Colored</v-chip>
            <v-chip outline color="red">
              <v-icon left class="text-danger font-sm">build</v-icon>Icon
            </v-chip>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Label</h3>
          </div>
          <div class="app-card-content">
            <v-chip label>Label</v-chip>
            <v-chip label color="pink" text-color="white">
              <v-icon left>label</v-icon>Tags
            </v-chip>
            <v-chip label outline color="red">Outline</v-chip>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Colored</h3>
          </div>
          <div class="app-card-content">
            <v-chip class="bg-primary" text-color="white">Primary</v-chip>
            <v-chip class="bg-warning" text-color="white">Warning</v-chip>
            <v-chip class="bg-danger" text-color="white">Colored Chip</v-chip>
            <v-chip class="bg-success" text-color="white">Colored Chip</v-chip>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Icon</h3>
          </div>
          <div class="app-card-content">
            <v-chip class="bg-primary" text-color="white">
              <v-avatar><v-icon>account_circle</v-icon></v-avatar>
              Ranee
            </v-chip>
            <v-chip class="bg-warning" text-color="white">Premium
              <v-icon right>star</v-icon>
            </v-chip>
            <v-chip class="bg-danger" text-color="white">
              1 Year
              <v-icon right>cake</v-icon>
            </v-chip>
            <v-chip class="bg-info" text-color="white">
              <v-avatar class="green darken-4">1</v-avatar>
              Years
            </v-chip>
            <v-chip close class="bg-success" text-color="white">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>
              Confirmed
            </v-chip>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Closable</h3>
          </div>
          <div class="app-card-content">
            <v-btn
              v-on:click="chip1 = true, chip2 = true, chip3 = true, chip4= true"
              v-if="!chip1 && !chip2 && !chip3 && !chip4"
              class="btn-primary">
              Reset Chips
            </v-btn>
            <v-chip close v-model="chip1">Closable</v-chip>
            <v-chip close v-model="chip2" color="red" text-color="white">Remove</v-chip>
            <v-chip close v-model="chip3" outline color="green">Success</v-chip>
            <v-chip close v-model="chip4" outline label color="orange">Complete</v-chip>
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
        chip1: true,
        chip2: true,
        chip3: true,
        chip4: true
      }
    }
  }
</script>
