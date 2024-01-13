<template>
  <div>
    <h1>Surveys</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/surveys')
</script>