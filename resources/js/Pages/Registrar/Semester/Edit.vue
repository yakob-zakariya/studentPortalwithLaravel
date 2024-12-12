<template>
  <div>
    <Head :title="`semester ${semester.name} ,${academicYear.name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('registrar.academicYears.edit',academicYear)">Semesters</Link>
      <span class="font-medium text-indigo-400">/</span> Update
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.name" :error="form.errors.name" class="w-full pb-8 pr-6 lg:w-1/2" label="Semester Name" />






        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update semester</loading-button>
        </div>
      </form>
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
    semester:Object,
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.semester.name

      }),
    }
  },
  methods: {
    store() {
      console.log("we are hre");
      this.form.put(route('registrar.semesters.update',{'academicYear':this.academicYear,'semester':this.semester}))
    },
  },
}
</script>
