<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="E-Mail" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <div class="btn">
      <button>Login</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";
export default {
  name: "Login",
  setup(props,context) {
    const { error, login } = useLogin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login")
      }
    };

    return {
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style>
</style>



