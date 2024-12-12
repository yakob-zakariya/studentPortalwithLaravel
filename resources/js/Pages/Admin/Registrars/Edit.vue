<template>
  <div>
    <Head :title="`${form.first_name} ${form.last_name}`" />
    <div class="flex justify-start max-w-3xl mb-8">
      <h1 class="text-3xl font-bold">
        <Link class="text-indigo-400 hover:text-indigo-600" :href="route('admin.registrars')">Registrars</Link>
        <span class="font-medium text-indigo-400">/</span>
        {{ form.first_name }} {{ form.last_name }}
      </h1>
      <!-- <img v-if="user.photo" class="block w-8 h-8 ml-4 rounded-full" :src="user.photo" /> -->
    </div>
    <trashed-message v-if="user.deleted_at" class="mb-6" @restore="restore"> This user has been deleted. </trashed-message>
    <div class="max-w-3xl overflow-hidden bg-white rounded-md shadow">
      <form @submit.prevent="update">
        <div class="flex flex-wrap p-8 -mb-8 -mr-6">
          <text-input v-model="form.first_name" :error="form.errors.first_name" class="w-full pb-8 pr-6 lg:w-1/2" label="First name" />
          <text-input v-model="form.middle_name" :error="form.errors.middle_name" class="w-full pb-8 pr-6 lg:w-1/2" label="Middle name" />
          <text-input v-model="form.last_name" :error="form.errors.last_name" class="w-full pb-8 pr-6 lg:w-1/2" label="Last name" />
          <text-input v-model="form.email" :error="form.errors.email" class="w-full pb-8 pr-6 lg:w-1/2" label="Email" />

          <!-- <select-input v-model="form.owner" :error="form.errors.owner" class="w-full pb-8 pr-6 lg:w-1/2" label="Owner">
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select-input> -->
          <!-- <file-input v-model="form.photo" :error="form.errors.photo" class="w-full pb-8 pr-6 lg:w-1/2" type="file" accept="image/*" label="Photo" /> -->
        </div>
        <div class="flex items-center px-8 py-4 border-t border-gray-100 bg-gray-50">
          <button v-if="!user.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button" @click="destroy">Delete User</button>
          <loading-button :loading="form.processing" class="ml-auto btn-indigo" type="submit">Update User</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import AdminLayout from '../Shared/AdminLayout.vue'
import TextInput from '@/Shared/TextInput.vue'
import FileInput from '@/Shared/FileInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import TrashedMessage from '@/Shared/TrashedMessage.vue'

export default {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage,
  },
  layout: AdminLayout,
  props: {
    user: Object,
  },
  remember: 'form',
  data() {
    return {

      form: this.$inertia.form({
        _method: 'put',
        first_name: this.user.first_name,
        middle_name:this.user.middle_name,
        last_name: this.user.last_name,
        email: this.user.email,


      }),
    }
  },
  mounted(){
    console.log(this.user.delete_at)
  },
  methods: {
    update() {
      this.form.post(route('admin.registrars.update',{'user':{
        'id':this.user.id,
        'first_name':this.form.first_name,
        'middle_name':this.form.middle_name,
        'last_name':this.form.last_name,
        'email':this.form.email,
      }}))
    },
    destroy() {
      if (confirm('Are you sure you want to delete this user?')) {
        this.$inertia.delete(route('admin.registrars.destroy',this.user))
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this user?')) {
        this.$inertia.put(route('admin.registrars.restore',this.user))
      }
    },
  },
}
</script>
