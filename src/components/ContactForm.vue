<script lang="ts">
import { defineComponent } from 'vue'
import emailjs, {
  type EmailJSResponseStatus,
} from 'emailjs-com'
import NavHidden from './NavHidden.vue'

export default defineComponent({
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      alert: '', // new reactive property for alert message
    }
  },
  computed: {
    alertType(): string {
      return this.alert.startsWith('Error')
        ? 'error'
        : 'success'
    },
  },
  methods: {
    async handleSubmit(): Promise<void> {
      const serviceId = 'service_sahxy0f'
      const templateId = 'template_hnp3l95'
      const userId = 'ZV0_wKZ_PpgWgVlnf'
      const params = {
        from_name: this.name,
        phone: this.phone,
        reply_to: this.email,
        message: this.message,
      }
      try {
        const response: EmailJSResponseStatus =
          await emailjs.send(
            serviceId,
            templateId,
            params,
            userId
          )
        console.log(
          'Email sent sucessfully.',
          response
        )
        this.alert =
          'Email sent sucessfully. Thank you!'
        this.name = ''
        this.phone = ''
        this.email = ''
        this.message = ''
      } catch (error) {
        console.error(
          'Error sending email',
          error
        )
        this.alert =
          'Error sending email. Please try again.'
      }
    },
  },

  components: {
    NavHidden,
  },
})
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name"></label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="Name"
        required
      />
    </div>
    <div>
      <label for="phone"></label>
      <input
        type="phone"
        id="phone"
        v-model="phone"
        placeholder="Phone"
        required
      />
    </div>
    <div>
      <label for="email"></label>
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Email"
        required
      />
    </div>
    <div>
      <label for="message"></label>
      <textarea
        id="message"
        v-model="message"
        placeholder="Type your message..."
        required
      ></textarea>
    </div>
    <div>
      <button type="submit">Send</button>
    </div>
    <br />
    <div v-if="alert" :class="[alertType]">
      {{ alert }}
    </div>
  </form>
  <NavHidden />
</template>

<style scoped>
.success {
  background-color: #eed2a8;
  color: #3d3d3d;

  width: fit-content;
  padding: 0.5rem;
  border-radius: 5px;
}

.error {
  background-color: #eea8b8;
  color: #3d3d3d;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 5px;
}

form {
  display: flex;
  align-items: left;
  flex-direction: column;
}

label {
  font-weight: bold;
}

input,
textarea {
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #2a2a2a;
  color: #fff;
  border: 1px solid #2a2a2a;
  margin-bottom: 1rem;
  width: 100%;
}

button[type='submit'] {
  background-color: #3d3d3d;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button[type='submit']:hover {
  background-color: #2a2a2a;
}
</style>
