'use strict'

const SOfficeCtl = require('../../controller/general/soffice')
const { sofficePut } = require('../../schema/soffice')
const UploadMdw = require('../../middleware/upload')
const _ = require('lodash')
const config = require('../../config')

module.exports = [
  {
    method: 'put',
    path: '/soffice/word2pdf',
    checkParam: sofficePut,
    controller: SOfficeCtl.word2pdf,
    middleware: [
      // 上传
      UploadMdw(
        _.merge(config.app.upload, {
          keepOriginName: true,
          removeTmpFile: true,
          isSaveDir: true,
          savePrefix: 'document'
        })
      )
    ]
  }
].map((router) => {
  router.checkParam = _.merge(router.checkParam)
  return router
})
