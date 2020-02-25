<template>
  <div class="inbox-head">
    <v-card-media class="white--text" height="160px" src="/static/img/blog-1.jpg">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <div class="media">
                <div class="media-left pr-3">
                  <img src="/static/img/user-9.jpg" class="rounded-circle" width="70" height="70">
                </div>
                <div class="media-body pt-2">
                  <h6 class="fw-bold font-lg">Gregory A.</h6>
                  <span>Web Designer & Developer</span>
                </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>
    <div class="inbox-inner">
      <v-dialog v-model="dialog" max-width="1000px">
        <v-btn class="gradient-pink btn-icon mb-4 mt-0" dark slot="activator" block large><i class="ti-pencil-alt"></i> Compose Email</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">New Email</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="To"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="From"
                    value="Vuely@examples.com"
                    disabled
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Title"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <email-box></email-box>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="btn-primary" flat @click.native="dialog = false">Close</v-btn>
            <v-btn class="btn-danger" flat @click.native="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <h3>Mailboxes</h3>
      <v-list>
        <template v-for="item in mailbox_items" >
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>  
      </v-list>
      <h3>Folders</h3>
      <v-list>
        <v-list-tile v-for="item in folder_items" @click="" v-bind:key="item.title">
            <v-list-tile-action>
              <v-icon :class="item.action"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <v-icon :class="item.class">fiber_manual_record</v-icon>
          </v-list-tile>
      </v-list>
      <h3>Settings</h3>
      <v-list>
          <v-list-tile v-for="item in settings_items" v-bind:key="item.title" @click="">
            <v-list-tile-action>
              <v-icon :class="item.action"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </div>
  </div>
</template>
<script>
import EmailBox from "./EmailBox";
export default {
  data() {
    return {
      dialog: false,
      mailbox_items: [
        {
          action: "ti-archive",
          title: "Inbox(5)"
        },
        {
          action: "ti-pencil",
          title: "Draft"
        },
        {
          action: "ti-star",
          title: "Starred"
        },
        {
          action: "ti-location-arrow",
          title: "Sent Messages"
        },
        {
          action: "ti-info",
          title: "Spam"
        },
        {
          action: "ti-trash",
          title: "Delete"
        }
      ],
      folder_items: [
        {
          action: "ti-folder",
          title: "Work",
          class: "text-primary"
        },
        {
          action: "ti-folder",
          title: "Personal",
          class: "text-pink"
        }
      ],
      settings_items: [
        {
          action: "ti-folder",
          title: "Manage Folders"
        },
        {
          action: "ti-id-badge",
          title: "Contacts"
        },
        {
          action: "ti-settings",
          title: "Settings"
        }
      ]
    };
  },
  components: {
    EmailBox
  }
};
</script>
