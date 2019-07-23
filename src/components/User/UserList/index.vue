<template>
  <div>
    <ul v-if="users" class="list-group">
      <li v-for="user in users" :key="user.id" class="list-group-item d-flex justify-content-between align-items-center">
        {{user.nick}}
        <button v-if="user.pivot.team_role_id===2" class="btn btn-warning btn-sm">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'UserList',
  props: ['users']
}
</script>
