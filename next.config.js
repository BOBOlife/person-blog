/**
 *@author wangbo
 *@ClassName: next.config
 *@Description:
 *@Date 2021/7/16
 */
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.jpg$/,
      use: [
        {
          loader: 'file-loader'
        }
      ],
    })

    return config
  },
}
