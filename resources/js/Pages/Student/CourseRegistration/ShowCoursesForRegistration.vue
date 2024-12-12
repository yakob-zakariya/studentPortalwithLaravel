<template>
  <div>
    <Head title="Course Registration" />

    <h1 class="mb-4 text-3xl font-bold text-center">Course Registration</h1>

    <form @submit.prevent="submitForm">

      <div class="overflow-x-auto bg-white rounded-md shadow">
        <div class="flex items-center justify-between p-4 text-lg font-extrabold ">
     <p>Academic Year: {{ allocatedCourses[0].semester.academic_year.name}}</p>
      <p>Semester : {{ allocatedCourses[0].semester.name }}</p>
    </div>
    <div class="px-8 py-2">
      <p class="font-bold text-red-500 text-md" v-if="form.errors.selectedCourses">{{ form.errors.selectedCourses }}</p>
    </div>

      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">
          <th class="px-6 pt-6 pb-4"></th>
          <th class="px-6 pt-6 pb-4">No</th>
          <th class="px-6 pt-6 pb-4">Course Name</th>
          <th class="px-6 pt-6 pb-4">Course code</th>
          <th class="px-6 pt-6 pb-4">ETCS</th>



        </tr>
        <tr v-for="(allocatedCourse,index) in allocatedCourses" :key="allocatedCourse.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <span class="flex items-center px-6 py-4 focus:text-indigo-500">


            <input :id="allocatedCourse.course.id" v-model="form.selectedCourses" type="checkbox" class="hidden peer" :value="allocatedCourse.course.id" />
    <label :for="allocatedCourse.course.id"
      class="relative flex items-center justify-center w-6 h-6 p-1 overflow-hidden bg-green-500 border rounded-full cursor-pointer peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
        <path
          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
          data-name="7-Check" data-original="#000000" />
      </svg>
    </label>
  </span>

          </td>
          <td class="border-t">
            <span class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ index+1 }}
            </span>
          </td>
          <td class="border-t">
            <span class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ allocatedCourse.course.name}}


            </span>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ allocatedCourse.course.code}}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ allocatedCourse.course.ETCS }}
            </Link>
          </td>




          <td class="w-px border-t">
            <Link class="flex items-center px-4" href="#" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="allocatedCourses.length === 0">
          <td class="px-6 py-4 border-t" colspan="4">No Course Allocation found.</td>
        </tr>
      </table>

      <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Submit course Registration</loading-button>
        </div>
    </div>





    </form>
  </div>
</template>

<script>
import { Head } from "@inertiajs/vue3";
import StudentLayout from "../Shared/StudentLayout.vue";
import loadingButton from "@/Shared/LoadingButton.vue"

export default {
  layout:StudentLayout,
  components: {
    Head,
    loadingButton
  },
  props: {
    allocatedCourses: Array,
    semesterId:String,

  },
  data() {
    return {
      form:this.$inertia.form({
        selectedCourses:[],
        semesterId:this.semesterId

      })
    };
  },

  methods: {
    submitForm() {
      console.log('here')
      this.form.post(route('students.storeCourseRegistration'))

    },
  },
};
</script>
