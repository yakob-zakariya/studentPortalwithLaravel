<template>
  <div @keyup.esc="toggleMyModal">
    <Head title="Course Registration" />

    <h1 class="mb-4 text-xl font-bold text-center">Grade Report</h1>

    <div class="mb-8 overflow-x-auto bg-white rounded-md shadow" v-for="(registrations, $semesterId) in groupedRegistrations" :key="$semesterId">

      <template v-if="registrations.length > 0">
        <div class="flex items-center justify-between px-8 py-3 text-lg font-extrabold">
          <p>Academic Year: {{ registrations[0].semester.academic_year.name }}</p>
          <p>Semester : {{ registrations[0].semester.name }}</p>
        </div>

        <table class="w-full whitespace-nowrap">
          <tr class="font-bold text-left">
            <th class="px-6 pt-6 pb-4">No</th>
            <th class="px-6 pt-6 pb-4">Course Name</th>
            <th class="px-6 pt-6 pb-4">Course code</th>
            <th class="px-6 pt-6 pb-4">ETCS</th>
            <th class="px-6 pt-6 pb-4">Grade</th>
            <th class="px-6 pt-6 pb-4">Assessment</th>
          </tr>
          <tr v-for="(registration, index) in registrations" :key="registration.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t">
              <span class="flex items-center px-6 py-4">{{ index + 1 }}</span>
            </td>
            <td class="border-t">
              <span class="flex items-center px-6 py-4">{{ registration.course.name }}</span>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
                {{ registration.course.code }}
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
              <button @click="toggleMyModal(registration.course.name,registration.assessment)" class="px-3 py-2 text-white bg-blue-900">
                Assesment
              </button>
              <!-- <button  @click="toggleModal(registration.course.name,registration.assessment)" class="px-3 py-2 text-white bg-indigo-500 rounded-md cursor-pointer">Assessment</button> -->
            </td>
          </tr>

          <tr v-if="registrations.length === 0">
            <td class="px-6 py-4 border-t" colspan="4">No Course Allocation found.</td>
          </tr>
        </table>

        <div class="p-8 m-4 border border-gray-200 shadow-lg">
          <div class="grid grid-cols-2 text-lg font-extrabold">
            <p>SGP: {{ registrations[0].semester.semester_registrations[0].grade_points }}</p>
            <p>SGPA: {{ registrations[0].semester.semester_registrations[0].semester_gpa }}</p>
            <p>CGP: {{ registrations[0].semester.semester_registrations[0].cumulative_grade_points }}</p>
            <p>CGPA: {{ registrations[0].semester.semester_registrations[0].cumulative_gpa }}</p>
            <p class="col-span-2 mt-4">Academic Status: {{ registrations[0].semester.semester_registrations[0].status }}</p>
          </div>
        </div>
      </template>
    </div>

    <!-- My Modal Component -->
     <my-modal @close-modal="toggleMyModal" :show="showMyModal" :title="assessment.course">



        <div class="overflow-x-auto font-sans">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100 whitespace-nowrap">
          <tr>
            <th class="px-4 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">
              No.
            </th>
            <th class="px-4 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">
              Assessment Type
            </th>
            <th class="px-4 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">
              Score
            </th>

          </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
          <tr>
            <td class="px-4 py-4 text-gray-800 text-md">
             1
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              Continous Assement
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              {{this.assessment.continous_assessment}}/20
            </td>
          </tr>

          <tr>
            <td class="px-4 py-4 text-gray-800 text-md">
             2
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              Mid Assement
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              {{this.assessment.mid_exam}}/30
            </td>
          </tr>

          <tr>
            <td class="px-4 py-4 text-gray-800 text-md ">
             3
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md ">
              Final Exam
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              {{this.assessment.final_exam}}/50
            </td>
          </tr>
          <tr>

            <td colspan="2" class="px-4 py-4 text-lg font-bold text-gray-800">
              Total
            </td>
            <td class="px-4 py-4 text-lg font-bold text-gray-800">
              {{this.assessment.total}}/100
            </td>
          </tr>

          <tr>

          <td colspan="2" class="px-4 py-4 text-lg font-bold text-gray-800">
            Grade
          </td>
          <td class="px-4 py-4 text-lg font-bold text-gray-800">
            {{this.assessment.grade}}
          </td>
          </tr>


        </tbody>
      </table>

       </div>


      <template #footer>
        <div class="flex items-center justify-end">

          <button @click="toggleMyModal" class="px-4 py-2 text-white bg-gray-500 rounded-md">Close</button>
        </div>
      </template>
     </my-modal>

    <!-- Modal Component -->
    <Modal v-model:show="showModal" :title="assessment.course">

        <div class="overflow-x-auto font-sans">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-100 whitespace-nowrap">
          <tr>
            <th class="px-4 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">
              No.
            </th>
            <th class="px-4 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">
              Assessment Type
            </th>
            <th class="px-4 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase">
              Score
            </th>

          </tr>
        </thead>

        <tbody class="bg-white divide-y divide-gray-200 whitespace-nowrap">
          <tr>
            <td class="px-4 py-4 text-gray-800 text-md">
             1
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              Continous Assement
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              {{this.assessment.continous_assessment}}/20
            </td>
          </tr>

          <tr>
            <td class="px-4 py-4 text-gray-800 text-md">
             2
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              Mid Assement
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              {{this.assessment.mid_exam}}/30
            </td>
          </tr>

          <tr>
            <td class="px-4 py-4 text-gray-800 text-md ">
             3
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md ">
              Final Exam
            </td>
            <td class="px-4 py-4 font-extrabold text-gray-800 text-md">
              {{this.assessment.final_exam}}/50
            </td>
          </tr>
          <tr>

            <td colspan="2" class="px-4 py-4 text-lg font-bold text-gray-800">
              Total
            </td>
            <td class="px-4 py-4 text-lg font-bold text-gray-800">
              {{this.assessment.total}}/100
            </td>
          </tr>

          <tr>

          <td colspan="2" class="px-4 py-4 text-lg font-bold text-gray-800">
            Grade
          </td>
          <td class="px-4 py-4 text-lg font-bold text-gray-800">
            {{this.assessment.grade}}
          </td>
          </tr>


        </tbody>
      </table>

       </div>

      <template #footer>
        <button @click="toggleModal" class="px-4 py-2 text-white bg-gray-500 rounded-md">Close</button>
      </template>
    </Modal>
  </div>
</template>



<script>
import { Head, Link } from "@inertiajs/vue3";
import StudentLayout from "../Shared/StudentLayout.vue";
import Modal from "@/Shared/Modal.vue";
import MyModal from "@/Shared/MyModal.vue";

export default {
  layout: StudentLayout,
  components: {
    Head,
    Link,
    Modal,
    MyModal
  },
  props: {
    groupedRegistrations: Object,
  },
  data() {
    return {
      assessment:{
        course:'',
        continous_assessment:0,
        mid_exam:0,
        final_exam:0,
        total:0,
        grade:'',
      },
      showModal: false,
      showMyModal:false,
    };
  },
  methods: {
    toggleMyModal(course="",ass={}){

      this.assessment.course = course;
      this.assessment.continous_assessment = ass.continous_assessment;
      this.assessment.mid_exam = ass.mid_exam;
      this.assessment.final_exam = ass.final_exam;
      this.assessment.total = this.assessment.continous_assessment + this.assessment.mid_exam + this.assessment.final_exam;
      this.assessment.grade = ass.grade;

      this.showMyModal = !this.showMyModal;
    },
    toggleModal(course = '',ass = {}) {
      console.log(course);
      console.log(ass);
      this.assessment.course = course;
      this.assessment.continous_assessment = ass.continous_assessment;
      this.assessment.mid_exam = ass.mid_exam;
      this.assessment.final_exam = ass.final_exam;
      this.assessment.total = this.assessment.continous_assessment + this.assessment.mid_exam + this.assessment.final_exam;
      this.assessment.grade = ass.grade;


      this.showModal = !this.showModal;
    },
  },
};
</script>
