import React, {useCallback} from 'react'
import styles from 'styles/first-post.module.scss'


export default function FirstPost() {
  const clickMe = useCallback(() => {
    console.log('click me')
  }, [])
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          内容
        </div>
      </div>
    </React.Fragment>
  )
}
