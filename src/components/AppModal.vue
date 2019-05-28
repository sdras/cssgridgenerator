<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="close">
        <div
          class="modal-container"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header id="modalTitle">
            <h2 class="modal-header">
              <slot name="header">default header</slot>
            </h2>
          </header>

          <section class="modal-body" id="modalDescription">
            <slot name="body">default body</slot>
          </section>

          <button
            type="button"
            aria-label="Close modal"
            class="modal-button"
            @click="close"
          >{{ $t("modal.button") }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("keydown", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.close);
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.25s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 80vw;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: scroll;
  margin: 0px auto;
  padding: 20px 50px 60px;
  background-color: #192d38;
  border-radius: 5px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  border: 1px solid black;
}

.modal-header {
  margin-top: 0;
  text-align: center;
}

.modal-body {
  margin: 20px 0;
}

.modal-button {
  margin: 40px auto 0;
  display: table;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(0.9);
}
</style>
