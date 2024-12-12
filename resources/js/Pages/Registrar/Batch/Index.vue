<template>
  <div>
    <Head title="Batches" />
    <h1 class="mb-8 text-3xl font-bold">Batches</h1>
    <div class="flex items-center justify-end mb-6">

      <Link class="btn-indigo" :href="route('registrar.batches.create')">
        <span>Create</span>
        <span class="hidden md:inline">&nbsp;Batch</span>
      </Link>
    </div>
    <div class="overflow-x-auto bg-white rounded-md shadow">
      <table class="w-full whitespace-nowrap">
        <thead>
          <tr class="font-bold text-left">
            <th class="px-6 pt-6 pb-4">Name</th>
            <th class="px-6 pt-6 pb-4">Year</th>
            <th class="px-6 pt-6 pb-4" colspan="2">department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="batch in batches" :key="batch.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t">
              <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('registrar.batches.edit',batch)">
                {{ batch.name }}
                <icon v-if="batch.deleted_at" name="trash" class="w-3 h-3 ml-2 shrink-0 fill-gray-400" />
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="route('registrar.batches.edit',batch)" tabindex="-1">
                {{ batch.year}}
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="route('registrar.batches.edit',batch)" tabindex="-1">
                {{ batch.department.name }}
              </Link>
            </td>
            <td class="w-px border-t">
              <Link class="flex items-center px-4" :href="route('registrar.batches.edit',batch)" tabindex="-1">
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
import RegistrarLayout from '../Shared/RegistrarLayout.vue'
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
  layout: RegistrarLayout,
  props: {
    batches:Object
  },
  data() {
    return {

    }
  },


}
</script>
