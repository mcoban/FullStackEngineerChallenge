<template>
  <div id="register">
    <div class="columns is-centered is-vcentered">
      <div class="column is-4">
        <div class="box register-form">
          <form @submit.prevent="register">
            <h1 class="title">Register</h1>
            <div class="field">
              <label for="fullName" class="label">Full Name</label>
              <div class="control">
                <input class="input" type="text" id="fullName" v-model="fullName">
              </div>
            </div>
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
                <button type="submit" class="button is-link is-fullwidth">Register</button>
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
  name: "register",
  data() {
    return {
      email: '',
      password: '',
      fullName: ''
    };
  },
  methods: {
    register() {
      // let email = this.email;
      // let password = this.password;
      // this.$store
      //   .dispatch("login", { email, password })
      //   .then(() => this.$router.push("/"));
    }
  }
}
</script>


<style lang="scss">
.columns {
  height: 100vh;
}
.register-form {
  margin-bottom: 100px;
}
</style>