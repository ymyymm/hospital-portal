export function useDataFilter(record) {
  const recordType = []
  const deptType = []
  const list = record && record.length? record: []
  list.forEach(element => {
    const type = element.type
    if (recordType .indexOf(type) == -1) {
      recordType .push(type)
    }
    const dept = element.dept
    if (deptType.indexOf(dept) == -1) {
      deptType.push(dept)
    }
  });
  let deptTypeList = deptType.map(key => ({ label: key, value: key }))
  deptTypeList.unshift({ label: '全部科室', value: '' })

  return { recordType , deptTypeList }
}