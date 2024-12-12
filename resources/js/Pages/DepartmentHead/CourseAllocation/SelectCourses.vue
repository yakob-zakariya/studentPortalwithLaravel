<template>
  <div>
    <Head :title="`select courses for ${batch.name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <span class="text-indigo-400 hover:text-indigo-600">{{ batch.department.name }}</span>
      <span class="font-medium text-indigo-400">/</span> {{ batch.name }}
    </h1>



      <div class="flex items-center justify-between px-8 m-4">

        <p class="mb-4 font-semibold text-gray-900 dark:text-white">
          Academic Year : {{semester.academic_year.name}}
        </p>

        <p class="mb-4 font-semibold text-gray-900 dark:text-white">
          Semester: {{ semester.name }}
        </p>
      </div>
    <div class="max-w-5xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-6 -mr-6">
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Select courses </h3>
          <ul class="grid items-center w-full grid-cols-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li v-for="course in allCourses" :key="course.id" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
            <input
                type="checkbox"
                :id="'course-' + course.id"
                :value="course.id"
                v-model="form.selectedCourses"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            >
            <label :for="'course-' + course.id" class="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
                {{ course.name }} ({{course.code}})
            </label>
        </div>
    </li>
</ul>




          <div v-if="form.errors.selectedCourses" class="mt-4 text-lg font-bold text-red-500">
            {{ form.errors.selectedCourses }}
          </div>

          <div v-if="form.errors.prerequisites" class="mt-4 text-lg font-bold text-red-500">
            {{ form.errors.prerequisites }}
          </div>

          <div v-if="form.errors.ETCS" class="mt-4 text-lg font-bold text-red-500">
            {{ form.errors.ETCS }}
          </div>


        </div>


        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Allocate Courses</loading-button>
        </div>
      </form>
    </div>

    <div class="p-8">



      <h3 class="mb-4 font-semibold text-center text-gray-900 dark:text-white">Allocated Courses for {{ batch.name }} on semester: {{ semester.name }}  </h3>

      <div class="overflow-x-auto bg-white rounded-md shadow">
      <table class="w-full whitespace-nowrap">
      <tr class="font-bold text-left">
      <th class="px-6 pt-6 pb-4">No</th>
      <th class="px-6 pt-6 pb-4">Course Name</th>
      <th class="px-6 pt-6 pb-4">Course code</th>
      <th class="px-6 pt-6 pb-4">Credit Hour</th>
      <th class="px-6 pt-6 pb-4">ETCS</th>
      <th class="px-6 pt-6 pb-4">delete</th>

      </tr>
      <tr v-for="(allocatedCourse,index) in allocatedCourses" :key="allocatedCourse.course.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
      <td class="border-t">
        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.courses.edit',allocatedCourse.course)">
          <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
          {{ index+1 }}
        </Link>
      </td>
      <td class="border-t">
        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.courses.edit',allocatedCourse.course)">
          {{ allocatedCourse.course.name }}

        </Link>
      </td>
      <td class="border-t">
        <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',allocatedCourse.course)" tabindex="-1">
          {{ allocatedCourse.course.code }}
        </Link>
      </td>
      <td class="border-t">
        <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',allocatedCourse.course)" tabindex="-1">
          {{ allocatedCourse.course.credit_hour }}
        </Link>
      </td>

      <td class="border-t">
        <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',allocatedCourse.course)" tabindex="-1">
          {{ allocatedCourse.course.ETCS }}
        </Link>
      </td>
      <td class="w-px border-t">
        <form @submit.prevent="removeCourseAllocation(batch.id,allocatedCourse.course.id,semester.id)" class="flex items-center px-4" tabindex="-1">
          <button class="mr-4" title="Delete" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000" />
              <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000" />
            </svg>
          </button>
        </form>
      </td>
      </tr>
      <tr v-if="allocatedCourses.length === 0">
      <td class="px-6 py-4 border-t" colspan="4">No Course is Allocated </td>
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
    allCourses:Object,
    allocatedCourses:Object,
    batch:Object,
    semester:Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        selectedCourses: [],
        batch_id:this.batch.id,
        semester_id:this.semester.id,
      }),
      removeCourseAllocationForm:this.$inertia.form({
        batch_id:null,
        course_id:null,
        semester_id:null,
      })
    }
  },
  methods: {
    async store() {
      await this.form.post(route('departmentHead.allocatedCourses.store'),{
        onSuccess: () => {
          this.form.reset('selectedCourses')
        },
      })
    },
    removeCourseAllocation(batch_id,course_id,semester_id){
      this.removeCourseAllocationForm.batch_id=batch_id;
      this.removeCourseAllocationForm.course_id=course_id;
      this.removeCourseAllocationForm.semester_id = semester_id;
      this.removeCourseAllocationForm.post(route('departmentHead.allocatedCourse.remove'))
    }
  },
}
</script>
