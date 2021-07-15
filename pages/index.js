import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <h1>标题</h1>
      <p>段落</p>
      <style jsx={true}>{`
        h1 {
          color: red;
        }`
      }
      </style>
      {/*<style jsx global>{`*/}
      {/*  body {*/}
      {/*    background:green;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </div>
  )
}
