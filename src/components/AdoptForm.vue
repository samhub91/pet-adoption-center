<template>
  <form @submit.prevent="submitForm" class="adopt-form">
    <div>
      <label for="name">Your Name:</label>
      <input id="name" v-model="form.name" required />
    </div>

    <div>
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="form.email" required />
    </div>

    <div>
      <label for="notes">Why do you want to adopt?</label>
      <textarea id="notes" v-model="form.reason"></textarea>
    </div>

    <button :class="{ submitting: isSubmitting }" type="submit">
      {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
    </button>

    <p v-if="submitted" class="success-message">
      🎉 Application submitted for pet ID {{ petId }}!
    </p>
  </form>
</template>

<script>
export default {
  name: 'AdoptForm',
  props: ['petId'],
  data() {
    return {
      form: {
        name: '',
        email: '',
        reason: ''
      },
      isSubmitting: false,
      submitted: false
    };
  },
  methods: {
    submitForm() {
      this.isSubmitting = true;

      // Simulate submission
      setTimeout(() => {
        console.log('Adoption Request:', {
          petId: this.petId,
          ...this.form
        });
        this.isSubmitting = false;
        this.submitted = true;
        this.form.name = '';
        this.form.email = '';
        this.form.reason = '';
      }, 1500);
    }
  }
};
</script>

<style scoped>
.adopt-form {
  max-width: 400px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(52, 152, 219, 0.08);
  padding: 28px 32px 22px 32px;
}

.adopt-form label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #3498db;
}

.adopt-form input,
.adopt-form textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #bcdffb;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 4px;
  margin-bottom: 2px;
  background: #f7fbfd;
  transition: border 0.2s;
}

.adopt-form input:focus,
.adopt-form textarea:focus {
  border-color: #3498db;
  outline: none;
}

.adopt-form button {
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.adopt-form button.submitting {
  background: #aaa;
  cursor: not-allowed;
}

.success-message {
  color: #27ae60;
  margin-top: 14px;
  font-weight: 600;
  text-align: center;
}
</style>
