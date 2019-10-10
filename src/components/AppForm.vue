<template>
  <div>
    <fieldset>
      <label for="columns">{{ $t("form.columns") }}</label>
      <input
        id="columns"
        type="number"
        min="0"
        max="12"
        @input="$store.commit(`updateColumns`, $event.target.value)"
        :value="columns"
      />
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
      />
    </fieldset>

    <fieldset>
      <label for="columngap">
        {{ $t("form.columngap") }}
        <span class="label-extra-info">{{ $t("form.units") }}</span>
      </label>
      <input
        id="columngap"
        type="number"
        min="0"
        max="50"
        @input="$store.commit(`updateColumnGap`, $event.target.value)"
        :value="columngap"
      />
    </fieldset>

    <fieldset>
      <label for="rowgap">
        {{ $t("form.rowgap") }}
        <span class="label-extra-info">{{ $t("form.units") }}</span>
      </label>
      <input
        id="rowgap"
        type="number"
        min="0"
        max="50"
        @input="$store.commit(`updateRowGap`, $event.target.value)"
        :value="rowgap"
      />
    </fieldset>

    <button @click="$emit('onClickedCodeButton')">{{ $t("form.codebutton") }}</button>
    <button type="reset" @click="$store.commit(`resetGrid`)">{{ $t("form.reset") }}</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
@media screen and (max-width: 700px) {
  button[type="reset"] {
    margin-left: 20px;
  }
}
</style>
