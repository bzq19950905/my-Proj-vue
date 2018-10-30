<template>
    <div class='header'> <span @click="changeIs">惠答</span>  <a href="#">欢迎您,西伯利亚</a>  </div>
</template>
<script>
import eventBus from "../../utils/Bus.js";
export default {
  name: "el-Header",
  data() {
    return {};
  },
  methods: {
    changeIs() {
      eventBus.$emit("ToAside");
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
  span {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 15px;
  }
  a {
    color: #fff;
  }
  i {
    font-size: 22px;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>


