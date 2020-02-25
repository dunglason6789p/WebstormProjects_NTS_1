<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Wysiwyg Editor</h3>
      </div>
      <div class="app-card-content">
        <wysiwyg v-model="myHTML" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      myHTML: ''
    }
  }
}
</script>
