<template>
  <div class="form-container">
    <form class="form">
      <div>
        <label>DEK WEN AUDIO BATTLE</label>
      </div>
      <label for="first-name">First Name:</label>
      <input
        id="first-name"
        v-model="firstName"
        type="text"
        placeholder="First name"
      />

      <label for="last-name">Last Name:</label>
      <input
        id="last-name"
        v-model="lastName"
        type="text"
        placeholder="Last name"
      />

      <label for="age">Age:</label>
      <input id="age" v-model.number="age" type="number" placeholder="Age" />

      <label for="aka">AKA:</label>
      <input id="aka" v-model="aka" type="text" placeholder="AKA" />

      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" placeholder="Email" />

      <label for="image">Upload Image:</label>
      <input
        id="image"
        @change="handleImageUpload"
        type="file"
        accept="image/*"
      />

      <label for="audio">Upload Audio:</label>
      <input
        id="audio"
        @change="handleAudioUpload"
        type="file"
        accept="audio/*"
      />

      <button type="submit" @click="handleSubmit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const age = ref(0);
const aka = ref("");
const email = ref("");
let image = null;
let audio = null;

const handleImageUpload = (event) => {
  image = event.target.files[0];
};

const handleAudioUpload = (event) => {
  audio = event.target.files[0];
};

const handleSubmit = () => {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    aka: aka.value,
    email: email.value,
    image: image,
    audio: audio,
  };

  // Store the form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  max-width: 600px;
  width: 90%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
  font-weight: bold;
  margin-top: 10px;
  display: block;
}

input,
button {
  margin-top: 5px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

input[type="file"] {
  padding: 5px 0;
}
</style>
