<template>
  <div>
    <!-- component -->
    <div class="min-h-screen p-6 bg-black/50 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <h2 class="font-semibold text-xl text-gray-600">Responsive Form</h2>
          <p class="text-gray-500 mb-6">
            Form is mobile responsive. Give it a try.
          </p>

          <div class="bg-black/80 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div class="text-gray-600">
                <p class="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div class="lg:col-span-2">
                <div
                  class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                >
                  <div class="md:col-span-5">
                    <label for="full_name" class="text-white">Full Name</label>
                    <input
                      type="text"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="First name Last name"
                    />
                  </div>

                  <div class="md:col-span-3">
                    <label for="address" class="text-white">AKA</label>
                    <input
                      type="text"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="AKA"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label for="city" class="text-white">Age</label>
                    <input
                      type="number"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="email" class="text-white">Email</label>
                    <input
                      type="text"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="email@domain.com"
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="province" class="text-white">Province</label>
                    <input
                      type="text"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="Province"
                    />
                  </div>

                  <div class="md:col-span-5">
                    <label for="image" class="text-white">Image</label>
                    <div class="max-w-2xl rounded shadow-xl bg-gray-50 mt-1">
                      <div class="p-[10px]">
                        <div class="flex w-full">
                          <input
                            type="file"
                            ref="fileInput"
                            @change="handleFileUpload"
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
                              <button @click="closeModal">ปิด</button>
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
                            />

                            <button
                              @click="openAudioModal"
                              v-if="selectedAudio"
                              class="text-green-700 pl-[10px]"
                            >
                              Play
                            </button>

                            <div v-if="audioModalOpen" class="audio-modal">
                              <div
                                class="audio-modal-content w-[500px] rounded-lg"
                              >
                                <audio controls :src="selectedAudio"></audio>
                                <button @click="closeAudioModal">ปิด</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button class="w-full bg-white">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
