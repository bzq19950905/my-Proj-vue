// 我的页面，学生的功能列表渲染
const mineStudentAction = [
  {
    id: 1,
    text: '我的提问',
    span: '（2个新回答）',
    url: '/pages/question'
  },
  {
    id: 2,
    text: '我想见的导师',
    span: '（2个可见）',
    url: '/pages/teacher'
  },
  {
    id: 3,
    text: '我的收藏',
    url: '/pages/question'
  }
]

// 我的页面，导师的功能列表渲染
const mineTeacherAction = [
  {
    id: 1,
    text: '我的提问',
    span: '',
    url: '/pages/question'
  },
  {
    id: 2,
    text: '我的回答',
    span: '（2个待回答）',
    url: '/pages/question'
  },
  {
    id: 4,
    text: '想见我的人',
    url: '/pages/teacherWantSee'
  },
  {
    id: 5,
    text: '我的收藏',
    url: '/pages/question'
  }
]
// 活动报名页面，活动相关数据

const activityRegistrationData = [
  {
    id: 1,
    tit: '分享前端主流技术，探讨前端未来方向',
    iconSrc: '../assets/image/target.png'
  },
  {
    id: 2,
    tit: '北京市，草阳区，王金满卡法',
    iconSrc: '../assets/image/target.png'
  },
  {
    id: 3,
    tit: '2018-09-10 14:00 18:00',
    iconSrc: '../assets/image/target.png'
  },
  {
    id: 4,
    tit: '￥200/人',
    iconSrc: '../assets/image/target.png'
  },
  {
    id: 5,
    tit: '8人',
    iconSrc: '../assets/image/target.png'
  }
]

// 发起线下活动的数据,头部数据
const offlineActivitiesHeadData = [
  {
    id: 1,
    tit: '发起活动',
    num: 1
  },
  {
    id: 2,
    tit: '平台审核',
    num: 2
  },
  {
    id: 3,
    tit: '通知粉丝',
    num: 3
  },
  {
    id: 4,
    tit: '付费报名',
    num: 4
  },
  {
    id: 5,
    tit: '见面',
    num: 5
  }
]

const offlineActivitiesMainData = [
  {
    id: 1,
    tit: '活动主题'
  },
  {
    id: 2,
    tit: '活动时间'
  },
  {
    id: 3,
    tit: '活动地点'
  },
  {
    id: 4,
    tit: '活动价格'
  },
  {
    id: 5,
    tit: '活动名额'
  }
]

// 我的回答，数据
const QuestionAnsw = [
  {
    id: 1,
    isRead: true,
    title: '什么是绝对地址和相对地址',
    price: '￥20',
    isAnsw: true,
    isImport: '精华'
  },
  {
    id: 2,
    isRead: false,
    title: '切尔奇围绕所多付',
    price: '￥20',
    isAnsw: true,
    isImport: '精华'
  },
  {
    id: 3,
    isRead: true,
    title: '鬼斧神工沃尔夫',
    price: '￥20',
    isAnsw: true,
    isImport: '精华'
  },
  {
    id: 4,
    isRead: false,
    title: '附加费交付给皇帝和',
    price: '￥20',
    isAnsw: true,
    isImport: '精华'
  },
  {
    id: 5,
    isRead: true,
    title: '的也让他也让他也',
    price: '￥20',
    isAnsw: true,
    isImport: '精华'
  },
  {
    id: 6,
    isRead: false,
    title: '出内存VB你吃VB你吃v',
    price: '￥20',
    isAnsw: true,
    isImport: '精华'
  }
]

// 我的提问，数据
const QuestionQues = [
  {
    id: 1,
    isRead: false,
    title: '什么是绝对地址和相对地址1',
    price: '￥20',
    isAnsw: false,
    isImport: '精华'
  },
  {
    id: 2,
    isRead: true,
    title: '切尔奇围绕所多付1',
    price: '￥20',
    isAnsw: false,
    isImport: '精华'
  },
  {
    id: 3,
    isRead: true,
    title: '鬼斧神工沃尔夫1',
    price: '￥20',
    isAnsw: false,
    isImport: '精华'
  },
  {
    id: 4,
    isRead: false,
    title: '附加费交付给皇帝和1',
    price: '￥20',
    isAnsw: false,
    isImport: '精华'
  },
  {
    id: 5,
    isRead: true,
    title: '的也让他也让他也1',
    price: '￥20',
    isAnsw: false,
    isImport: '精华'
  },
  {
    id: 6,
    isRead: false,
    title: '出内存VB你吃VB你吃1v',
    price: '￥20',
    isAnsw: false,
    isImport: '精华'
  }
]

// 想见的导师，列表1
const TeacherList1 = [
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面',
    isAgree: true
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面',
    isAgree: false
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面',
    isAgree: false
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面',
    isAgree: false
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面',
    isAgree: false
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面',
    isAgree: false
  }
]

// 想见的导师，列表2
const TeacherList2 = [
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面2',
    isAgree: false
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面2',
    isAgree: true
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面2',
    isAgree: false
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面2',
    isAgree: false
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面2',
    isAgree: false
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面2',
    isAgree: false
  }
]

// 导师，账户余额，列表1
const TeacherWalletList1 = [
  {
    id: 1,
    price: '20',
    tit: '付费回答1-xxxx-什么是相对地址发的发生的发生的发生2',
    date: '07-28'
  },
  {
    id: 2,
    price: '20',
    tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生',
    date: '07-28'
  },
  {
    id: 3,
    price: '20',
    tit: '付费回答3-xxxx-什么是相对地址发的发生的发生的发生',
    date: '07-28'
  },
  {
    id: 4,
    price: '20',
    tit: '付费回答4-xxxx-什么是相对地址发的发生的发生的发生',
    date: '07-28'
  }
]

// 导师，账户余额，列表2
const TeacherWalletList2 = [
  {
    id: 201,
    price: '20',
    tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生2',
    date: '07-28'
  },
  {
    id: 202,
    price: '20',
    tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生',
    date: '07-28'
  },
  {
    id: 203,
    price: '20',
    tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生',
    date: '07-28'
  },
  {
    id: 204,
    price: '20',
    tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生',
    date: '07-28'
  }
]

// 想见我的人，数据
const TeacherWantSeeData = [
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  },
  {
    img: '../assets/image/headSculpture.jpg',
    name: 'Johoon',
    position: '阿里巴巴资深前端工程师',
    fans: '100',
    questuion: '150',
    see: '1000',
    title: '给年轻学者的基本网络技巧：',
    content: 'Google scholar页面'
  }
]

// 导师tarBar页面，数据
const tutorData = [
  {
    id: 1,
    title: '推荐'
  },
  {
    id: 2,
    title: 'Android'
  },
  {
    id: 3,
    title: 'IOS'
  },
  {
    id: 4,
    title: '前端'
  },
  {
    id: 5,
    title: '后端'
  },
  {
    id: 6,
    title: '设计'
  },
  {
    id: 7,
    title: '产品'
  }
]

// 动态页面，数据模拟
const trendsData = [
  {
    id: 1,
    title: '什么是绝对地址和相对地址？',
    des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
    collect: 2,
    use: 3,
    comment: 102
  },
  {
    id: 2,
    title: '什么是绝对地址和相对地址？',
    des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
    collect: 2,
    use: 3,
    comment: 102
  },
  {
    id: 3,
    title: '什么是绝对地址和相对地址？',
    des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
    collect: 2,
    use: 3,
    comment: 102
  },
  {
    id: 4,
    title: '什么是绝对地址和相对地址？',
    des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
    collect: 2,
    use: 3,
    comment: 102
  },
  {
    id: 5,
    title: '什么是绝对地址和相对地址？',
    des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
    collect: 2,
    use: 3,
    comment: 102
  }
]

export default {
  mineStudentAction: mineStudentAction,
  mineTeacherAction: mineTeacherAction,
  activityRegistrationData: activityRegistrationData,
  offlineActivitiesHeadData: offlineActivitiesHeadData,
  offlineActivitiesMainData: offlineActivitiesMainData,
  QuestionAnsw: QuestionAnsw,
  QuestionQues: QuestionQues,
  TeacherList1: TeacherList1,
  TeacherList2: TeacherList2,
  TeacherWalletList1: TeacherWalletList1,
  TeacherWalletList2: TeacherWalletList2,
  TeacherWantSeeData: TeacherWantSeeData,
  tutorData: tutorData,
  trendsData: trendsData
}
