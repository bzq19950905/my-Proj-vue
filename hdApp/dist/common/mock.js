'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 我的页面，学生的功能列表渲染
var mineStudentAction = [{
  id: 1,
  text: '我的提问',
  span: '（2个新回答）',
  url: '/pages/question'
}, {
  id: 2,
  text: '我想见的导师',
  span: '（2个可见）',
  url: '/pages/teacher'
}, {
  id: 3,
  text: '我的收藏',
  url: '/pages/question'
}];

// 我的页面，导师的功能列表渲染
var mineTeacherAction = [{
  id: 1,
  text: '我的提问',
  span: '',
  url: '/pages/question'
}, {
  id: 2,
  text: '我的回答',
  span: '（2个待回答）',
  url: '/pages/question'
}, {
  id: 4,
  text: '想见我的人',
  url: '/pages/teacherWantSee'
}, {
  id: 5,
  text: '我的收藏',
  url: '/pages/question'
}];
// 活动报名页面，活动相关数据

var activityRegistrationData = [{
  id: 1,
  tit: '分享前端主流技术，探讨前端未来方向',
  iconSrc: '../assets/image/target.png'
}, {
  id: 2,
  tit: '北京市，草阳区，王金满卡法',
  iconSrc: '../assets/image/target.png'
}, {
  id: 3,
  tit: '2018-09-10 14:00 18:00',
  iconSrc: '../assets/image/target.png'
}, {
  id: 4,
  tit: '￥200/人',
  iconSrc: '../assets/image/target.png'
}, {
  id: 5,
  tit: '8人',
  iconSrc: '../assets/image/target.png'
}];

// 发起线下活动的数据,头部数据
var offlineActivitiesHeadData = [{
  id: 1,
  tit: '发起活动',
  num: 1
}, {
  id: 2,
  tit: '平台审核',
  num: 2
}, {
  id: 3,
  tit: '通知粉丝',
  num: 3
}, {
  id: 4,
  tit: '付费报名',
  num: 4
}, {
  id: 5,
  tit: '见面',
  num: 5
}];

var offlineActivitiesMainData = [{
  id: 1,
  tit: '活动主题'
}, {
  id: 2,
  tit: '活动时间'
}, {
  id: 3,
  tit: '活动地点'
}, {
  id: 4,
  tit: '活动价格'
}, {
  id: 5,
  tit: '活动名额'
}];

// 我的回答，数据
var QuestionAnsw = [{
  id: 1,
  isRead: true,
  title: '什么是绝对地址和相对地址',
  price: '￥20',
  isAnsw: true,
  isImport: '精华'
}, {
  id: 2,
  isRead: false,
  title: '切尔奇围绕所多付',
  price: '￥20',
  isAnsw: true,
  isImport: '精华'
}, {
  id: 3,
  isRead: true,
  title: '鬼斧神工沃尔夫',
  price: '￥20',
  isAnsw: true,
  isImport: '精华'
}, {
  id: 4,
  isRead: false,
  title: '附加费交付给皇帝和',
  price: '￥20',
  isAnsw: true,
  isImport: '精华'
}, {
  id: 5,
  isRead: true,
  title: '的也让他也让他也',
  price: '￥20',
  isAnsw: true,
  isImport: '精华'
}, {
  id: 6,
  isRead: false,
  title: '出内存VB你吃VB你吃v',
  price: '￥20',
  isAnsw: true,
  isImport: '精华'
}];

// 我的提问，数据
var QuestionQues = [{
  id: 1,
  isRead: false,
  title: '什么是绝对地址和相对地址1',
  price: '￥20',
  isAnsw: false,
  isImport: '精华'
}, {
  id: 2,
  isRead: true,
  title: '切尔奇围绕所多付1',
  price: '￥20',
  isAnsw: false,
  isImport: '精华'
}, {
  id: 3,
  isRead: true,
  title: '鬼斧神工沃尔夫1',
  price: '￥20',
  isAnsw: false,
  isImport: '精华'
}, {
  id: 4,
  isRead: false,
  title: '附加费交付给皇帝和1',
  price: '￥20',
  isAnsw: false,
  isImport: '精华'
}, {
  id: 5,
  isRead: true,
  title: '的也让他也让他也1',
  price: '￥20',
  isAnsw: false,
  isImport: '精华'
}, {
  id: 6,
  isRead: false,
  title: '出内存VB你吃VB你吃1v',
  price: '￥20',
  isAnsw: false,
  isImport: '精华'
}];

// 想见的导师，列表1
var TeacherList1 = [{
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面',
  isAgree: true
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面',
  isAgree: false
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面',
  isAgree: false
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面',
  isAgree: false
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面',
  isAgree: false
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面',
  isAgree: false
}];

// 想见的导师，列表2
var TeacherList2 = [{
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面2',
  isAgree: false
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面2',
  isAgree: true
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面2',
  isAgree: false
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面2',
  isAgree: false
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面2',
  isAgree: false
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面2',
  isAgree: false
}];

// 导师，账户余额，列表1
var TeacherWalletList1 = [{
  id: 1,
  price: '20',
  tit: '付费回答1-xxxx-什么是相对地址发的发生的发生的发生2',
  date: '07-28'
}, {
  id: 2,
  price: '20',
  tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生',
  date: '07-28'
}, {
  id: 3,
  price: '20',
  tit: '付费回答3-xxxx-什么是相对地址发的发生的发生的发生',
  date: '07-28'
}, {
  id: 4,
  price: '20',
  tit: '付费回答4-xxxx-什么是相对地址发的发生的发生的发生',
  date: '07-28'
}];

// 导师，账户余额，列表2
var TeacherWalletList2 = [{
  id: 201,
  price: '20',
  tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生2',
  date: '07-28'
}, {
  id: 202,
  price: '20',
  tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生',
  date: '07-28'
}, {
  id: 203,
  price: '20',
  tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生',
  date: '07-28'
}, {
  id: 204,
  price: '20',
  tit: '付费回答2-xxxx-什么是相对地址发的发生的发生的发生',
  date: '07-28'
}];

// 想见我的人，数据
var TeacherWantSeeData = [{
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}, {
  img: '../assets/image/headSculpture.jpg',
  name: 'Johoon',
  position: '阿里巴巴资深前端工程师',
  fans: '100',
  questuion: '150',
  see: '1000',
  title: '给年轻学者的基本网络技巧：',
  content: 'Google scholar页面'
}];

// 导师tarBar页面，数据
var tutorData = [{
  id: 1,
  title: '推荐'
}, {
  id: 2,
  title: 'Android'
}, {
  id: 3,
  title: 'IOS'
}, {
  id: 4,
  title: '前端'
}, {
  id: 5,
  title: '后端'
}, {
  id: 6,
  title: '设计'
}, {
  id: 7,
  title: '产品'
}];

// 动态页面，数据模拟
var trendsData = [{
  id: 1,
  title: '什么是绝对地址和相对地址？',
  des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
  collect: 2,
  use: 3,
  comment: 102
}, {
  id: 2,
  title: '什么是绝对地址和相对地址？',
  des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
  collect: 2,
  use: 3,
  comment: 102
}, {
  id: 3,
  title: '什么是绝对地址和相对地址？',
  des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
  collect: 2,
  use: 3,
  comment: 102
}, {
  id: 4,
  title: '什么是绝对地址和相对地址？',
  des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
  collect: 2,
  use: 3,
  comment: 102
}, {
  id: 5,
  title: '什么是绝对地址和相对地址？',
  des: '熬得分就哦啊服气你文件那份了那：奥的父爱是妇女节斯柯达服了你萨克讥讽你撒恐龙当家菲尼萨看教父你上课代理费那克里斯多夫',
  collect: 2,
  use: 3,
  comment: 102
}];

exports.default = {
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
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2suanMiXSwibmFtZXMiOlsibWluZVN0dWRlbnRBY3Rpb24iLCJpZCIsInRleHQiLCJzcGFuIiwidXJsIiwibWluZVRlYWNoZXJBY3Rpb24iLCJhY3Rpdml0eVJlZ2lzdHJhdGlvbkRhdGEiLCJ0aXQiLCJpY29uU3JjIiwib2ZmbGluZUFjdGl2aXRpZXNIZWFkRGF0YSIsIm51bSIsIm9mZmxpbmVBY3Rpdml0aWVzTWFpbkRhdGEiLCJRdWVzdGlvbkFuc3ciLCJpc1JlYWQiLCJ0aXRsZSIsInByaWNlIiwiaXNBbnN3IiwiaXNJbXBvcnQiLCJRdWVzdGlvblF1ZXMiLCJUZWFjaGVyTGlzdDEiLCJpbWciLCJuYW1lIiwicG9zaXRpb24iLCJmYW5zIiwicXVlc3R1aW9uIiwic2VlIiwiY29udGVudCIsImlzQWdyZWUiLCJUZWFjaGVyTGlzdDIiLCJUZWFjaGVyV2FsbGV0TGlzdDEiLCJkYXRlIiwiVGVhY2hlcldhbGxldExpc3QyIiwiVGVhY2hlcldhbnRTZWVEYXRhIiwidHV0b3JEYXRhIiwidHJlbmRzRGF0YSIsImRlcyIsImNvbGxlY3QiLCJ1c2UiLCJjb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsSUFBTUEsb0JBQW9CLENBQ3hCO0FBQ0VDLE1BQUksQ0FETjtBQUVFQyxRQUFNLE1BRlI7QUFHRUMsUUFBTSxTQUhSO0FBSUVDLE9BQUs7QUFKUCxDQUR3QixFQU94QjtBQUNFSCxNQUFJLENBRE47QUFFRUMsUUFBTSxRQUZSO0FBR0VDLFFBQU0sUUFIUjtBQUlFQyxPQUFLO0FBSlAsQ0FQd0IsRUFheEI7QUFDRUgsTUFBSSxDQUROO0FBRUVDLFFBQU0sTUFGUjtBQUdFRSxPQUFLO0FBSFAsQ0Fid0IsQ0FBMUI7O0FBb0JBO0FBQ0EsSUFBTUMsb0JBQW9CLENBQ3hCO0FBQ0VKLE1BQUksQ0FETjtBQUVFQyxRQUFNLE1BRlI7QUFHRUMsUUFBTSxFQUhSO0FBSUVDLE9BQUs7QUFKUCxDQUR3QixFQU94QjtBQUNFSCxNQUFJLENBRE47QUFF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ZUFGVDtBQUdFcUIsT0FBSyw0REFIUDtBQUlFQyxXQUFTLENBSlg7QUFLRUMsT0FBSyxDQUxQO0FBTUVDLFdBQVM7QUFOWCxDQXpCaUIsRUFpQ2pCO0FBQ0VyQyxNQUFJLENBRE47QUFFRWEsU0FBTyxlQUZUO0FBR0VxQixPQUFLLDREQUhQO0FBSUVDLFdBQVMsQ0FKWDtBQUtFQyxPQUFLLENBTFA7QUFNRUMsV0FBUztBQU5YLENBakNpQixDQUFuQjs7a0JBMkNlO0FBQ2J0QyxxQkFBbUJBLGlCQUROO0FBRWJLLHFCQUFtQkEsaUJBRk47QUFHYkMsNEJBQTBCQSx3QkFIYjtBQUliRyw2QkFBMkJBLHlCQUpkO0FBS2JFLDZCQUEyQkEseUJBTGQ7QUFNYkMsZ0JBQWNBLFlBTkQ7QUFPYk0sZ0JBQWNBLFlBUEQ7QUFRYkMsZ0JBQWNBLFlBUkQ7QUFTYlMsZ0JBQWNBLFlBVEQ7QUFVYkMsc0JBQW9CQSxrQkFWUDtBQVdiRSxzQkFBb0JBLGtCQVhQO0FBWWJDLHNCQUFvQkEsa0JBWlA7QUFhYkMsYUFBV0EsU0FiRTtBQWNiQyxjQUFZQTtBQWRDLEMiLCJmaWxlIjoibW9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOaIkeeahOmhtemdou+8jOWtpueUn+eahOWKn+iDveWIl+ihqOa4suafk1xyXG5jb25zdCBtaW5lU3R1ZGVudEFjdGlvbiA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRleHQ6ICfmiJHnmoTmj5Dpl64nLFxyXG4gICAgc3BhbjogJ++8iDLkuKrmlrDlm57nrZTvvIknLFxyXG4gICAgdXJsOiAnL3BhZ2VzL3F1ZXN0aW9uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0ZXh0OiAn5oiR5oOz6KeB55qE5a+85biIJyxcclxuICAgIHNwYW46ICfvvIgy5Liq5Y+v6KeB77yJJyxcclxuICAgIHVybDogJy9wYWdlcy90ZWFjaGVyJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0ZXh0OiAn5oiR55qE5pS26JePJyxcclxuICAgIHVybDogJy9wYWdlcy9xdWVzdGlvbidcclxuICB9XHJcbl1cclxuXHJcbi8vIOaIkeeahOmhtemdou+8jOWvvOW4iOeahOWKn+iDveWIl+ihqOa4suafk1xyXG5jb25zdCBtaW5lVGVhY2hlckFjdGlvbiA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRleHQ6ICfmiJHnmoTmj5Dpl64nLFxyXG4gICAgc3BhbjogJycsXHJcbiAgICB1cmw6ICcvcGFnZXMvcXVlc3Rpb24nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRleHQ6ICfmiJHnmoTlm57nrZQnLFxyXG4gICAgc3BhbjogJ++8iDLkuKrlvoXlm57nrZTvvIknLFxyXG4gICAgdXJsOiAnL3BhZ2VzL3F1ZXN0aW9uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0ZXh0OiAn5oOz6KeB5oiR55qE5Lq6JyxcclxuICAgIHVybDogJy9wYWdlcy90ZWFjaGVyV2FudFNlZSdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGV4dDogJ+aIkeeahOaUtuiXjycsXHJcbiAgICB1cmw6ICcvcGFnZXMvcXVlc3Rpb24nXHJcbiAgfVxyXG5dXHJcbi8vIOa0u+WKqOaKpeWQjemhtemdou+8jOa0u+WKqOebuOWFs+aVsOaNrlxyXG5cclxuY29uc3QgYWN0aXZpdHlSZWdpc3RyYXRpb25EYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0OiAn5YiG5Lqr5YmN56uv5Li75rWB5oqA5pyv77yM5o6i6K6o5YmN56uv5pyq5p2l5pa55ZCRJyxcclxuICAgIGljb25TcmM6ICcuLi9hc3NldHMvaW1hZ2UvdGFyZ2V0LnBuZydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0OiAn5YyX5Lqs5biC77yM6I2J6Ziz5Yy677yM546L6YeR5ruh5Y2h5rOVJyxcclxuICAgIGljb25TcmM6ICcuLi9hc3NldHMvaW1hZ2UvdGFyZ2V0LnBuZydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0OiAnMjAxOC0wOS0xMCAxNDowMCAxODowMCcsXHJcbiAgICBpY29uU3JjOiAnLi4vYXNzZXRzL2ltYWdlL3RhcmdldC5wbmcnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdDogJ++/pTIwMC/kuronLFxyXG4gICAgaWNvblNyYzogJy4uL2Fzc2V0cy9pbWFnZS90YXJnZXQucG5nJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICB0aXQ6ICc45Lq6JyxcclxuICAgIGljb25TcmM6ICcuLi9hc3NldHMvaW1hZ2UvdGFyZ2V0LnBuZydcclxuICB9XHJcbl1cclxuXHJcbi8vIOWPkei1t+e6v+S4i+a0u+WKqOeahOaVsOaNrizlpLTpg6jmlbDmja5cclxuY29uc3Qgb2ZmbGluZUFjdGl2aXRpZXNIZWFkRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdDogJ+WPkei1t+a0u+WKqCcsXHJcbiAgICBudW06IDFcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0OiAn5bmz5Y+w5a6h5qC4JyxcclxuICAgIG51bTogMlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXQ6ICfpgJrnn6XnsonkuJ0nLFxyXG4gICAgbnVtOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdDogJ+S7mOi0ueaKpeWQjScsXHJcbiAgICBudW06IDRcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0OiAn6KeB6Z2iJyxcclxuICAgIG51bTogNVxyXG4gIH1cclxuXVxyXG5cclxuY29uc3Qgb2ZmbGluZUFjdGl2aXRpZXNNYWluRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdDogJ+a0u+WKqOS4u+mimCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0OiAn5rS75Yqo5pe26Ze0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXQ6ICfmtLvliqjlnLDngrknXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdDogJ+a0u+WKqOS7t+agvCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0OiAn5rS75Yqo5ZCN6aKdJ1xyXG4gIH1cclxuXVxyXG5cclxuLy8g5oiR55qE5Zue562U77yM5pWw5o2uXHJcbmNvbnN0IFF1ZXN0aW9uQW5zdyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGlzUmVhZDogdHJ1ZSxcclxuICAgIHRpdGxlOiAn5LuA5LmI5piv57ud5a+55Zyw5Z2A5ZKM55u45a+55Zyw5Z2AJyxcclxuICAgIHByaWNlOiAn77+lMjAnLFxyXG4gICAgaXNBbnN3OiB0cnVlLFxyXG4gICAgaXNJbXBvcnQ6ICfnsr7ljY4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGlzUmVhZDogZmFsc2UsXHJcbiAgICB0aXRsZTogJ+WIh+WwlOWlh+WbtOe7leaJgOWkmuS7mCcsXHJcbiAgICBwcmljZTogJ++/pTIwJyxcclxuICAgIGlzQW5zdzogdHJ1ZSxcclxuICAgIGlzSW1wb3J0OiAn57K+5Y2OJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpc1JlYWQ6IHRydWUsXHJcbiAgICB0aXRsZTogJ+msvOaWp+elnuW3peayg+WwlOWkqycsXHJcbiAgICBwcmljZTogJ++/pTIwJyxcclxuICAgIGlzQW5zdzogdHJ1ZSxcclxuICAgIGlzSW1wb3J0OiAn57K+5Y2OJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgdGl0bGU6ICfpmYTliqDotLnkuqTku5jnu5nnmofluJ3lkownLFxyXG4gICAgcHJpY2U6ICfvv6UyMCcsXHJcbiAgICBpc0Fuc3c6IHRydWUsXHJcbiAgICBpc0ltcG9ydDogJ+eyvuWNjidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaXNSZWFkOiB0cnVlLFxyXG4gICAgdGl0bGU6ICfnmoTkuZ/orqnku5bkuZ/orqnku5bkuZ8nLFxyXG4gICAgcHJpY2U6ICfvv6UyMCcsXHJcbiAgICBpc0Fuc3c6IHRydWUsXHJcbiAgICBpc0ltcG9ydDogJ+eyvuWNjidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgaXNSZWFkOiBmYWxzZSxcclxuICAgIHRpdGxlOiAn5Ye65YaF5a2YVkLkvaDlkINWQuS9oOWQg3YnLFxyXG4gICAgcHJpY2U6ICfvv6UyMCcsXHJcbiAgICBpc0Fuc3c6IHRydWUsXHJcbiAgICBpc0ltcG9ydDogJ+eyvuWNjidcclxuICB9XHJcbl1cclxuXHJcbi8vIOaIkeeahOaPkOmXru+8jOaVsOaNrlxyXG5jb25zdCBRdWVzdGlvblF1ZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgdGl0bGU6ICfku4DkuYjmmK/nu53lr7nlnLDlnYDlkoznm7jlr7nlnLDlnYAxJyxcclxuICAgIHByaWNlOiAn77+lMjAnLFxyXG4gICAgaXNBbnN3OiBmYWxzZSxcclxuICAgIGlzSW1wb3J0OiAn57K+5Y2OJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpc1JlYWQ6IHRydWUsXHJcbiAgICB0aXRsZTogJ+WIh+WwlOWlh+WbtOe7leaJgOWkmuS7mDEnLFxyXG4gICAgcHJpY2U6ICfvv6UyMCcsXHJcbiAgICBpc0Fuc3c6IGZhbHNlLFxyXG4gICAgaXNJbXBvcnQ6ICfnsr7ljY4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGlzUmVhZDogdHJ1ZSxcclxuICAgIHRpdGxlOiAn6ay85pan56We5bel5rKD5bCU5aSrMScsXHJcbiAgICBwcmljZTogJ++/pTIwJyxcclxuICAgIGlzQW5zdzogZmFsc2UsXHJcbiAgICBpc0ltcG9ydDogJ+eyvuWNjidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaXNSZWFkOiBmYWxzZSxcclxuICAgIHRpdGxlOiAn6ZmE5Yqg6LS55Lqk5LuY57uZ55qH5bid5ZKMMScsXHJcbiAgICBwcmljZTogJ++/pTIwJyxcclxuICAgIGlzQW5zdzogZmFsc2UsXHJcbiAgICBpc0ltcG9ydDogJ+eyvuWNjidcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaXNSZWFkOiB0cnVlLFxyXG4gICAgdGl0bGU6ICfnmoTkuZ/orqnku5bkuZ/orqnku5bkuZ8xJyxcclxuICAgIHByaWNlOiAn77+lMjAnLFxyXG4gICAgaXNBbnN3OiBmYWxzZSxcclxuICAgIGlzSW1wb3J0OiAn57K+5Y2OJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgdGl0bGU6ICflh7rlhoXlrZhWQuS9oOWQg1ZC5L2g5ZCDMXYnLFxyXG4gICAgcHJpY2U6ICfvv6UyMCcsXHJcbiAgICBpc0Fuc3c6IGZhbHNlLFxyXG4gICAgaXNJbXBvcnQ6ICfnsr7ljY4nXHJcbiAgfVxyXG5dXHJcblxyXG4vLyDmg7Pop4HnmoTlr7zluIjvvIzliJfooagxXHJcbmNvbnN0IFRlYWNoZXJMaXN0MSA9IFtcclxuICB7XHJcbiAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2UvaGVhZFNjdWxwdHVyZS5qcGcnLFxyXG4gICAgbmFtZTogJ0pvaG9vbicsXHJcbiAgICBwb3NpdGlvbjogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICBmYW5zOiAnMTAwJyxcclxuICAgIHF1ZXN0dWlvbjogJzE1MCcsXHJcbiAgICBzZWU6ICcxMDAwJyxcclxuICAgIHRpdGxlOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5ben77yaJyxcclxuICAgIGNvbnRlbnQ6ICdHb29nbGUgc2Nob2xhcumhtemdoicsXHJcbiAgICBpc0FncmVlOiB0cnVlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2UvaGVhZFNjdWxwdHVyZS5qcGcnLFxyXG4gICAgbmFtZTogJ0pvaG9vbicsXHJcbiAgICBwb3NpdGlvbjogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICBmYW5zOiAnMTAwJyxcclxuICAgIHF1ZXN0dWlvbjogJzE1MCcsXHJcbiAgICBzZWU6ICcxMDAwJyxcclxuICAgIHRpdGxlOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5ben77yaJyxcclxuICAgIGNvbnRlbnQ6ICdHb29nbGUgc2Nob2xhcumhtemdoicsXHJcbiAgICBpc0FncmVlOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnLi4vYXNzZXRzL2ltYWdlL2hlYWRTY3VscHR1cmUuanBnJyxcclxuICAgIG5hbWU6ICdKb2hvb24nLFxyXG4gICAgcG9zaXRpb246ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgZmFuczogJzEwMCcsXHJcbiAgICBxdWVzdHVpb246ICcxNTAnLFxyXG4gICAgc2VlOiAnMTAwMCcsXHJcbiAgICB0aXRsZTogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3p++8micsXHJcbiAgICBjb250ZW50OiAnR29vZ2xlIHNjaG9sYXLpobXpnaInLFxyXG4gICAgaXNBZ3JlZTogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJy4uL2Fzc2V0cy9pbWFnZS9oZWFkU2N1bHB0dXJlLmpwZycsXHJcbiAgICBuYW1lOiAnSm9ob29uJyxcclxuICAgIHBvc2l0aW9uOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgIGZhbnM6ICcxMDAnLFxyXG4gICAgcXVlc3R1aW9uOiAnMTUwJyxcclxuICAgIHNlZTogJzEwMDAnLFxyXG4gICAgdGl0bGU6ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6fvvJonLFxyXG4gICAgY29udGVudDogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iJyxcclxuICAgIGlzQWdyZWU6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2UvaGVhZFNjdWxwdHVyZS5qcGcnLFxyXG4gICAgbmFtZTogJ0pvaG9vbicsXHJcbiAgICBwb3NpdGlvbjogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICBmYW5zOiAnMTAwJyxcclxuICAgIHF1ZXN0dWlvbjogJzE1MCcsXHJcbiAgICBzZWU6ICcxMDAwJyxcclxuICAgIHRpdGxlOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5ben77yaJyxcclxuICAgIGNvbnRlbnQ6ICdHb29nbGUgc2Nob2xhcumhtemdoicsXHJcbiAgICBpc0FncmVlOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnLi4vYXNzZXRzL2ltYWdlL2hlYWRTY3VscHR1cmUuanBnJyxcclxuICAgIG5hbWU6ICdKb2hvb24nLFxyXG4gICAgcG9zaXRpb246ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgZmFuczogJzEwMCcsXHJcbiAgICBxdWVzdHVpb246ICcxNTAnLFxyXG4gICAgc2VlOiAnMTAwMCcsXHJcbiAgICB0aXRsZTogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3p++8micsXHJcbiAgICBjb250ZW50OiAnR29vZ2xlIHNjaG9sYXLpobXpnaInLFxyXG4gICAgaXNBZ3JlZTogZmFsc2VcclxuICB9XHJcbl1cclxuXHJcbi8vIOaDs+ingeeahOWvvOW4iO+8jOWIl+ihqDJcclxuY29uc3QgVGVhY2hlckxpc3QyID0gW1xyXG4gIHtcclxuICAgIGltZzogJy4uL2Fzc2V0cy9pbWFnZS9oZWFkU2N1bHB0dXJlLmpwZycsXHJcbiAgICBuYW1lOiAnSm9ob29uJyxcclxuICAgIHBvc2l0aW9uOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgIGZhbnM6ICcxMDAnLFxyXG4gICAgcXVlc3R1aW9uOiAnMTUwJyxcclxuICAgIHNlZTogJzEwMDAnLFxyXG4gICAgdGl0bGU6ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6fvvJonLFxyXG4gICAgY29udGVudDogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iMicsXHJcbiAgICBpc0FncmVlOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnLi4vYXNzZXRzL2ltYWdlL2hlYWRTY3VscHR1cmUuanBnJyxcclxuICAgIG5hbWU6ICdKb2hvb24nLFxyXG4gICAgcG9zaXRpb246ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgZmFuczogJzEwMCcsXHJcbiAgICBxdWVzdHVpb246ICcxNTAnLFxyXG4gICAgc2VlOiAnMTAwMCcsXHJcbiAgICB0aXRsZTogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3p++8micsXHJcbiAgICBjb250ZW50OiAnR29vZ2xlIHNjaG9sYXLpobXpnaIyJyxcclxuICAgIGlzQWdyZWU6IHRydWVcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJy4uL2Fzc2V0cy9pbWFnZS9oZWFkU2N1bHB0dXJlLmpwZycsXHJcbiAgICBuYW1lOiAnSm9ob29uJyxcclxuICAgIHBvc2l0aW9uOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgIGZhbnM6ICcxMDAnLFxyXG4gICAgcXVlc3R1aW9uOiAnMTUwJyxcclxuICAgIHNlZTogJzEwMDAnLFxyXG4gICAgdGl0bGU6ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6fvvJonLFxyXG4gICAgY29udGVudDogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iMicsXHJcbiAgICBpc0FncmVlOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnLi4vYXNzZXRzL2ltYWdlL2hlYWRTY3VscHR1cmUuanBnJyxcclxuICAgIG5hbWU6ICdKb2hvb24nLFxyXG4gICAgcG9zaXRpb246ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgZmFuczogJzEwMCcsXHJcbiAgICBxdWVzdHVpb246ICcxNTAnLFxyXG4gICAgc2VlOiAnMTAwMCcsXHJcbiAgICB0aXRsZTogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3p++8micsXHJcbiAgICBjb250ZW50OiAnR29vZ2xlIHNjaG9sYXLpobXpnaIyJyxcclxuICAgIGlzQWdyZWU6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2UvaGVhZFNjdWxwdHVyZS5qcGcnLFxyXG4gICAgbmFtZTogJ0pvaG9vbicsXHJcbiAgICBwb3NpdGlvbjogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICBmYW5zOiAnMTAwJyxcclxuICAgIHF1ZXN0dWlvbjogJzE1MCcsXHJcbiAgICBzZWU6ICcxMDAwJyxcclxuICAgIHRpdGxlOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5ben77yaJyxcclxuICAgIGNvbnRlbnQ6ICdHb29nbGUgc2Nob2xhcumhtemdojInLFxyXG4gICAgaXNBZ3JlZTogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJy4uL2Fzc2V0cy9pbWFnZS9oZWFkU2N1bHB0dXJlLmpwZycsXHJcbiAgICBuYW1lOiAnSm9ob29uJyxcclxuICAgIHBvc2l0aW9uOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgIGZhbnM6ICcxMDAnLFxyXG4gICAgcXVlc3R1aW9uOiAnMTUwJyxcclxuICAgIHNlZTogJzEwMDAnLFxyXG4gICAgdGl0bGU6ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6fvvJonLFxyXG4gICAgY29udGVudDogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iMicsXHJcbiAgICBpc0FncmVlOiBmYWxzZVxyXG4gIH1cclxuXVxyXG5cclxuLy8g5a+85biI77yM6LSm5oi35L2Z6aKd77yM5YiX6KGoMVxyXG5jb25zdCBUZWFjaGVyV2FsbGV0TGlzdDEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBwcmljZTogJzIwJyxcclxuICAgIHRpdDogJ+S7mOi0ueWbnuetlDEteHh4eC3ku4DkuYjmmK/nm7jlr7nlnLDlnYDlj5HnmoTlj5HnlJ/nmoTlj5HnlJ/nmoTlj5HnlJ8yJyxcclxuICAgIGRhdGU6ICcwNy0yOCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgcHJpY2U6ICcyMCcsXHJcbiAgICB0aXQ6ICfku5jotLnlm57nrZQyLXh4eHgt5LuA5LmI5piv55u45a+55Zyw5Z2A5Y+R55qE5Y+R55Sf55qE5Y+R55Sf55qE5Y+R55SfJyxcclxuICAgIGRhdGU6ICcwNy0yOCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgcHJpY2U6ICcyMCcsXHJcbiAgICB0aXQ6ICfku5jotLnlm57nrZQzLXh4eHgt5LuA5LmI5piv55u45a+55Zyw5Z2A5Y+R55qE5Y+R55Sf55qE5Y+R55Sf55qE5Y+R55SfJyxcclxuICAgIGRhdGU6ICcwNy0yOCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgcHJpY2U6ICcyMCcsXHJcbiAgICB0aXQ6ICfku5jotLnlm57nrZQ0LXh4eHgt5LuA5LmI5piv55u45a+55Zyw5Z2A5Y+R55qE5Y+R55Sf55qE5Y+R55Sf55qE5Y+R55SfJyxcclxuICAgIGRhdGU6ICcwNy0yOCdcclxuICB9XHJcbl1cclxuXHJcbi8vIOWvvOW4iO+8jOi0puaIt+S9memine+8jOWIl+ihqDJcclxuY29uc3QgVGVhY2hlcldhbGxldExpc3QyID0gW1xyXG4gIHtcclxuICAgIGlkOiAyMDEsXHJcbiAgICBwcmljZTogJzIwJyxcclxuICAgIHRpdDogJ+S7mOi0ueWbnuetlDIteHh4eC3ku4DkuYjmmK/nm7jlr7nlnLDlnYDlj5HnmoTlj5HnlJ/nmoTlj5HnlJ/nmoTlj5HnlJ8yJyxcclxuICAgIGRhdGU6ICcwNy0yOCdcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyMDIsXHJcbiAgICBwcmljZTogJzIwJyxcclxuICAgIHRpdDogJ+S7mOi0ueWbnuetlDIteHh4eC3ku4DkuYjmmK/nm7jlr7nlnLDlnYDlj5HnmoTlj5HnlJ/nmoTlj5HnlJ/nmoTlj5HnlJ8nLFxyXG4gICAgZGF0ZTogJzA3LTI4J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIwMyxcclxuICAgIHByaWNlOiAnMjAnLFxyXG4gICAgdGl0OiAn5LuY6LS55Zue562UMi14eHh4LeS7gOS5iOaYr+ebuOWvueWcsOWdgOWPkeeahOWPkeeUn+eahOWPkeeUn+eahOWPkeeUnycsXHJcbiAgICBkYXRlOiAnMDctMjgnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMjA0LFxyXG4gICAgcHJpY2U6ICcyMCcsXHJcbiAgICB0aXQ6ICfku5jotLnlm57nrZQyLXh4eHgt5LuA5LmI5piv55u45a+55Zyw5Z2A5Y+R55qE5Y+R55Sf55qE5Y+R55Sf55qE5Y+R55SfJyxcclxuICAgIGRhdGU6ICcwNy0yOCdcclxuICB9XHJcbl1cclxuXHJcbi8vIOaDs+ingeaIkeeahOS6uu+8jOaVsOaNrlxyXG5jb25zdCBUZWFjaGVyV2FudFNlZURhdGEgPSBbXHJcbiAge1xyXG4gICAgaW1nOiAnLi4vYXNzZXRzL2ltYWdlL2hlYWRTY3VscHR1cmUuanBnJyxcclxuICAgIG5hbWU6ICdKb2hvb24nLFxyXG4gICAgcG9zaXRpb246ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgZmFuczogJzEwMCcsXHJcbiAgICBxdWVzdHVpb246ICcxNTAnLFxyXG4gICAgc2VlOiAnMTAwMCcsXHJcbiAgICB0aXRsZTogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3p++8micsXHJcbiAgICBjb250ZW50OiAnR29vZ2xlIHNjaG9sYXLpobXpnaInXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2UvaGVhZFNjdWxwdHVyZS5qcGcnLFxyXG4gICAgbmFtZTogJ0pvaG9vbicsXHJcbiAgICBwb3NpdGlvbjogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICBmYW5zOiAnMTAwJyxcclxuICAgIHF1ZXN0dWlvbjogJzE1MCcsXHJcbiAgICBzZWU6ICcxMDAwJyxcclxuICAgIHRpdGxlOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5ben77yaJyxcclxuICAgIGNvbnRlbnQ6ICdHb29nbGUgc2Nob2xhcumhtemdoidcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJy4uL2Fzc2V0cy9pbWFnZS9oZWFkU2N1bHB0dXJlLmpwZycsXHJcbiAgICBuYW1lOiAnSm9ob29uJyxcclxuICAgIHBvc2l0aW9uOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgIGZhbnM6ICcxMDAnLFxyXG4gICAgcXVlc3R1aW9uOiAnMTUwJyxcclxuICAgIHNlZTogJzEwMDAnLFxyXG4gICAgdGl0bGU6ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6fvvJonLFxyXG4gICAgY29udGVudDogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnLi4vYXNzZXRzL2ltYWdlL2hlYWRTY3VscHR1cmUuanBnJyxcclxuICAgIG5hbWU6ICdKb2hvb24nLFxyXG4gICAgcG9zaXRpb246ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgZmFuczogJzEwMCcsXHJcbiAgICBxdWVzdHVpb246ICcxNTAnLFxyXG4gICAgc2VlOiAnMTAwMCcsXHJcbiAgICB0aXRsZTogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3p++8micsXHJcbiAgICBjb250ZW50OiAnR29vZ2xlIHNjaG9sYXLpobXpnaInXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2UvaGVhZFNjdWxwdHVyZS5qcGcnLFxyXG4gICAgbmFtZTogJ0pvaG9vbicsXHJcbiAgICBwb3NpdGlvbjogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICBmYW5zOiAnMTAwJyxcclxuICAgIHF1ZXN0dWlvbjogJzE1MCcsXHJcbiAgICBzZWU6ICcxMDAwJyxcclxuICAgIHRpdGxlOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5ben77yaJyxcclxuICAgIGNvbnRlbnQ6ICdHb29nbGUgc2Nob2xhcumhtemdoidcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJy4uL2Fzc2V0cy9pbWFnZS9oZWFkU2N1bHB0dXJlLmpwZycsXHJcbiAgICBuYW1lOiAnSm9ob29uJyxcclxuICAgIHBvc2l0aW9uOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgIGZhbnM6ICcxMDAnLFxyXG4gICAgcXVlc3R1aW9uOiAnMTUwJyxcclxuICAgIHNlZTogJzEwMDAnLFxyXG4gICAgdGl0bGU6ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6fvvJonLFxyXG4gICAgY29udGVudDogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nOiAnLi4vYXNzZXRzL2ltYWdlL2hlYWRTY3VscHR1cmUuanBnJyxcclxuICAgIG5hbWU6ICdKb2hvb24nLFxyXG4gICAgcG9zaXRpb246ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgZmFuczogJzEwMCcsXHJcbiAgICBxdWVzdHVpb246ICcxNTAnLFxyXG4gICAgc2VlOiAnMTAwMCcsXHJcbiAgICB0aXRsZTogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3p++8micsXHJcbiAgICBjb250ZW50OiAnR29vZ2xlIHNjaG9sYXLpobXpnaInXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWc6ICcuLi9hc3NldHMvaW1hZ2UvaGVhZFNjdWxwdHVyZS5qcGcnLFxyXG4gICAgbmFtZTogJ0pvaG9vbicsXHJcbiAgICBwb3NpdGlvbjogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICBmYW5zOiAnMTAwJyxcclxuICAgIHF1ZXN0dWlvbjogJzE1MCcsXHJcbiAgICBzZWU6ICcxMDAwJyxcclxuICAgIHRpdGxlOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5ben77yaJyxcclxuICAgIGNvbnRlbnQ6ICdHb29nbGUgc2Nob2xhcumhtemdoidcclxuICB9LFxyXG4gIHtcclxuICAgIGltZzogJy4uL2Fzc2V0cy9pbWFnZS9oZWFkU2N1bHB0dXJlLmpwZycsXHJcbiAgICBuYW1lOiAnSm9ob29uJyxcclxuICAgIHBvc2l0aW9uOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgIGZhbnM6ICcxMDAnLFxyXG4gICAgcXVlc3R1aW9uOiAnMTUwJyxcclxuICAgIHNlZTogJzEwMDAnLFxyXG4gICAgdGl0bGU6ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6fvvJonLFxyXG4gICAgY29udGVudDogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iJ1xyXG4gIH1cclxuXVxyXG5cclxuLy8g5a+85biIdGFyQmFy6aG16Z2i77yM5pWw5o2uXHJcbmNvbnN0IHR1dG9yRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAn5o6o6I2QJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0FuZHJvaWQnXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnSU9TJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogJ+WJjeerrydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0bGU6ICflkI7nq68nXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIHRpdGxlOiAn6K6+6K6hJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICB0aXRsZTogJ+S6p+WTgSdcclxuICB9XHJcbl1cclxuXHJcbi8vIOWKqOaAgemhtemdou+8jOaVsOaNruaooeaLn1xyXG5jb25zdCB0cmVuZHNEYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICfku4DkuYjmmK/nu53lr7nlnLDlnYDlkoznm7jlr7nlnLDlnYDvvJ8nLFxyXG4gICAgZGVzOiAn54as5b6X5YiG5bCx5ZOm5ZWK5pyN5rCU5L2g5paH5Lu26YKj5Lu95LqG6YKj77ya5aWl55qE54i254ix5piv5aaH5aWz6IqC5pav5p+v6L6+5pyN5LqG5L2g6JCo5YWL6K6l6K695L2g5pKS5oGQ6b6Z5b2T5a626I+y5bC86JCo55yL5pWZ54i25L2g5LiK6K++5Luj55CG6LS56YKj5YWL6YeM5pav5aSa5aSrJyxcclxuICAgIGNvbGxlY3Q6IDIsXHJcbiAgICB1c2U6IDMsXHJcbiAgICBjb21tZW50OiAxMDJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICfku4DkuYjmmK/nu53lr7nlnLDlnYDlkoznm7jlr7nlnLDlnYDvvJ8nLFxyXG4gICAgZGVzOiAn54as5b6X5YiG5bCx5ZOm5ZWK5pyN5rCU5L2g5paH5Lu26YKj5Lu95LqG6YKj77ya5aWl55qE54i254ix5piv5aaH5aWz6IqC5pav5p+v6L6+5pyN5LqG5L2g6JCo5YWL6K6l6K695L2g5pKS5oGQ6b6Z5b2T5a626I+y5bC86JCo55yL5pWZ54i25L2g5LiK6K++5Luj55CG6LS56YKj5YWL6YeM5pav5aSa5aSrJyxcclxuICAgIGNvbGxlY3Q6IDIsXHJcbiAgICB1c2U6IDMsXHJcbiAgICBjb21tZW50OiAxMDJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICfku4DkuYjmmK/nu53lr7nlnLDlnYDlkoznm7jlr7nlnLDlnYDvvJ8nLFxyXG4gICAgZGVzOiAn54as5b6X5YiG5bCx5ZOm5ZWK5pyN5rCU5L2g5paH5Lu26YKj5Lu95LqG6YKj77ya5aWl55qE54i254ix5piv5aaH5aWz6IqC5pav5p+v6L6+5pyN5LqG5L2g6JCo5YWL6K6l6K695L2g5pKS5oGQ6b6Z5b2T5a626I+y5bC86JCo55yL5pWZ54i25L2g5LiK6K++5Luj55CG6LS56YKj5YWL6YeM5pav5aSa5aSrJyxcclxuICAgIGNvbGxlY3Q6IDIsXHJcbiAgICB1c2U6IDMsXHJcbiAgICBjb21tZW50OiAxMDJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICfku4DkuYjmmK/nu53lr7nlnLDlnYDlkoznm7jlr7nlnLDlnYDvvJ8nLFxyXG4gICAgZGVzOiAn54as5b6X5YiG5bCx5ZOm5ZWK5pyN5rCU5L2g5paH5Lu26YKj5Lu95LqG6YKj77ya5aWl55qE54i254ix5piv5aaH5aWz6IqC5pav5p+v6L6+5pyN5LqG5L2g6JCo5YWL6K6l6K695L2g5pKS5oGQ6b6Z5b2T5a626I+y5bC86JCo55yL5pWZ54i25L2g5LiK6K++5Luj55CG6LS56YKj5YWL6YeM5pav5aSa5aSrJyxcclxuICAgIGNvbGxlY3Q6IDIsXHJcbiAgICB1c2U6IDMsXHJcbiAgICBjb21tZW50OiAxMDJcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgdGl0bGU6ICfku4DkuYjmmK/nu53lr7nlnLDlnYDlkoznm7jlr7nlnLDlnYDvvJ8nLFxyXG4gICAgZGVzOiAn54as5b6X5YiG5bCx5ZOm5ZWK5pyN5rCU5L2g5paH5Lu26YKj5Lu95LqG6YKj77ya5aWl55qE54i254ix5piv5aaH5aWz6IqC5pav5p+v6L6+5pyN5LqG5L2g6JCo5YWL6K6l6K695L2g5pKS5oGQ6b6Z5b2T5a626I+y5bC86JCo55yL5pWZ54i25L2g5LiK6K++5Luj55CG6LS56YKj5YWL6YeM5pav5aSa5aSrJyxcclxuICAgIGNvbGxlY3Q6IDIsXHJcbiAgICB1c2U6IDMsXHJcbiAgICBjb21tZW50OiAxMDJcclxuICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaW5lU3R1ZGVudEFjdGlvbjogbWluZVN0dWRlbnRBY3Rpb24sXHJcbiAgbWluZVRlYWNoZXJBY3Rpb246IG1pbmVUZWFjaGVyQWN0aW9uLFxyXG4gIGFjdGl2aXR5UmVnaXN0cmF0aW9uRGF0YTogYWN0aXZpdHlSZWdpc3RyYXRpb25EYXRhLFxyXG4gIG9mZmxpbmVBY3Rpdml0aWVzSGVhZERhdGE6IG9mZmxpbmVBY3Rpdml0aWVzSGVhZERhdGEsXHJcbiAgb2ZmbGluZUFjdGl2aXRpZXNNYWluRGF0YTogb2ZmbGluZUFjdGl2aXRpZXNNYWluRGF0YSxcclxuICBRdWVzdGlvbkFuc3c6IFF1ZXN0aW9uQW5zdyxcclxuICBRdWVzdGlvblF1ZXM6IFF1ZXN0aW9uUXVlcyxcclxuICBUZWFjaGVyTGlzdDE6IFRlYWNoZXJMaXN0MSxcclxuICBUZWFjaGVyTGlzdDI6IFRlYWNoZXJMaXN0MixcclxuICBUZWFjaGVyV2FsbGV0TGlzdDE6IFRlYWNoZXJXYWxsZXRMaXN0MSxcclxuICBUZWFjaGVyV2FsbGV0TGlzdDI6IFRlYWNoZXJXYWxsZXRMaXN0MixcclxuICBUZWFjaGVyV2FudFNlZURhdGE6IFRlYWNoZXJXYW50U2VlRGF0YSxcclxuICB0dXRvckRhdGE6IHR1dG9yRGF0YSxcclxuICB0cmVuZHNEYXRhOiB0cmVuZHNEYXRhXHJcbn1cclxuIl19