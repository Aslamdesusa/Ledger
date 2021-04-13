<template>
  <div class="container">
    <v-card class="mx-auto" max-width="1000" outlined>
      <v-list-item one-line>
        <v-list-item-content>
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="d-flex">
              <v-text-field v-model="form.from" class="px-2" placeholder="From" type="number" :rules="rule" required></v-text-field>
              <v-text-field v-model="form.to" class="px-2" placeholder="To" type="number" :rules="rule" required></v-text-field>
            </div>
            <div>
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
            from: '',
            to: '',
            point: ''
        },
        valid: true,
        rule: [
            v => !!v || "Can't be empty",
            v => (v && v <= 100) || "Number must be less than or equal 100"
        ],
        pointsRule: [
            v => !!v || "Can't be empty"
        ],
    };
  },
    methods: {
        onSubmit() {
            if (this.$refs.form.validate()) {
                let finalData = [];
                for (var i = this.form.from; i <= this.form.to; i++) {
                   let task = {
                        number: String(i),
                        point: this.form.point
                    };
                    finalData.push(task)
                }

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