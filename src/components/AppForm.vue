<template>
  <aside>
    <fieldset>
      <label for="columns">Columns</label>
      <input
        id="columns"
        type="number"
        min="0"
        max="12"
        @input="$store.commit(`updateColumns`, $event.target.value)"
        :value="columns"
      >
    </fieldset>

    <fieldset>
      <label for="rows">Rows</label>
      <input
        id="rows"
        type="number"
        min="0"
        max="12"
        @input="$store.commit(`updateRows`, $event.target.value)"
        :value="rows"
      >
    </fieldset>

    <fieldset>
      <label for="columngap">Column Gap</label>
      <input
        id="columngap"
        type="number"
        min="0"
        max="50"
        @input="$store.commit(`updateColumnGap`, $event.target.value)"
        :value="columngap"
      >
    </fieldset>

    <fieldset>
      <label for="rowgap">Row Gap</label>
      <input
        id="rowgap"
        type="number"
        min="0"
        max="50"
        @input="$store.commit(`updateRowGap`, $event.target.value)"
        :value="rowgap"
      >
    </fieldset>

    <button @click="showCodeModal = true">Please may I have some code</button>
    <app-modal v-if="showCodeModal" @close="showCodeModal = false">
      <h3 slot="header">Your Grid Code</h3>
      <div slot="body">
        <app-code/>
      </div>
    </app-modal>

    <p class="wat" @click="showExplainModal = true">What does this project do?</p>
    <app-modal v-if="showExplainModal" @close="showExplainModal = false">
      <h3 slot="header">Wat is this?</h3>
      <div slot="body">
        <app-explain/>
      </div>
    </app-modal>
  </aside>
</template>

<script>
import AppExplain from "./AppExplain.vue";
import AppModal from "./AppModal.vue";
import AppCode from "./AppCode.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppExplain,
    AppModal,
    AppCode
  },
  data() {
    return {
      showCodeModal: false,
      showExplainModal: false
    };
  },
  computed: {
    ...mapState(["columngap", "rowgap", "columns", "rows"])
  },
  watch: {
    columns(newVal, oldVal) {
      let payload = {
        newVal,
        oldVal,
        direction: "colArr"
      };
      this.$store.commit("adjustArr", payload);
    },
    rows(newVal, oldVal) {
      let payload = {
        newVal,
        oldVal,
        direction: "rowArr"
      };
      this.$store.commit("adjustArr", payload);
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  width: 18.75rem;
  margin: 3.75rem;
  font-size: 1.0625rem;
}

.wat {
  margin-top: 1.125rem;
  opacity: 0.9;
  cursor: pointer;
  font-size: 1.375rem;
  font-weight: normal;
  color: var(--color-blue-light);
  font-family: var(--font-cursive);
}

@media screen and (max-width: 43.75rem) {
  aside {
    width: 80vw;
    margin: 6.25rem 3.125rem;
  }
}
</style>