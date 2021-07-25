/**
 *@author wangbo
 *@ClassName: next.config
 *@Description:
 *@Date 2021/7/16
 */
module.exports = {
  webpack: (config, options) => {
    const isServer = options.isServer // 判断是否是node环境
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      test: /\.jpg$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputPath: 'static', // 硬盘路径
            publicPath: '/_next/static' // 网站路径
          }
        }
      ],
    })

    return config
  },
}
