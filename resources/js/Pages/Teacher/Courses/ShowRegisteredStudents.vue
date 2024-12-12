<template>
  <div>
    <Head title="Course Registration" />

    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('teachers.allocatedCourses',semester.id)">Allocated Courses</Link>
      <span class="font-medium text-indigo-400">/</span> Students
    </h1>








      <div class="overflow-x-auto font-[sans-serif] p-3">

        <div class="flex items-center justify-between p-2 px-4 text-lg font-extrabold bg-white">
         <p>Academic Year: {{ semester.academic_year.name }}</p>
        <p>Semester : {{ semester.name }}</p>
      </div>

      <div class="flex items-center justify-between p-2 text-lg font-extrabold bg-white">
        <h1 class="text-xl font-bold text-center bg-white "> Course:
      {{ course.name }}
    </h1>

    <h1 class="text-xl font-bold text-center bg-white "> Department:
      {{section.batch.department.name }}
    </h1>

    <h1 class="text-xl font-bold text-center bg-white "> Batch:
      {{section.batch.name }}
    </h1>

    <h1 class="text-xl font-bold text-center bg-white "> Section:
      {{ section.name }}
    </h1>
      </div>



        <table class="min-w-full bg-white" v-if="registrations.length >0">

          <thead class="text-xl font-extrabold whitespace-nowrap">
            <tr>
              <th class="p-4 text-left">No</th>
              <th class="p-4 text-left">Student Name</th>
              <th class="p-4 text-left">Department</th>
              <th class="p-4 text-left">Student Batch</th>





            </tr>
          </thead>

          <tbody class="whitespace-nowrap">
            <tr class="even:bg-blue-50" v-for="(registration, index) in registrations" :key="index">

              <td class="p-4 text-sm">{{ index + 1 }}</td>
              <td class="p-4 text-sm">
                {{ registration.student.user.first_name }}
                {{ registration.student.user.middle_name }}
                {{ registration.student.user.last_name }}
              </td>
              <td class="p-4 text-sm">
                {{ registration.student.batch.department.name }}
              </td>
              <td class="p-4 text-sm">
                {{ registration.student.batch.name }}
              </td>



            </tr>
          </tbody>
        </table>

        <p v-else class="p-3 text-lg font-bold text-center bg-white">
          No Students
        </p>


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
    registrations : Array,
    semester:Object,
    course:Object,
    section:Object
  },



};
</script>
