<template>
  <div>
    <h1>Users</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/users')
</script>