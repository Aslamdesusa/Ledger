<template>
  <div class="container">
    <v-card class="mx-auto" max-width="1000" outlined>
      <v-list-item one-line>
        <v-list-item-content>
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="py-2">
                <v-text-field v-model="form.point" class="px-2" placeholder="Points" type="number" :rules="pointsRule" required></v-text-field>
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
        form: {
            point: ''
        },
        valid: true,
        pointsRule: [
            v => !!v || "Can't be empty"
        ],
    };
  },
    methods: {
        onSubmit() {
            if (this.$refs.form.validate()) {
                let finalData = [];
                
                for(let i = 1; i <= 9; i++) {

                    // multiply i with number
                    const result = i * 11;

                    let task = {
                        number: String(result),
                        point: this.form.point
                    };

                    finalData.push(task)
                }

                finalData.push({
                    number: "100",
                    point: this.form.point
                })

                if (localStorage.getItem("data") == null) {
                    localStorage.setItem("data", JSON.stringify(finalData));
                    this.$router.push('/');
                } else {
                    let myData = JSON.parse(localStorage.getItem("data"));

                    let mergeArray = [];

                    mergeArray.push(...myData, ...finalData);

                    // then reset the localStorage
                    localStorage.setItem("data", JSON.stringify(mergeArray));
                    this.$router.push('/');
                }
            }
        }
    }
};
</script>