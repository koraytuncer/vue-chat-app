<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>No account yet? <span @click="formToggle">Signup</span></p>
    </div>

    <div v-else>
      <h2>Signup</h2>
      <SignupForm @signup="enterChat" />
      <p>Already registered <span @click="formToggle">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    SignupForm,
    LoginForm,
  },
  setup() {
    const showLoginForm = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "chatroom" });
    };
    const formToggle = () => {
      showLoginForm.value = !showLoginForm.value;
    };

    return { showLoginForm, formToggle,enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 93%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  color: #777;
  margin: 5px auto;
}
.welcome span {
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}
.welcome button {
  margin: 20px auto;
}
</style>