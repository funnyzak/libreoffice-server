'use strict'

const fs = require('fs')
const path = require('path')

const _ = require('lodash')
const config = require('../../config')
const utils = require('../../lib/utils')
const ErrorMsg = require('../../common/error-msg')
const LogType = require('../../common/log-type')
const ErrorCode = require('../../common/error-code')
const SysError = require('../../common/sys-error')
const libre = require('libreoffice-convert')
libre.convertAsync = require('util').promisify(libre.convert)

const logger = require('../../lib/logger')

const checkRequestFiles = (ctx) => {
  if (!ctx.requestFiles || (ctx.requestFiles.fail.length > 0 && ctx.requestFiles.success.length === 0)) {
    throw new SysError(ctx.requestFiles.fail[0].error.message, ErrorCode.INVALID_PARAM)
  }

  if (!ctx.requestFiles.success.every((v) => ['.docx', '.doc'].includes(v.suffix))) {
    throw new SysError(ErrorMsg.INVALID_FILE_TYPE, ErrorCode.INVALID_PARAM)
  }
}

const sofficeConvert = async (inputPath, outputPath, ext = '.pdf') => {
  const docxBuf = await fs.readFileSync(inputPath)
  let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined)
  await fs.writeFileSync(outputPath, pdfBuf)
}

module.exports = {
  word2pdf: async (ctx) => {
    logger.info({
      type: LogType.CONTROLLER_INFO,
      action: 'transfer files',
      data: ctx
    })

    checkRequestFiles(ctx)

    const finalFiles = await Promise.all(
      ctx.requestFiles.success.map(async (file) => {
        const filePath = file.path
        const pdfPath = file.path.replace(file.suffix, '.pdf')
        await sofficeConvert(filePath, pdfPath, ctx.query.ext || '.pdf')
        return {
          ...file,
          pdf: {
            url: file.url.replace(file.suffix, '.pdf')
          }
        }
      })
    )

    ctx.body = finalFiles
  }
}
