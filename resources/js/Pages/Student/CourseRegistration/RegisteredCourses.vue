<template>
  <div>
    <Head title="Course Registration" />




    <h1 class="mb-4 text-xl font-bold text-center">You have been registered to the following courses</h1>


    <div class="overflow-x-auto bg-white rounded-md shadow">
        <div class="flex items-center justify-between p-4 text-lg font-extrabold ">
     <p>Academic Year: {{ registeredCourses[0].semester.academic_year.name}}</p>
      <p>Semester : {{ registeredCourses[0].semester.name }}</p>
    </div>


      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">

          <th class="px-6 pt-6 pb-4">No</th>
          <th class="px-6 pt-6 pb-4">Course Name</th>
          <th class="px-6 pt-6 pb-4">Course code</th>
          <th class="px-6 pt-6 pb-4">ETCS</th>



        </tr>
        <tr v-for="(registeredCourse,index) in registeredCourses" :key="registeredCourse.id" class="hover:bg-gray-100 focus-within:bg-gray-100">

          <td class="border-t">
            <span class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ index+1 }}
            </span>
          </td>
          <td class="border-t">
            <span class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ registeredCourse.course.name}}


            </span>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ registeredCourse.course.code}}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ registeredCourse.course.ETCS }}
            </Link>
          </td>




          <td class="w-px border-t">
            <Link class="flex items-center px-4" href="#" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>

        <tr class="text-lg font-extrabold">
          <td class="px-6 py-4 text-center border-t" colspan="3">Total ETCS</td>
          <td class="px-6 py-4 border-t">{{ totalETCS }}</td>

        </tr>

        <tr v-if="registeredCourses.length === 0">
          <td class="px-6 py-4 border-t" colspan="4">No Course Allocation found.</td>
        </tr>
      </table>


    </div>

  </div>
</template>

<script>
import { Head } from "@inertiajs/vue3";
import StudentLayout from "../Shared/StudentLayout.vue";


export default {
  layout:StudentLayout,
  components: {
    Head,

  },
  props: {
    registeredCourses: Array,
  },
  data() {
    return {
      totalETCS: 0,
    }
  },
  methods:{
    getTotalETCS(){
      this.registeredCourses.forEach((course)=>{
        this.totalETCS += course.course.ETCS;
      })
    }
  },
  mounted(){
    this.getTotalETCS();
  }



};
</script>
