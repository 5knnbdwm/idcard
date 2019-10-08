<template>
  <div id="app">
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      mockAccount: {
        password: "2017his"
      }
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({
        name: "login"
      });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 5px;
}

/* Custom Buttons */
.button:active {
  background-color: #999da0;
  border-color: #999da0;
}

input {
  line-height: normal;
}

input[type=file] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 0.1rem solid #d1d1d1;
  border-radius: .4rem;
  box-shadow: none;
  box-sizing: inherit;
  height: 3.8rem;
  padding: .6rem 1.0rem;
  width: 100%;
}

input[type=file]:active {
  border-color: rgb(144, 68, 195);
}

input[type=file]::-webkit-file-upload-button {
  visibility: hidden;
}

input[type=file]::before {
  content: 'Choose file';
  display: inline-block;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 10pt;
}

img {
  height: 28px;
  vertical-align: middle;
}
</style>
