<template>
  <div class="h-screen overflow-y-auto">
    <div class="mb-4">
      <Link class="flex items-center px-4 py-3 pl-8 space-x-3 text-xl font-bold text-white rounded-md group" :class="{'bg-orange-400':isUrl('')}" href="/">
        <icon name="dashboard" class="w-4 h-4 mr-2 fill-white"  />
        <div>Dashboard</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center px-4 py-3 pl-8 space-x-3 text-xl font-bold text-white group" :class="{'bg-orange-400':isUrl('departmentHead/courses')}" :href="route('departmentHead.courses.index')">
        <icon name="dashboard" class="w-4 h-4 mr-2 fill-white"  />
        <div>Courses</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center px-4 py-3 pl-8 space-x-3 text-xl font-bold text-white group" :class="{'bg-orange-400':isUrl('departmentHead/batches')}" :href="route('departmentHead.batches.index')">
        <icon name="dashboard" class="w-4 h-4 mr-2 fill-white"  />
        <div>Batches</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center px-4 py-3 pl-8 space-x-3 text-xl font-bold text-white text-md group" :class="{'bg-orange-400':isUrl('departmentHead/allocation/create')}" :href="route('departmentHead.allocation.create')">
        <icon name="dashboard" class="w-4 h-4 mr-2 fill-white"  />
        <div>Course Allocate</div>
      </Link>
    </div>

    <div class="mb-4">
      <Link class="flex items-center px-4 py-3 pl-8 space-x-3 text-lg font-bold text-white group" :class="{'bg-orange-400':isUrl('departmentHead/assignTeacher/chooseSemester')}" :href="route('departmentHead.teacherAssignment.create')">
        <icon name="dashboard" class="w-4 h-4 mr-2 fill-white"  />
        <div>Assign Teacher</div>
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
      // console.log(currentUrl,urls[0]);
      if (urls[0] === '') {
        return currentUrl === ''
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length
    },
  },
}
</script>
