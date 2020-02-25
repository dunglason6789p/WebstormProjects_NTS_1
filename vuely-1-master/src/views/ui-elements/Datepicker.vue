<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="app-card">
            <div class="app-card-title">
              <h3>Date Picker Horizontal</h3>
            </div>
            <div class="app-card-content div-responsive">
              <v-date-picker v-model="datepicker"></v-date-picker>
            </div>
          </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Date Pickers- In dialog and menu</h3>
          </div>
          <div class="app-card-content">
            <v-menu
              ref="menu"
              lazy
              :close-on-content-click="false"
              v-model="menu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-right="40"
              min-width="290px"
              :return-value.sync="date">
              <v-text-field
                slot="activator"
                label="Picker in menu"
                v-model="date"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="date" no-title scrollable >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div class="app-card">
            <div class="app-card-title">
              <h3>Date Picker Vertical</h3>
            </div>
            <div class="app-card-content div-responsive">
              <v-date-picker v-model="datepicker2" landscape></v-date-picker>
            </div>
          </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Date Pickers With Modal</h3>
          </div>
          <div class="app-card-content">
            <v-dialog
              ref="dialog"
              persistent
              v-model="modal"
              lazy
              full-width
              width="290px"
              :return-value.sync="date2"
             >
              <v-text-field
                slot="activator"
                label="Picker in dialog"
                v-model="date2"
                prepend-icon="event"
                readonly>
              </v-text-field>
              <v-date-picker v-model="date2" scrollable >
                <v-spacer></v-spacer>
                <v-btn flat class="btn-danger" @click="modal = false">Cancel</v-btn>
                <v-btn flat class="btn-primary" @click="$refs.dialog.save(date2)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Date Pickers - Formatting Date</h3>
          </div>
          <div class="app-card-content">
            <v-menu
              ref="menu1"            
              lazy
              :close-on-content-click="false"
              v-model="menu1"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-right="40"
              min-width="290px"
              :return-value.sync="date1"
            >
              <v-text-field
                slot="activator"
                label="Date in M/D/Y format"
                v-model="dateFormatted"
                prepend-icon="event"
                @blur="date1 = parseDate(dateFormatted)"
                readonly
              ></v-text-field>
              <v-date-picker v-model="date1" @input="dateFormatted = formatDate($event)" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu1 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu1.save(date1)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <p>Date in ISO format: <strong>{{ date1 }}</strong></p>
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
      datepicker: null,
      datepicker2: null,
      date: null,
      date1: null,
      date2: null,
      menu: false,
      menu1: false,
      modal: false,
      dateFormatted: null
    };
  },
  methods: {
    formatDate(date) {
      if (!date) {
        return null;
      }
      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) {
        return null;
      }
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
