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

export default {
  components: {
    AppModal,
    AppCode
  },
  props: {
    columns: {
      type: [String, Number],
      required: true
    },
    rows: {
      type: [String, Number],
      required: true
    },
    columngap: {
      type: [String, Number],
      required: true
    },
    rowgap: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      showModal: false
    };
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