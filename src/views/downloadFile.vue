<template>
  <div>
    <button @click="downloadAudio">Download Audio</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const downloadAudio = () => {
  const audioFilePath = 'src/beat/Beat%20มาม่า%20Drill.wav';
  const link = document.createElement('a');
  link.href = audioFilePath;
  link.download = 'Drill.wav';
  link.click();
};
</script>
