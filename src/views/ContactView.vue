<template>
  <section class="flex flex-col items-center justify-center min-h-[80vh] p-8">
    <form @submit.prevent="sendMessage"
      class="w-full max-w-md space-y-4 p-6 rounded-xl bg-gradient-to-br from-lightCard to-mint/10 dark:from-darkCard dark:to-mint/10 border border-lightBorder dark:border-darkBorder shadow-md">
      <input v-model="form.name" type="text" placeholder="Your Name" required
        class="w-full p-3 rounded bg-lightCard dark:bg-darkCard text-lightText dark:text-darkText border" />
      <input v-model="form.email" type="email" placeholder="Your Email" required
        class="w-full p-3 rounded bg-lightCard dark:bg-darkCard text-lightText dark:text-darkText border" />
      <textarea v-model="form.message" placeholder="Your Message" required
        class="w-full p-3 rounded bg-lightCard dark:bg-darkCard text-lightText dark:text-darkText border h-40"></textarea>

      <!-- Honeypot -->
      <input v-model="form.website" type="text" name="website" style="display:none" />

      <button type="submit"
        class="w-full border border-mint text-mint py-3 rounded hover:bg-mint hover:text-darkBg transition-all duration-300">
        {{ sending ? 'Sending…' : 'Send' }}
      </button>

      <p v-if="status" class="text-sm text-gray-400 mt-2">{{ status }}</p>
    </form>
  </section>
</template>

<script setup>
  import { ref } from 'vue'

  const form = ref({ name: '', email: '', message: '', website: '' })
  const sending = ref(false)
  const status = ref('')

  const sendMessage = async () => {
    if (form.value.website) return
    sending.value = true
    try {
      const res = await fetch(
        `https://api.github.com/repos/taylordcannon/Portfolio-Site/dispatches`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
          body: JSON.stringify({
            event_type: 'contact_form_submission',
            client_payload: {
              name: form.value.name,
              email: form.value.email,
              message: form.value.message,
            },
          }),
        }
      )

      if (res.ok) status.value = 'Message sent successfully!'
      else status.value = 'Something went wrong.'
    } catch (err) {
      status.value = 'Error sending message.'
    } finally {
      sending.value = false
    }
  }

</script>