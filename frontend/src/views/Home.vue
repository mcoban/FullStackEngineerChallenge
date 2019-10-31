<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <div class="notification">
          You have no assign for giving feedback
        </div>
        <h1 class="title">Welcome {{ user.fullName }}</h1>
        <h2 class="subtitle">
          You can view your feedback as and give feedback for other employeese
        </h2>
        <div class="table-container">
          <table class="table is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Overall Feedback</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
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