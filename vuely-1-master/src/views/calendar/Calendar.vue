<!-- Calendar Widget -->
<template>
    <v-container fluid grid-list-xl py-0>
      <div class="app-card">
        <div class="app-card-content">
          <full-calendar :events="fcEvents" lang="en"></full-calendar>
        </div>
      </div>
    </v-container>
</template>

<script>
import fullCalendar from 'vue-fullcalendar'
import events from './events.json'

export default {
  data () {
    return {
      fcEvents: events
    }
  },
  components: {
    fullCalendar
  }
}
</script>
