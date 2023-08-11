<template>
  <div class="form-container">
    <form class="form bg-green-900/60">
      <div>
        <h1 class="text-white pb-[10px] font-bold text-[30px] text-center">
          DEK WEN AUDIO BATTLE
        </h1>
      </div>
      <label class="text-white" for="first-name"
        >First Name :
        <div class="text-gray-300 inline">(ชื่อจริง)</div>
      </label>
      <input
        id="first-name"
        v-model="firstName"
        type="text"
        placeholder="First name"
        class=""
      />

      <label class="text-white" for="last-name"
        >Last Name :
        <div class="text-gray-400 inline">(นามสกุล)</div></label
      >
      <input
        id="last-name"
        v-model="lastName"
        type="text"
        placeholder="Last name"
      />

      <label class="text-white" for="age"
        >Age :
        <div class="text-gray-400 inline">(อายุ)</div></label
      >
      <input id="age" v-model.number="age" type="number" placeholder="Age" />

      <label class="text-white" for="aka">AKA :</label>
      <input id="aka" v-model="aka" type="text" placeholder="AKA" />

      <label class="text-white" for="email">Email :</label>
      <input id="email" v-model="email" type="email" placeholder="Email" />

      <label class="text-white" for="province"
        >Province :
        <div class="text-gray-400 inline">(จังหวัด)</div></label
      >
      <input
        id="province"
        v-model="province"
        type="province"
        placeholder="province"
      />

      <label class="text-white" for="image"
        >Upload Image :
        <div class="text-gray-400 inline">(อัปโหลดไฟล์รูป)</div></label
      >
      <input
        id="image"
        @change="handleImageUpload"
        type="file"
        accept="image/*"
        class="bg-white"
      />

      <label class="text-white" for="audio"
        >Upload Audio :
        <div class="text-gray-400 inline">(อัปโหลดไฟล์เสียง)</div></label
      >
      <input
        id="audio"
        @change="handleAudioUpload"
        type="file"
        accept="audio/*"
        class="bg-white"
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
const province = ref("");
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
    province: province.value,
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
  max-width: 500px;
  width: 100%;
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
