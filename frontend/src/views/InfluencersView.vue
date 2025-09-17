<script setup>
import { ref, onMounted } from 'vue';
import apiClient from '@/services/api'; // Use the @ alias
import InfluencerCard from '@/components/InfluencerCard.vue';

const influencers = ref([]);

onMounted(async () => {
  try {
    const response = await apiClient.get('/influencers');
    influencers.value = response.data;
  } catch (error) {
    console.error('Error fetching influencers:', error);
  }
});
</script>

<template>
  <div>
    <h1>Influencers</h1>
    <div class="influencer-list">
      <InfluencerCard v-for="influencer in influencers" :key="influencer._id" :influencer="influencer" />
    </div>
  </div>
</template>