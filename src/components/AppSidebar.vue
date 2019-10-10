<template>
  <aside>
    <AppForm @onClickedCodeButton="showCodeModal = true" />

    <transition name="modal">
      <app-modal v-if="showCodeModal" @close="showCodeModal = false">
        <h3 slot="header">{{ $t("modal.header.yourcode") }}</h3>
        <div slot="body">
          <app-code />
        </div>
      </app-modal>
    </transition>

    <p class="wat" @click="showExplainModal = true">{{ $t("form.project") }}</p>
    <transition name="modal">
      <app-modal v-if="showExplainModal" @close="showExplainModal = false">
        <h3 slot="header">{{ $t("modal.header.what") }}</h3>
        <div slot="body">
          <app-explain />
        </div>
      </app-modal>
    </transition>
  </aside>
</template>

<script>
import AppModal from "./AppModal.vue";
import AppExplain from "./AppExplain.vue";
import AppCode from "./AppCode.vue";
import AppForm from "./AppForm";

export default {
  components: {
    AppModal,
    AppExplain,
    AppCode,
    AppForm
  },
  data() {
    return {
      showCodeModal: false,
      showExplainModal: false
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
  cursor: pointer;
}

@media screen and (max-width: 700px) {
  aside {
    width: 80vw;
    margin: 100px 50px;
  }
}
</style>
