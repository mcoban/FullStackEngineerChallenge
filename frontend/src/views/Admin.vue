<template>
<div id="admin">
  <section class="section">
    <div class="container">
      <h1 class="title">Welcome Admin</h1>
      <div class="tabs">
        <ul>
          <li @click="showUsers" :class="{ 'is-active': activeSection == 'users' }"><a>Users</a></li>
          <li @click="showReviews" :class="{ 'is-active': activeSection == 'reviews' }"><a>Reviews</a></li>
          <li @click="showAssignments" :class="{ 'is-active': activeSection == 'assignments' }"><a>Assignments</a></li>
        </ul>
      </div>
      <div class="pages">
        <div v-if="activeSection == 'users'" class="users">
          <span v-if="loading == true" class="loading">Please wait..</span>
          <div v-if="users" class="table-container">
            <table class="table is-fullwidth">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Is Admin</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, i) in users" :key="'user' + i">
                  <td>{{ i + 1 }}</td>
                  <td>{{ user.fullName }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.isAdmin }}</td>
                  <td>
                    <a @click="deleteUser(user._id)" href="#">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="activeSection == 'reviews'" class="reviews">
          <span v-if="loading == true" class="loading">Please wait..</span>
          
        </div>
        <div v-if="activeSection == 'assignments'" class="assignments">Assignments</div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'admin',
  data () {
    return {
      loading: false,
      users: null,
      activeSection: 'users'
    }
  },
  computed: {
    isAdmin () {
      return this.$store.getters.isAdmin
    }
  },
  methods: {
    showUsers () {
      this.activeSection = 'users'
      this.loading = true
      axios(`http://localhost:3000/employee/all`)
        .then(res => {
          this.users = res.data.users
          this.loading = false
        })
    },
    deleteUser (id) {
      axios.delete(`http://localhost:3000/employee/${id}`)
      this.$router.push('/admin')
    },
    showReviews () {
      this.activeSection = 'reviews'
      axios(`http://localhost:3000/reviews/all`)
        .then(res => {
          this.users = res.data.users
          this.loading = false
        })
    },
    showAssignments () {
      this.activeSection = 'assignments'
    },
  },
  created () {
    if (!this.isAdmin) {
      this.$router.push('/')
    }
    this.showUsers()
  }
}
</script>