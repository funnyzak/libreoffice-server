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

const logger = require('../../lib/logger')

const checkRequestFiles = (ctx) => {
  if (!ctx.requestFiles || (ctx.requestFiles.fail.length > 0 && ctx.requestFiles.success.length === 0)) {
    throw new SysError(ctx.requestFiles.fail[0].error.message, ErrorCode.INVALID_PARAM)
  }
}

module.exports = {
  word2pdf: async (ctx) => {
    checkRequestFiles(ctx)

    ctx.body = ctx.requestFiles
  }
}
