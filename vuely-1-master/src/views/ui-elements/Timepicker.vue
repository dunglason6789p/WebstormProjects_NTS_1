<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 md5>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Time Picker</h3>
          </div>
          <div class="app-card-content div-responsive">
            <v-time-picker v-model="e4"></v-time-picker>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Time Picker - In dialog and menu</h3>
          </div>
          <div class="app-card-content">
            <div class="mb-3">
              <p class="mb-0">Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.</p>
            </div>
            <v-menu
              ref="menu"
              lazy
              :close-on-content-click="false"
              v-model="menu2"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-right="40"
              max-width="290px"
              min-width="290px"
              :return-value.sync="time"
            >
              <v-text-field
                slot="activator"
                label="Picker in menu"
                v-model="time"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker v-model="time" @change="$refs.menu.save(time)"></v-time-picker>
            </v-menu>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md7>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Time Picker</h3>
          </div>
          <div class="app-card-content div-responsive">
            <v-time-picker v-model="e5" landscape></v-time-picker>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Time Picker</h3>
          </div>
          <div class="app-card-content">
            <v-dialog
              ref="dialog"
              persistent
              v-model="modal2"
              lazy
              full-width
              width="290px"
              :return-value.sync="time2"
            >
              <v-text-field
                slot="activator"
                label="Picker in dialog"
                v-model="time2"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker v-model="time2" actions>
                <v-btn flat class="btn-danger" @click="modal2 = false">Cancel</v-btn>
                <v-btn flat class="btn-primary" @click="$refs.dialog.save(time2)">Save</v-btn>
              </v-time-picker>
            </v-dialog>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e4: null,
      e5: null,
      time: null,
      time2: null,
      menu2: false,
      modal2: false
    };
  }
};
</script>
