const path = require('path')
const log4js = require('log4js')
const logPath = path.resolve(__dirname, 'log')

log4js.configure({
  appenders: {
    info_file: {
      type : 'file',
      filename: `${logPath}/info/info.log`,
      maxLogSize : 20 * 1024 * 1024,
      backups : 3
    },
    warn_file: { 
      type: 'dateFile',
      filename: `${logPath}/warns/log`,
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      daysToKeep: 30
    },
    error_file: {
      type: 'dateFile',
      filename:  `${logPath}/errors/log`,
      alwaysIncludePattern: true,
      daysToKeep: 30,
      pattern: 'yyyy-MM-dd.log'
    }
  },
  categories: {
    default: { appenders: ['info_file'], level: 'info' },
    warn: { appenders: ['warn_file'], level: 'warn'},
    error: { appenders: ['error_file'], level: 'error' }
  },
  disableClustering: true
})

const logs = (app, mode = '') => {
  app.use(log4js.connectLogger(log4js.getLogger(mode), {
    format: ':method :url :status :response-time ms'
  }))
}

module.exports = logs;