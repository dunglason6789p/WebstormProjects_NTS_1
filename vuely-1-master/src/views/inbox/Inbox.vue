<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card inbox">
      <v-layout row wrap>
        <v-flex xs12 sm4 md3 class="pr-0">
          <compose-email></compose-email>
        </v-flex>
        <v-flex xs12 sm8 md9 class="pl-0">
          <div class="div-responsive">
            <div class="inbox-page-list clearfix">
              <div class="left">
                <span>1-10 from 23</span>
              </div>
              <div class="right">
                <ul class="list-inline">
                  <li>
                    <v-tooltip v-model="reload" top>
                      <a href="javascript:void(0);" slot="activator">
                        <i class="ti-reload"></i>
                      </a>
                      <span>Reload</span>
                    </v-tooltip>
                  </li>
                  <li>
                    <v-tooltip v-model="previous" top>
                      <a href="javascript:void(0);" slot="activator">
                        <i class="ti-arrow-left"></i>
                      </a>
                      <span>Previous</span>
                    </v-tooltip>
                  </li>
                  <li>
                    <v-tooltip v-model="next" top>
                      <a href="javascript:void(0);" slot="activator">
                        <i class="ti-arrow-right"></i>
                      </a>
                      <span>Next</span>
                    </v-tooltip>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-base">
            	<v-text-field
	              name="search"
	              label="Search Email"
	              id="searchEmail"
	            ></v-text-field>
            </div>
            <email-listing></email-listing>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
  import EmailListing from './EmailListing.vue'
  import ComposeEmail from './ComposeEmail.vue'
  export default {
    components: {
      EmailListing,
      ComposeEmail
    },
    data () {
      return {
        reload: false,
        previous: false,
        next: false,
        mailbox_items: [
          {
            action: 'ti-archive',
            title: 'Inbox(5)'
          },
          {
            action: 'ti-pencil',
            title: 'Draft'
          },
          {
            action: 'ti-star',
            title: 'Starred'
          },
          {
            action: 'ti-location-arrow',
            title: 'Sent Messages'
          },
          {
            action: 'ti-info',
            title: 'Spam'
          },
          {
            action: 'ti-trash',
            title: 'Delete'
          }
        ],
        folder_items: [
          {
            action: 'ti-folder',
            title: 'Mitchell Miles',
            class: 'text-primary'
          },
          {
            action: 'ti-folder',
            title: 'Mitchell Miles',
            class: 'text-pink'
          }
        ],
        settings_items: [
          {
            action: 'ti-folder',
            title: 'Manage Folders'
          },
          {
            action: 'ti-id-badge',
            title: 'Contacts'
          },
          {
            action: 'ti-settings',
            title: 'Settings'
          }
        ]
      }
    }
  }
</script>
