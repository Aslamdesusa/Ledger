<template>
    <div>
        <v-snackbar v-model="snackbar">{{ text }}
            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-btn rounded color="success" small dark @click="shareText">SEND TO</v-btn>
    </div>
</template>

<script>
import Vue from 'vue'
import Clipboard from 'v-clipboard'
Vue.use(Clipboard)
export default {
    data() {
        return {
            snackbar: false,
            text: ``,
        }
    },
    methods: {
        localData() {
            let jData = JSON.parse(localStorage.getItem("JData"));
            let data = JSON.parse(localStorage.getItem("data"));  
            let JantriData = [];
            let finalMessageArray = [];
            if (jData) {
                for (let index = 0; index < jData.length; index++) {
                    const element = jData[index];
                    for (let index = 0; index < element.length; index++) {
                        const trunk = element[index];
                        if (trunk.point && trunk.number != "") {
                            JantriData.push(trunk);
                        }
                    }
                }
            }
            if (data) {
                JantriData = [...data, ...JantriData];
            }

            if (JantriData.length) {
                for (let index = 0; index < JantriData.length; index++) {
                    const element = JantriData[index];
                    if (finalMessageArray.length) {
                        const found = finalMessageArray.find(ele => String(ele.number) == String(element.number));
                        if (!found) {
                            finalMessageArray.push(element)
                        } else {
                            let foundNumber = Number(found['point'])
                            foundNumber += Number(element.point)

                            found['point'] = String(foundNumber)
                        }
                    } else {
                        finalMessageArray.push(element)
                    }
                }
            }
            let message = [];
            let finalTotal = 0;
            for (let index = 0; index < finalMessageArray.length; index++) {
                const element = finalMessageArray[index];
                let msg = `${element.number}-(${element.point})`
                finalTotal += Number(element.point)
                message.push(msg);
            }

            let finalMessage = message.join() + ` FinalTotal-${finalTotal}`

            return finalMessage
        },
        shareText() {
            let shareableMessage = this.localData();
            this.$clipboard(shareableMessage)
            this.snackbar = true
            this.text = 'Message has been copied!'
            if (window.navigator.share) {
                window.navigator.share({
                    title: 'Final Total',
                    text: shareableMessage,
                }).then(() =>{
                    console.log('Thanks for sharing!');
                }).catch(console.error)
            } else {
                alert('Sharing Feture Not available on this device')
            } 
        }
    }
}
</script>