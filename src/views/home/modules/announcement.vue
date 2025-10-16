<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchGetAnnouncement } from '@/service/api/home';

defineOptions({
  name: 'announcement'
});

interface AnnouncementData {
  title: string;
  content: string;
  createTime: string;
}

const announcementData = ref<AnnouncementData>({
  title: '',
  content: '',
  createTime: ''
});

onMounted(async () => {
  try {
    const res = await fetchGetAnnouncement();
    // 接口返回 { data: AnnouncementData }
    const data = res.data as AnnouncementData;
    announcementData.value = {
      title: data.title,
      content: data.content,
      createTime: data.createTime
    };
  } catch (e) {
    announcementData.value = { title: '', content: '', createTime: '' };
  }
});
</script>

<template>
  <NAlert :title="announcementData.title" type="warning">
    {{ announcementData.content }}
  </NAlert>
</template>

<style scoped></style>
