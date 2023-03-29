<script setup>
import { ref, unref, reactive,defineExpose } from 'vue'
const emit = defineEmits(['confirm'])
const centerDialogVisible = ref(false)

let userModel = reactive({})
const confirmFn = function () {
  centerDialogVisible.value = false
  emit('confirm', userModel)
}
const initFn = function (user, record) {
  centerDialogVisible.value = true
  userModel = reactive(JSON.parse(JSON.stringify(user)))
}
defineExpose({ initFn })
</script>

<template>
  <el-dialog v-model="centerDialogVisible" title="修改" fullscreen align-center
    class="main-scroll"
  >
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