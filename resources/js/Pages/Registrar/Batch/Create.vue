<template>
  <div>
    <Head title="Create Batch" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('registrar.batches.index')">Batches</Link>
      <span class="font-medium text-indigo-400">/</span> Create
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.name" :error="form.errors.name" class="w-full pb-8 pr-6 lg:w-1/2" label="Batch Name" />

          <select-input v-model="form.department_id" :error="form.errors.department_id" class="w-full pb-8 pr-6 lg:w-1/2" label="Department">
            <option :value="null" />
            <option v-for="department in departments" :key="department.id" :value="department.id">{{ department.name }}</option>
          </select-input>




        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Create Batch</loading-button>
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
    departments:Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        department_id: null,
      }),
    }
  },
  methods: {
    store() {
      this.form.post(route('registrar.batches.store'))
    },
  },
}
</script>
