<template>
  <v-container fluid grid-list-xl py-0>
    <div class="app-card">
      <div class="app-card-title">
        <h3>Quill Editor</h3>
      </div>
      <div class="app-card-content">
        <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
        </quill-editor>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      content: "<h2>I am Example</h2>",
      editorOption: {
        // some quill options
      }
    };
  },
  methods: {
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    onEditorChange({ editor, html, text }) {
      console.log("editor change!", editor, html, text);
      this.content = html;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>
