<template>
  <div>
    <Head title="Create Student" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('registrar.batches.index')">Students</Link>
      <span class="font-medium text-indigo-400">/</span> Create
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.first_name" :error="form.errors.first_name" class="w-full pb-8 pr-6 lg:w-1/2" label="First Name" />

          <text-input v-model="form.middle_name" :error="form.errors.middle_name" class="w-full pb-8 pr-6 lg:w-1/2" label="Middle Name" />

          <text-input v-model="form.last_name" :error="form.errors.last_name" class="w-full pb-8 pr-6 lg:w-1/2" label="Last Name" />

          <text-input :type="email" v-model="form.email" :error="form.errors.email" class="w-full pb-8 pr-6 lg:w-1/2" label="Email Address" />

          <select-input v-model="form.batch_id" :error="form.errors.batch_id" class="w-full pb-8 pr-6 lg:w-1/2" label="Batch">
            <option :value="null" />
            <option v-for="batch in batches" :key="batch.id" :value="batch.id">{{ batch.name }} of {{ batch.department.name }}</option>
          </select-input>




        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">+ Add Student </loading-button>
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
    batches:Object
  },
  data() {
    return {
      form: this.$inertia.form({
        first_name: '',
        middle_name:'',
        last_name:'',
        email:'',
        batch_id: null,
      }),
    }
  },
  methods: {
    store() {
      this.form.post(route('registrar.students.store'))
    },
  },
}
</script>
