<template>
  <aside>
    <fieldset>
      <label for="columns">{{ $t("form.columns") }}</label>
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
      <label for="rows">{{ $t("form.rows") }}</label>
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
      <label for="columngap">{{ $t("form.columngap") }} <span class="label-extra-info">{{ $t("form.units") }}</span></label>
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
      <label for="rowgap">{{ $t("form.rowgap") }} <span class="label-extra-info">{{ $t("form.units") }}</span></label>
      <input
        id="rowgap"
        type="number"
        min="0"
        max="50"
        @input="$store.commit(`updateRowGap`, $event.target.value)"
        :value="rowgap"
      >
    </fieldset>

    <button @click="showCodeModal = true">{{ $t("form.codebutton") }}</button>
    <button type="reset" @click="$store.commit(`resetGrid`)">{{ $t("form.reset") }}</button>
    <app-modal v-if="showCodeModal" @close="showCodeModal = false">
      <h3 slot="header">{{ $t("modal.header.yourcode") }}</h3>
      <div slot="body">
        <app-code/>
      </div>
    </app-modal>

    <p class="wat" @click="showExplainModal = true">{{ $t("form.project") }}</p>
    <app-modal v-if="showExplainModal" @close="showExplainModal = false">
      <h3 slot="header">{{ $t("modal.header.what") }}</h3>
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
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  aside {
    width: 80vw;
    margin: 100px 50px;
  }
  button[type=reset]{
    margin-left: 20px;
  }
}
</style>
