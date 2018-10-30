<template>
  <div class="block">
    <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[5, 10, 15]"
    :page-size="100"
    layout="total, sizes, prev, pager, next, jumper"
    :total="listNum">
    </el-pagination>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  mounted() {
    this.page();
  },
  computed: {
    ...mapState({
      listNum: state => state.conManage.listLength,
      pageObj: state => state.conManage.listPage
    })
  },
  methods: {
    page(pageData) {
      let obj = pageData ? pageData : this.pageObj;
      this.$store.dispatch("conManage/conBtainPage", obj);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page(Object.assign({}, this.pageObj, { pageSize: val }));
      this.initData();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page(Object.assign({}, this.pageObj, { pageNum: val }));
      this.initData();
    },
    ...mapActions({
      initData: "conManage/conBtain"
    })
  }
};
</script>
