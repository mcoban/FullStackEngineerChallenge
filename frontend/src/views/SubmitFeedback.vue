<template>
<div id="submit-feedback">
  <section class="section">
    <div class="container">
      <h1 class="title">Submit Feedback</h1>
      <h2 class="subtitle">Select an employee in the list below to give a feedback</h2>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'SubmitFeedback',
  computed: {
    isLogged () {
      return this.$store.getters.isLoggedIn
    },
    user () {
      return this.$store.state.user
    }
  },
  created () {
    if (!this.isLogged) {
      this.$router.push('/login')
    }
  }
}
</script>