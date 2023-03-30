<script setup>
import { UserFilled, Document, CircleClose } from '@element-plus/icons-vue'
import { ref, defineExpose } from 'vue'

import recordTypeList from '@/json/recordTypeList'

const emit = defineEmits(['confirm'])
const centerDialogVisible = ref(false)

let userModel = ref({})
let records = ref([])
const confirmFn = function () {
  centerDialogVisible.value = false
  emit('confirm', userModel.value, records.value)
}
const initFn = function (user, visitRecord) {
  centerDialogVisible.value = true
  userModel.value = JSON.parse(JSON.stringify(user))
  records.value = JSON.parse(JSON.stringify(visitRecord))
}
// 移除该item
const removeItem = function (index) {
  records.value.splice(index, 1)
}
// 添加item
const addItem = function () {
  records.value.push({
    dept: '',
    type: '',
    time: '',
    hospitalstay: null
  })
}
defineExpose({ initFn })
</script>

<template>
  <el-dialog v-model="centerDialogVisible" title="修改" fullscreen align-center
    class="main-scroll"
  >
    <div class="form-group-title">
      <el-icon><UserFilled /></el-icon>患者信息
    </div>
    <el-form :model="userModel" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="姓名">
            <el-input v-model="userModel.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别">
            <el-input v-model="userModel.gender" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="出生日期">
            <el-input v-model="userModel.birthday" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="form-group-title">
      <el-icon><Document /></el-icon>挂号信息
    </div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="(re, index) in records" :key="index">
        <div class="edit-visit-record-wrap">
          <el-icon class="remve-btn" @click="removeItem(index)"><CircleClose /></el-icon>
          <el-select v-model="re.type" placeholder="类型">
            <el-option
              v-for="item in recordTypeList"
              :key="item" :label="item" :value="item"
            />
          </el-select>
          <el-input v-model="re.dept" placeholder="科室" />
          <el-input v-model="re.time" placeholder="时间" />
          <el-input v-model="re.hospitalstay" placeholder="在院天数" />
        </div>
      </el-col>
    </el-row>
    
    <div style="text-align: center;">
      <el-button type="primary" @click="addItem">添加记录</el-button>
    </div>
    
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmFn">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.form-group-title {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #d7223e;
}
.form-group-title .el-icon {
  margin-right: 10px;
  font-size: 15px;
}
.edit-visit-record-wrap {
  position: relative;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dc8794;
}
.edit-visit-record-wrap .el-select {
  width: 100%;
}
.edit-visit-record-wrap > div {
  margin-bottom: 4px;
}
[class*=el-col-].is-guttered {
  margin-bottom: 10px;
}
i.el-icon.remve-btn {
  font-size: 20px;
  position: absolute;
  right: -7px;
  top: -7px;
  z-index: 1;
  background-color: #fff;
  color: #d7223e;
}
</style>
