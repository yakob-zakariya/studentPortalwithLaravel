<template>
  <div>
    <Head title="Department Head Dashboard" />
    <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
    <p class="mb-8 leading-normal">Hey there! this is a dashboard for departmentHead</p>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import DepartmentHeadLayout from './Shared/DepartmentHeadLayout.vue'

export default {
  components: {
    Head,
  },
  layout:DepartmentHeadLayout,
}
</script>
