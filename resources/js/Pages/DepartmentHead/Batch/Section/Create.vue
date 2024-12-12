<template>
  <div>
    <Head :title="`${batch.name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" :href="route('departmentHead.batches.edit',batch)">Sections</Link>
      <span class="font-medium text-indigo-400">/</span> Create
    </h1>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="store">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.name" :error="form.errors.name" class="w-full pb-8 pr-6 lg:w-1/2" label="Section Name" />
        </div>
        <div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Create Section</loading-button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import DepartmentHeadLayout from '../../Shared/DepartmentHeadLayout.vue'
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
  layout: DepartmentHeadLayout,
  remember: 'form',
  props:{
    batch:Object,

  },
  data() {
    return {
      form: this.$inertia.form({
        name: '',

      }),
    }
  },
  methods: {
    store() {
      this.form.post(route('departmentHead.sections.store',this.batch))
    },
  },
}
</script>
