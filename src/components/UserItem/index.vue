<script setup>
import { ref } from 'vue'

const checkList = ref(['住院', '门诊'])
</script>

<template>
  <div class="user-item">
    <div class="user-item-top">
      <img alt="" class="icon-btn" src="@/assets/icon/arrow-up.png" />
      <div class="info-summary">张婉明，女，1970年11月10日</div>
      <el-button type="primary">
        <template #icon>
          <img alt="" class="btn-icon" src="@/assets/icon/like_fill.png" />
        </template>
        已收藏
      </el-button>

      <div class="self-hospital-tag">本院</div>
    </div>

    <div class="main">
      <aside>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="住院" />
          <el-checkbox label="门诊" />
          <el-checkbox label="急诊" disabled />
          <el-checkbox label="体检" disabled />
          <el-checkbox label="外院" disabled />
        </el-checkbox-group>
      </aside>
      <div class="main-content"></div>
    </div>

  </div>
</template>

<style scoped>
.user-item {
  margin-left: 10px;
  margin-right: 10px;
}
.user-item-top {
  padding: 4px 14px;
  display: flex;
  align-items: center;
  background-color: #c8cde6;
}
.icon-btn {
  height: 20px;
  width: 20px;
}
.info-summary {
  margin-left: 10px;
  margin-right: 50px;
}
.btn-icon {
  height: 16px;
  width: 16px;
}
.self-hospital-tag {
  margin-left: 20px;
  padding: 6px 24px;
  background-color: #fff;
  color: #d7223e;
  font-weight: bold;
  border-radius: 2px;
}

.main {
  display: flex;
  height: 60vh;
}
.main aside {
  width: 300px;
  flex-shrink: 0;
  background-color: #d3d7ed;
}
.main-content {
  flex-grow: 3;
  background-color: #fff;
}
.el-checkbox-group {
    font-size: 0;
    line-height: 0;
    margin-left: 14px;
    margin-right: 14px;
}
</style>