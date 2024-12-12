<template>
  <div>
    <Head title="Create Course" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('departmentHead.courses.index')">Courses</Link>
      <span class="font-medium text-indigo-400">/</span> Create
    </h1>
    <div class="overflow-hidden bg-white rounded-md shadow ">
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
              <li v-for="course in courses" :key="course.id" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
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
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Create Course</loading-button>
        </div>
      </form>
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

export default {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: 'form',
  props:{
    courses:Array,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: '',
        code:'',
        credit_hour: '',
        ETCS: '',
        prerequisites: [],


      }),
    }
  },
  methods: {
    async store() {
      await this.form.post(route('departmentHead.courses.store'),{
        onSuccess: () => {
          this.form.reset();
        }
      })
    },
  },
}
</script>
