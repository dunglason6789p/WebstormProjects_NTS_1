<template>
  <div class="inbox-listing">
    <v-list two-line subheader>
      <v-list-tile v-for="item in message_items_1" v-bind:key="item.title" @click="">
        <v-list-tile-action>
          <v-checkbox v-model="item.value" readonly></v-checkbox>
        </v-list-tile-action>
        <v-list-tile>
          <v-btn icon>
            <i :class="item.icon"></i>
          </v-btn>
        </v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title class="fw-bold">{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-content >
          <v-list-tile-title class="text-blue">{{item.text}}</v-list-tile-title>
           <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
            <h6>{{item.time}} hour ago </h6>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import EmailList from "./emailData";
export default {
  data() {
    return {
      message_items_1: EmailList,
      notifications: false
    };
  }
};
</script>
