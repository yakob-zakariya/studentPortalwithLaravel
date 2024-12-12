<template>
  <div>
    <div class="mb-4">
      <Link class="flex items-center py-3 group" href="/">
        <icon name="dashboard" class="w-4 h-4 mr-2" :class="isUrl('') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Dashboard</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('registrar.batches.index')">
        <icon name="office" class="w-4 h-4 mr-2" :class="isUrl('registrar/batches') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('registrar/batches') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Batches</div>
      </Link>
    </div>
    <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('registrar.academicYears.index')">
        <icon name="users" class="w-4 h-4 mr-2" :class="isUrl('registrars/academicYears') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('registrar/academicYears') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Academic Years</div>
      </Link>
    </div>
     <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('registrar.students.create')">
        <icon name="printer" class="w-4 h-4 mr-2" :class="isUrl('registrar/students') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('registrar/students') ? 'text-white' : 'text-indigo-300 group-hover:text-white'"> Add Student</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('registrar.semester-grades.chooseSemester')">
        <icon name="printer" class="w-4 h-4 mr-2" :class="isUrl('registrar/semester-grades/chooseSemester') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('registrar/students') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Semester Gpa</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('registrar.semester-grades.chooseSemesterForStudent')">
        <icon name="printer" class="w-4 h-4 mr-2" :class="isUrl('registrar/semester-grades/chooseSemesterForStudent') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('registrar/students') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">GPA for Student</div>
      </Link>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'

export default {
  components: {
    Icon,
    Link,
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1)
      if (urls[0] === '') {
        return currentUrl === ''
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length
    },
  },
}
</script>
