<template>
  <v-container fluid grid-list-xl py-0>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Checkboxes Boolean</h3>
          </div>
          <div class="app-card-content">
            <v-checkbox :label="`Checkbox : ${checkbox}`" v-model="checkbox"></v-checkbox>
            <v-checkbox :label="`Intermediate: ${intermediate.toString()}`" v-model="intermediate"></v-checkbox>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Checkboxes - States</h3>
          </div>
          <div class="app-card-content">
            <v-layout row wrap>
              <v-flex xs4>on</v-flex>
              <v-flex xs4>off</v-flex>
              <v-flex xs4>indeterminate</v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs4>
                <v-checkbox input-value="true" value></v-checkbox>
              </v-flex>
              <v-flex xs4>
                <v-checkbox value></v-checkbox>
              </v-flex>
              <v-flex xs4>
                <v-checkbox value indeterminate></v-checkbox>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs4>on disabled</v-flex>
              <v-flex xs4>off disabled</v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs4>
                <v-checkbox input-value="true" value disabled></v-checkbox>
              </v-flex>
              <v-flex xs4>
                <v-checkbox value disabled></v-checkbox>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Checkboxes Array</h3>
          </div>
          <div class="app-card-content">
            <p>{{ name1 }}</p>
            <v-checkbox label="John" v-model="name1" value="John"></v-checkbox>
            <v-checkbox label="Jacob" v-model="name1" value="Jacob"></v-checkbox>
          </div>
        </div>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Checkboxes - Colors</h3>
          </div>
          <div class="app-card-content">
            <v-layout row wrap>
              <v-flex xs12 sm4 md4>
                <v-checkbox label="red"
                  v-model="ex4"
                  color="red"
                  value="red"
                  hide-details>
                </v-checkbox>
                <v-checkbox label="red darken-3"
                  v-model="ex4"
                  color="red darken-3"
                  value="red darken-3"
                  hide-details>
                </v-checkbox>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-checkbox label="indigo"
                  v-model="ex4"
                  color="indigo"
                  value="indigo"
                  hide-details>
                </v-checkbox>
                <v-checkbox label="indigo darken-3"
                  v-model="ex4"
                  color="indigo darken-3"
                  value="indigo darken-3"
                  hide-details>
                </v-checkbox>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-checkbox label="orange"
                  v-model="ex4"
                  color="orange"
                  value="orange"
                  hide-details>
                </v-checkbox>
                <v-checkbox label="orange darken-3"
                  v-model="ex4"
                  color="orange darken-3"
                  value="orange darken-3"
                  hide-details>
                </v-checkbox>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-checkbox
                  label="primary"
                  v-model="ex4"
                  color="primary"
                  value="primary"
                  hide-details>
                </v-checkbox>
                <v-checkbox
                  label="secondary"
                  v-model="ex4"
                  color="secondary"
                  value="secondary"
                  hide-details>
                </v-checkbox>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-checkbox
                  label="success"
                  v-model="ex4"
                  color="success"
                  value="success"
                  hide-details>
                </v-checkbox>
                <v-checkbox
                  label="info"
                  v-model="ex4"
                  color="info"
                  value="info"
                  hide-details>
                </v-checkbox>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-checkbox
                  label="warning"
                  v-model="ex4"
                  color="warning"
                  value="warning"
                  hide-details>
                </v-checkbox>
                <v-checkbox
                  label="error"
                  v-model="ex4"
                  color="error"
                  value="error"
                  hide-details>
                </v-checkbox>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="app-card">
          <div class="app-card-title">
            <h3>Switches</h3>
          </div>
          <div class="app-card-content">
            <v-layout row wrap>
              <v-flex xs12 sm4 md4>
                <v-switch label="red"
                  v-model="ex11"
                  color="red"
                  value="red"
                  hide-details>
                </v-switch>
                <v-switch label="red darken-3"
                  v-model="ex11"
                  color="red darken-3"
                  value="red darken-3"
                  hide-details>
                </v-switch>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-switch label="indigo"
                  v-model="ex11"
                  color="indigo"
                  value="indigo"
                  hide-details>
                </v-switch>
                <v-switch label="indigo darken-3"
                  v-model="ex11"
                  color="indigo darken-3"
                  value="indigo darken-3"
                  hide-details>
                </v-switch>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-switch label="orange"
                  v-model="ex11"
                  color="orange"
                  value="orange"
                  hide-details>
                </v-switch>
                <v-switch label="orange darken-3"
                  v-model="ex11"
                  color="orange darken-3"
                  value="orange darken-3"
                  hide-details>
                </v-switch>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-switch label="primary"
                  v-model="ex11"
                  color="primary"
                  value="primary"
                  hide-details>
                </v-switch>
                <v-switch label="secondary"
                  v-model="ex11"
                  color="secondary"
                  value="secondary"
                  hide-details>
                </v-switch>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-switch label="success"
                  v-model="ex11"
                  color="success"
                  value="success"
                  hide-details>
                </v-switch>
                <v-switch label="info"
                  v-model="ex11"
                  color="info"
                  value="info"
                  hide-details>
                </v-switch>
              </v-flex>
              <v-flex xs12 sm4 md4>
                <v-switch label="warning"
                  v-model="ex11"
                  color="warning"
                  value="warning"
                  hide-details>
                </v-switch>
                <v-switch label="error"
                  v-model="ex11"
                  color="error"
                  value="error"
                  hide-details>
                </v-switch>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: function () {
      return {
        checkbox: false,
        intermediate: true,
        name1: ['John'],
        ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
        ex11: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']
      }
    }
  }
</script>
