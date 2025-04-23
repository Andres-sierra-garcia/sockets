<template>
    <q-layout>
        <q-header>
            <q-toolbar>
                <q-btn @click="drawer = !drawer" icon="menu"></q-btn>
                <h4>Programa de colas</h4>
                <q-space />
                <q-btn icon="login" to="/">salir</q-btn>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above bordered>
            <q-list>

                <q-item clickable v-ripple routerLink to="/home">
                    <q-item-section avatar>
                        <q-icon name="home"></q-icon>
                    </q-item-section>
                    <q-item-section>home</q-item-section>
                </q-item>

                <q-item clickable v-ripple to="/home/attention">
                    <q-item-section avatar>
                        <q-icon name="visibility"></q-icon>
                    </q-item-section>
                    <q-item-section>Atencion...</q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container class="q-pa-md">
            <router-view/>
        </q-page-container>

    </q-layout>
</template>
<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>