import img1 from '../assets/nav/新媒体@2x.png'
import img1a from '../assets/nav/新媒体02@2x.png'

import img2 from '../assets/nav/Python@2x.png'
import img2a from '../assets/nav/Python02@2x.png'

import img3 from '../assets/nav/生活@2x.png'
import img3a from '../assets/nav/生活02@2x.png'

import img4 from '../assets/nav/剪辑@2x.png'
import img4a from '../assets/nav/剪辑02@2x.png'

import img5 from '../assets/nav/主播@2x.png'
import img5a from '../assets/nav/主播02@2x.png'

export const classesChidren = [
  {
    label: '新媒体短视频+直播电商运营',
    value: 'http://med.cledu.cn',
    img: img1,
    imga: img1a,
    width: 22,
    height: 24,
  },
  {
    label: 'Python数据分析',
    value: 'http://dat.cledu.cn',
    img: img2,
    imga: img2a,
    width: 23,
    height: 23,
  },
  {
    label: '抖音本地生活',
    action: 'onKeFuAction',
    img: img3,
    imga: img3a,
    width: 24,
    height: 22,
  },
  {
    label: '影视后期剪辑+短视频运营',
    action: 'onKeFuAction',
    img: img4,
    imga: img4a,
    width: 26,
    height: 25,
  },
  {
    label: '电商主播实战特训营',
    action: 'onKeFuAction',
    img: img5,
    imga: img5a,
    width: 23,
    height: 24,
  },
]
export const menus = [
  {
    label: '首 页',
    value: '/',
  },
  {
    label: '品质课程',
    value: '',
    children: classesChidren,
  },
  {
    label: '学习资源',
    value: '',
    action: 'onKeFuAction',
  },
  {
    label: '教研师资',
    value: '/teacher',
  },
  {
    label: '校企服务',
    value: '',
    action: 'onKeFuAction',
  },
  {
    label: '行业资讯',
    value: '',
    action: 'onKeFuAction',
  },
  {
    label: '关于创联',
    value: '/about/info',
  },
]

export function onKeFuAction() {
  // @ts-ignore
  hz6d_is_exist(
    'setIsinvited()%3Bwindow.open(#liyc#https%3A%2F%2Fwww19.53kf.com%2FwebCompany.php%3Fkf_sign%3DDEwMzMTc0MU2MjEzNzkwNTAzNzI5MDAxNzMwNTAwOTE%3D%26arg%3D11050091%26style%3D1%26language%3Dcn%26charset%3DGBK%26kflist%3Doff%26kf%3D%26zdkf_type%3D1%26lnk_overflow%3D0%26callback_id6ds%3D%26referer%3Dhttp%253A%252F%252Flocalhost%253A5174%252F%26keyword%3Dhttp%253A%252F%252Flocalhost%253A5174%252F%26tfrom%3D1%26tpl%3Dcrystal_blue%26uid%3D3fabcb420ce2d92eac3cac8ed76635e9%26is_group%3D%26is_group%3D#liyc#%2C%20#liyc#_blank#liyc#%2C%20#liyc#height%3D600%2Cwidth%3D800%2Ctop%3D240%2Cleft%3D560%2Cstatus%3Dyes%2Ctoolbar%3Dno%2Cmenubar%3Dno%2Cresizable%3Dyes%2Cscrollbars%3Dno%2Clocation%3Dno%2Ctitlebar%3Dno#liyc#)',
  )
}

export function onAction(action: string) {
  if (action === 'onKeFuAction') onKeFuAction()
}

export function onScrollToJingPinKe() {
  const onClick = (s: any) => {
    if (s.value?.startsWith('http')) {
      return window.open(s.value, '_blank')
    }
    if (s?.action === 'onKeFuAction') {
      onKeFuAction()
    }
  }

  return { onClick }
}

import avatarhan from '~/assets/teacher-page/avatar-teacher-han@2x.png'
import imghan from '~/assets/teacher-page/teacher-han@2x.png'

import avatarli from '~/assets/teacher-page/avatar-teacher-li@2x.png'
import imgli from '~/assets/teacher-page/teacher-li@2x.png'

import avatarfan from '~/assets/teacher-page/avatar-teacher-fan@2x.png'
import imgfan from '~/assets/teacher-page/fanlaoshi@2x.png'

// 总监级导师
export const zongJianTeacherList = [
  {
    avatar: avatarhan,
    name: '韩老师',
    titles: [`创联集团新媒体运营负责人`, `新媒体运营教学研发总监`],
    desc: '15年新媒体运营、直播运营、电商运营、跨境电商操盘相关经验。',
    list: [
      '曾就职于多家电商公司，负责电商直播、跨境电商团队搭建与运营，达成年销售额破亿佳绩，后创立融创嘉禾科技有限公司，从事直播运营相关业务，成功孵化多名主播，月均带货GMV600万。',
      '精通新媒体、短视频、直播、跨境电商相关业务领域，对于运营策划、快速起号、爆款打造、促活留存、持续运营有充足实践经验。',
      '后入职创联教育，担任新媒体运营负责人、新媒体教学研发总监职务，负责创联集团新媒体运营及新媒体课程设计、实训实操相关工作。',
      '行业经验丰富，理论深入扎实，行业经验充足，授课认真、详尽、幽默，擅长以实战方式指导学生，深受学员欢迎。',
    ],
    img: imghan,
  },
  {
    avatar: avatarli,
    name: '李老师',
    titles: [`创联集团新媒体专家`, `产品总监`],
    desc: '13年新媒体运营实施相关经验',
    list: [
      '熟悉新媒体运营、直播运营、跨境电商相关领域，曾就职于多家上市企业负责产品策划、运营、实施相关工作。',
      '熟悉MCN机构运营流程，有批量起号、直播选品、主播培养、投流转化相关经验。',
      '授课认真、详尽、富有激情，思路清晰擅长以启发式教育引导学生，深受学员欢迎。实施相关工作。',
    ],
    img: imgli,
  },

  {
    avatar: avatarfan,
    name: '樊老师',
    titles: [`创联集团新媒体金牌讲师`],
    desc: '13年新媒体运营实施相关经验',
    list: [
      '8年互联网营销推广工作经验，对互联网+新媒体、新营销有独到的见解和认知，曾为中国移动，中国电信，进行营销推广策划，熟悉完整新媒体推广链路，具备充分的实战经验。',
      '讲课注重细节，侧重体验实操，让学员学有所获。',
    ],
    img: imgfan,
  },
]

// 企业技术骨干
export const guganTeacherList = []
