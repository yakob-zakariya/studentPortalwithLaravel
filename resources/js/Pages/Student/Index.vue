<template>
  <div>
    <Head title="Teacher Dashboard" />
    <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
    <p class="mb-8 leading-normal">Hey there! this is a dashboard for student</p>

    <dropdown placement="top-left">
      <template #default>
        <button>drop down</button>
      </template>

      <template #dropdown>
        <div class="px-8 py-4 mt-2 bg-white rounded shadow-lg">
          <p>this content</p>
        </div>
      </template>
    </dropdown>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'

import StudentLayout from './Shared/StudentLayout.vue'

import dropdown from '@/Shared/Dropdown.vue'
export default {
  components: {
    Head,
    dropdown
  },
  layout: StudentLayout,
}
</script>
