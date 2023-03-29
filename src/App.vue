<script setup>
import TopHeader from './components/TopHeader.vue';
import SearchBar from './components/SearchBar.vue';
import UserItem from './components/UserItem/index.vue';
</script>

<template>
  <TopHeader></TopHeader>

  <SearchBar></SearchBar>

  <UserItem></UserItem>

  <div style="margin-top: 20px;text-align: center; font-size: 13px;">
    <strong>共1位患者</strong><span style="margin-left: 10px;">没有更多了</span>
  </div>
</template>

