<template>
  <div>
    <Head title="Departments" />
    <h1 class="mb-8 text-3xl font-bold">Departments</h1>
    <div class="flex items-center justify-end mb-6">

      <Link class="btn-indigo" :href="route('admin.departments.create')">
        <span>Create</span>
        <span class="hidden md:inline">&nbsp;Departments</span>
      </Link>
    </div>
    <div class="overflow-x-auto bg-white rounded-md shadow">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="font-bold text-left">
            <th class="px-6 pt-6 pb-4">No</th>
            <th class="px-6 pt-6 pb-4">Name</th>
            <th class="px-6 pt-6 pb-4">Code</th>
            <!-- <th class="px-6 pt-6 pb-4" colspan="2">Phone</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(department ,index) in departments" :key="department.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t">
              <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('admin.departments.edit',department)">
                {{ index + 1 }}
                <icon v-if="department.deleted_at" name="trash" class="w-3 h-3 ml-2 shrink-0 fill-gray-400" />
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('admin.departments.edit',department)">
                {{ department.name }}
                <icon v-if="department.deleted_at" name="trash" class="w-3 h-3 ml-2 shrink-0 fill-gray-400" />
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="route('admin.departments.edit',department)" tabindex="-1">
                {{ department.code}}
              </Link>
            </td>
            <!-- <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="route('admin.departments.edit',department)" tabindex="-1">
                {{ organization.phone }}
              </Link>
            </td> -->
            <td class="w-px border-t">
              <Link class="flex items-center px-4" :href="route('admin.departments.edit',department)" tabindex="-1">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
              </Link>
            </td>
          </tr>
          <tr v-if="departments.length === 0">
            <td class="px-6 py-4 border-t" colspan="4">No Department found.</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import AdminLayout from '../Shared/AdminLayout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import Pagination from '@/Shared/Pagination.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'

export default {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter,
  },
  layout: AdminLayout,
  props: {
    departments:Object
  },
  data() {
    return {

    }
  },


}
</script>
