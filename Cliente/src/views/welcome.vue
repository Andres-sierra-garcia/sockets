<template>
    <q-page class="q-pa-md">
      <h2 style="color:black;">Bienvenido {{ name || 'Invitado' }}</h2>
    </q-page>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const name = ref('')
  
  onMounted(() => {
    const savedName = localStorage.getItem('name')
    name.value = savedName ? savedName : ''
  })
  </script>
  