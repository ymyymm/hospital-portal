<script setup>
import { reactive, ref } from "vue";

const activeKey = ref(0)
const tabList = reactive([{name: '患者病历', key: 0}, {name: '病历管理', key: 1}])
function changeTab (key) {
  activeKey.value = key
}
</script>


<template>
  <header>
    <img alt="中山大学附属第一医院" class="logo" src="@/assets/logo.png" />
    <div style="margin-right: 12px;font-size: 1.8rem;">全景电子病历浏览</div>
    <div class="section-tab">
      <template v-for="item in tabList" :key="item.key">
        <div class="section-tab-item" :class="{'active': item.key == activeKey}"
          @click="changeTab(item.key)"
        >{{ item.name }}</div>
      </template>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  background-color: #fff;
}
.logo {
  padding-top: 4px;
  padding-bottom: 4px;
  height: 42px;
}
.section-tab{
  display: flex;
}
.section-tab-item {
  padding-left: 36px;
  padding-right: 36px;
  cursor: pointer;
  transition: all .3s;
}
.section-tab-item {
  display: flex;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #fff;
}
.section-tab-item.active {
  background-color: #f8ced4;
  color: #d7223e;
  border-bottom-color: #d7223e;
}
</style>