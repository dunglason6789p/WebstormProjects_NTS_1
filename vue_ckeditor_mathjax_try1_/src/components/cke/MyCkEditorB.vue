<template>
    <div v-show="shouldShow">
        <div style="display: none">
            <button @click="hideCk()">Đóng</button>
        </div>
        <div>
            <div ref="editorDiv1"></div>
        </div>
        <div v-once style="display: none">
            <button @click="logCkContent()">Log CK content</button>
            <button @click="setCkContentFromInput()">Set CK content from input</button>
            <input ref="setCkContentInput" style="width: 100px"/>
        </div>
    </div>
</template>

<script>
    const compVars = {};
    export default {
        name: "MyCkEditorB",
        props:{
            initShow: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return{
                shouldShow: this.initShow,
            }
        },
        mounted() {
            this.$nextTick(()=>{
                //language=HTML
                const theEditor = this.$refs.editorDiv1.innerHTML = `
                <h2>Bilingual Personality Disorder</h2>
                <figure class="image image-style-side">
                    <img src="./imgs/anh_hinh_hoc.png">
                    <figcaption>One language, one person.</figcaption>
                </figure>
                <p>This may be the first time you hear about this made-up disorder but it actually isn’t so far from the
                   truth. Even the studies that were conducted almost half a century show that
                    <strong>the language you speak has more effects on you than you realise</strong>
                   .
                </p>
                <p>One of the very first experiments conducted on this topic dates back to 1964.
                    <a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In
                                                                                                                      the
                                                                                                                      experiment
                    </a>
                   designed by linguist Ervin-Tripp who is an authority &nbsp;&nbsp; expert in psycholinguistic and sociolinguistic studies, adults who are bilingual in English in French were showed series of pictures and were asked to create 3-minute stories.</p>`;
                const theCkEditor = ClassicEditor
                    .create(this.$refs.editorDiv1, {
                        toolbar: {
                            items: [
                                'heading',
                                '|',
                                'bold',
                                'italic',
                                'link',
                                'bulletedList',
                                'numberedList',
                                '|',
                                'indent',
                                'outdent',
                                '|',
                                'imageUpload',
                                'blockQuote',
                                'insertTable',
                                'mediaEmbed',
                                'undo',
                                'redo',
                                'CKFinder',
                                'math'
                            ]
                        },
                        language: 'en',
                        image: {
                            toolbar: [
                                'imageTextAlternative',
                                'imageStyle:full',
                                'imageStyle:side'
                            ]
                        },
                        table: {
                            contentToolbar: [
                                'tableColumn',
                                'tableRow',
                                'mergeTableCells'
                            ]
                        },
                        licenseKey: '',
                    } )
                    .then(newEditor=>{
                        compVars.editor = newEditor;
                        globalVars.editorX = newEditor;
                    })
                    .catch(error=>{
                        console.error( error );
                    });

                //this.hideCk();
            });
        },
        methods: {
            logCkContent: function() {
                console.log(compVars.editor.getData());
            },
            setCkContentFromInput: function() {
                try{
                    //console.log(this.$refs);
                    //console.log(this.$refs.setCkContentInput);
                    compVars.editor.setData(this.$refs.setCkContentInput.value);
                }catch(err){
                    console.log(err);
                }
            },
            hideCk(){
                this.shouldShow = false;
            },
            showCk(){
                this.shouldShow = true;
            }
        }
    }
</script>

<style scoped>

</style>
