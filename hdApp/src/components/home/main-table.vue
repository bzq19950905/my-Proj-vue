<template>
  <div class="box">
 <el-table
    :data="tableData3"
    v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    width="100%"
    height="500px"
    :empty-text="loginText"
    border
    style="width: 100%">
    <el-table-column
       v-for="(item,index) in conManageTitle"
      :key="index"
      :prop="index"
      :label="item[0]"
      :width="item[1]">
    </el-table-column>
    <el-table-column
      prop=""
      label="操作"
      width="180">
      <template slot-scope="scoped">
        <button>取消推荐</button>
      </template>
    </el-table-column>
  </el-table>
    <Pagination />
  </div>
</template>
<script>
import Pagination from "./table-pagination";
import { mapState, mapActions, mapGetters } from "vuex";
import { conManageTitle } from "@/assets/tableTitle/index.js";
export default {
  name: "tableA",
  data() {
    return {
      conManageTitle
    };
  },
  created() {
    this.initData();
  },
  computed: {
    ...mapGetters({
      tableData3: ["conManage/conGlistData"]
    }),
    ...mapState({
      loading2: state => state.conManage.isLogin,
      loginText: state => state.conManage.LoginText
    })
  },
  methods: {
    ...mapActions({
      initData: "conManage/conBtain"
    })
  },
  components: {
    Pagination
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
