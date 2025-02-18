import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from '../assets/styles/Home.module.css'
import styled from 'styled-components'
const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  .list{
    display: flex;
    flex-direction: column;
  }
`
const Home: NextPage = () => {
  useEffect(() => {
    // 检测是否在微信浏览器中打开
    const isWeixinBrowser = () => {
      const ua = navigator.userAgent.toLowerCase()
      return ua.indexOf('micromessenger') !== -1
    }

    if (typeof window !== 'undefined' && isWeixinBrowser()) {
      alert('请在浏览器中打开以获得最佳浏览体验')
    }
  }, [])
  return (
    <div className={styles.container}>
      <Page>
        <div className={'list'}>

        </div>
        <div className={'content'}>

        </div>
      </Page>
    </div>
  )
}

export default Home
