<template>
<div>
    <v-card class="mx-auto mb-3"  outlined>
            <div class="py-2 d-flex justify-center">
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
                <v-btn rounded color="error" small dark @click="deleteAll('e')">DELETE ALL</v-btn>
                </div>
                <div class="text-center px-2">
                    <ShareBtn />
                </div>
            </div>
        </v-card>
        <v-container class="main-container">
            <v-row class="mb-6" no-gutters v-for="(i, ind) in jantriData" :key="ind" style="margin-top: -22px !important;">
                <v-col v-for="(item, index) in i" :key="index" class="ml-1">
                    <v-card tile outlined height="85" style="border-radius: 5px !important; padding: 2px !important; margin: 0 !important;">
                        <p class="number-font">{{item.number}}</p>
                        <v-text-field :ref="String(item.number)" solo flat v-if="item.number != ''" class="text-only p-0" type="number" v-model="item.point" @keyup.enter="calculationOfSingleLine(i, $event, item.number, item.point)"></v-text-field>
                        <p class="number-font" v-if="item.number == ''" style="width: 50px; overflow: hidden; height: 97px; text-align: center; justify-content: center; align-items: center; display: flex; color: red;">{{item.point}}</p>
                        <!-- <v-text-field solo flat v-if="item.number == ''" readonly v-model="item.point"></v-text-field> -->
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
            jantriData: [],
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
        fetchLocalStorageItem() {
            let jData = JSON.parse(localStorage.getItem("JData"));
            if (jData) {
                this.jantriData = jData
            } else {
                let jantriData = this.$store.state.jantriRecords;
                jantriData.map(value => {
                    this.jantriData.push(value);
                })
            }
            let lastArrayLastItem = this.jantriData[this.jantriData.length - 1];
            let lastIndex = lastArrayLastItem[lastArrayLastItem.length - 1];

            this.$store.state.points = lastIndex['point'];
        },
        deleteAll(e) {
			localStorage.removeItem('JData');
            if (e) {
                location.reload()
            }
		},
        calculationOfSingleLine(items, event, ref, value) {
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

            let index = items.findIndex( (rank) => rank.number == ref );
            // getting last array of jantri Array
            let getLastArray = this.jantriData[this.jantriData.length - 1];

            getLastArray[index]['point'] = 0;

            let totalRank = 0;
            this.jantriData.forEach(element => {
                let num = Number(element[index]['point'])
                totalRank += num
            });

            // update Last Array Index
            if (totalRank != 0) {
                getLastArray[index]['point'] = totalRank
            } else {
                getLastArray[index]['point'] = ''
            }

            let finaltotalVal = 0;
            let lastArrayLastItem = getLastArray[getLastArray.length - 1];
            lastArrayLastItem['point'] = 0;
            getLastArray.forEach(element => {
                let num = Number(element['point'])
                finaltotalVal += num
            });

            lastArrayLastItem['point'] = finaltotalVal;

            let arrayVal = ['100', '000', '111', '222', '333', '444', '555', '666', '777', '888', '999', 'A000', 'A111', 'A222', 'A333', 'A444', 'A555', 'A666', 'A777', 'A888', 'A999']

            if (event.keyCode == 8 && value === '' && ref != 1) {
                if (arrayVal.includes(String(ref))) {
                    let findIndex = arrayVal.indexOf(String(ref))
                    let getFocusableIndex = arrayVal[findIndex - 1]
                    this.$refs[getFocusableIndex][0].focus()
                } else {
                    this.$refs[ref-1][0].focus()
                }
            }

            if (event.keyCode == 13 && ref != 'A999') {
                if (arrayVal.includes(String(ref))) {
                    let findIndex = arrayVal.indexOf(String(ref))
                    let getFocusableIndex = arrayVal[findIndex + 1]
                    this.$refs[getFocusableIndex][0].focus()
                } else {
                    this.$refs[ref+1][0].focus()
                }
            }

            localStorage.removeItem('JData');
            this.RecordToLocalStorage()
        },
        RecordToLocalStorage() {
            localStorage.setItem("JData", JSON.stringify(this.jantriData));
        }
    }
}
</script>

<style>
#app > div > main > div > div > div > div > div > div > div > div.v-input__slot {
    padding: 0px !important;
}

div > div > div > div.v-input__slot > div {
    font-size: 20px !important;
}

.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot, .v-text-field.v-text-field--enclosed .v-text-field__details {
    padding: 0 2px;
}

div.v-input__slot > div > input[readonly=readonly]{
    color: red;
}

</style>

<style scoped>
@media only screen and (max-width: 600px) {
    .main-container {
        zoom: 45%;
    }
    .number-font {
        padding: 0px !important;
        margin: 2px 0px -7px 0px;
        font-size: 24px;
    }
}
</style>