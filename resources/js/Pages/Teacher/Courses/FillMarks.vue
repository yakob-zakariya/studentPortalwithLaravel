<template>
  <div>
    <Head title="Create Course" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('teachers.registeredStudents',{
        courseId:course.id,
        sectionId:section.id,
        semesterId:semester.id
      })">Registered Students</Link>
      <span class="font-medium text-indigo-400">/</span> Fill Marks
    </h1>
    <div class="max-w-4xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="grid grid-cols-3 pt-8 pl-4 text-lg gap-y-4 md:gap-x-8">
          <p>Student :
            <span class="font-extrabold">
              {{ student.user.first_name }}
              {{ student.user.middle_name }}
              <!-- {{ student.user.last_name }} -->
            </span>

            </p>
            <p>Department :
              <span class="font-extrabold">
                {{ section.batch.department.name}}
              </span>

            </p>
            <p>Batch :
              <span class="font-extrabold">

                {{ section.batch.name}}
              </span>
            </p>

            <p>Section :
              <span class="font-extrabold">
                {{ section.name}}

              </span>
            </p>
            <p>Academic Year :
              <span class="font-bold">

                {{ semester.academic_year.name }}
              </span>
            </p>
            <p>Semester:
              <span class="font-bold">

                {{ semester.name}}
              </span>
            </p>

        </div>

        <div class="flex flex-wrap p-8 -mb-6 -mr-6">


          <text-input v-model="form.continous_assessment" :error="form.errors.continous_assessment" class="w-full pb-8 pr-6 lg:w-1/2" type="number" label="Continous Assesment" />

          <text-input v-model="form.mid_exam" :error="form.errors.mid_exam"  type="number" class="w-full pb-8 pr-6 lg:w-1/2" label="Mid Exam" />


          <text-input type="number" v-model="form.final_exam" :error="form.errors.final_exam" class="w-full pb-8 pr-6 lg:w-1/2" label="Final Exam" />

        </div>



        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Submit mark</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import TeacherLayout from "../Shared/TeacherLayout.vue";
import FileInput from '@/Shared/FileInput.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TeacherLayout
  },
  layout: TeacherLayout,
  remember: 'form',
  props:{
    course:Object,
    section:Object,
    semester:Object,
    student:Object,
    registrationId:Number

  },
  data() {
    return {
      form: this.$inertia.form({
        continous_assessment: '',
        mid_exam:'',
        final_exam:'',




      }),
    }
  },
  methods: {
    store() {
      this.form.post(route('teachers.submitMarks',this.registrationId))
    },
  },
}
</script>
