<template>
  <div class="input_box">
      <input :type="type"
              :placeholder="placeholder"
              :index="index"
              :value="value"
              :maxlength="maxLength"
              :class="className"
              @focus="handleFocus"
              @blur="handleBlur"
              @input="updateValue"
              ref='input'
      />
  </div>
</template>
<script>
export default {
  name: "hd-input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    },
    value: {},
    maxLength: {
      type: Number,
      default: 50
    },
    className: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleFocus(e) {
      this.$emit("handleFocus", e.target.value);
      //console.log(e.target.value)
    },
    handleBlur(e) {
      this.$emit("handleBlur", e.target.value);
    },
    updateValue(e) {
      this.$emit("updateValue", e.target.value);
      // console.log(e.target.value)
    }
  }
};
</script>
<style lang="scss" scoped>
.input_box {
  flex: 1;
  height: 100%;
  input {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 10px;
    padding: 0 6px;
  }
}
</style>

