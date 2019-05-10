let model = []
const matchFiles = require.context('../model', false, /.js$/)
matchFiles.keys().forEach(key => {
  if (key !== './index.js') { // 待優化，正則去除
    model.push(matchFiles(key).default)
  }
})

export default model;