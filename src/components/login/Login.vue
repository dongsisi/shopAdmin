<template>
<div class="login">
  <el-row type="flex" class="login-row" justify="center" align="middle">
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
     <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="login-form" label-position="top">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="loginForm.username"></el-input>
  </el-form-item>
 <el-form-item label="密码" prop="password" type="password">
    <el-input v-model="loginForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
    <el-button @click="resetForm('loginForm')">重置</el-button>
  </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from 'axios'
export default{
   data () {
      return {
        loginForm: {
          username: 'admin',
          password: '123456',

        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 12, message: '用户名长度在 5 到 12 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message:'请输入密码', trigger:'blur'},
            { min:6,max:12, message:'密码长度在6到12个字符',trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {

        //this.$refs[formName]是访问对象$refs中的属性
        // 为什么要获取到Dom对象或组件对象，因外在vue中有些情况下，需要手动操作DOM，此时可以通过ref来获取到DOM对象，然后在进行DOM操作如果给组件添加额ref属性，那么可以通过ref来获取到组件对象，
        // 在当前案列中，就是通过$refs.loginForm来获取到表单组件，调用组件中的validate方法，来进行表单验证
        //console.log(this.loginForm)获取用户名和密码
        this.$refs[formName].validate((valid) => {
          if (valid) { //valid形参表示，表单验证是否成功
          //验证成功，发送请求，调用登录接口，完成登录
            axios.post('http://localhost:8888/api/private/v1/login',this.loginForm).then(res=>{
              console.log(res)
              if(res.data.meta.status===200){
                //将token存储到localStorage中注意：要先存储token在跳转路由
                localStorage.setItem('token',res.data.data.token)
                //登录成功后，跳转到首页
                this.$router.push({name:'home'})
              }else{
                //登录失败，提示用户错误信息
                this.$message({
                  type:'error',
                  message:res.data.meta.msg,
                  duration:1000
                })
              }
            })
            //alert('submit!');
          } else {
            //验证失败，不需要做任何处理，因为错误信息都已经在页面中展示给用户了，直接return false
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.login{
  height:100%;
  background-color: #2d434c;
}
.login-row{
  height:100%;
}
.login-form{
  height:100%;
  background-color: #fff;
  padding:30px 20px;
  min-width:380px;
  border-radius:10px;
}
</style>
