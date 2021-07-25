<template>
  <div class="contact flex flex-col items-center">
    <!-- <h1 class="self-start">
      Say Hello?
    </h1> -->

    <form
      class=""
      @submit.prevent="handleForm"
      >
      <div class="pb-4">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="text"
          class="input"
          >
      </div>

      <div class="pb-4">
        <label for="subject">Subject</label>
        <input
          id="subject"
          v-model="subject"
          type="text"
          class="input"
          >
      </div>

      <div class="pb-4">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="message"
          type="text"
          class="input min-h-16"
          rows="4"
          cols="50"
          />
      </div>

      <div class="pb-4">
        <label for="captchaAnswer">What is {{ a }} * {{ b }}?</label>
        <input
          id="captchaAnswer"
          v-model="captchaAnswer"
          type="text"
          class="input"
          >
      </div>

      <div
        v-if="error"
        class="py-4"
        >
        <p class="bg-red-400 inline-block py-1 px-4 text-white">
          {{ error }}
        </p>
      </div>

      <div
        v-if="success"
        class="py-4"
        >
        <p class="bg-green-400 inline-block py-1 px-4">
          {{ success }}
        </p>
      </div>

      <button
        type="submit"
        class="py-3 px-12 bg-primary hover:bg-white"
        >
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      subject: null,
      message: null,
      captchaAnswer: null,
      error: null,
      success: null,
      correctResult: null,
      a: null,
      b: null,
    };
  },
  created() {
    this.initCaptcha();
  },
  methods: {
    async handleForm() {
      const {
        email, //
        subject,
        message,
        captchaAnswer,
        correctResult,
      } = this;

      this.$log.info('Will handle form');

      this.error = null;
      this.success = null;

      if (parseInt(captchaAnswer, 10) !== correctResult) {
        this.error = 'Wrong answer';
        return;
      }

      if (!(email && subject && message)) {
        this.error = 'Fields are empty.';
        return;
      }

      try {
        const response = await this.$store.dispatch('common/sendEmail', {
          email,
          subject,
          message,
        });

        this.success = 'Your message has been sent.';
        this.clearForm();
        this.$log.info('Did handle form', response);
      } catch (error) {
        this.$log.error('Error handle form', error);
      }
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    initCaptcha() {
      this.a = this.randomIntFromInterval(1, 3);
      this.b = this.randomIntFromInterval(2, 5);
      this.correctResult = this.a * this.b;
    },
    clearForm() {
      this.email = null;
      this.subject = null;
      this.message = null;
      this.captchaAnswer = null;
      this.a = null;
      this.b = null;
      this.correctResult = null;
      this.initCaptcha();
    },
  },
};
</script>

<style lang="postcss">
.input {
  @apply p-3 border w-full;
}
</style>
