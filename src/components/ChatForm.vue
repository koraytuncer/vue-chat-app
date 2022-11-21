<template>
  <form @keypress.enter.prevent="handleSubmit">
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      rows="5"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timeStamp } from "@/firebase/config";
export default {
  name: "ChatForm",
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection("messages");
    const message = ref("");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timeStamp(),
      };
      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { handleSubmit, message, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;
  font-family: inherit;
  outline: none;
}
</style>