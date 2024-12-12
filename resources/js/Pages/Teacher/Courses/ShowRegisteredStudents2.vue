<template>
  <div>
    <Head title="Courses" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('teachers.allocatedCourses',semester.id)">Allocated Courses</Link>
      <span class="font-medium text-indigo-400">/</span> Registered Students
    </h1>

    <div class="flex items-center justify-between my-4">
      <p class="font-bold ">
        Academic Year : {{ semester.academic_year.name }}
      </p>
      <p class="font-bold ">
        Semester : {{ semester.name }}
      </p>
      </div>

      <div class="flex items-center justify-between mb-8">
        <p class="font-bold ">
        Course : {{ course.name }}
      </p>

      <p class="font-bold ">
        Batch : {{ section.batch.name }}
      </p>

      <p class="font-bold ">
        section : {{ section.name }}
      </p>

    </div>
    <div class="flex items-center justify-between mb-6">
      <search-filter v-model="form.search" class="w-full max-w-md mr-4" @reset="reset">
      </search-filter>

      <!-- <Link class="btn-indigo" :href="route('departmentHead.courses.create')">
        <span>Create </span>
        <span class="hidden md:inline">&nbsp;Course</span>
      </Link> -->
    </div>

    <div class="overflow-x-auto bg-white rounded-md shadow">
      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">
          <th class="px-6 pt-6 pb-4">No</th>
          <th class="px-6 pt-6 pb-4">Student Name</th>
          <th class="px-6 pt-6 pb-4">Department</th>
          <th class="px-6 pt-6 pb-4">Batch</th>
          <th class="px-6 pt-6 pb-4">Fill Marks</th>



        </tr>
        <tr v-for="(registration,index) in registrations.data" :key="registration.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ index+1 }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ registration.student.user.first_name}}
              {{ registration.student.user.middle_name}}
              {{ registration.student.user.last_name}}

            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ registration.student.batch.department.name }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ registration.student.batch.name }}
            </Link>
          </td>

          <td class="w-px border-t">
            <Link v-if="!registration.assessment" class="flex items-center px-4" :href="route('teachers.fillMarks',registration.id)" tabindex="-1">
              Fill Marks
            </Link>
            <Link v-else class="flex items-center px-4" href="#" tabindex="-1">
              Edit Marks
            </Link>
          </td>


          <td class="w-px border-t">
            <Link class="flex items-center px-4" href="#" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="registrations.data.length === 0">
          <td class="px-6 py-4 border-t" colspan="4">No Sudent found.</td>
        </tr>
      </table>
    </div>
    <pagination class="mt-6" :links="registrations.links" />
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'

import TeacherLayout from "../Shared/TeacherLayout.vue";
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import SearchFilter from '@/Shared/SearchFilter.vue'
import pagination from "@/Shared/Pagination.vue"

export default {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter,
    TeacherLayout,
    pagination
  },
  layout:TeacherLayout ,
  props: {
    serach:String,
    // courses: Object,
    registrations:Array,
    semester:Object,
    section:Object,
    course:Object
  },
  data() {
    return {
      form: {
        search: this.search,

      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        console.log("is this running");
        this.$inertia.get(route('teachers.registeredStudents',{
          'courseId':this.course.id,
          'sectionId':this.section.id,
          'semesterId':this.semester.id,
        }), pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
  },
}
</script>
