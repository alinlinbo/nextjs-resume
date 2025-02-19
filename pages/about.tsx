import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import IntroSection from '../components/about/IntroSection'
import CareerSection from '../components/about/CareerSection'
import ProjectSection from '../components/about/ProjectSection'
import { useMotionValue  } from 'framer-motion'
import AssessmentSection from '../components/about/AssessmentSection'
import FootSection from '../components/about/FootSection'
import Head from 'next/head'

import { useEffect } from 'react'
const About: NextPage = () => {
  useEffect(() => {
    // 检测是否在微信浏览器中打开
    // alert('请在微信以外的浏览器打开')
    const isWeixinBrowser = () => {
      const ua = navigator.userAgent.toLowerCase()
      
      return ua.indexOf('micromessenger') !== -1
    }
    if (typeof window !== 'undefined' && isWeixinBrowser()) {
      alert('请在微信以外的浏览器打开')
    }
  }, [])
  const pageY = useMotionValue(0)
  return (
    <div
      onScroll={(e)=>{
        const top = (e.target as HTMLDivElement).scrollTop
        pageY.set(top)
      }}
      style={{
        fontFamily:'youyuan'
      }}
      className={styles.container}
    >
      <Head>
        <title>关于</title>
      </Head>
      <IntroSection />
      <CareerSection pageY={pageY} />
      <AssessmentSection pageY={pageY} />
      <ProjectSection pageY={pageY}/>
      <FootSection />
    </div>
  )
}

export default About
