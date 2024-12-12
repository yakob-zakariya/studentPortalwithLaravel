<template>
  <div>
    <Head :title="`${course.name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('departmentHead.courses.index')">Courses</Link>
      <span class="font-medium text-indigo-400">/</span> Update
    </h1>
    <div class="w-full overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-6 -mr-6">
          <text-input v-model="form.name" :error="form.errors.name" class="w-full pb-8 pr-6 lg:w-1/2" label="Course Name" />
          <text-input v-model="form.code" :error="form.errors.code" class="w-full pb-8 pr-6 lg:w-1/2" label="Course Code" />

          <text-input type="number" v-model="form.credit_hour" :error="form.errors.credit_hour" class="w-full pb-8 pr-6 lg:w-1/2" label="Credit Hour" />

          <text-input type="number" v-model="form.ETCS" :error="form.errors.ETCS" class="w-full pb-8 pr-6 lg:w-1/2" label="ETCS" />
        </div>

        <div class="p-8 pt-0">

<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Select Prerequisites courses if any</h3>
<ul class="grid items-center w-full grid-cols-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li v-for="course in allCourses" :key="course.id" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input
                type="checkbox"
                :id="'course-' + course.id"
                :value="course.id"
                v-model="form.prerequisites"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            >
            <label :for="'course-' + course.id" class="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
                {{ course.name }} ({{course.code}})
            </label>
        </div>
    </li>
</ul>




</div>







        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Course</loading-button>
        </div>
      </form>
    </div>

    <div class="p-8">

<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Prerequisite Courses</h3>
<div class="overflow-x-auto bg-white rounded-md shadow">
<table class="w-full whitespace-nowrap">
<tr class="font-bold text-left">
<th class="px-6 pt-6 pb-4">No</th>
<th class="px-6 pt-6 pb-4">Course Name</th>
<th class="px-6 pt-6 pb-4">Course code</th>
<th class="px-6 pt-6 pb-4">Credit Hour</th>
<th class="px-6 pt-6 pb-4">ETCS</th>
<th class="px-6 pt-6 pb-4">Delete Prerequsites</th>

</tr>
<tr v-for="(prerequisite,index) in course.prerequisites" :key="prerequisite.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
<td class="border-t">
  <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.courses.edit',prerequisite)">
    <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
    {{ index+1 }}
  </Link>
</td>
<td class="border-t">
  <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.courses.edit',prerequisite)">
    <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
    {{ prerequisite.name}}

  </Link>
</td>
<td class="border-t">
  <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',prerequisite)" tabindex="-1">
    {{ prerequisite.code }}
  </Link>
</td>
<td class="border-t">
  <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',prerequisite)" tabindex="-1">
    {{ prerequisite.credit_hour }}
  </Link>
</td>

<td class="border-t">
  <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',prerequisite)" tabindex="-1">
    {{ prerequisite.ETCS }}
  </Link>
</td>
<td class="w-px border-t">
  <Link class="flex items-center px-4" :href="route('departmentHead.courses.detachPrerequisites',{'course':course,'prerequisiteCourse':prerequisite})" tabindex="-1">
    <button class="mr-4" title="Delete">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
        <path
          d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
          data-original="#000000" />
        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
          data-original="#000000" />
      </svg>
    </button>
  </Link>
</td>
</tr>
<tr v-if="course.prerequisites.length === 0">
<td class="px-6 py-4 border-t" colspan="4">No Prerequiste found.</td>
</tr>
</table>
</div>

</div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import DepartmentHeadLayout from '../Shared/DepartmentHeadLayout.vue'
import FileInput from '@/Shared/FileInput.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import icon from "@/Shared/Icon.vue"

export default {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: 'form',
  props:{
    course:Object,
    allCourses:Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.course.name,
        code:this.course.code,
        credit_hour: this.course.credit_hour,
        ETCS: this.course.ETCS,
        prerequisites: [],


      }),
    }
  },
  methods: {
    async store() {
      await this.form.put(route('departmentHead.courses.update',this.course),{
        onSuccess:() =>{
          this.form.reset('prerequisites');
        }
      })
    },
  },
}
</script>
