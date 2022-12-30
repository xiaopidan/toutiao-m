/**
 * 封装本地存储
 */

export const setItem = (key, value) => {
  // 如果是对象或者数组则要转成JSON格式字符串，如果是其他类型则直接存
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
