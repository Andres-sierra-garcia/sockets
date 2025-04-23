<template>
  <q-page class="q-pa-md flex flex-center" style="height: 100vh;">
    <div class="login-card">
      <q-tab-panels v-model="panel" animated transition-prev="slide-right" transition-next="slide-left">

        <!-- Panel principal -->
        <q-tab-panel name="inicio">
          <h2 class="login-title">¡Bienvenido! Elige cómo entrar</h2>
          <div class="login-buttons">
            <q-btn label="Cliente" @click="panel = 'cliente'" />
            <q-btn label="Empleado" @click="panel = 'empleado'" />
          </div>
        </q-tab-panel>

        <!-- Panel para cliente -->
        <q-tab-panel name="cliente">
          <h2 class="login-title">Menú Cliente</h2>
          <div class="cliente-menu">
            <q-btn label="Volver" color="negative" @click="panel = 'inicio'" />
            <q-btn label="Pedir Turno" color="primary" />
            <q-btn label="Consultar Turno" color="primary" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="empleado">
          <h2 class="login-title">Menú Cliente</h2>
          <div class="empleado-menu">
            <q-input label="Nombre" v-model="nombre"></q-input>
            <q-btn label="Volver" color="negative" @click="panel = 'inicio'" />
            <q-btn label="Seguir" color="positive" to="/home" @click="saveName()" />
          </div>
        </q-tab-panel>

      </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const nombre = ref('')
const panel = ref('inicio')


function saveName() {
  localStorage.setItem('name', nombre.value)
}


</script>

<style scoped>
@import url(../styles/login.css);
</style>