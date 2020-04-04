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
                <h2>Bài toán số 1</h2>
                <p>Trong mặt phẳng tọa độ Oxy, cho...</p>
                <p>Tính diện tích tam giác <strong>ABC</strong> và chiều cao.</p>
                `;
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
            },
            insertImage(contentUrl){
                console.log("CkE comp received image:"+contentUrl);
                compVars.editor.execute( 'imageInsert', { source: contentUrl } );
            }
        }
    }
</script>

<style scoped>

</style>
