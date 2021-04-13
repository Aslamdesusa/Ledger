<template>
  <div class="container">
    <v-card class="mx-auto" max-width="1000" outlined>
      <v-list-item one-line>
        <v-list-item-content>
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="py-2">
                <v-textarea name="input-7-1" v-model="form.decodeItem" hint="Example: 11-(20),12-(20),13-(20),14-(20)" :rules="pointsRule" required placeholder="Message to decode"></v-textarea>
            </div>
          </v-form>
          <div>
              <v-btn class="success mb-2" block @click="paste">PASTE</v-btn>
              <v-btn class="primary" block @click="onSubmit">SUBMIT</v-btn>
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
            decodeItem: ''
        },
        valid: true,
        pointsRule: [
            v => !!v || "Can't be empty"
        ],
    };
  },
    methods: {
        paste() {
            navigator.clipboard.readText()
            .then((text) => {
                this.form.decodeItem = text
            })
        },
        onSubmit() {
            if (this.$refs.form.validate()) {
                let value = this.form.decodeItem
                let splitArray = value.split(',')
                if (splitArray.length) {
                    splitArray.forEach(element => {
                        let splitVal =element.split('-');
                        console.log(splitVal);
                    });
                } else {
                    alert("can't read")
                }
            }
        }
    }
};
</script>