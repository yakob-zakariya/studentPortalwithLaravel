<template>
  <div>
    <Head title="Batches" />
    <h1 class="mb-4 text-3xl font-bold">Batches of {{ department.name }}</h1>
    <div class="overflow-x-auto bg-white rounded-md shadow">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="font-bold text-left">
            <th class="px-6 pt-6 pb-4">Batch Name</th>
            <th class="px-6 pt-6 pb-4">Year</th>
            <th class="px-6 pt-6 pb-4">status</th>
            <!-- <th class="px-6 pt-6 pb-4" colspan="2">Phone</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="batch in batches" :key="batch.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t">
              <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.batches.edit',batch)">
                {{ batch.name }}
                <icon v-if="department.deleted_at" name="trash" class="w-3 h-3 ml-2 shrink-0 fill-gray-400" />
              </Link>
            </td>

            <td class="border-t">
              <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.batches.edit',batch)">
                {{ batch.year}}
                <icon v-if="department.deleted_at" name="trash" class="w-3 h-3 ml-2 shrink-0 fill-gray-400" />
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="route('departmentHead.batches.edit',batch)" tabindex="-1">
                <span v-if="batch.active">
                  Active
                </span>
                <span v-else>
                  Not Acitve
                </span>

              </Link>
            </td>
            <!-- <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="route('admin.departments.edit',department)" tabindex="-1">
                {{ organization.phone }}
              </Link>
            </td> -->
            <td class="w-px border-t">
              <Link class="flex items-center px-4" :href="route('departmentHead.batches.edit',batch)" tabindex="-1">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
              </Link>
            </td>
          </tr>
          <tr v-if="batches.length === 0">
            <td class="px-6 py-4 border-t" colspan="4">No Batch found.</td>
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
import DepartmentHeadLayout from '../Shared/DepartmentHeadLayout.vue'
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
  layout: DepartmentHeadLayout,
  props: {
    batches:Object,
    department:Object
  },
  data() {
    return {

    }
  },


}
</script>
