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
    value: '//med.cledu.cn',
    img: img1,
    imga: img1a,
    width: 22,
    height: 24,
  },
  {
    label: 'Python数据分析',
    value: '//dat.cledu.cn',
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
    value: '',
    action: 'onKeFuAction',
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
