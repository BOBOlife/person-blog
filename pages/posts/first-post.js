import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  const clickMe = React.useCallback(() => {
    console.log('click me')
  }, [])
  return (
    <React.Fragment>
      <Head>
        <title>第一篇文章</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1" />
      </Head>
      <div>
        First Post
        <hr />
        回到首页<Link href="/"><a>点击这里</a></Link>
      </div>
    </React.Fragment>
  )
}
