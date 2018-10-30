<template>
<div class="login" id='particles-js'>
  <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
    label="账户"
    prop="user"
    :rules="[
    { required: true, message: '账户不能为空'}
    ]"
    >
    <el-input type="user" v-model.number="numberValidateForm.user" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item
    label="密码"
    prop="pwd"
    :rules="[
    { required: true, message: '密码不能为空'}
    ]"
    >
    <el-input type="pwd" v-model.number="numberValidateForm.pwd" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { Login } from "@/api/index.js";
export default {
  data() {
    return {
      numberValidateForm: {
        user: "",
        pwd: ""
      }
    };
  },
  computed: {
    ...mapState({
      loginText: state => state.login.loginText
    })
  },
  mounted() {
    particlesJS.load("particles-js", "../../../static/data/particles.json");
  },
  methods: {
    ...mapActions({
      getUser:'login/getUser'
    }),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.getUser(this.numberValidateForm).then(res=>{
            if(res){
              this.$router.push('/home')
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    User_Blur(val) {
      let uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
      if (!uPattern.test(val)) {
        this.$msg({
          title: "my title",
          message: "4到16位（字母，数字，下划线，减号",
          duration: 1500
        });
      }
    },
    Pwd_Blur(val) {
      let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      if (!pPattern.test(val)) {
        //message('最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符')
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/pic1.jpg") no-repeat;
  background-size: cover;
}
.demo-ruleForm {
  width: 500px;
  height: 300px;
  padding: 50px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    margin-top: 20px;
    span {
      width: 50px;
      color: #fff;
      margin-right: 10px;
      font-size: 18px;
    }
  }
}
</style>
