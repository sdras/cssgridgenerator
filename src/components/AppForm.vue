<template>
  <aside>
    <fieldset>
      <label for="columns">Columns</label>
      <input
        id="columns"
        type="number"
        min="0"
        @input="$emit('update:columns', $event.target.value)"
        oninput="validity.valid||(value='')"
        v-model.number="columns"
      >
    </fieldset>

    <fieldset>
      <label for="rows">Rows</label>
      <input
        id="rows"
        type="number"
        min="0"
        @input="$emit('update:rows', $event.target.value)"
        oninput="validity.valid||(value='')"
        v-model.number="rows"
      >
    </fieldset>

    <fieldset>
      <label for="columngap">Column Gap</label>
      <input
        id="columngap"
        type="number"
        min="0"
        @input="$emit('update:columngap', $event.target.value)"
        oninput="validity.valid||(value='')"
        v-model.number="columngap"
      >
    </fieldset>

    <fieldset>
      <label for="rowgap">Row Gap</label>
      <input
        id="rowgap"
        type="number"
        min="0"
        @input="$emit('update:rowgap', $event.target.value)"
        oninput="validity.valid||(value='')"
        v-model.number="rowgap"
      >
    </fieldset>

    <button @click="showModal = true">Please may I have some code</button>
    <app-modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Your Grid Code</h3>
      <div slot="body">
        <app-code :columns="columns" :rows="rows" :columngap="columngap" :rowgap="rowgap"/>
      </div>
    </app-modal>

    <p class="wat">What does this project do?</p>
  </aside>
</template>

<script>
import AppModal from "./AppModal.vue";
import AppCode from "./AppCode.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppModal,
    AppCode
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    adjustArr(newVal, oldVal, arrDirection) {
      if (newVal < oldVal) {
        arrDirection.length = newVal;
      } else {
        let difference = newVal - oldVal;
        for (let i = 1; i <= difference; i++) {
          arrDirection.push({ unit: "1fr" });
        }
      }
    }
  },
  computed: {
    ...mapState(["columngap", "rowgap", "columns", "rows"])
  },
  watch: {
    columns(newVal, oldVal) {
      this.adjustArr(newVal, oldVal, this.colArr);
    },
    rows(newVal, oldVal) {
      this.adjustArr(newVal, oldVal, this.rowArr);
    }
  },
  mounted() {
    this.$store.watch(
      state => getters.columns,
      (newValue, oldValue) => {
        console.log(`Updating from ${oldValue} to ${newValue}`);
      }
    );
  }
};
</script>

<style lang="scss" scoped>
aside {
  margin: 60px 60px;
  font-size: 17px;
  width: 300px;
}

.wat {
  font-family: "Caveat", cursive;
  font-size: 22px;
  margin-top: 18px;
  color: #a8c9cc;
  opacity: 0.9;
  font-weight: normal;
}
</style>