<template>
<div class="container">
    <v-card class="mx-auto" max-width="1000" outlined>
        <v-list-item one-line>
            <v-list-item-content>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <label for>Croshing Row 1</label>
                    <div class="d-flex mb-3">
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.one" type="number" class="form-control" :maxlength="max" @keyup="focusOn('2', $event)" ref="1"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.two" type="number" class="form-control" :maxlength="max" ref="2" @keyup="focusOn('3', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.three" type="number" class="form-control" :maxlength="max" ref="3" @keyup="focusOn('4', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.four" type="number" class="form-control" :maxlength="max" ref="4" @keyup="focusOn('5', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.five" type="number" class="form-control" :maxlength="max" ref="5" @keyup="focusOn('6', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.six" type="number" class="form-control" :maxlength="max" ref="6" @keyup="focusOn('7', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.seven" type="number" class="form-control" :maxlength="max" ref="7" @keyup="focusOn('8', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.eight" type="number" class="form-control" :maxlength="max" ref="8" @keyup="focusOn('9', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.nine" type="number" class="form-control" :maxlength="max" ref="9" @keyup="focusOn('10', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow1.ten" type="number" class="form-control" :maxlength="max" ref="10" @keyup="focusOn('11', $event)"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <label for>Croshing Row 2</label>
                    <div class="d-flex mb-3">
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.one" type="number" class="form-control" :maxlength="max" ref="11" @keyup="focusOn('12', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.two" type="number" class="form-control" :maxlength="max" ref="12" @keyup="focusOn('13', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.three" type="number" class="form-control" :maxlength="max" ref="13" @keyup="focusOn('14', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.four" type="number" class="form-control" :maxlength="max" ref="14" @keyup="focusOn('15', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.five" type="number" class="form-control" :maxlength="max" ref="15" @keyup="focusOn('16', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.six" type="number" class="form-control" :maxlength="max" ref="16" @keyup="focusOn('17', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.seven" type="number" class="form-control" :maxlength="max" ref="17" @keyup="focusOn('18', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.eight" type="number" class="form-control" :maxlength="max" ref="18" @keyup="focusOn('19', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.nine" type="number" class="form-control" :maxlength="max" ref="19" @keyup="focusOn('20', $event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="v-input px-1 theme--light v-text-field v-text-field--is-booted">
                            <div class="v-input__control">
                                <div class="v-input__slot">
                                    <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" v-model="form.crossingRow2.ten" type="number" class="form-control" :maxlength="max" ref="20" @keyup="focusOn('21', $event)" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-2">
                        <v-text-field v-model="form.point" class="px-2" placeholder="Points" type="number" :rules="pointsRule" required ref="21"></v-text-field>
                    </div>
                </v-form>
                <div>
                    <v-btn class="primary" block @click="onSubmit">Submit</v-btn>
                    <v-btn class="mt-3" block to="/">Close</v-btn>
                </div>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</div>
</template>

<script>
export default {
  data() {
    return {
        max: 1,
        text: "",
        form: {
            crossingRow1: {
                one: '',
                two: '',
                three: '',
                four: '',
                five: '',
                six: '',
                seven: '',
                eight: '',
                nine: '',
                ten: ''
            },
            crossingRow2: {
                one: '',
                two: '',
                three: '',
                four: '',
                five: '',
                six: '',
                seven: '',
                eight: '',
                nine: '',
                ten: ''
            },
            point: ""
        },
        valid: true,
        pointsRule: [v => !!v || "Can't be empty"]
    };
  },
  methods: {
    focusOn(input, e) {
        if (e.keyCode == 8 && input != "2") {
            this.$refs[input - 2].focus()
        }
        if (e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 8 || e.key == 9) {
            this.$refs[input].focus()   
        }
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        let finalData = [];
        let cross1 = [this.form.crossingRow1.one, this.form.crossingRow1.two, this.form.crossingRow1.three, this.form.crossingRow1.four, this.form.crossingRow1.five, this.form.crossingRow1.six, this.form.crossingRow1.seven, this.form.crossingRow1.eight, this.form.crossingRow1.nine, this.form.crossingRow1.ten]
        let cross2 = [this.form.crossingRow2.one, this.form.crossingRow2.two, this.form.crossingRow2.three, this.form.crossingRow2.four, this.form.crossingRow2.five, this.form.crossingRow2.six, this.form.crossingRow2.seven, this.form.crossingRow2.eight, this.form.crossingRow2.nine, this.form.crossingRow2.ten]
          
        let cleanArray1 = cross1.filter(function (e) {
            return e
        });

        let cleanArray2 = cross2.filter(function (e) {
            return e
        });

        for (let index = 0; index < cleanArray1.length; index++) {
            const element = cleanArray1[index];

            for (let index = 0; index < cleanArray2.length; index++) {
                const element2 = cleanArray2[index];

                let task = {
                    number: String(element.concat(element2)),
                    point: this.form.point
                };

                finalData.push(task);
            }
        }
        
        if (localStorage.getItem("data") == null) {
          localStorage.setItem("data", JSON.stringify(finalData));
          this.$router.push("/");
        } else {
          let myData = JSON.parse(localStorage.getItem("data"));

          let mergeArray = [];

          mergeArray.push(...myData, ...finalData);

          // then reset the localStorage
          localStorage.setItem("data", JSON.stringify(mergeArray));
          this.$router.push("/");
        }
      }
    }
  }
};
</script>