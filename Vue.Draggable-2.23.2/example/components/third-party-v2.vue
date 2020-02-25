<template>
  <div class="row">
    <div class="col-7">
      <h3>
        Integration with
        <a
          href="https://element.eleme.io/#/en-US/component/collapse#collapse"
          target="_blank"
          >Element collapse</a
        >
      </h3>

      <VueDraggable
        tag="el-collapse"
        :list="list"
        :component-data="collapseComponentData"
      >
        <ElCollapseItem
          v-for="item in list"
          :key="item.id"
          :title="item.title"
          :name="item.id"
        >
          <div v-for="(itemText, index) in item.text" :key="index">
            {{ itemText }}
          </div>
        </ElCollapseItem>
      </VueDraggable>
    </div>
    <rawDisplayer class="col-3" :value="list" title="List" />
    <rawDisplayer class="col-1" :value="activeNames" title="activeNames" />
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import VueDraggable from "@/vuedraggable";

export default {
  name: "third-party-v2",
  display: "Third party - v2",
  order: 99 /*NTS:may need fix here*/,
  components: {
    VueDraggable
  },
  data() {
    return {
      /**
       * A card info
       * @typedef {Object} CardInfo
       * @property {string} title - The title
       * @property {number} id - The artist
       * @property {Array<string>} text - The year
       */

      /** @type {Array<CardInfo>} some number value */
      list: [
        {
          title: "Consistency",
          id: 1,
          text: [
            "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;",
            "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
          ]
        },
        {
          title: "Feedback",
          id: 2,
          text: [
            "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;",
            "Visual feedback: reflect current state by updating or rearranging elements of the page."
          ]
        },
        {
          title: "Efficiency",
          id: 3,
          text: [
            "Simplify the process: keep operating process simple and intuitive;",
            "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;",
            "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."
          ]
        },
        {
          title: "Controllability",
          id: 4,
          text: [
            "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;",
            "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."
          ]
        }
      ],
      activeNames: [1],
      collapseComponentData: {
        on: {
          input: this.inputChanged
        },
        props: {
          value: this.activeNames
        }
      }
    };
  },
  methods: {
    inputChanged(val) {
      this.activeNames = val;
    }
  }
};
</script>
<style scoped></style>
