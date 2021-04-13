<template>
<div>
    <v-card class="mx-auto mb-3"  outlined>
            <div class="py-4 d-flex justify-center">
                <div class="text-center px-2">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on" small rounded>ACTIONS</v-btn>
                    </template>
                    <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" link :to="item.to">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-menu>
                </div>
                <div class="text-center px-2">
                <v-btn rounded color="error" small dark @click="deleteAll">DELETE ALL</v-btn>
                </div>
                <div class="text-center px-2">
                    <ShareBtn />
                </div>
            </div>
        </v-card>
        <v-container class="main-container">
            <v-row class="mb-6" no-gutters v-for="(i, ind) in jantriData" :key="ind" style="margin-top: -22px !important;">
                <v-col v-for="(item, index) in i" :key="index" class="ml-1">
                    <v-card class="pa-2" tile outlined height="85" style="border-radius: 5px !important;">
                        <small>{{item.number}}</small>
                        <v-text-field readonly :ref="String(item.number)" solo flat v-if="item.number != ''" class="text-only p-0" type="number" v-model="item.point"></v-text-field>
                        <v-text-field solo flat v-if="item.number == ''" readonly v-model="item.point"></v-text-field>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
</div>
</template>

<script>
import ShareBtn from '../components/shareBtn'
export default {
    components: {
        ShareBtn
    },
    data() {
        return {
            jantriData: this.$store.state.jantriRecords,
            items: [
                { title: "HOME", to: "/" },
                { title: "JANTRI", to: "/jantri" },
                { title: "FINAL JANTRI", to: "/final-jantri" },
                { title: "FROM - TO", to: "/from-to" },
                { title: "MESSAGE COPY", to: "/copy-message" },
                { title: "CROSS", to: "/cross" },
                { title: "JODA", to: "/joda" },
            ],
        }
    },
    created() {
        this.fetchLocalStorageItem();
    },
    methods: {
        calc() {
            this.jantriData.forEach(items => {
                const lastItem = items[items.length - 1];
                let total = 0;
                lastItem.point = 0;
                items.forEach(element => {
                    let num = Number(element.point)
                    total += num
                });
                if (total != 0) {
                    lastItem.point = total
                } else {
                    lastItem.point = ''
                }

            });
            
            let getLastArray = this.jantriData[this.jantriData.length - 1];
            getLastArray.forEach(tr => {
                tr['point'] = '';
            });
            this.jantriData.forEach(items => {
                items.forEach((element, index) => {
                    if (element.number != '') {
                        let points = Number(element.point)
                        if (points) {
                            let lastArrayItem = Number(getLastArray[index]['point'])
                            lastArrayItem += points


                            if (lastArrayItem != 0) {
                                getLastArray[index]['point'] = lastArrayItem
                            } else {
                                getLastArray[index]['point'] = ''
                            }
                        }
                        
                    }
                });
            });

            let finaltotalVal = 0;
            let lastArrayLastItem = getLastArray[getLastArray.length - 1];
            lastArrayLastItem['point'] = 0;
            getLastArray.forEach(element => {
                let num = Number(element['point'])
                finaltotalVal += num
            });

            lastArrayLastItem['point'] = finaltotalVal;
        },
        fetchLocalStorageItem() {
            let jData = JSON.parse(localStorage.getItem("JData"));
            let data = JSON.parse(localStorage.getItem("data"));
            if (data) {
                data.forEach(element => {
                    let truArray = jData ? jData : this.jantriData
                    for (let index = 0; index < truArray.length; index++) {
                        const parent = truArray[index];
                        for (let index = 0; index < parent.length; index++) {
                            const child = parent[index];
                            if (child.number == element.number) {
                                let num = Number(child.point)
                                num +=  Number(element.point)
                                child.point = String(num)
                            }
                        }
                    }
                });
            }
            if (jData) {
                this.jantriData = jData
                this.calc()
            }
        },
        deleteAll() {
			localStorage.removeItem('JData');
			localStorage.removeItem('data');
		}
    }
}
</script>

<style>
#app > div > main > div > div > div > div > div > div > div > div.v-input__slot {
    padding: 0px !important;
}

div.v-input__slot > div > input[readonly=readonly]{
    color: red;
}

</style>

<style scoped>
@media only screen and (max-width: 600px) {
    .main-container {
        zoom: 40%;
    }
}
</style>