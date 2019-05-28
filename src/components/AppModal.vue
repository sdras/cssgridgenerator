<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <section class="modal-container">
          <h2 class="modal-header">
            <slot name="header">default header</slot>
          </h2>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <button class="modal-button" @click="$emit('close')">Done</button>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.25s ease;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 80vw;
  margin: 0 auto;
  max-width: 43.75rem;
  padding: 1.25rem 3.125rem 3.75rem;
  transition: all 0.3s ease;
  background-color: var(--color-grey-medium);
  border: 0.0625rem solid var(--color-black);
  border-radius: var(--border-radius-default);
  box-shadow: 0 0.125rem 1.25rem rgba(0, 0, 0, 0.8);
}

.modal-header {
  margin-top: 0;
  text-align: center;
}

.modal-body {
  margin: 1.25rem 0;
}

.modal-button {
  display: table;
  margin: 2.5rem auto 0;
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