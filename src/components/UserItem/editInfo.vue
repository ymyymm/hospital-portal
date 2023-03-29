<script setup>
import { ref, unref, reactive,defineExpose } from 'vue'
const emit = defineEmits(['confirm'])
const centerDialogVisible = ref(false)

let userModel = reactive({})
let recordModel = reactive({})
const confirmFn = function () {
  centerDialogVisible.value = false
  confirm(userModel, recordModel)
}
const initFn = function (user, record) {
  centerDialogVisible.value = true
  userModel = reactive(JSON.parse(JSON.stringify(user)))
  recordModel = reactive(JSON.parse(JSON.stringify(record)))
}
defineExpose({ initFn })
</script>

<template>
  <el-dialog v-model="centerDialogVisible" title="修改" fullscreen align-center>
    <el-form :model="userModel" label-position="top">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="患者姓名">
            <el-input v-model="userModel.name" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="患者性别">
            <el-input v-model="userModel.gender" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="出生日期">
            <el-input v-model="userModel.birthday" />
          </el-form-item>
        </el-col>
      </el-row>



    </el-form>
    <el-form :model="recordModel" label-position="top">
      <el-form-item label="【主诉】">
        <el-input v-model="recordModel.selfDes" />
      </el-form-item>
      <el-form-item label="【入院情况】">
        <el-input v-model="recordModel.condition" />
      </el-form-item>
      <el-form-item label="【入院诊断】">
        <el-input v-model="recordModel.diagnosis" />
      </el-form-item>
      <el-form-item label="【诊疗经过】">
        <el-input v-model="recordModel.process" />
      </el-form-item>
      <el-form-item label="【出院情况】">
        <el-input v-model="recordModel.dischargeStatus" />
      </el-form-item>
      <el-form-item label="【出院诊断】">
        <el-input v-model="recordModel.dischargeDiagnosis" />
      </el-form-item>
      <el-form-item label="【出院医嘱】">
        <el-input v-model="recordModel.dischargeOrder" />
      </el-form-item>
      <el-form-item label="【医疗小组长】">
        <el-input v-model="recordModel.medicalTeamLeader" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="confirmFn">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>