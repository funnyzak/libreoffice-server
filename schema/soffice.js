'use strict'

// document https://joi.dev/api/
const Joi = require('joi')

const sofficePut = {
  query: {
    prefix: [Joi.string().alphanum().min(5).max(30)]
  }
}

module.exports = {
  sofficePut
}
