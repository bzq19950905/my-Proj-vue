<template>
<div class="wrap">
  <el-container>
      <el-header> <EHeader /></el-header>
      <el-container>
        <el-aside width="200px">
          <EAside />
        </el-aside>
        <el-main>
          <EMain />
        </el-main>
      </el-container>
  </el-container>
</div>
</template>
<script>
import EHeader from "./el-header.vue";
import EAside from "./el-aside.vue";
import EMain from "./el-main.vue";
import {mapActions} from 'vuex'
export default {
  name: "listIndex",
  data() {
    return {};
  },
  components: {
    EHeader,
    EAside,
    EMain
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #3a76e5;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
