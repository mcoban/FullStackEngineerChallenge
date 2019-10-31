<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong>PayPay Challenge</strong>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div v-if="isLogged" class="navbar-start">
        <a href="/" class="navbar-item">Dashboard</a>
        <a href="/submit-feedback" class="navbar-item">Submit Feedback</a>
      </div>

      <div v-if="!isLogged" class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="/register" class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a href="/login" class="button is-light">Log in</a>
          </div>
        </div>
      </div>
      <div v-if="isLogged" class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a @click="logout" class="button is-primary">
              <strong>Logout</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    fullName () {
      return this.$store.state.user.fullName
    },
    isLogged () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      .then(() => this.$router.push('/login'))
    }
  }
}
</script>

<style lang="scss">
</style>