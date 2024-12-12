<template>
  <div>
    <Head :title="`${batch.name}, ${batch.department.code}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('registrar.batches.index')">Batches</Link>
      <span class="font-medium text-indigo-400">/</span> {{ batch.name  }} of {{ batch.department.name }}
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.name" :error="form.errors.name" class="w-full pb-8 pr-6 lg:w-1/2" label="Batch Name" />

          <text-input v-model="form.year" :error="form.errors.year" class="w-full pb-8 pr-6 lg:w-1/2" label="Batch Year" />

          <select-input v-model="form.department_id" :error="form.errors.department_id" class="w-full pb-8 pr-6 lg:w-1/2" label="Department">
            <option :value="null" />
            <option v-for="department in departments" :key="department.id" :value="department.id">{{ department.name }}</option>
          </select-input>




        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Batch</loading-button>
        </div>
      </form>
    </div>

    <h2 class="mt-12 text-2xl font-bold">Students</h2>
    <div class="mt-6 overflow-x-auto bg-white rounded shadow">
      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">
          <th  class="px-6 pt-6 pb-4">No.</th>
          <th class="px-6 pt-6 pb-4">Name</th>
          <th class="px-6 pt-6 pb-4">Email</th>
        </tr>
        <tr v-for="(student,index) in students"  class="hover:bg-gray-100 focus-within:bg-gray-100">

          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
               {{ index + 1}}



            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" href="#">
              {{ student.user.first_name}}

            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" href="#" tabindex="-1">
              {{ student.user.email}}
            </Link>
          </td>



          <td class="w-px border-t">
            <Link class="flex items-center px-4" href="#" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="students.length == 0">
          <td class="px-6 py-4 border-t" colspan="4">No Student found.</td>
        </tr>
      </table>
      <div class="flex items-center justify-end px-8 py-4 mt-4 border-t border-gray-100 bg-gray-50">
        <Link class="btn-indigo" :href="route('registrar.students.create',)">
        <span>+ Add</span>
        <span class="hidden md:inline">&nbsp;Student</span>
      </Link>
        </div>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import RegistrarLayout from '../Shared/RegistrarLayout.vue'
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
  layout: RegistrarLayout,
  remember: 'form',
  props:{
    departments:Object,
    batch:Object,
    students:Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.batch.name,
        year:this.batch.year,
        department_id: this.batch.department_id,
      }),

    }
  },
  methods: {
    store() {
      this.form.put(route('registrar.batches.update',this.batch))
    },
  },



}
</script>
