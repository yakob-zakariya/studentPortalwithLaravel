<template>
  <div>
    <Head :title="`${batch.name} ${batch.department.name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('departmentHead.batches.index')">Batches</Link>
      <span class="font-medium text-indigo-400">/</span> {{ batch.name  }} of {{ batch.department.name }}
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.name" :error="form.errors.name" class="w-full pb-8 pr-6 lg:w-1/2" label="Batch Name" />
          <text-input v-model="form.year" :error="form.errors.year" class="w-full pb-8 pr-6 lg:w-1/2" label="Batch Year" />
        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Batch</loading-button>
        </div>
      </form>
    </div>

    <h2 class="mt-12 text-2xl font-bold">Sections</h2>
    <div class="mt-6 overflow-x-auto bg-white rounded shadow">
      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">
          <th  class="px-6 pt-6 pb-4">No.</th>
          <th class="px-6 pt-6 pb-4">Section</th>
          <th class="px-6 pt-6 pb-4">Year</th>

          <!-- <th class="px-6 pt-6 pb-4" >Students</th> -->
        </tr>
        <tr v-for="(section,index) in batch.sections"  class="hover:bg-gray-100 focus-within:bg-gray-100">

          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.sections.edit',{'section':section.id})">
               {{ index + 1}}
            </Link>
               </td>



          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('departmentHead.sections.edit',{'section':section.id})" tabindex="-1">
              {{ section.name}}
            </Link>
          </td>

          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('departmentHead.sections.edit',{'section':section.id})" tabindex="-1">
              {{ batch.year}}
            </Link>
          </td>


          <td class="w-px border-t">
            <Link class="flex items-center px-4" :href="route('departmentHead.sections.edit',{'section':section.id})" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="batch.sections.length == 0">
          <td class="px-6 py-4 border-t" colspan="4">No Section found.</td>
        </tr>
      </table>
      <div class="flex items-center justify-end px-8 py-4 mt-4 border-t border-gray-100 bg-gray-50">
        <Link class="btn-indigo" :href="route('departmentHead.sections.create',batch)">
        <span>+ Add</span>
        <span class="hidden md:inline">&nbsp;Section</span>
      </Link>
        </div>
    </div>

    <div class="flex items-center justify-between mt-16">
      <h2 class="text-2xl font-bold">Students</h2>

      <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
        <a class="btn-indigo" :href="route('departmentHead.export.batch_students',batch)" target="_blank">
        <span>Get xlsx</span>
        <span class="hidden md:inline">&nbsp;File of students </span>
      </a>
        </div>
    </div>
    <div class="overflow-x-auto bg-white rounded shadow">
      <table class="w-full whitespace-nowrap" id="paginatedTable">
        <tr class="font-bold text-left">
          <th  class="px-6 pt-6 pb-4">No.</th>
          <th class="px-6 pt-6 pb-4">Name</th>
          <th class="px-6 pt-6 pb-4">Email</th>
          <th class="px-6 pt-6 pb-4">Section</th>

        </tr>
        <tr v-for="(student,index) in students.data"  class="hover:bg-gray-100 focus-within:bg-gray-100">

          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.students.edit',student)">
               {{ index + 1}}



            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.students.edit',student)">
              {{ student.user.first_name}}

            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('departmentHead.students.edit',student)" tabindex="-1">
              {{ student.user.email}}
            </Link>
          </td>

          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('departmentHead.students.edit',student)" tabindex="-1">
              <span v-if="student.section_id">
                {{ student.section.name }}
              </span>
              <span v-else>
                Assign Section
              </span>
            </Link>
          </td>



          <td class="w-px border-t">
            <Link class="flex items-center px-4" :href="route('departmentHead.students.edit',student)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>


        </tr>
        <tr v-if="students.length == 0">
          <td class="px-6 py-4 border-t" colspan="4">No Student found.</td>
        </tr>
      </table>


    </div>
    <pagination class="mt-6" :links="students.links" />
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import DepartmentHeadLayout from '../Shared/DepartmentHeadLayout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import pagination from '@/Shared/Pagination.vue'
import icon from '@/Shared/Icon.vue'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    pagination,
    icon
  },
  layout: DepartmentHeadLayout,
  remember: 'form',
  props: {
    batch: Object,
    students: Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.batch.name,
        year: this.batch.year
      }),
    }
  },
  methods: {
    store() {
      this.form.put(route('departmentHead.batches.update', this.batch))
    },





  },

}
</script>


