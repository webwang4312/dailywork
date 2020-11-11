<template>
  <div>
    <input type="text" v-model="loginForm.username" placeholder="用户名" />
    <input type="text" v-model="loginForm.password" placeholder="密码" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      userToken: "",
    };
  },

  methods: {
    ...mapMutations(["changeLogin"]),
    login() {
        if(this.loginForm.username==='123456'&&this.loginForm.password==='123456'){
            this.$router.push("/home");
        }
    //   let _this = this;
    //   if (this.loginForm.username === "" || this.loginForm.password === "") {
    //     console.log("账号或密码不能为空");
    //   } else {
    //     this.$http({
    //       method: "post",
    //       url: "/user/login",
    //       data: _this.loginForm,
    //     })
    //       .then((res) => {
    //         console.log(res.data);
    //         _this.userToken = "Bearer " + res.data.data.body.token;
    //         // 将用户token保存到vuex中
    //         _this.changeLogin({ Authorization: _this.userToken });
    //         _this.$router.push("/home");
    //         console.log("登陆成功");
    //       })
    //       .catch((error) => {
    //         console.log("账号或密码错误");
    //         console.log(error);
    //       });
    //   }
    },
  },
};
</script>
