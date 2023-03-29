<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
const classMatch = {
  '住院': 'yellow',
  '门诊': 'purple'
}
</script>

<template>
  <div class="record-item" :class="[{'active': active}, classMatch[data.type]]">
    <div class="line line-header"></div>
    <div class="line line-tail"></div>
    <div class="record-type">
      <div class="type-name">{{ data.type }}</div>
    </div>
    <div class="record-info">
      <p>{{ data.dept }}</p>
      <p class="second">{{ data.time }}</p>
      <p class="second">{{ data.hospitalstay? `在院${data.hospitalstay}天`: '  ' }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.record-item {
  position: relative;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.yellow {
    .record-type {
      background-color: #dcb18a;
    }
    .type-name {
      background-color: #b17239;
    }
  }

  &.purple {
    .record-type {
      background-color: #b3b4d2;
    }
    .type-name {
      background-color: #273679;
    }
  }

  
}
.record-item.active {
  background-color: #fff;
  .record-info {
    color: #d7223e;
  }
  
}

.record-type {
  margin-right: 10px;
  height: 46px;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  background-color: #f8ced4;
  z-index: 1;
}
.type-name {
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #d7223e;
  border-radius: 17px;
}
.record-info p {
  margin-top: 2px;
  margin-bottom: 2px;
  white-space: pre;

  &.second {
    font-size: 13px;
  }
}
.line {
  position: absolute;
  left: 29px;
  width: 2px;
  height: 30px;
  background-color: #b9b7b7;
}
.line-tail {
  top: 0;
}
.line-header {
  bottom: 0;
}
</style>