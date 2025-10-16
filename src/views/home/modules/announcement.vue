<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
    // 如果接口返回 { data: AnnouncementData }
    if (res && typeof res === 'object') {
      // 兼容 res.data 或 res 直接为数据
      const data = (res.data ?? res) as AnnouncementData;
      announcementData.value = {
        title: data.title || '',
        content: data.content || '',
        createTime: data.createTime || ''
      };
    }
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
