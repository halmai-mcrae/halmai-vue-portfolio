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
        placeholder="Your message.."
        required
      ></textarea>
    </div>
    <div>
      <button type="submit">Send</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import emailjs, {
  type EmailJSResponseStatus,
} from 'emailjs-com'

export default defineComponent({
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    async handleSubmit(): Promise<void> {
      const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID

      const params = {
        from_name: this.name,
        reply_to: this.email,
        message: this.message,
      }

      try {
        const response: EmailJSResponseStatus =
          await emailjs.send(
            serviceId,
            templateId,
            params
          )
        console.log('Email sent!', response)
        this.name = ''
        this.email = ''
        this.message = ''
      } catch (error) {
        console.error(
          'Error sending email',
          error
        )
      }
    },
  },
})
</script>

<style scoped>
form {
  display: flex;
  align-items: left;
  flex-direction: column;
  margin: 2rem;
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
