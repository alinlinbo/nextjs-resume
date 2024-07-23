import styled from 'styled-components'
import {
  motion,
  MotionValue,
  ScrollMotionValues,
  useInView,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
const CareerHead = styled.div`
  position: sticky;
  top: 0;
  height: 100px;
  width: 100vw;
  text-align: center;
`
const BlockWrap = styled.div`
  position: sticky;
  top: 100px;
  height: calc(100vh - 100px);
  overflow: hidden;
`
const HeadTitle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size:48px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  height: calc(300vh - 100px);
  width: 100%;
  background: #f1efed;
  position: relative;
  border-top: 1px solid black;
  ul{
    list-style: inside disc
  }
  ol{
    list-style: inside decimal
  }
`
const CareerBlock = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 300px);
  border-top: 1px solid black;
  background:white;
  position: absolute;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;;
  grid-template-rows: 100px auto;
  justify-items: center;
  align-items: center;
  font-size: 20px;
  .content{
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 28px;
    font-size: 18px;
    line-height: 32px;
  }
  .skills{
    align-items: center;
    img{
      width: 82px;
      height: 82px;
      margin-bottom: 12px;
    }
  }
  .skills,.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 50px 50px auto;
    .job{
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .skills{
      display: none;
    }
    .time,.company-name{
      font-size: 16px;
      text-align: center;
    }
    .content{
      padding: 0 12px;
      font-size: 14px;
      line-height: 20px;
    }
  }
`
const useScrollTop = (index:number,y:number,screenHeight:number)=>{
  const finalY = useMotionValue(index*100)
  const translateX = useTransform(
    finalY,
    [screenHeight-(3-index)*100, index*100],
    [200, 0]
  )
  const blockHeight = screenHeight - 400
  const min = screenHeight+index*blockHeight
  const max = min+blockHeight
  if (y<min){
    finalY.set(screenHeight-100-(3-index)*100)
  }else if (y>=min&&y<=max){
    const diff = y-min
    finalY.set(screenHeight-100-(3-index)*100 - diff)
  }else if (y > max){
    finalY.set(index*100)
  }
  return {
    translateX:translateX,
    scrollTop:finalY
  }
}
const CareerSection = ({pageY}:{pageY:MotionValue<number>})=>{
  const [y,setY] = useState(0)
  const windowSize = useWindowSize()
  const TitleSize = useMotionValue('48px')
  const TitleHeight = useMotionValue(100)
  useEffect(()=>{
    pageY.onChange((y)=>{
      const screenHeight = windowSize.height
      setY(y)
      const limit = 2*screenHeight - 400
      let percent = 1
      if (y<screenHeight){
        percent = 1
      }else if (y>=screenHeight&&y<=limit){
        percent = 1-(y-screenHeight)/(screenHeight - 400)
      }else{
        percent = 0
      }
      if (windowSize.width<450){
        TitleSize.set(42+12*percent+'px')
      }else{
        TitleSize.set(48+96*percent+'px')
      }
      TitleHeight.set(100+percent*(screenHeight-400))
    })
  },[TitleHeight, TitleSize, pageY, windowSize.height])
  const { scrollTop:blockScroll1,translateX:translateX1 } = useScrollTop(0,y,windowSize.height)
  const { scrollTop:blockScroll2,translateX:translateX2 } = useScrollTop(1,y,windowSize.height)
  const { scrollTop:blockScroll3,translateX:translateX3 } = useScrollTop(2,y,windowSize.height)
  return<Container>
    <CareerHead>
      <HeadTitle style={{fontSize:TitleSize,height:TitleHeight}}>
        CAREER
      </HeadTitle>
    </CareerHead>
    <BlockWrap>
      <CareerBlock style={{top:blockScroll1}} >
        <div className={'time'}>
          2021.03 - 2022.07
        </div>
        <div className={'company-name'}>
          珠海唐佛科技有限公司
        </div>
        <div className={'job'}>
          Web前端
        </div>
        <div className={'content'}>
          <div>
            岗位职责：负责公司微信公众号和后台管理系统的开发
          </div>
          <ol>
          <li>完善单据打印功能，利用Promise特性解决了打印顺序不同步的问题，封装打印公共方法，降低了同类需求开发成本</li>
          <li>使用jquery开发微信公众号和微站实现了首页、文章、敲钟、点灯、法会等模块的页面交 
              互、接口对接和样式，针对业务场景封装底部及顶部导航栏、头部返回等公用组件，提高代 
              码复用。</li>
          <li>使用vue和jQuery开发寺院微站后台管理。</li>
          </ol>
        </div>
        <div
          className={'skills'}>
          {['wechat-logo.png','miniapp.png','jq-logo.png'].map((src,index) =>
            <motion.img
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              key={src}
              style={{opacity:0,marginBottom:20}}
              src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/'+src} />
          )}
        </div>
      </CareerBlock>
      <CareerBlock style={{top:blockScroll2}} >
        <div className={'time'}>
          2022.08 - 2023.11
        </div>
        <div className={'company-name'}>
          珠海齐润科技有限公司
        </div>
        <div className={'job'}>
          Web前端
        </div>
        <div className={'content'}>
          <div>
            岗位职责：负责物业小程序及关联后台系统的前端开发
          </div>
          <ol>
          <li>使用 uni-app开发了物业小程序，实现了缴费、房屋管理、报修管理等模块的页面、接口对 
               接以及交互。以及axios封装和导航栏等公用组件的封装。
          </li>
          <li>使用 Vue 3开发物业后台管理。 </li>
          </ol>
        </div>
        <div
          className={'skills'}>
          {['vue-logo.png','wechat-logo.png','miniapp.png'].map((src,index) =>
            <motion.img
              key={src}
              style={{translateY:translateX2.get()*(1+index)+'px'}}
              src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/'+src} />
          )}
        </div>
      </CareerBlock>
      <CareerBlock style={{top:blockScroll3}} >
        <div className={'time'}>
          2023.11 - 2024.06
        </div>
        <div className={'company-name'}>
          远程工作
        </div>
        <div className={'job'}>
          Web前端
        </div>
        <div className={'content'}>
          <div>
            岗位职责：负责调解系统及调解小程序的前端开发
          </div>
          <ol>
              <li>在任务管理模块中，我负责设计和实现了模板的创建和编辑功能。每个模板可以包含多个阶段，每个阶段又可以包含多个子任务。这种设计提高了任务管理的灵活性和可扩展性，使用户能够根据实际需求定制任务流程</li>
              <li>在文书模块中，我设计并实现了一套全面的文件管理系统。该系统包括一个动态的文件树，可以根据用户的交互实时加载子目录和文件列表。用户可以在指定的目录中添加新的子目录，也可以通过点击目录路径快速加载当前目录。此外，我还开发了一系列文件处理功能，包括文件夹下载（基于jszip插件）、单文件下载、多文件下载、移动文件位置、上传文件和删除文件。为了提高用户体验，我还添加了图片预览功能。这些功能大大提高了文书工作的效率和便利性。</li>
              <li>在案件详情模块中，新增调解程序实现了选择不同的程序生成动态表单。我设计了多个分类，包括基本详情、主办人和当事人等，每个分类都可以单独编辑并保存。这种设计提供了高度的灵活性，使得用户可以根据具体的案件需求定制和管理案件的详细信息。</li>
          </ol>
        </div>
        <div
          className={'skills'}>
          {['vue-logo.png','wechat-logo.png','miniapp.png'].map((src,index) =>
            <motion.img
              key={src}
              style={{translateY:translateX3.get()*(1+index)+'px'}}
              src={'https://septem1997-blog.oss-cn-hangzhou.aliyuncs.com/'+src} />
          )}
        </div>
      </CareerBlock>
    </BlockWrap>
  </Container>
}
export default CareerSection
