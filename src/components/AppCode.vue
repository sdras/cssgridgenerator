<template>
  <div class="group codegroup">
    <h3>Copy the code below:</h3>
    <div class="gridcode">
      <div class="copycode" @click.stop.prevent="copy">Copy to clipboard!</div>

      <div id="code" ref="code">
        <p>
          <span class="cname">.parent</span> {
        </p>
        <p class="sp">
          <span class="ckey">display</span>:
          <span class="cprop">grid</span>;
        </p>
        <p class="sp">
          <span class="ckey">grid-template-columns</span>:
          <span class="cprop">{{ colTemplate }}</span>;
        </p>
        <p class="sp">
          <span class="ckey">grid-template-rows</span>:
          <span class="cprop">{{ rowTemplate }}</span>;
        </p>
        <p class="sp">
          <span class="ckey">grid-column-gap</span>:
          <span class="cprop">{{ columngap }}px;</span>
        </p>
        <p class="sp">
          <span class="ckey">grid-row-gap</span>:
          <span class="cprop">{{ rowgap }}px</span>;
        </p>
        <div v-if="childarea.length > 0" class="child">
          <div v-for="(child, i) in childarea" :key="child">
            <p>
              <span class="cname">.div{{ i + 1 }}</span> {
              <span class="ckey">grid-area</span>:
              <span class="cprop">{{ child }}</span>; }
            </p>
          </div>
        </div>
        <p>}</p>
      </div>
      <!--code-->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["columngap", "rowgap", "childarea"]),
    ...mapGetters(["rowTemplate", "colTemplate"])
  },
  methods: {
    copy() {
      var text = this.$refs.code,
        range,
        selection;

      if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      document.execCommand("copy");
      alert("copied!");
    }
  }
};
</script>

<style lang="scss" scoped>
.gridcode {
  position: relative;
  max-height: 70vh;
  overflow-y: scroll;
  padding: 0.9375rem;
  font-size: 0.9375rem;
  font-family: var(--font-code);
  border: 0.0625rem solid var(--color-teal);
  box-shadow: 0 0.125rem 1.25rem 0 var(--color-black);
  border-radius: var(--border-radius-default);
  background: var(--color-grey-darkest);
  background: -moz-linear-gradient(
    top,
    var(--color-grey-darkest) 0%,
    var(--color-grey-light) 100%
  );
  background: -webkit-linear-gradient(
    top,
    var(--color-grey-darkest) 0%,
    var(--color-grey-light) 100%
  );
  background: linear-gradient(
    to bottom,
    var(--color-grey-darkest) 0%,
    var(--color-grey-light) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=var(--color-grey-darkest), endColorstr=var(--color-grey-light),GradientType=0 );
  p {
    margin: 0.3125rem;
  }
}

.copycode {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem 0.75rem;
  background: var(--color-blue);
  font-family: var(--font-cursive);
  border-radius: 0 var(--border-radius-default) 0 var(--border-radius-default);
}

.child {
  padding-left: 2.5rem;
}

.codegroup {
  margin-top: 1.875rem;
}

.sp {
  padding-left: 1.25rem;
}

.ckey {
  color: var(--color-teal-light);
}

.cprop {
  color: var(--color-orange-light);
}

.cname {
  color: var(--color-yellow-light);
}
</style>