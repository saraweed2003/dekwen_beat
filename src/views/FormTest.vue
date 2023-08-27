<template>
  <div class="overflow-y-auto h-full">
    <!-- component -->
    <div
      class="min-h-screen p-6 bg-black/50 flex items-center justify-center font-Kanit"
    >
      <div class="container max-w-screen-lg mx-auto">
        <form
          class="form"
          method="POST"
          action="src\php\dekwen\databases\insert.php"
          enctype="multipart/form-data"
        >
          <div>
            <label>DEK WEN AUDIO BATTLE</label>
          </div>
          <label for="first-name">First Name:</label>
          <input
            id="first-name"
            name="first-name"
            v-model="firstName"
            type="text"
            placeholder="First name"
            required
          />

          <label for="last-name">Last Name:</label>
          <input
            id="last-name"
            name="last-name"
            v-model="lastName"
            type="text"
            placeholder="Last name"
            required
          />

          <label for="age">Age:</label>
          <input
            id="age"
            name="age"
            v-model.number="age"
            type="number"
            placeholder="Age"
            required
          />

          <label for="aka">AKA:</label>
          <input
            id="aka"
            name="aka"
            v-model="aka"
            type="text"
            placeholder="AKA"
            required
          />

          <label for="email">Email:</label>
          <input
            id="email"
            name="email"
            v-model="email"
            type="email"
            placeholder="Email"
            required
          />

          <div class="md:col-span-5">
            <label for="image" class="text-white">Image</label>
            <div class="max-w-2xl rounded shadow-xl bg-gray-50 mt-1">
              <div class="p-[10px]">
                <div class="flex w-full">
                  <input
                    type="file"
                    ref="fileInput"
                    @change="handleFileUpload"
                    required
                  />

                  <button
                    @click="openModal"
                    v-if="selectedImage"
                    class="text-green-700 pl-[10px]"
                  >
                    View
                  </button>

                  <div v-if="modalOpen" class="modal">
                    <div class="modal-content rounded-lg">
                      <img
                        :src="selectedImage"
                        alt="Uploaded Image"
                        class="rounded-lg"
                      />
                      <button @click="closeModal" class="text-red-500">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="md:col-span-5">
            <label for="image" class="text-white">Audio</label>
            <div class="max-w-2xl rounded shadow-xl bg-gray-50 mt-1">
              <div class="p-[10px]">
                <div class="flex w-full">
                  <div>
                    <input
                      type="file"
                      ref="audioInput"
                      @change="handleAudioUpload"
                      accept="audio/*"
                      required
                    />

                    <button
                      @click="openAudioModal"
                      v-if="selectedAudio"
                      class="text-green-700 pl-[10px]"
                    >
                      Play
                    </button>

                    <div v-if="audioModalOpen" class="audio-modal">
                      <div class="audio-modal-content w-[500px] rounded-lg">
                        <audio controls :src="selectedAudio"></audio>
                        <button @click="closeAudioModal" class="text-red-500">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" name="submit" @click="handleSubmit">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const firstName = ref("");
const lastName = ref("");
const aka = ref();
const age = ref();
const email = ref("");

const handleSubmit = async () => {
  try {
    axios.post("http://localhost/dekwen/form.php").then();

    console.log("เพิ่มข้อมูลสำเร็จ");
  } catch (error) {
    console.error("เพิ่มข้อมูลไม่สำเร็จ", error);
  }
};

const fileInput = ref(null);
const selectedImage = ref("");
const modalOpen = ref(false);

const handleFileUpload = () => {
  const file = fileInput.value.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      selectedImage.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};

const audioInput = ref(null);
const selectedAudio = ref("");
const audioModalOpen = ref(false);

const handleAudioUpload = () => {
  const file = audioInput.value.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      selectedAudio.value = event.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const openAudioModal = () => {
  audioModalOpen.value = true;
};

const closeAudioModal = () => {
  audioModalOpen.value = false;
};
</script>

<style scoped>
.image {
  width: 300px; /* กำหนดความกว้างของรูป */
  height: auto; /* ให้ความสูงปรับตามสัดส่วนของรูป */
}

.image-container {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #ccc;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

img {
  max-width: 500px;
  max-height: 500px;
}

.audio-modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.audio-modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

audio {
  width: 100%;
  margin-bottom: 10px;
}
</style>
