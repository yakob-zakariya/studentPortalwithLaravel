<template>
  <div>
    <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('home')">
        <icon name="dashboard" class="w-4 h-4 mr-2" :class="isUrl('') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Dashboard</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('admin.registrars')">
        <icon name="office" class="w-4 h-4 mr-2" :class="isUrl('admin/registrars') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('admin/registrars') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Registrars</div>
      </Link>
    </div>
     <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('admin.departments')">
        <icon name="users" class="w-4 h-4 mr-2" :class="isUrl('admin/departments') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('admin/departments') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Departments</div>
      </Link>
    </div>

     <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('admin.departmentHeads.index')">
        <icon name="printer" class="w-4 h-4 mr-2" :class="isUrl('admin/departmentHeads') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('admin/departmentHeads') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Department Heads</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center py-3 group" :href="route('admin.teachers.index')">
        <icon name="office" class="w-4 h-4 mr-2" :class="isUrl('admin/teachers') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'" />
        <div :class="isUrl('admin/teachers') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Teachers</div>
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
