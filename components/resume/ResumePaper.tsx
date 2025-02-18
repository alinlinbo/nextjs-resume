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
            <li>其他：Git，Webpack，SASS，Nuxt.js，Konva.js，Tailwindcss</li>
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>
          工作<br />经历
        </div>
        <div className={styles.content}>
        <div className={styles['content-head']}>
            <div>2024.06~2024.12</div>
            <div>场馆售票系统</div>
            <div>前端开发</div>
          </div>
          <div>
            <strong>岗位职责：</strong>负责抢票网页及场馆售票系统的前端开发
            <div><strong>主要业绩：</strong></div>
            <ol>
              <li>实现钢笔工具绘制自由形状分区。
              </li>
              <li>智能座位布局。 </li>
              <li>大规模场馆性能优化。</li>
            </ol>
          </div>
          <div className={styles['content-head']}>
            <div>2023.11~2025.01</div>
            <div>广东法智时代科技</div>
            <div>web前端</div>
          </div>
          <div>
            <strong>岗位职责：</strong>负责调解系统及调解小程序的前端开发
            <div><strong>主要业绩：</strong></div>
            <ol>
              <li>
              <span className={styles.itemTitle}><strong>可编排任务：</strong></span>
              基于XState设计可视化任务编排系统，实现23种流程节点类型（条件分支/并行审批等）
              <br />
              开发DSL解释器自动生成动态表单，通过AST缓存策略实现表单渲染性能300%提升
              </li>
              <li><span className={styles.itemTitle}><strong>高性能文档系统：</strong></span>
              虚拟文件树引擎，集成树形Diff算法，万级节点加载时间从2000ms→50ms
              <br />
              构建Rust WASM文档比对核心，结合PDF.js实现多版本变更追踪，对比效率提升5倍</li>
              <li><span className={styles.itemTitle}><strong>智能案件管理体系：</strong></span>
              设计DAG可视化时间线，实现案件进度智能推演与风险预警
              <br />
              开发OT协同引擎，支持50+用户实时编辑，冲突解决率达98.7%
              <br />
              实现自然语言→SPL的自动转换系统，规则配置效率提升200%</li>
            </ol>
          </div>

          <div className={styles['content-head']}>
            <div>2022.08~2023.11</div>
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
            <div>场馆售票系统可视化配置平台 （技术栈：Vue + Canvas + Konva + WebGL） </div>
            
          </div>
          <div>
            <div>
            核心功能模块：
            </div>
            <ol>
            <li>
              <span className={styles.itemTitle}><strong>自由形状分区绘制：</strong></span>
              基于Canvas实现钢笔工具算法，支持贝塞尔曲线实时绘制与编辑，集成SVG路径解析器实现复杂形状的栅格化渲染
            </li>
            <li>
              <span className={styles.itemTitle}><strong>智能座位布局：</strong></span>
              基于网格的自动排布算法，支持不同价位区域智能划分
            </li>
            <li>
              <span className={styles.itemTitle}><strong>大规模场馆性能优化：</strong></span>
              实现视口动态加载策略，通过Web Worker预计算座位坐标，内存占用降低65%
              <br />
              开发分级渲染系统（LOD），近景采用Canvas矢量绘制，远景切换为WebGL点云渲染
              <br />
              设计区域可见性检测算法，结合脏矩形技术将渲染帧率稳定在60FPS
            </li>
              
            </ol>
          </div>
        <div className={styles['content-head']}>
            <div>智能调解协同平台 （技术栈：Vue3 + Typescript + Pinia + Vite + Web Workers） </div>
          </div>
          <div>
            <div>
            核心模块技术实现：
            </div>
            <ol>
            <li>
              <span className={styles.itemTitle}><strong>可编排任务：</strong></span>
              设计基于XState的流程状态机，实现可视化任务模板编辑器，支持嵌套审批、条件分支等23种流程节点
              <br />
              开发领域特定语言(DSL)解释器，实现JSON Schema到可视化表单的自动转换，表单渲染性能提升300%
              <br />
              构建AST转换管道，支持业务规则的热更新，动态注入验证逻辑实现零停机更新
              </li>
              <li>
              <span className={styles.itemTitle}><strong>文件管理系统：</strong></span>
              实现虚拟文件树渲染引擎，采用树形结构diff算法，万级节点渲染时间从2000ms优化至50ms
              <br />
              开发基于Rust WASM的文档比对引擎，集成PDF.js实现多版本差异高亮对比
              </li>
              <li>
              <span className={styles.itemTitle}><strong>案件流程编排系统：</strong></span>
              设计可视化时间线引擎，支持DAG(有向无环图)形式案件进度管理
              <br />
              实现业务规则引擎，支持自然语言转SPL(服务流程语言)的智能解析
              <br />
              开发实时协作冲突检测机制：
              采用OT(Operational Transformation)算法保障多人协同一致性
              基于Monaco Editor实现法律文书协同编辑
              使用CRDT实现案件标签系统的最终一致性
              </li>
              
            </ol>
          </div>
          <div style={{pageBreakAfter:'always'}}></div>
          <div className={styles['content-head']}>
            <div>润通联合云管家智慧物业平台（技术栈：UniApp+Vue3+TS+Pinia） </div>
            <div>微信小程序</div>
          </div>
          <div>
            <div><strong>项目简介：</strong>基于uniapp框架开发的微信小程序的缴费小程序</div>
            <div>
              <strong>项目重点：</strong>
            </div>
            <ol>
              <li>
              <span className={styles.itemTitle}><strong>功能实现：</strong></span>
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
                <span className={styles.itemTitle}><strong>在线功能：</strong></span>
                开发了在线敲钟、点灯、法会预约、远程供佛等功能
              </li>
              <li>
              <span className={styles.itemTitle}><strong>终端机适配：</strong></span>
              适配了不同分辨率的终端机。实现了的大小佛像穿插排列的布局
              </li>
              <li>
              <span className={styles.itemTitle}><strong>打印功能：</strong></span>
              实现了不同纸张大小的打印功能，根据打印纸张大小自动调整打印内容的大小
              </li>
            </ol>
          </div>
          
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
              <span className={styles.itemTitle}><strong>功能实现：</strong></span>
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
          <div style={{fontSize:12}}>https://yanling.site</div>
        </div>
      </div>
    </div>
  </div>
}

export default ResumePaper
