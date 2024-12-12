<template>
  <div>
    <Head title="Course Registration" />




    <h1 class="mb-4 text-xl font-bold text-center">Grade Report</h1>


     <div class="mb-8 overflow-x-auto bg-white rounded-md shadow" v-for="(registrations,$semesterId) in groupedRegistrations">

      <template v-if="registrations.length > 0">
        <div class="flex items-center justify-between px-8 py-3 text-lg font-extrabold ">
         <p>Academic Year: {{ registrations[0].semester.academic_year.name}}</p>
         <p>Semester : {{ registrations[0].semester.name }}</p>
        </div>



       <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">

          <th class="px-6 pt-6 pb-4">No</th>
          <th class="px-6 pt-6 pb-4">Course Name</th>
          <th class="px-6 pt-6 pb-4">Course code</th>
          <th class="px-6 pt-6 pb-4">ETCS</th>
          <th class="px-6 pt-6 pb-4">Grade</th>



        </tr>
        <tr v-for="(registration,index) in registrations" :key="registration.id" class="hover:bg-gray-100 focus-within:bg-gray-100">

          <td class="border-t">
            <span class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">

              {{ index+1 }}
            </span>
          </td>
          <td class="border-t">
            <span class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">

              {{ registration.course.name}}


            </span>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ registration.course.code}}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ registration.course.ETCS }}
            </Link>
          </td>
           <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ registration.assessment.grade }}
            </Link>
          </td>




          <td class="w-px border-t">
            <Link class="flex items-center px-4" href="#" tabindex="-1">
              <!-- <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
                -->

                <span  @click="toggleModal" class="px-2 py-1 text-white bg-indigo-500 rounded-md">Assessment</span>

                <!-- <button @click="toggleModal">Show Assessment</button> -->

            <Modal
              :show="showModal"
              title="Assessment Details"
              @update:show="showModal = $event"
            >
              <div>
                <!-- Dynamic content for the modal -->
                <p>Assessment details for the course will go here.</p>
              </div>
              <template #footer>
                <button @click="toggleModal">Close</button>
              </template>
            </Modal>




            </Link>
          </td>
        </tr>



        <tr v-if="registrations.length === 0">
          <td class="px-6 py-4 border-t" colspan="4">No Course Allocation found.</td>
        </tr>
      </table>

      <div class="p-8 m-4 border border-gray-200 shadow-lg">
        <div class="grid grid-cols-2 text-lg font-extrabold">
          <p> SGP : {{registrations[0].semester.semester_registrations[0].grade_points}}</p>
          <p> SGPA : {{registrations[0].semester.semester_registrations[0].semester_gpa}}</p>
          <p> CGP : {{registrations[0].semester.semester_registrations[0].cumulative_grade_points}}</p>
          <p> CGPA :{{registrations[0].semester.semester_registrations[0].cumulative_gpa}} </p>

          <p class="col-span-2 mt-4">Academic Status: {{registrations[0].semester.semester_registrations[0].status}}</p>

        </div>

      </div>
    </template>


     </div>

  </div>
</template>

<script>
import { Head ,Link} from "@inertiajs/vue3";
import StudentLayout from "../Shared/StudentLayout.vue";
import icon from "@/Shared/Icon.vue"
import Dropdown from "@/Shared/Dropdown.vue"
import Modal from "@/Shared/Modal.vue"


export default {
  layout:StudentLayout,
  components: {
    Head,
    Link,
    icon,
    Dropdown,
    Modal,

  },
  props: {
    // registrations: Array,
    groupedRegistrations: Object,
  },
  data() {
    return {
      totalETCS: 0,
      showModal: false,
    }
  },
  methods:{
    getTotalETCS(){
      this.registeredCourses.forEach((course)=>{
        this.totalETCS += course.course.ETCS;
      })
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  mounted(){



  }



};
</script>
