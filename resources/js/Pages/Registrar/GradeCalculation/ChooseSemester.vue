<template>
  <div>
    <Head title="Choose Semester" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('home')">Home</Link>
      <span class="font-medium text-indigo-400">/</span> Choose Semster and Academic Year
    </h1>
    <div class="max-w-4xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-6 -mr-6">



          <!-- Select Academic Year -->
          <select-input v-model="form.academicYear_id" @change="fetchSemesters" :error="form.errors.academicYear_id" class="w-full pb-8 pr-6 lg:w-1/2" label="Select Academic Year">
            <option :value="null" />
            <option v-for="academicYear in academicYears" :key="academicYear.id" :value="academicYear.id">{{ academicYear.name }}</option>
          </select-input>

          <!-- Select Semester -->
          <select-input v-model="form.semester_id" :error="form.errors.semester_id" class="w-full pb-8 pr-6 lg:w-1/2" label="Select Semester">
            <option :value="null" />
            <option v-for="semester in semesters" :key="semester.id" :value="semester.id">{{ semester.name }}</option>
          </select-input>

        </div>

        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Choose Semester</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'


import RegistrarLayout from "../Shared/RegistrarLayout.vue"

import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import axios from 'axios'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    RegistrarLayout
  },
  layout: RegistrarLayout,
  remember: 'form',
  props: {
    academicYears: Array,

  },
  data() {
    return {
      form: this.$inertia.form({
        academicYear_id: null,
        semester_id: null,
      }),
      semesters: [], // Local state to store semesters based on selected academic year
    }
  },
  methods: {
    async fetchSemesters() {
      if (this.form.academicYear_id) {
        try {
          const response = await axios.get(route('registrar.getSemesters',this.form.academicYear_id));
          this.semesters = response.data; // Update semesters with data from API
          this.form.semester_id = null; // Reset selected semester when academic year changes
        } catch (error) {
          console.error('Error fetching semesters:', error);
        }
      } else {
        this.semesters = [];
      }
    },
    store() {
      this.form.post(route('registrar.semester-grades.calculateGrade'))
    },
  },
}
</script>
