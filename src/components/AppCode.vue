<template>
  <div class="group codegroup">
    <h3>Copy the code below:</h3>
    <div class="gridcode">
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
      <!-- <div v-if="children.length > 0" class="child">
        <div v-for="(child, i) in children" :key="i">
          <p>
            <span class="cname">.section{{ i + 1 }}</span> {
          </p>
          <p class="sp">
            <span class="ckey">grid-area</span>
            :
            <span
              class="cprop"
            >{{ child.srow }} / {{ child.scol }} / {{ child.erow }} / {{ child.ecol }}</span>;
          </p>
          <p>}</p>
        </div>
      </div>-->
      <p>}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colTemplate: {
      type: String,
      required: true
    },
    rowTemplate: {
      type: String,
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
  }
};
</script>

<style lang="scss" scoped>
.gridcode {
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
  p {
    margin: 5px;
  }
}

.child {
  padding-left: 40px;
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