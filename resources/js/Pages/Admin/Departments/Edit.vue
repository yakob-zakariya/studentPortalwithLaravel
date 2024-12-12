<template>
  <div>
    <Head :title=" `${form.name}, ${form.code}` " />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('admin.departments')">Departments</Link>
      <span class="font-medium text-indigo-400">/</span>{{ department.name }} ,{{ department.code }}
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.name" :error="form.errors.name" class="w-full pb-8 pr-6 lg:w-1/2" label="Department Name" />

          <text-input v-model="form.code" :error="form.errors.code" class="w-full pb-8 pr-6 lg:w-1/2" label="Department Code" />


        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Department</loading-button>
        </div>
      </form>
    </div>

    <h2 class="mt-12 text-2xl font-bold">Department Head</h2>
    <div class="mt-6 overflow-x-auto bg-white rounded shadow">
      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">
          <th class="px-6 pt-6 pb-4">Full Name</th>
          <th class="px-6 pt-6 pb-4">Email</th>
          <th class="px-6 pt-6 pb-4" >Phone</th>
        </tr>
        <tr v-if="department.departmentHead"  class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('admin.departmentHeads.edit',department.departmentHead.id)">
              {{ department.departmentHead.first_name }}
              {{ department.departmentHead.middle_name }}
              {{ department.departmentHead.last_name }}
              <icon v-if="department.departmentHead.deleted_at" name="trash" class="w-3 h-3 ml-2 shrink-0 fill-gray-400" />
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('admin.departmentHeads.edit',department.departmentHead.id)" tabindex="-1">
              {{ department.departmentHead.email}}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('admin.departmentHeads.edit',department.departmentHead.id)" tabindex="-1">
              +251900557087
            </Link>
          </td>
          <td class="w-px border-t">
            <Link class="flex items-center px-4" :href="route('admin.departmentHeads.edit',department.departmentHead.id)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-else>
          <td class="px-6 py-4 border-t" colspan="4">No Department Head found.</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import AdminLayout from '../Shared/AdminLayout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import icon from '@/Shared/Icon.vue'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon,
  },
  layout: AdminLayout,
  remember: 'form',
  props:{
    department:Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.department.name,
        code: this.department.code
      }),
    }
  },
  methods: {
    store() {
      this.form.put(route('admin.departments.update',this.department))
    },
  },
}
</script>
