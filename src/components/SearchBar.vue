<script setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  clientNo: '',
  checkNo: '',
  idNo: '',
  caseNo: ''
})
</script>

<template>

  <section>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="" style="width: 100px;"></el-input>
      </el-form-item>
      <el-form-item label="住院/门诊号">
        <el-input v-model="formInline.clientNo" placeholder="" style="width: 100px;"></el-input>
      </el-form-item>
      <el-form-item label="检查号">
        <el-input v-model="formInline.checkNo" placeholder="" style="width: 100px;"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="formInline.idNo" placeholder="" style="width: 160px;"></el-input>
      </el-form-item>
      <el-form-item label="病案号">
        <el-input v-model="formInline.caseNo" placeholder="" style="width: 100px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
  </section>

</template>

<style scoped>
section {
  margin-top: 14px;
  margin-bottom: 14px;
  padding: 10px 8px;
  background-color: #fff;
}
.el-form-item {
  margin-bottom: 0;
}
</style>