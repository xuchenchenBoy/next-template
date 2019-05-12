let model = []
const matchFiles = require.context('../model', false, /.js$/)
matchFiles.keys().forEach(key => {
  if (!((/index\.js/).test(key))) { 
    model.push(matchFiles(key).default)
  }
})

export default model;