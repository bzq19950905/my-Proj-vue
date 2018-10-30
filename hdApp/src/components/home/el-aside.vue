<template>
  <el-menu default-active="/home/teacherList"
  class="el-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose"
  :collapse="isCollapse"
  router
  >
    <el-submenu v-for="(item,index) in ToRoutes " :key="index"
    :index="index+''"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{item.menuName}}</span>
      </template>
      <el-menu-item-group v-for="(v,i) in item.childMenu" :key="i">
        <el-menu-item :index="'/home/'+v.route.path" @click="changeAside(v.menuName)">{{v.menuName}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    </el-menu>
</template>
<script>
import eventBus from "@/utils/Bus.js"
export default {
  name: "list",
  data() {
    return {
      isCollapse: false,
      ToRoutes:[]
    };
  },
  created() {
    eventBus.$on("ToAside", () => {
      this.isCollapse = !this.isCollapse;
    });
  },
  mounted() {
    this.$http.get('http://47.95.13.141:8088/api/home').then(res=>{
      this.ToRoutes = JSON.parse(res.data[0].data)
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeAside(text) {
      console.log(text);
      eventBus.$emit("List-Title", text);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu {
  height: 100%;
  background-color: #f9fafb;
}
</style>
