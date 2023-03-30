<script setup>
import { ref, defineExpose } from 'vue'
const emit = defineEmits(['confirm'])
const centerDialogVisible = ref(false)

const recordModel = ref({})
const confirmFn = function () {
  centerDialogVisible.value = false
  emit('confirm', recordModel.value)
}
const initFn = function (record) {
  centerDialogVisible.value = true
  recordModel.value = JSON.parse(JSON.stringify(record))
}
defineExpose({ initFn })
</script>

<template>
  <el-dialog v-model="centerDialogVisible" title="入院记录" fullscreen align-center
    class="main-scroll"
  >
    <el-form :model="recordModel" label-width="150px">
      <el-form-item label="【主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;诉】">
        <el-input type="textarea" :rows="2" v-model="recordModel.selfDes" />
      </el-form-item>
      <el-form-item label="【入院情况】">
        <el-input type="textarea" :rows="6" v-model="recordModel.condition" />
      </el-form-item>
      <el-form-item label="【入院诊断】">
        <el-input type="textarea" :rows="2" v-model="recordModel.diagnosis" />
      </el-form-item>
      <el-form-item label="【诊疗经过】">
        <el-input type="textarea" :rows="2" v-model="recordModel.process" />
      </el-form-item>
      <el-form-item label="【出院情况】">
        <el-input type="textarea" :rows="2" v-model="recordModel.dischargeStatus" />
      </el-form-item>
      <el-form-item label="【出院诊断】">
        <el-input type="textarea" :rows="2" v-model="recordModel.dischargeDiagnosis" />
      </el-form-item>
      <el-form-item label="【出院医嘱】">
        <el-input type="textarea" :rows="6" v-model="recordModel.dischargeOrder" />
      </el-form-item>
      <el-form-item label="【医疗小组长】">
        <el-input type="textarea" :rows="2" v-model="recordModel.medicalTeamLeader" />
      </el-form-item>
      <el-form-item label="【医师签名】">
        <el-input type="textarea" :rows="2" v-model="recordModel.doctor" />
      </el-form-item>
      
    </el-form>
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

