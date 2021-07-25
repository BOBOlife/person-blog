/**
 *@author wangbo
 *@ClassName: next.config
 *@Description:
 *@Date 2021/7/16
 */
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})
