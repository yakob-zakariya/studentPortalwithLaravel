<template>
  <div>
    <Head title="View Student" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('departmentHead.batches.edit', student.batch)">Batch</Link>
      <span class="font-medium text-indigo-400">/</span> Student View
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input
            v-model="form.first_name"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="First Name"
            readonly
          />

          <text-input
            v-model="form.middle_name"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="Middle Name"
            readonly
          />

          <text-input
            v-model="form.last_name"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="Last Name"
            readonly
          />

          <text-input
            type="email"
            v-model="form.email"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="Email Address"
            readonly
          />

          <select-input
            v-model="form.batch_id"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="Batch"
            disabled
          >
            <option :value="null" />
            <option v-for="batch in batches" :key="batch.id" :value="batch.id">
              {{ batch.name }} of {{ batch.department.name }}
            </option>
          </select-input>

          <select-input
            v-model="form.section_id"
            :error="form.errors.section_id"
            class="w-full pb-8 pr-6 lg:w-1/2"
            label="Section"
          >
            <option :value="null" />
            <option v-for="section in sections" :key="section.id" :value="section.id">
              {{ section.name }}
            </option>
          </select-input>
        </div>

        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Assign Section</loading-button>
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
import icon from '@/Shared/Icon.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    Link,
    SelectInput,
    TextInput,
    icon,
    DepartmentHeadLayout,
    LoadingButton,
  },
  layout: DepartmentHeadLayout,
  props: {
    batches: Array,
    student: Object,
    sections: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        first_name: this.student.user.first_name,
        middle_name: this.student.user.middle_name,
        last_name: this.student.user.last_name,
        email: this.student.user.email,
        batch_id: this.student.batch_id,
        section_id: this.student.section_id || null,  // Set initial value to student's current section if available
      }),
    }
  },
  methods: {
    store() {
      this.form.post(route('departmentHead.students.assignSection', this.student))
    },
  },
}
</script>
