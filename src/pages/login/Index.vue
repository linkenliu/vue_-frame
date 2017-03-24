<template>
  <div class="container" style="margin-top: 50px"><br/>

    <div align="center" class="alert alert-danger" style="padding-top: 15px;padding-bottom: 15px;border-radius: 4px !important;"><strong>请使用Chrome浏览器浏览本系统</strong></div>
    <h3 style="text-align: center">Login</h3>
    <div align="center" class="span4 offset4">
      <div id="alert-info" class="alert alert-danger" style="border-radius: 4px !important;"><strong>没有权限访问该资源!</strong></div>
    </div>
    <br/>
    <div class="span4 offset4"><input style="height: 45px;width: 98%;" v-model="user.username" placeholder="Username"
                                                 autofocus="" class="form-control"/><br/></div>

    <div class="span4 offset4" style="margin-top: 10px">
      <input
        type="password" placeholder="Password" style="height: 45px;width: 96%;" v-model="user.password" class="form-control"/><br/>
    </div>
    <div class="span4 offset4" style="margin-top: 10px;">
      <button type="button" @click="login()" class="btn blue btn-block halfWidth" style="padding-top: 15px;padding-bottom: 15px">登录</button>
    </div>
    <br/><br/><br/>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        user:{}
      }
    },
    methods:{
      login (){
          this.$router.push({
              path:'/index'
          })
      }
    }
  }
</script>

<style>
  input{
    border-radius: 4px !important;
  }
</style>
