<template>
  <div id="login">
    <div class="row">
      <div class="column column-33 column-offset-33">
        <h3>
          <img :src="icon">
          IDcard generator
        </h3>
        <label for="password">Password</label>
        <div style="color: red">{{ msg }}</div>
        <input type="password" id="password" name="password" v-model="input.password" placeholder="here the password" autofocus/>
        <button type="button" v-on:click="login()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/assets/icon.png';

export default {
  name: 'Login',
  data() {
    return {
      icon,
      input: {
        password: ""
      },
      msg: ''
    }
  },
   methods: {
    login() {
      this.msg = ""
      if (this.input.password != "") {
        if (this.input.password == this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          this.$router.replace({
            name: "main"
          });
        } else {
          this.msg = "The password is incorrect"
          console.log("The password is incorrect");
        }
      } else {
        this.msg = "A password must be present"
        console.log("A password must be present");
      }
    }
  }
}
</script>

<style scoped>

</style>
