import type { NextPage } from 'next'
import styles from '../assets/styles/Home.module.css'
import IntroSection from '../components/about/IntroSection'
import CareerSection from '../components/about/CareerSection'
import ProjectSection from '../components/about/ProjectSection'
import { useMotionValue  } from 'framer-motion'
import AssessmentSection from '../components/about/AssessmentSection'
import FootSection from '../components/about/FootSection'
import Head from 'next/head'

const About: NextPage = () => {
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
      {/* <ProjectSection pageY={pageY}/> */}
      <FootSection />
    </div>
  )
}

export default About
