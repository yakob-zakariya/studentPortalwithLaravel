<template>
  <div>
    <Head title="Registrar Dashboard" />
    <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
    <p class="mb-8 leading-normal">Hey there! this is a dashboard for Registrar</p>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import RegistrarLayout from './Shared/RegistrarLayout.vue'

export default {
  components: {
    Head,
  },
  layout: RegistrarLayout
}
</script>
