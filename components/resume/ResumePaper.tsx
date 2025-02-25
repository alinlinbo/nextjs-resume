import styles from '../../assets/styles/resume.module.sass'
import Image from 'next/image'
import useWindowSize from '../../hooks/useWindowSize'

const ResumePaper = () => {
  useWindowSize()
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <div className={styles.pageHeader}>
          <div className={styles.avatar}>
            <div className={styles['avatar-overlay']}>
              <div className={styles['avatar-img-box']}>
                <Image
                  alt={''}
                  layout={'fill'}
                  objectFit="cover"
                  src={'/head.jpg'}
                />
              </div>
            </div>
          </div>
          <div className={styles.personInfo}>
            <div className={styles.name}>陈燕灵</div>
            <div className={styles.offer}>意向岗位：Web前端开发 | 随时到岗</div>
            <div className={styles.info}>
              28岁 | 邮箱：1144381579@qq.com |
              <span className={'not-print'}> 微信:BOBOALINLIN</span>
              <span className={'only-print'}> 手机:15919213326</span>
              <br />
              <div>学校：广东省科学技术职业学院 - 软件技术 | 大专</div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            专业
            <br />
            技能
          </div>
          <div className={styles.content}>
            <ul className="space-y-2">
              <li>熟练掌握 HTML5、CSS3、JavaScript、TypeScript，具备扎实的前端开发基础</li>
              <li>熟悉 Vue2/3 技术栈及相关全家桶，熟练使用 UniApp 进行跨平台开发</li>
              <li>熟悉 Node.js 后端开发，具有 MySQL 数据库开发经验</li>
              <li>具备前端性能优化经验，熟悉虚拟列表、防抖节流、组件按需加载等渲染优化方案</li>
              <li>
                具备 Nuxt.js 服务端渲染、Konva.js 图形处理、Tailwind CSS 样式开发经验
              </li>
              <li>
                高效运用 Copilot、Cursor 等 AI 辅助工具提升开发效率
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            项目
            <br />
            经历
          </div>
          <div className={styles.content}>
            <div className={styles['content-head']}>
              <div>演唱会编辑系统</div>
              <div>2024.06~2024.12</div>
            </div>
            <div>
              <strong>项目描述:</strong>基于 Nuxt3 + Vue3
              开发的现代化演唱会编辑系统，实现场馆座位图可视化编辑等核心功能。
              <div>
                <strong>技术亮点:</strong>
              </div>
              <ol>
                <li>
                  基于 Canvas
                  技术栈（Konva/Vue-Konva）实现了复杂的场馆座位图编辑器：
                  <ul className="ml-4">
                    <li>
                      支持四边形、多边形、曲线多边形等绘制：基于三次贝塞尔曲线实现了多点精准控制的绘图功能。
                    </li>
                    <li>
                      实现了场馆分区、座位布局的可视化配置。其中座位布局兼并自动生成和自定义两种方式，自定义布局实现了一个分区两种票价并且分区按照座位比例显示对应颜色。
                      分区编辑实现了
                      旋转、缩放和分区名大小偏移量自定义等、座位布局、座位颜色设置等功能。
                    </li>
                    <li>提供直观的拖拽式操作界面</li>
                  </ul>
                </li>
                <li>
                  采用最新技术栈构建高性能 Web 应用：
                  <ul className="ml-4">
                    <li>基于 Vue Query 实现高效的数据状态管理</li>
                    <li>使用 TypeScript 确保代码质量和可维护性</li>
                    <li>
                      使用 Tailwindcss 和Naive UI
                      组件库构建现代化的用户界面，自定义富文本编辑器（Tiptap）满足动态的内容管理需求
                    </li>
                  </ul>
                </li>
                <li>
                  优化：
                  <ul className="ml-4">
                    <li>
                      图层管理：通过配置对象解决了频繁操作DOM产生大量临时对象引起画面闪烁的问题，并且减少内存使用
                    </li>
                    <li>
                      实现图形渲染性能优化：使用计算属性和响应式数据优化重绘逻辑，图形元素的按需渲染和懒加载，通过
                      nextTick 优化批量 DOM 更新
                    </li>
                    <li>
                      交互性能优化：实现图形元素的缓存机制，优化拖拽和旋转等高频操作的性能，使用节流和防抖处理密集型用户交互
                    </li>
                    <li>文本渲染优化:动态计算最优字体大小</li>
                  </ul>
                </li>
              </ol>
              <div>
                <strong>主要业绩:</strong>
              </div>
              <ol>
                <li>实现钢笔工具绘制自由形状分区。</li>
                <li>智能座位布局。 </li>
                <li>通过性能优化，实现了大型场馆场景下的流畅操作体验</li>
              </ol>
            </div>
            <div style={{ pageBreakAfter: 'always' }}></div>
            <div className={styles['content-head']}>
              <div>抢票网站</div>
              <div>2024.06~2024.12</div>
            </div>
            <div>
              <strong>项目描述:</strong>基于 uni-app 开发的跨平台票务抢票应用。
              <div>
                <strong>核心功能:</strong>
              </div>
              <ol>
                <li>
                  座位渲染:
                  <ul className="ml-4">
                    <li>
                      通过将座位区域分成多个扇区，只渲染可视区域内的座位，实现了座位的分区渲染，避免一次性渲染所有座位，使得可设置数万座位
                    </li>
                    <li>
                      使用 Konva
                      的分层系统，将场馆分为多个图层，拖动和缩放时只更新必要的图层，避免整个画布重绘。根据缩放比例动态调整渲染内容，缩放比例小于
                      0.45
                      时不渲染具体座位，提升性能，实现了可视区域的动态计算和更新
                    </li>
                    <li>
                      使用 Hammer.js
                      实现了移动端手势操作，支持多点触控、缩放和旋转等交互
                    </li>
                    <li>
                      采用节流（throttle）和防抖（debounce）处理密集型操作，实现事件委托，减少事件监听器数量，提升用户交互体验
                    </li>
                    <li>
                      动态计算拖动边界，设置了最大和最小缩放比例，动态计算可拖动的最大范围，防止场馆被拖出视图
                    </li>
                  </ul>
                </li>
                <li>
                  多人模式使用 WebSocket
                  实现实时信息同步，确保多用户同时抢票时的数据一致性
                </li>
              </ol>
              <div>
                <strong>项目成果:</strong>
              </div>
              <ul className={styles['ul-style']}>
                <li>
                  实现了高性能的座位渲染和互动体验，支持数万座位的流畅展示
                </li>
              </ul>
            </div>
            <div className={styles['content-head']}>
              <div>广东法智时代科技</div>
              <div>2023.11~2025.01</div>
            </div>
            <div>
              <strong>调解系统及配套小程序</strong>
              <div>
                <strong>主要业绩：</strong>
              </div>
              <ol>
                <li>
                  <span className={styles.itemTitle}>
                    <strong>任务模板：</strong>
                  </span>
                  设计并实现多层级任务模板系统，支持阶段-子任务的灵活嵌套配置，提高了任务管理的灵活性和可扩展性，使用户能够根据实际需求定制任务流程
                </li>
                <li>
                  <span className={styles.itemTitle}>
                    <strong>文书管理：</strong>
                  </span>
                  实现基于虚拟化的动态文件树，支持大规模文件目录的高效加载和实时更新
                  <br />
                  集成多功能文件处理模块，包括批量下载(JSZip)、文件迁移、在线预览等功能
                </li>
                <li>
                  <span className={styles.itemTitle}>
                    <strong>动态案件管理：</strong>
                  </span>
                  实现动态表单生成，支持多种调解程序的差异化表单定制
                </li>
              </ol>
            </div>

            <div className={styles['content-head']}>
              <div>珠海齐润科技有限公司</div>
              <div>2022.08~2023.11</div>
            </div>
            <div>
              <strong>岗位职责：</strong>负责物业小程序及关联后台系统的前端开发
              <div>
                <strong>主要业绩：</strong>
              </div>
              <ol>
                <li>
                  基于 uni-app 开发物业管理小程序
                  <ul className="ml-4">
                    <li>
                      设计并实现包含缴费管理、房屋管理、报修工单等核心业务模块
                    </li>
                    <li>
                      封装 axios
                      请求库，统一处理请求拦截、响应拦截、错误处理等，提升代码复用性和维护性
                    </li>
                    <li>
                      开发可复用的自定义组件库，包括导航栏、表单组件等，显著提升开发效率
                    </li>
                  </ul>
                </li>
                <li>
                  使用 Vue 3 + TypeScript 开发物业后台管理系统
                  <ul className="ml-4">
                    <li>
                      采用 Composition API 和 TypeScript
                      确保代码类型安全和可维护性
                    </li>
                    <li>
                      实现后台管理系统的用户管理、权限控制、数据统计等功能模块
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            <div style={{ pageBreakAfter: 'always' }}></div>
            <div className={styles['content-head']}>
              <div>珠海唐佛科技有限公司</div>
              <div>2021.03~2022.07</div>
            </div>
            <div>
              <strong>微信公众号，终端机页面和后台管理系统</strong>
              <div>
                <strong>主要业绩：</strong>
              </div>
              <ol>
                <li>
                  设计并封装通用打印组件，提升代码复用性，显著降低后续需求开发成本
                </li>
                <li>
                  微信公众号及微站前端开发
                  <ul className="ml-4">
                    <li>
                      使用 jQuery 开发首页、文章、敲钟、点灯、法会等核心功能模块
                    </li>
                    <li>
                      封装底部导航栏、顶部返回等高复用性组件，提升开发效率和用户体验
                    </li>
                  </ul>
                </li>
                <li>
                  使用vue和jQuery开发寺院微站后台管理。实现文章管理、用户数据统计、活动管理等功能模块
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.title}>
            自我
            <br />
            评价
          </div>
          <div className={styles.content} style={{ border: 'none' }}>
            <ul>
              <li>
                热爱编程，善于利用编程解决生活中遇到的问题，能主动学习并不断更新自身技能
              </li>
              <li>
                多年 JavaScript(TypeScript )以及响应式网站开发经验，熟练掌握
                ES6+/CSS 3新特性
              </li>
              <li>
                熟练掌握Vue全家桶，熟悉uni-app，小程序开发，有uni-app项目开发经验
              </li>
              <li>
                良好的产品审美，能独立、按时按量完成工作任务，并协助他人工作，勇于沟通
              </li>
              <li>
                能熟练使用Google、StackOverflow、GitHub等平台解决工作中遇到的问题
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.qrCode}>
          <div className={styles['qrCode-box']}>
            <Image
              alt={''}
              loading={'eager'}
              width={128}
              height={128}
              src="/qrCode.png"
            />
            <div>线上简历</div>
            <div style={{ fontSize: 12 }}>https://yanling.site</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePaper
