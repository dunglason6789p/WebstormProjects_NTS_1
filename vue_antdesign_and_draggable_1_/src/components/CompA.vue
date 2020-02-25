<template>
    <div class="row">
        <div class="col-7">
            <h3>
                GOOD
            </h3>

            <VueDraggable
                    tag="el-collapse"
                    :list="list"
                    :component-data="collapseComponentData"
            >
                <div
                        v-for="item in list"
                        :key="item.id"
                        :title="item.title"
                        :name="item.id"
                        style="border-style: solid;"
                >
                    <div>
                        <div v-for="(itemText, index) in item.text" :key="index">
                            {{ itemText }}
                        </div>
                    </div>
                    <div>
                        <TextAndNumWithProgress/>
                    </div>
                </div>
            </VueDraggable>
        </div>
        <RawDisplayer class="col-3" :value="list" title="List" />
        <RawDisplayer class="col-1" :value="activeNames" title="activeNames" />
    </div>
</template>

<script>
    // import "element-ui/lib/theme-chalk/index.css";
    import VueDraggable from "vuedraggable";
    import RawDisplayer from '@/components/infra/RawDisplayer';
    import TextAndNumWithProgress from "@/components/TextAndNumWithProgress";

    export default {
        name: "CompA",
        display: "Third party - v2",
        order: 99 /*NTS:may need fix here*/,
        components: {
            TextAndNumWithProgress,
            VueDraggable,
            RawDisplayer
        },
        data() {
            return {
                /**
                 * A card info
                 * @typedef {Object} CardInfo
                 * @property {string} title - The title
                 * @property {number} id - The artist
                 * @property {Array<string>} text - The year
                 * @property {number} power
                 */

                /** @type {Array<CardInfo>} some number value */
                list: [
                    {
                        title: "Consistency",
                        id: 1,
                        text: [
                            "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;",
                            "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
                        ],
                        power: 50
                    },
                    {
                        title: "Feedback",
                        id: 2,
                        text: [
                            "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;",
                            "Visual feedback: reflect current state by updating or rearranging elements of the page."
                        ],
                        power: 50
                    },
                    {
                        title: "Efficiency",
                        id: 3,
                        text: [
                            "Simplify the process: keep operating process simple and intuitive;",
                            "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;",
                            "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."
                        ],
                        power: 50
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
                console.log(TextAndNumWithProgress);
            }
        }
    };
</script>
<style scoped></style>
