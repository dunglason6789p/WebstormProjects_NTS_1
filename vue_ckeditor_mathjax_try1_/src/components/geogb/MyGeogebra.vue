<template>
    <div>
        <div>
            <textarea ref="myTextArea" rows="3" cols="100">Trong mặt phẳng tọa độ Oxy cho tam giác ABC với A(1;1), B(2;5), điểm C nằm trên đường thẳng d1:x-4y=0, và trọng tâm G của tam giác nằm trên đường thẳng d2 có công thức là 2x+3y=-6. Đường thẳng d3 đi qua hai điểm C và G. Tính diện tích tam giác ABC.</textarea>
        </div>
        <div>
            <button @click="deleteAllShapesOn_ggbApplet()">Reset</button>
            <button @click="sendGeoTextToServer()">Vẽ theo miêu tả</button>
        </div>
        <div :style="{height:this.ggbDivStyle.height+'px',width:this.ggbDivStyle.width+'px'}">
            <div :id="ggbDivUUID" class="ggbDiv"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyGeogebra",
        props:{
            /*ggbDivUUID:{
                type:String,
                default: globalVars.genUUID()
            }*/
        },
        data(){
            return{
                ggbDivUUID: globalVars.genUUID(),
                ggbDivStyle:{
                    width:700,
                    height:400
                }
            }
        },
        methods:{
            deleteAllShapesOn_ggbApplet(){
                const objNamesAsString = [];
                for(let objName of ggbApplet.getAllObjectNames()){
                    objNamesAsString.push(objName);
                }
                for(let objName of objNamesAsString){
                    console.log(ggbApplet.evalCommand(`Delete(${objName})`));
                }
            },
            async sendGeoTextToServer(){
                try{
                    const inputStr = this.$refs.myTextArea.value;
                    const response = await fetch("http://127.0.0.1:8081/geogb1", {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        mode: 'cors', // no-cors, *cors, same-origin
                        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                        credentials: 'same-origin', // include, *same-origin, omit
                        headers: {
                            'Content-Type': 'text/plain; charset=utf-8',
                        },
                        redirect: 'follow', // manual, *follow, error
                        referrerPolicy: 'no-referrer', // no-referrer, *client
                        body: inputStr
                    });
                    console.log("=============================================");
                    console.log("json:");
                    const responseJsonObj = await response.json();
                    console.log(responseJsonObj);

                    this.deleteAllShapesOn_ggbApplet();

                    for(let command of responseJsonObj.value){
                        try{
                            console.log(ggbApplet.evalCommand(command));
                        }catch (e) {
                            console.log(e);
                        }
                    }
                }catch (e) {
                    console.log(e);
                }
            },
            /**Return base64 of image content*/
            captureImage(){
                const base64imgStr = ggbApplet.getPNGBase64(1, true);
                console.log(base64imgStr);
                return 'data:image/png;base64,'+base64imgStr;
            }
        },
        mounted() {
            this.$nextTick(()=>{
                const parameters = {
                    //region params
                    "id": "ggbApplet",
                    "appName": "geometry",
                    "width": this.ggbDivStyle.width,
                    "height": this.ggbDivStyle.height,
                    "showToolBar": true,
                    "borderColor": null,
                    "showMenuBar": true,
                    "allowStyleBar": true,
                    "showAlgebraInput": true,
                    "enableLabelDrags": false,
                    "enableShiftDragZoom": true,
                    "capturingThreshold": 3,//default=3.
                    "showToolBarHelp": false,
                    "errorDialogsActive": true,
                    "showTutorialLink": true,
                    "showLogging": true,
                    "useBrowserForJS": false,
                    // "language": "en",
                    "language": "vi",
                    //endregion
                    appletOnLoad: function (something) {//Run on app finish loading.
                        console.log(JSON.stringify(something)+" [NTS]Geogebra is READY ! -----------------------------------------------");
                        window.ggbApplet.setAxesVisible(true,true);
                    }
                };
                const ggbApp = new GGBApplet(parameters, '5.0', this.ggbDivUUID);
                ggbApp.setHTML5Codebase(process.env.VUE_APP_STATIC_URL+'GeoGebra/HTML5/5.0/web3d/');
                ggbApp.inject(this.ggbDivUUID);
            });
        }
    }
</script>

<style scoped>
    .ggbDiv{
    }
</style>
