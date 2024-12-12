<template>
  <div>
    <Head :title="`select courses for ${section.batch.name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <span class="text-indigo-400 hover:text-indigo-600">allocated courses</span>
      <span class="font-medium text-indigo-400">/</span> {{section.batch.name}} Section: {{ section.name }}
    </h1>



      <div class="flex items-center justify-between px-8 m-4">

        <p class="mb-4 font-semibold text-gray-900 dark:text-white">
          Academic Year : {{semester.academic_year.name}}
        </p>

        <p class="mb-4 font-semibold text-gray-900 dark:text-white">
          Semester: {{ semester.name }}
        </p>
      </div>


    <div class="p-3">





      <div class="overflow-x-auto bg-white rounded-md shadow">
      <table class="w-full whitespace-nowrap">
      <tr class="font-bold text-left">
      <th class="px-6 pt-6 pb-4">No</th>
      <th class="px-6 pt-6 pb-4">Course Name</th>
      <th class="px-6 pt-6 pb-4">Course code</th>
      <th class="px-6 pt-6 pb-4">Credit Hour</th>
      <th class="px-6 pt-6 pb-4">ETCS</th>
      <th class="px-6 pt-6 pb-4">Assign teacher / Assigned teacher</th>

      </tr>
      <tr v-for="(allocatedCourse,index) in allocatedCourses" :key="allocatedCourse.course.id" class="hover:bg-gray-100 focus-within:bg-gray-100">




      <td class="border-t">
        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
          <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
          {{ index+1 }}
        </Link>
      </td>
      <td class="border-t">
        <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
          {{ allocatedCourse.course.name}}

        </Link>
      </td>
      <td class="border-t">
        <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
          {{ allocatedCourse.course.code }}
        </Link>
      </td>
      <td class="border-t">
        <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
          {{ allocatedCourse.course.credit_hour }}
        </Link>
      </td>

      <td class="border-t">
        <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
          {{ allocatedCourse.course.ETCS }}
        </Link>
      </td>
      <td class="w-px border-t">
        <form v-if="allocatedCourse.teacher_course_section_assignments.length == 0" @submit.prevent="store(allocatedCourse.id)">
          <button class="flex items-center px-4" tabindex="-1" type="submit">

            <button class="flex items-center" title="Assign Teacher">

            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
              viewBox="0 0 348.882 348.882">
              <path
                d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                data-original="#000000" />
              <path
                d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                data-original="#000000" />
            </svg>

            <span class="ml-4">
                Assign Teacher
              </span>
            </button>
          </button>
        </form>
        <form @submit.prevent="update(allocatedCourse.teacher_course_section_assignments[0].id)"  v-else>

        <button class="flex items-center justify-between px-4" tabindex="-1" type="submit">

          <span class="mr-3">

            {{ allocatedCourse.teacher_course_section_assignments[0].teacher.user.first_name + " " }}
            {{ allocatedCourse.teacher_course_section_assignments[0].teacher.user.middle_name + " " }}
            {{ allocatedCourse.teacher_course_section_assignments[0].teacher.user.last_name + " " }}
          </span>

          <button class="mr-4" title="Assign Other teacher">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700"
                  viewBox="0 0 348.882 348.882">
                  <path
                    d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                    data-original="#000000" />
                  <path
                    d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                    data-original="#000000" />
                </svg>
          </button>
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

    allocatedCourses:Object,
    section:Object,
    semester:Object,
  },
  data() {
    return {
      createForm: this.$inertia.form({
        section_id:this.section.id,
        semester_id: this.semester.id,
      }),
      updateForm: this.$inertia.form({


      }),
    }
  },
  methods: {
    store(allocation_id) {

      this.createForm.post(route('departmentHead.selectCourse.courses',{
        'allocation_id':allocation_id,
      }))
    },
    update(assignment_id) {
      this.updateForm.assignment_id = assignment_id

      this.updateForm.post(route('departmentHead.selectCourse.teacherAssignmentUpdate',{
        "assignment_id":assignment_id
      }))
    },
  },
}
</script>
