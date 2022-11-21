<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import getUser from "@/composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import ChatForm from "@/components/ChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";
export default {
  name: "ChatRoom",
  components: {
    Navbar,
    ChatForm,
    ChatWindow,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "welcome" });
      }
    });

    return {};
  },
};
</script>

<style>
</style>