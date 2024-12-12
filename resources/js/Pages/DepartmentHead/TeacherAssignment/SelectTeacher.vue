<template>
  <div>
    <Head title="select teacher" />
    <h1 class="mb-4 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('departmentHead.selectCourses.sections.semesters',{'section':section,'semester':course_allocation.semester})">Select Courses</Link>
      <span class="font-medium text-indigo-400"></span> / Assign Teacher for
    </h1>
    <div class="flex flex-col max-w-2xl px-2 mb-8 space-y-4 text-lg font-extrabold ">

      <div class="flex items-center justify-between">
      <p>Academic Year : {{ course_allocation.semester.academic_year.name }}</p>
      <p>Semester : {{ course_allocation.semester.name }}</p>
      </div>

      <div class="flex items-center justify-between">
        <p>Course : {{ course_allocation.course.name  }}</p>
        <p> Section: {{ section.name }}</p>

      </div>
    </div>


    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <select-input
            v-model="form.teacher_id"
            :error="form.errors.teacher_id"
            class="w-full pb-8 pr-6 "
            label="Teacher"
          >
            <option :value="null" />
            <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id">
              {{ teacher.user.first_name }}
              {{ teacher.user.middle_name }}
              {{ teacher.user.last_name }}
            </option>
          </select-input>
        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Assign Teacher</loading-button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import DepartmentHeadLayout from '../Shared/DepartmentHeadLayout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
  },
  layout: DepartmentHeadLayout,
  remember: 'form',
  props:{
    teachers:Object,
    section:Object,
    course_allocation:Object,

  },
  data() {
    return {
      form: this.$inertia.form({
        teacher_id: null,
        allocation_id:this.course_allocation.id,
        section_id:this.section.id

      }),
    }
  },
  methods: {
    store() {
      this.form.post(route('departmentHead.storeSelectedTeacher'))
    },
  },
}
</script>
