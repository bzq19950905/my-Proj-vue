<template>
  <div class="wrap">
    <header class="header">
      <h1> {{text}}</h1>
      <el-button type="primary">录入问答</el-button>
    </header>
    <div class="section">
      <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="推荐问答" name="first"></el-tab-pane>
      <el-tab-pane label="全部问答" name="second"></el-tab-pane>
    </el-tabs>
     <Table />
    </div>
    <footer class="footer">

    </footer>
  </div>
</template>
<script>
import Table from "./main-table.vue"
import eventBus from "@/utils/Bus.js"
import { mapActions } from "vuex"
export default {
  props: ["id"],
  data() {
    return {
      text: "导师列表",
      activeName: "first"
    };
  },
  components: {
    Table
  },
  created() {
    eventBus.$on("List-Title", text => {
      this.text = text;
    });
    //this.init()
  },
  methods: {
    ...mapActions({
      initData: "conManage/conBtain",
      isType: "conManage/conType"
    }),
    handleClick(tab, event) {
      this.isType(), this.initData();
    },
    init() {
      this.$http
        .get("/api/table", {})
        .then(res => {
          if (res.code === "1") {
            this.tableData3 = res.data;
          }
        })
        .catch(err => {
          console.warn(err);
          return false;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 800;
    color: #778796;
  }
}
.section {
  width: 100%;
  height: 100%;
}
</style>
