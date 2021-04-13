<template>
  <div class="container">
    <v-card class="mx-auto" max-width="1000" outlined>
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
    <v-card class="mx-auto" max-width="1000" outlined height="70">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="d-flex justify-space-between px-4">
            <div class="overline mb-4">NUMBERS</div>
            <div class="overline mb-4">POINTS</div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-card class="mx-auto" max-width="1000" outlined>
      <v-list-item one-line>
        <v-list-item-content>
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="d-flex justify-space-between px-4">
              <div class="overline mb-4 mr-2">
                <v-text-field
                  v-model="form.number"
                  placeholder="Number"
                  type="number"
                  ref="number"
                  @keyup.enter="focusInput"
                  :rules="numberRule"
                  required
                ></v-text-field>
              </div>
              <div class="overline mb-4 ml-2">
                <v-text-field
                  v-model="form.point"
                  placeholder="Point"
                  type="number"
                  ref="point"
                  @keyup.enter="onSubmit"
									:rules="pointRule"
									required
                ></v-text-field>
              </div>
            </div>
          </v-form>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card
      v-for="(item, index) in finalItems"
      :key="index"
      class="mx-auto px-2 my-2"
      max-width="1000"
      outlined
      height="50"
    >
      <v-list-item one-line>
        <v-list-item-content>
          <div class="d-flex justify-space-between">
            <p>{{item.number}}</p>
            <p class="font-weight-bold">{{item.point}}</p>
            <p>
              <v-btn rounded color="error" small dark @click="deleteItem(index)">delete</v-btn>
            </p>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
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
			valid: true,
      form: {
        number: "",
        point: ""
      },
      numberRule: [
        v => !!v || "Can't be empty",
        v => (v && v <= 100) || "Number must be less than or equal 100"
      ],
			pointRule: [
        v => !!v || "Can't be empty"
      ],
      finalItems: [],
      items: [
        { title: "HOME", to: "/" },
        { title: "JANTRI", to: "/jantri" },
        { title: "FINAL JANTRI", to: "/final-jantri" },
        { title: "FROM - TO", to: "/from-to" },
        { title: "MESSAGE COPY", to: "/copy-message" },
        { title: "CROSS", to: "/cross" },
        { title: "JODA", to: "/joda" },
      ]
    };
  },
  beforeMount() {
    this.fetchLocalStorageItem();
  },
	mounted() {
		this.$refs.number.focus();
	},
  methods: {
    focusInput() {
      this.$refs.point.focus();
    },
    fetchLocalStorageItem() {
      this.finalItems = JSON.parse(localStorage.getItem("data"));
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        let task = {
          number: this.form.number,
          point: this.form.point
        };

        if (localStorage.getItem("data") == null) {
          var data = [];
          data.push(task);
          localStorage.setItem("data", JSON.stringify(data));
          this.fetchLocalStorageItem();
          this.clearForm();
          this.$refs.number.focus();
					this.$refs.form.reset()
        } else {
          var myData = JSON.parse(localStorage.getItem("data"));
          myData.push(task);
          // then reset the localStorage
          localStorage.setItem("data", JSON.stringify(myData));
          this.fetchLocalStorageItem();
          this.clearForm();
          this.$refs.number.focus();
					this.$refs.form.reset()
        }
      }
    },

    clearForm() {
      this.form.number = "";
      this.form.point = "";
    },

		deleteAll() {
			localStorage.removeItem('data');
			this.fetchLocalStorageItem();
			this.$refs.number.focus();
			this.$refs.form.reset()
		},

    deleteItem(index) {
      var myData = JSON.parse(localStorage.getItem("data"));
      myData.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(myData));
      this.fetchLocalStorageItem();
    }
  }
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>