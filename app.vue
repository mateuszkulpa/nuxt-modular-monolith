<template>
  <div>
    <h1>Nuxt modular monolith</h1>
    <ul>
      <li>
        <NuxtLink to="/users">
          users
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/surveys">
          surveys
        </NuxtLink>
      </li>
    </ul>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>