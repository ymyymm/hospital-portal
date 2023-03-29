<script setup>
import { reactive, ref } from 'vue'

import admissionRecord from '@/json/admissionRecord'
import EditRecord from './EditRecord.vue'

const editRecordRef = ref()
const tableData = reactive(admissionRecord)
const editRecord = function () {
  editRecordRef.value.initFn(tableData[0])
}
const modifyConfirm = function (updatedRecord) {
  tableData[0] = updatedRecord
}
</script>

<template>
  <div>
    <EditRecord ref="editRecordRef" @confirm="modifyConfirm"></EditRecord>
    <el-table :data="tableData" height="60vh" stripe style="width: 100%">
      <el-table-column label="文书类型" prop="pageType" />
      <el-table-column label="住院号" prop="admissionNumber" />
      <el-table-column label="创建医师" prop="createDoctor" />
      <el-table-column label="修改医师" prop="updateDoctor" />
      <el-table-column label="创建时间" prop="createTime" />
      <el-table-column label="操作" type="expand">
        <template #default="props">
          <div class="detail-show" style="background-color: #c3cad2;" @click="editRecord">
            <div class="info-item">
              <div class="info-item-label">【主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;诉】</div>
              <div class="info-item-val">{{ props.row.selfDes }}</div>
            </div>
            <div class="info-item">
              <div class="info-item-label">【入院情况】</div>
              <div class="info-item-val">{{ props.row.condition }}</div>
            </div>
            <div class="info-item">
              <div class="info-item-label">【入院诊断】</div>
              <div class="info-item-val">{{ props.row.diagnosis }}</div>
            </div>
            <div class="info-item">
              <div class="info-item-label">【诊疗经过】</div>
              <div class="info-item-val">{{ props.row.process }}</div>
            </div>
            <div class="info-item">
              <div class="info-item-label">【出院情况】</div>
              <div class="info-item-val">{{ props.row.dischargeStatus }}</div>
            </div>
            <div class="info-item">
              <div class="info-item-label">【出院诊断】</div>
              <div class="info-item-val">{{ props.row.dischargeDiagnosis }}</div>
            </div>
            <div class="info-item">
              <div class="info-item-label">【出院医嘱】</div>
              <div class="info-item-val">{{ props.row.dischargeOrder }}</div>
            </div>
            <div class="info-item">
              <div class="info-item-label">【医疗小组长】</div>
              <div class="info-item-val">{{ props.row.medicalTeamLeader }}</div>
            </div>
            <div class="info-item">
              <div class="info-item-label">【医师签名】</div>
              <div></div>
            </div>
            
          </div>
        </template>
      </el-table-column>
    </el-table> 
  </div>
</template>

<style>
.detail-show {
  padding: 10px;
  background-color: rgb(219 228 238);
}
.info-item {
  display: flex;
  font-weight: bold;
}
.info-item + .info-item {
  margin-top: 10px;
}
.info-item-label {
  width: 100px;
  flex-shrink: 0;
  white-space: pre;
}
.el-table th.el-table__cell.is-leaf {
  border: var(--el-table-border);
}
td.el-table__cell.el-table__expanded-cell {
  padding-top: 0;
  padding-bottom: 0;
}
.el-table tr:nth-child(odd) {
  background-color: #dddce1;
}
</style>
