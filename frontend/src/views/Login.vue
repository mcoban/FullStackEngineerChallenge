<template>
  <div id="login">
    <div class="columns is-centered is-vcentered">
      <div class="column is-4">
        <div class="box login-form">
          <form @submit.prevent="login">
            <h1 class="title">Login</h1>
            <div class="field">
              <label for="email" class="label">Email</label>
              <div class="control">
                <input class="input" type="text" id="email" v-model="email">
              </div>
            </div>
            <div class="field">
              <label for="password" class="label">Password</label>
              <div class="control">
                <input class="input" type="password" id="password" v-model="password">
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button type="submit" class="button is-primary is-fullwidth">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"));
    }
  }
}
</script>


<style lang="scss">
.columns {
  height: 100vh;
}
.login-form {
  margin-bottom: 100px;
}
</style>