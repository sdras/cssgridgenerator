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
        <span class="ckey">grid-template-columns</span>
        :
        <span class="cprop">{{ colTemplate }}</span>;
      </p>
      <p class="sp">
        <span class="ckey">grid-template-rows</span>
        :
        <span class="cprop">{{ rowTemplate }}</span>;
      </p>
      <p class="sp">
        <span class="ckey">grid-column-gap</span>
        :
        <span class="cprop">{{ columngap }}px;</span>
      </p>
      <p class="sp">
        <span class="ckey">grid-row-gap</span>
        :
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
  background: #222;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #555;
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
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