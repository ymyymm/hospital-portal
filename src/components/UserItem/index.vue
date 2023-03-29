<script setup>
import { ref, watchEffect } from 'vue'
import RecordItem from './RecordItem.vue'
import AdmissionRecord from './AdmissionRecord.vue'
import editInfo from './editInfo.vue'
import visitRecord from '@/json/visitRecord.js'
import tableData from '@/json/admissionRecord'
import userInfo from '@/json/userInfo'
import { useDataFilter } from '@/hooks/useDataFilter'
const department = ref('')
const activeIndex = ref(0)

const { recordType, deptTypeList } = useDataFilter(visitRecord)
const usableType = recordType
const checkList = ref(JSON.parse(JSON.stringify(recordType)))
const recordTypeList = ["住院","门诊","急诊","体检","外院"]
let showRecords = visitRecord
watchEffect(() => {
  if (!checkList.value.length) { showRecords = [] }
  const allDeptFlag = department.value == ''
  showRecords = visitRecord.filter(item => {
    return (allDeptFlag || (!allDeptFlag && item.dept == department.value)) && (checkList.value.indexOf(item.type) != -1)
  })
  activeIndex.value = 0
})

const selectRecord = function (index) {
  activeIndex.value = index
}
const activeName = ref('third')
const editInfoRef = ref()
const editFn = function () {
  console.log('in')
  editInfoRef.value.initFn(userInfo, tableData[0])
}
</script>

<template>
  <div class="user-item">
    <editInfo ref="editInfoRef"></editInfo>
    <div class="user-item-top">
      <img alt="" class="icon-btn" src="@/assets/icon/arrow-up.png" />
      <div class="info-summary" @click="editFn">{{ `${userInfo.name}，${userInfo.gender}，${userInfo.birthday}` }}</div>
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
        <el-checkbox-group v-model="checkList" size="default">
          <el-checkbox v-for="key in recordTypeList" :key="key" 
            :label="key" :disabled="usableType.indexOf(key) == -1"
          />
        </el-checkbox-group>

        <div style="margin: 8px 14px;">
          <el-select v-model="department" placeholder="" size="default">
            <el-option
              v-for="item in deptTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>

        <div class="record-wrap">
          <RecordItem v-for="(item, index) in showRecords" :key="index"
            :data="item" :active="activeIndex == index" @click="selectRecord(index)"
          ></RecordItem>
        </div>


      </aside>
      <div class="main-content">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="基本信息" name="first">基本信息</el-tab-pane>
          <el-tab-pane label="病案首页" name="second">病案首页</el-tab-pane>
          <el-tab-pane label="入院记录" name="third">
            <AdmissionRecord></AdmissionRecord>
          </el-tab-pane>
          <el-tab-pane label="出院记录" name="fourth">出院记录</el-tab-pane>
          <el-tab-pane label="护理文书" name="fourth1">护理文书</el-tab-pane>
          <el-tab-pane label="检查" name="fourth2">检查</el-tab-pane>
          <el-tab-pane label="检验" name="fourth3">检验</el-tab-pane>
          <el-tab-pane label="医嘱" name="fourth4">医嘱</el-tab-pane>
          <el-tab-pane label="执行医晖" name="fourth5">执行医晖</el-tab-pane>
          <el-tab-pane label="全部记录" name="fourth6">全部记录</el-tab-pane>
          <el-tab-pane label="重症监护" name="fourth7">重症监护</el-tab-pane>
          <el-tab-pane label="眼科检查影像" name="fourth8">眼科检查影像</el-tab-pane>
          <el-tab-pane label="用药史" name="fourth9">用药史</el-tab-pane>
          <el-tab-pane label="急诊护理记录" name="fourth10">急诊护理记录</el-tab-pane>
        </el-tabs>

      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
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
  font-weight: bold;
}
.btn-icon {
  height: 16px;
  width: 16px;
}
.self-hospital-tag {
  margin-left: 14px;
  padding: 4px 24px;
  background-color: #fff;
  color: #d7223e;
  font-weight: bold;
  border-radius: 2px;
}

.main {
  display: flex;
  height: 70vh;
}
.main aside {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: #d3d7ed;
  // checkbox
  
  .el-checkbox-group {
    font-size: 0;
    line-height: 0;
    margin-left: 14px;
    margin-right: 14px;
  }
  :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    background-color: #fff;
  }
  :deep(.el-checkbox__input.is-disabled .el-checkbox__inner) {
    background-color: #ececec;
  }
  :deep(.el-checkbox__inner::after) {
    border-color: var(--el-checkbox-checked-bg-color);
  }
  
  :deep(.el-checkbox .el-checkbox__inner)  {
    border-style: solid;
    border-width: 1px;
    border-color: #abaaaa;
  }
  :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    border-color: var(--el-checkbox-checked-input-border-color);
  }
  :deep(.el-select .el-input .el-input__wrapper) {
    box-shadow: 0 0 0 1px #abaaaa inset;
  }
}

.record-wrap {
  flex-grow: 2;
  overflow-y: auto;
}

.el-checkbox {
  --el-checkbox-checked-text-color: var(--el-text-color-primary);
  --el-disabled-text-color: var(--el-text-color-primary);
  --el-checkbox-text-color: var(--el-text-color-primary);
  height: 28px;
}

.main-content {
  padding: 10px;
  flex-grow: 3;
  background-color: #fff;
  overflow-x: hidden;
}
.el-tabs__item {
  font-size: var(--el-font-size-small);
}
:deep(.el-tabs__header) {
  margin: 0;
}
</style>