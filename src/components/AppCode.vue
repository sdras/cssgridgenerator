<template>
  <div class="group codegroup">
    <h3>{{ $t("modal.copy.title") }}</h3>
    <div class="gridcode">
      <button
        role="region"
        id="toggleShowHtml"
        aria-live="polite"
        type="button"
        class="togglehtml"
        @click.stop.prevent="toggleHtml"
      >
        <template v-if="showHtml">{{ $t("modal.copy.css") }}</template>
        <template v-else>{{ $t("modal.copy.html") }}</template>
      </button>
      <button
        role="region"
        id="codeCopyStatus"
        aria-live="polite"
        type="button"
        class="copycode"
        @click.stop.prevent="copy"
      >
        <template v-if="codeWasCopied">{{ $t("modal.copy.clipboardSuccess") }}</template>
        <template v-else>{{ $t("modal.copy.clipboard") }}</template>
      </button>
       <select v-if="!showHtml" id="csstype" v-model="cssType" class="cssselect">
          <option value="css" selected="selected">CSS</option>
          <option value="scss">SCSS</option>
          <option value="iec">IE Compatible</option>
        </select>

      <div id="code" ref="code">
        <div v-if="showHtml">
          <p>
            &lt;<span class="cname">div</span>
            <span class="cprop">&nbsp;class="parent"</span>&gt;
            <br>
            <span v-if="childarea.length > 0">
              <span v-for="(child, i) in childarea" :key="child">
                <span class="sp">
                  &lt;<span class="cname">div</span>
                  <span class="cprop">&nbsp;class="div{{ i + 1 }}"</span>&gt;
                  &lt;/<span class="cname">div</span>&gt;
                </span>
                <br>
              </span>
            </span>
            <span v-else>
              <br>
            </span>
            &lt;/<span class="cname">div</span>&gt;
          </p>
        </div>
        <div v-else>
          <p>
            <span class="cname">.parent</span> {
            <br>
            <template v-if="cssType==='iec'">
              <span class="sp">
                <span class="ckey">display</span>:
                <span class="cprop">ms-grid</span>;
              </span>
              <br>
            </template>
            <span class="sp">
              <span class="ckey">display</span>:
              <span class="cprop">grid</span>;
            </span>
            <br>
             <template v-if="cssType==='iec'">
              <span class="sp">
                <span class="ckey">-ms-grid-columns</span>:
                <span class="cprop">{{ msColTemplate }}</span>;
              </span>
              <br>
            </template>
            <span class="sp">
              <span class="ckey">grid-template-columns</span>:
              <span class="cprop">{{ colTemplate }}</span>;
            </span>
            <br>
             <template v-if="cssType==='iec'">
              <span class="sp">
                <span class="ckey">-ms-grid-rows</span>:
                <span class="cprop">{{ msRowTemplate }}</span>;
              </span>
              <br>
            </template>
            <span class="sp">
              <span class="ckey">grid-template-rows</span>:
              <span class="cprop">{{ rowTemplate }}</span>;
            </span>
            <br>
            <span class="sp">
              <span class="ckey">grid-column-gap</span>:
              <span class="cprop">{{ columngap }}px;</span>
            </span>
            <br>
            <template v-if="cssType==='iec'">
              <span class="sp">
                <span class="ckey">margin-right</span>:
                <span class="cprop">{{ msRowTemplate }}</span>;
              </span>
              <br>
            </template>
            <span class="sp">
              <span class="ckey">grid-row-gap</span>:
              <span class="cprop">{{ rowgap }}px</span>;
            </span> 
            <br>
            <span v-if="cssType==='css' || cssType ==='iec'">}</span>
          </p>
          <p :class="{child : cssType==='scss'}">
            <template v-if="cssType==='iec'">
              <span v-if="mschildarea.length > 0">
                <span v-for="(child, i) in mschildarea" :key="child.cString">
                    <span class="cname">.div{{ i + 1 }}</span> {
                    <br>
                    <span class="ckey msc">-ms-grid-row</span>:
                    <span class="cprop">{{ child.startRow }}</span>;&#9;
                    <span class="ckey">-ms-grid-row-span</span>:
                    <span class="cprop">{{ calculateMsSpan(child.startRow, child.endRow) }}</span>; 
                    <br>
                    <template v-if="rowgap > 0 || columngap > 0">
                      <span class="ckey msc">margin</span>:
                      <span class="cprop">{{ calculateMsMargin(columngap, rowgap) }}</span>;
                      <br>
                    </template>
                    <span class="ckey msc">-ms-grid-column</span>:
                    <span class="cprop">{{ child.startCol }}</span>; 
                    <span class="ckey">-ms-grid-column-span</span>:
                    <span class="cprop">{{ calculateMsSpan(child.startCol, child.endCol)  }}</span>; 
                    <br>
                    <span class="ckey msc">grid-area</span>:           
                    <span class="cprop">{{ child.cString }}</span>; 
                    <br>}
                    <br>
                </span>
              </span>
            </template>
            <template v-else>
              <span v-if="childarea.length > 0">
                <span v-for="(child, i) in childarea" :key="child">
                  <span>
                    <span class="cname">.div{{ i + 1 }}</span> {
                    <span class="ckey">grid-area</span>:
                    <span class="cprop">{{ child }}</span>; }
                  </span>
                  <br>
                </span>
              </span>
            </template>
          </p>
          <span v-if="cssType==='scss'">}</span>
        </div>
      </div>
      <!--code-->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      codeWasCopied: false,
      showHtml: false,
      cssType: "css"
    };
  },
  computed: {
    ...mapState(["columngap", "rowgap", "childarea", "mschildarea"]),
    ...mapGetters(["rowTemplate", "colTemplate", "msColTemplate", "msRowTemplate"])
  },
  methods: {
    copy() {
      let text = this.$refs.code,
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

      let copied = document.execCommand("copy");

      if (copied) {
        this.codeWasCopied = true;
        setTimeout(() => {
          this.codeWasCopied = false;
        }, 2000);
      }
    },
    toggleHtml() {
      this.showHtml = !this.showHtml;
    },
    calculateMsMargin(colgap, rowgap){
      let bottom = rowgap > 0 ? `${rowgap}px` : 0,
          right = colgap > 0 ? `${colgap}px` : 0;
      
      return `0 ${right} ${bottom} 0`;
    },
    calculateMsSpan(start, end){
      let initialSpan = end - start;
      if( initialSpan <= 1){
        return 1;
      } else {
        return initialSpan;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.gridcode {
  position: relative;
  background: #131321; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #131321 0%,
    #1f1c2c 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #131321 0%,
    #1f1c2c 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #131321 0%,
    #1f1c2c 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#131321', endColorstr='#1f1c2c',GradientType=0 ); /* IE6-9 */
  box-shadow: 0 2px 20px 0 #000;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #08ffbd;
  font-size: 15px;
  font-family: "Roboto Mono", Courier, monospace;
  max-height: 50vh;
  overflow-y: scroll;
  p {
    margin: 5px;
  }
}

.copycode {
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  background: #0f8a8ab3;
  padding: 8px 12px;
  border-radius: 0 4px 0 4px;
  font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
  cursor: pointer;
}

.cssselect {
  border-radius: 4px 4px 4px 4px;
  font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
  border-color:#08ffbd;
  background-color:#131321;
  color:#08ffbd;
}

.togglehtml {
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
  cursor: pointer;
}

.child {
  padding-left: 20px;
}

.msc {
  padding-left:20px;
}

.codegroup {
  margin-top: 30px;
}

.sp {
  padding-left: 20px;
}

.ckey {
  color: #6af2d7;
}

.cprop {
  color: #f8a384;
}
.cname {
  color: #ffea18;
}
</style>
