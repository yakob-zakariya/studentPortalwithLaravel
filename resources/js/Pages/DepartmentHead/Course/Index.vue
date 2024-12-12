<template>
  <div>
    <Head title="Courses" />
    <h1 class="mb-8 text-3xl font-bold">Courses</h1>
    <div class="flex items-center justify-between mb-6">
      <search-filter v-model="form.search" class="w-full max-w-md mr-4" @reset="reset">
      </search-filter>
      <div class="flex items-center space-x-3">


      <Link class="btn-indigo" :href="route('departmentHead.courses.create')">
        <span>Create </span>
        <span class="hidden md:inline">&nbsp;Course</span>
      </Link>

      <Link class="btn-indigo" :href="route('departmentHead.courses.createCourseFromFile')">
        <span>Add Course From </span>
        <span class="hidden md:inline">&nbsp;File</span>
      </Link>

    </div>
    </div>
    <div class="overflow-x-auto bg-white rounded-md shadow">
      <table class="w-full whitespace-nowrap">
        <tr class="font-bold text-left">
          <th class="px-6 pt-6 pb-4">No</th>
          <th class="px-6 pt-6 pb-4">Course Name</th>
          <th class="px-6 pt-6 pb-4">Course code</th>
          <th class="px-6 pt-6 pb-4">Credit Hour</th>
          <th class="px-6 pt-6 pb-4">ETCS</th>

        </tr>
        <tr v-for="(course,index) in courses.data" :key="course.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.courses.edit',course)">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ index+1 }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('departmentHead.courses.edit',course)">
              <!-- <img v-if="user.photo" class="block w-5 h-5 mr-2 -my-2 rounded-full" :src="user.photo" /> -->
              {{ course.name}}

            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',course)" tabindex="-1">
              {{ course.code }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',course)" tabindex="-1">
              {{ course.credit_hour }}
            </Link>
          </td>

          <td class="border-t">
            <Link class="flex items-center px-6 py-4" :href="route('departmentHead.courses.edit',course)" tabindex="-1">
              {{ course.ETCS }}
            </Link>
          </td>
          <td class="w-px border-t">
            <Link class="flex items-center px-4" :href="route('departmentHead.courses.edit',course)" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="courses.length === 0">
          <td class="px-6 py-4 border-t" colspan="4">No course found.</td>
        </tr>
      </table>
    </div>
    <pagination class="mt-6" :links="courses.links" />
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import pickBy from 'lodash/pickBy'
import DepartmentHeadLayout from '../Shared/DepartmentHeadLayout.vue'
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import SearchFilter from '@/Shared/SearchFilter.vue'
import pagination from "@/Shared/Pagination.vue"

export default {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter,
    DepartmentHeadLayout,
    pagination
  },
  layout: DepartmentHeadLayout,
  props: {
    serach:String,
    courses: Object,
  },
  data() {
    return {
      form: {
        search: this.search,

      },
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        console.log("is this running");
        this.$inertia.get(route('departmentHead.courses.index'), pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
  },
}
</script>
