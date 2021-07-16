import jpg from 'assets/images/1.jpg'

export default function Index() {
  return (
    <div>
      <h1>标题</h1>
      <p>段落</p>
      <img src={jpg} alt="" />
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
