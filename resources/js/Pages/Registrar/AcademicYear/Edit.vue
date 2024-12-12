<template>
  <div>
    <Head :title="`${academicYear.name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('registrar.academicYears.index')">Academic Years</Link>
      <span class="font-medium text-indigo-400">/</span> Update
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.name" :error="form.errors.name" class="w-full pb-8 pr-6 lg:w-1/2" label="Academic Year  Name" />






        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Academic Year</loading-button>
        </div>
      </form>
    </div>

    <h2 class="mt-12 text-2xl font-bold">Semesters</h2>
    <div class="mt-6 overflow-x-auto bg-white rounded shadow">
      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">
          <th class="px-6 pt-6 pb-4">Semester </th>
          <th class="px-6 pt-6 pb-4">Acadmeic Year</th>
          <th class="px-6 pt-6 pb-4" >status</th>
        </tr>
        <tr v-for="semester in academicYear.semesters"  class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('registrar.semesters.edit',{academicYear,semester})">
              {{ semester.name}}
              <icon v-if="semester.deleted_at" name="trash" class="w-3 h-3 ml-2 shrink-0 fill-gray-400" />
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('registrar.semesters.edit',{academicYear,semester})" tabindex="-1">
              {{ academicYear.name}}
            </Link>
          </td>

          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('registrar.semesters.edit',{academicYear,semester})" tabindex="-1">
              <span v-if="semester.status">
                Active
              </span>
              <span v-else>
                Not Active
              </span>
            </Link>
          </td>

          <td class="w-px border-t">
            <Link class="flex items-center px-4" :href="route('registrar.semesters.edit',{academicYear,semester})" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="academicYear.semesters.length == 0">
          <td class="px-6 py-4 border-t" colspan="4">No Semester found.</td>
        </tr>
      </table>
      <div class="flex items-center justify-end px-8 py-4 mt-4 border-t border-gray-100 bg-gray-50">
        <Link class="btn-indigo" :href="route('registrar.semesters.create',academicYear)">
        <span>+ Add</span>
        <span class="hidden md:inline">&nbsp;Semester</span>
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
import icon from "@/Shared/Icon.vue"

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon,
  },
  layout: RegistrarLayout,
  remember: 'form',
  props:{
    academicYear:Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.academicYear.name

      }),
    }
  },
  methods: {
    store() {
      this.form.put(route('registrar.academicYears.update',this.academicYear))
    },
  },
}
</script>
