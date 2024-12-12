<template>
  <div>
    <Head title="Course Registration" />




    <h1 class="mb-4 text-xl font-bold text-center" v-if="assignments.length >0">You have been Assigned  to the following courses and Sections</h1>





      <div class="overflow-x-auto bg-white rounded-md shadow">
        <div class="flex items-center justify-between p-4 text-lg font-extrabold ">
     <p>Academic Year: {{ semester.academic_year.name }}</p>
      <p>Semester : {{ semester.name }}</p>
    </div>
      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">
          <th class="px-6 pt-6 pb-4">No</th>
          <th class="px-6 pt-6 pb-4">Course Name</th>
          <th class="px-6 pt-6 pb-4">Course code</th>
          <th class="px-6 pt-6 pb-4">ETCS</th>
          <th class="px-6 pt-6 pb-4">Department</th>
          <th class="px-6 pt-6 pb-4">Batch</th>
          <th class="px-6 pt-6 pb-4">Section</th>
          <th class="px-6 pt-6 pb-4">Students</th>


        </tr>
        <tr v-for="(assignment,index) in assignments" :key="assignment.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ index+1 }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ assignment.course_allocation.course.name}}


            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ assignment.course_allocation.course.code }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ assignment.course_allocation.course.ETCS }}
            </Link>
          </td>

          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ assignment.section.batch.department.name }}
            </Link>
          </td>

          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ assignment.section.batch.name }}
            </Link>
          </td>

          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ assignment.section.name }}
            </Link>
          </td>
          <td class="border-t">



          <Link :href="route('teachers.registeredStudents',{
                courseId:assignment.course_allocation.course.id,
                sectionId:assignment.section.id,
                semesterId:semester.id
              })" class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-green-700 to-green-300">
              See Students
            </Link>
          </td>


          <td class="w-px border-t">
            <Link class="flex items-center px-4" href="#" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="assignments.length === 0">
          <td class="px-6 py-4 border-t" colspan="4">No Course Allocation found.</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import { Head,Link } from "@inertiajs/vue3";

import TeacherLayout from "../Shared/TeacherLayout.vue";



export default {
  layout:TeacherLayout,
  components: {
    Head,
    Link

  },
  props: {
    assignments: Array,
    semester:Object,
  },



};
</script>
