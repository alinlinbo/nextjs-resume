import styles from '../../assets/styles/resume.module.sass'
import Image from 'next/image'
import useWindowSize from '../../hooks/useWindowSize'

const ResumePaper = () => {
  useWindowSize()
  return <div className={styles.container}>
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.avatar}>
          <div className={styles['avatar-overlay']}>
            <div className={styles['avatar-img-box']}>
              <Image alt={""} layout={'fill'} objectFit="cover" src={'/head.png'} />
            </div>
          </div>
        </div>
        <div className={styles.personInfo}>
          <div className={styles.name}>
            陈燕灵
          </div>
          <div className={styles.offer}>
            意向岗位：Web前端开发 | 随时到岗
          </div>
          <div className={styles.info}>
            28岁 |
            邮箱：1144381579@qq.com |
            <span className={'not-print'}> 微信:BOBOALINLIN</span>
            <span className={'only-print'}> 手机:15919213326</span>
            <br />
            <div>学校：广东省科学技术职业学院 - 软件技术 | 大专</div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          专业<br />技能
        </div>
        <div className={styles.content}>
          <ul>
            <li>编程语言：HTML5，CSS3，JavaScript，TypeScript</li>
            <li>前端框架：Vue，jQuery，小程序</li>
            <li>ui组件库：Element，vant，Ant Design Vue，uview</li>
            <li>其他：Git，Webpack，SASS，Nuxt.js</li>
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          工作<br />经历
        </div>
        <div className={styles.content}>
          <div className={styles['content-head']}>
            <div>2023.06~2024.03</div>
            <div>远程工作</div>
            <div>web前端</div>
          </div>
          <div>
            <strong>岗位职责：</strong>负责调解系统及调解小程序的前端开发
            <div><strong>主要业绩：</strong></div>
            <ol>
              <li>在任务管理模块中，我负责设计和实现了模板的创建和编辑功能。每个模板可以包含多个阶段，每个阶段又可以包含多个子任务。这种设计提高了任务管理的灵活性和可扩展性，使用户能够根据实际需求定制任务流程</li>
              <li>在文书模块中，我设计并实现了一套全面的文件管理系统。该系统包括一个动态的文件树，可以根据用户的交互实时加载子目录和文件列表。用户可以在指定的目录中添加新的子目录，也可以通过点击目录路径快速加载当前目录。此外，我还开发了一系列文件处理功能，包括文件夹下载（基于jszip插件）、单文件下载、多文件下载、移动文件位置、上传文件和删除文件。为了提高用户体验，我还添加了图片预览功能。这些功能大大提高了文书工作的效率和便利性。</li>
              <li>在案件详情模块中，新增调解程序实现了选择不同的程序生成动态表单。我设计了多个分类，包括基本详情、主办人和当事人等，每个分类都可以单独编辑并保存。这种设计提供了高度的灵活性，使得用户可以根据具体的案件需求定制和管理案件的详细信息。</li>
            </ol>
          </div>

          <div className={styles['content-head']}>
            <div>20220.08~2023.01</div>
            <div>珠海齐润科技有限公司</div>
            <div>前端开发</div>
          </div>
          <div>
            <strong>岗位职责：</strong>负责物业小程序及关联后台系统的前端开发
            <div><strong>主要业绩：</strong></div>
            <ol>
              <li>使用 uni-app开发了物业小程序，实现了缴费、房屋管理、报修管理等模块的页面、接口对 
                   接以及交互。以及axios封装和导航栏等公用组件的封装。
              </li>
              <li>使用 Vue 3开发物业后台管理。 </li>
            </ol>
          </div>
          <div style={{pageBreakAfter:'always'}}></div>
          <div className={styles['content-head']}>
            <div>2021.03~2022.07</div>
            <div>珠海唐佛科技有限公司</div>
            <div>前端开发</div>
          </div>
          <div>
            <strong>岗位职责：</strong>负责公司微信公众号，终端机页面和后台管理系统的开发
            <div><strong>主要业绩：</strong></div>
            <ol>
              <li>完善单据打印功能，利用Promise特性解决了打印顺序不同步的问题，封装打印公共方法，降低了同类需求开发成本</li>
              <li>使用jquery开发微信公众号和微站实现了首页、文章、敲钟、点灯、法会等模块的页面交 
                互、接口对接和样式，针对业务场景封装底部及顶部导航栏、头部返回等公用组件，提高代 
                码复用。</li>
              <li>使用vue和jQuery开发寺院微站后台管理。</li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          主要<br />项目
        </div>
        <div className={styles.content}>
        <div className={styles['content-head']}>
            <div>调解系统 </div>
            <div>PC端</div>
          </div>
          <div>
          <div><strong>项目简介：</strong>基于vue3+Typescript开发的调解系统</div>
            <div>
              <strong>项目重点：</strong>
            </div>
            <ol>
            <li>
              实现了一个灵活且可扩展的任务管理模块，支持任务模板的创建和编辑，以满足用户定制任务流程的需求
              </li>
              <li>
              实现了一套全面的文件管理系统，包括动态文件树和一系列文件处理功能，以提高文书工作的效率和便利性。
              </li>
              <li>
              实现了一个灵活且可扩展的任务管理模块，支持任务模板的创建和编辑，以满足用户定制任务流程的需求
              </li>
              
            </ol>
          </div>
          <div className={styles['content-head']}>
            <div>润通联合云管家 </div>
            <div>微信小程序</div>
          </div>
          <div>
            <div><strong>项目简介：</strong>基于uniapp框架开发的微信小程序的缴费小程序</div>
            <div>
              <strong>项目重点：</strong>
            </div>
            <ol>
              <li>
              实现了缴费、房屋管理、报修管 
              理等模块的页面、接口对接以及交互。以及axios封装和导航栏等公用组件的封装。
              </li>
              
            </ol>
          </div>
          <div className={styles['content-head']}>
            <div>寺院公众号项目</div>
            <div>手机端，终端机</div>
          </div>
          <div><strong>项目简介：</strong>基于jQuery开发的寺院系统</div>
          <div>
            <div>
              <strong>项目重点：</strong>
            </div>
            <ol>
              <li>
                开发了在线敲钟、点灯、法会预约、远程供佛等功能
              </li>
              <li>适配了不同分辨率的终端机。实现了的大小佛像穿插排列的布局</li>
              <li>
                实现了不同纸张大小的打印功能，根据打印纸张大小自动调整打印内容的大小
              </li>
            </ol>
          </div>
          <div style={{pageBreakAfter:'always'}}></div>
          <div className={styles['content-head']}>
            <div>新八佰伴等商城</div>
            <div>小程序</div>
          </div>
          <div><strong>项目简介：</strong>基于uni-app框架开发的微信小程序商城</div>
          <div>
            <div>
              <strong>项目重点：</strong>
            </div>
            <ol>
              <li>
              基于uni-app框架开发的微信小程序商城，项目使用uview组件和uni-app自带的组 
            件，完成了购物车、汇率、物流、详情、提交订单等模块的接口对接及样式修改
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          自我<br />评价
        </div>
        <div className={styles.content} style={{ border: 'none' }}>
          <ul>
            <li>热爱编程，善于利用编程解决生活中遇到的问题，能主动学习并不断更新自身技能</li>
            <li>多年 JavaScript(TypeScript )以及响应式网站开发经验，熟练掌握 ES6+/CSS 3新特性</li>
            <li>熟练掌握Vue全家桶，熟悉uni-app，小程序开发，有uni-app项目开发经验</li>
            <li>良好的产品审美，能独立、按时按量完成工作任务，并协助他人工作，勇于沟通</li>
            <li>能熟练使用Google、StackOverflow、GitHub等平台解决工作中遇到的问题</li>
          </ul>
        </div>
      </div>
      <div className={styles.qrCode}>
        <div className={styles['qrCode-box']}>
          <Image alt={""} loading={'eager'} width={128} height={128}
                 src='/qrCode.png' />
          <div>线上简历</div>
          <div style={{fontSize:12}}>https://www.yanling.fun</div>
        </div>
      </div>
    </div>
  </div>
}

export default ResumePaper
