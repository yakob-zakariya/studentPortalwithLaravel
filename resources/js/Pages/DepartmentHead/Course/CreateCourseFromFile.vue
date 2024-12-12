<template>
  <div>
    <Head title="Create Course" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('departmentHead.courses.index')">Courses</Link>
      <span class="font-medium text-indigo-400">/</span> Create
    </h1>
    <div class="max-w-4xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store" enctype="multipart/form-data">
        <div class="flex flex-wrap p-8 -mb-6 -mr-6">

          <text-input type="file" :error="form.errors.file"  @change="handleFileUpload" accept=".csv"  class="w-full pb-8 pr-6 lg:w-2/3" label="Upload courses file" />
        </div>






        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button  class="btn-indigo" type="submit">Create Course</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import DepartmentHeadLayout from '../Shared/DepartmentHeadLayout.vue'
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
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: 'form',

  data() {

    return {
      form: this.$inertia.form({
        file: null,
      }),



    }
  },
  methods: {
    handleFileUpload(event) {
      this.form.file = event.target.files[0];

    },

    store() {
      this.form.post(route('departmentHead.courses.storeFromFile'))
    }
  },
}
</script>
