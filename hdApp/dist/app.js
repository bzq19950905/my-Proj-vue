'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // 引入插件
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/trends', // 动态
      'pages/tutor', // 导师
      'pages/mine', // 学员和导师的个人主页
      'pages/teacher', // 学员---我想见的导师页面
      'pages/activeRegistration', // 活动报名页面
      'pages/question', // 学员---我的提问
      'pages/questionDetail', // 学员---我的提问--提问详情页
      'pages/becomeTeacher', // 学员---申请成为导师页面
      'pages/teacherSet', // 导师---导师的设置页面
      'pages/teacherWallet', // 导师---导师的收入点击进入账户资金页面
      'pages/EditMaterial', // 导师和学员---个人资料编辑页面
      'pages/EditMaterialDetail', // 导师和学员---个人资料编辑的详情页面
      'pages/teacherWantSee', // 导师---想见我的人
      'pages/OfflineActivities' // 导师---想见我的人---点击进入线下活动页面
      ],
      window: {
        backgroundTextStyle: 'light', // 下拉背景字体、loading 图的样式，仅支持 dark/light
        backgroundColor: '#979797', // 窗口的背景颜色
        navigationBarBackgroundColor: '#3A76E5', // 导航栏背景颜色
        navigationBarTitleText: 'wechat', // 导航栏标题文字内容
        navigationBarTextStyle: '#fff', // 导航栏标题颜色
        enablePullDownRefresh: true, // 是否开启下拉刷新
        onReachBottomDistance: 50 // 页面上拉触底事件触发时距页面底部距离，单位为px
      },
      networkTimeout: {
        request: 3000
      },
      tabBar: {
        color: '#888888',
        selectedColor: '#2896ff',
        borderStyle: 'white',
        position: 'bottom',
        list: [{
          pagePath: 'pages/trends',
          text: '动态',
          iconPath: './assets/image/target.png',
          selectedIconPath: './assets/image/target.png'
        }, {
          pagePath: 'pages/tutor',
          text: '导师',
          iconPath: './assets/image/target.png',
          selectedIconPath: './assets/image/target.png'
        }, {
          pagePath: 'pages/mine',
          text: '我的',
          iconPath: './assets/image/target.png',
          selectedIconPath: './assets/image/target.png'
        }]
      }
    };
    _this.globalData = {
      userInfo: null,
      ownUserInfo: {
        status: 'teacher' // teacher / student
      }
    };
    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 小程序启动之后 触发
                console.log('start program');

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJvblJlYWNoQm90dG9tRGlzdGFuY2UiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsInBvc2l0aW9uIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsIm93blVzZXJJbmZvIiwic3RhdHVzIiwidXNlIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQW1FRSxzQkFBYztBQUFBOztBQUVaO0FBRlk7O0FBQUEsVUFoRWRBLE1BZ0VjLEdBaEVMO0FBQ1BDLGFBQU8sQ0FDTCxjQURLLEVBQ1c7QUFDaEIsbUJBRkssRUFFVTtBQUNmLGtCQUhLLEVBR1M7QUFDZCxxQkFKSyxFQUlZO0FBQ2pCLGdDQUxLLEVBS3VCO0FBQzVCLHNCQU5LLEVBTWE7QUFDbEIsNEJBUEssRUFPbUI7QUFDeEIsMkJBUkssRUFRa0I7QUFDdkIsd0JBVEssRUFTZTtBQUNwQiwyQkFWSyxFQVVrQjtBQUN2QiwwQkFYSyxFQVdpQjtBQUN0QixnQ0FaSyxFQVl1QjtBQUM1Qiw0QkFiSyxFQWFtQjtBQUN4QiwrQkFkSyxDQWNxQjtBQWRyQixPQURBO0FBaUJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmLEVBQ3dCO0FBQzlCQyx5QkFBaUIsU0FGWCxFQUVzQjtBQUM1QkMsc0NBQThCLFNBSHhCLEVBR21DO0FBQ3pDQyxnQ0FBd0IsUUFKbEIsRUFJNEI7QUFDbENDLGdDQUF3QixNQUxsQixFQUswQjtBQUNoQ0MsK0JBQXVCLElBTmpCLEVBTXVCO0FBQzdCQywrQkFBdUIsRUFQakIsQ0FPb0I7QUFQcEIsT0FqQkQ7QUEwQlBDLHNCQUFnQjtBQUNkQyxpQkFBUztBQURLLE9BMUJUO0FBNkJQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE9BSFA7QUFJTkMsa0JBQVUsUUFKSjtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsY0FEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLDJCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQURJLEVBT0o7QUFDRUgsb0JBQVUsYUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLDJCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQVBJLEVBYUo7QUFDRUgsb0JBQVUsWUFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLDJCQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQWJJO0FBTEE7QUE3QkQsS0FnRUs7QUFBQSxVQVBkQyxVQU9jLEdBUEQ7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxtQkFBYTtBQUNYQyxnQkFBUSxTQURHLENBQ087QUFEUDtBQUZGLEtBT0M7QUFHWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSlk7QUFLYjs7Ozs7Ozs7OztBQUdDO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVksZUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFFeUJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvdHJlbmRzJywgLy8g5Yqo5oCBXG4gICAgICAncGFnZXMvdHV0b3InLCAvLyDlr7zluIhcbiAgICAgICdwYWdlcy9taW5lJywgLy8g5a2m5ZGY5ZKM5a+85biI55qE5Liq5Lq65Li76aG1XG4gICAgICAncGFnZXMvdGVhY2hlcicsIC8vIOWtpuWRmC0tLeaIkeaDs+ingeeahOWvvOW4iOmhtemdolxuICAgICAgJ3BhZ2VzL2FjdGl2ZVJlZ2lzdHJhdGlvbicsIC8vIOa0u+WKqOaKpeWQjemhtemdolxuICAgICAgJ3BhZ2VzL3F1ZXN0aW9uJywgLy8g5a2m5ZGYLS0t5oiR55qE5o+Q6ZeuXG4gICAgICAncGFnZXMvcXVlc3Rpb25EZXRhaWwnLCAvLyDlrablkZgtLS3miJHnmoTmj5Dpl64tLeaPkOmXruivpuaDhemhtVxuICAgICAgJ3BhZ2VzL2JlY29tZVRlYWNoZXInLCAvLyDlrablkZgtLS3nlLPor7fmiJDkuLrlr7zluIjpobXpnaJcbiAgICAgICdwYWdlcy90ZWFjaGVyU2V0JywgLy8g5a+85biILS0t5a+85biI55qE6K6+572u6aG16Z2iXG4gICAgICAncGFnZXMvdGVhY2hlcldhbGxldCcsIC8vIOWvvOW4iC0tLeWvvOW4iOeahOaUtuWFpeeCueWHu+i/m+WFpei0puaIt+i1hOmHkemhtemdolxuICAgICAgJ3BhZ2VzL0VkaXRNYXRlcmlhbCcsIC8vIOWvvOW4iOWSjOWtpuWRmC0tLeS4quS6uui1hOaWmee8lui+kemhtemdolxuICAgICAgJ3BhZ2VzL0VkaXRNYXRlcmlhbERldGFpbCcsIC8vIOWvvOW4iOWSjOWtpuWRmC0tLeS4quS6uui1hOaWmee8lui+keeahOivpuaDhemhtemdolxuICAgICAgJ3BhZ2VzL3RlYWNoZXJXYW50U2VlJywgLy8g5a+85biILS0t5oOz6KeB5oiR55qE5Lq6XG4gICAgICAncGFnZXMvT2ZmbGluZUFjdGl2aXRpZXMnIC8vIOWvvOW4iC0tLeaDs+ingeaIkeeahOS6ui0tLeeCueWHu+i/m+WFpee6v+S4i+a0u+WKqOmhtemdolxuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLCAvLyDkuIvmi4nog4zmma/lrZfkvZPjgIFsb2FkaW5nIOWbvueahOagt+W8j++8jOS7heaUr+aMgSBkYXJrL2xpZ2h0XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTc5Nzk3JywgLy8g56qX5Y+j55qE6IOM5pmv6aKc6ImyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzNBNzZFNScsIC8vIOWvvOiIquagj+iDjOaZr+minOiJslxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3dlY2hhdCcsIC8vIOWvvOiIquagj+agh+mimOaWh+Wtl+WGheWuuVxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJyNmZmYnLCAvLyDlr7zoiKrmoI/moIfpopjpopzoibJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSwgLy8g5piv5ZCm5byA5ZCv5LiL5ouJ5Yi35pawXG4gICAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDUwIC8vIOmhtemdouS4iuaLieinpuW6leS6i+S7tuinpuWPkeaXtui3nemhtemdouW6lemDqOi3neemu++8jOWNleS9jeS4unB4XG4gICAgfSxcbiAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgcmVxdWVzdDogMzAwMFxuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyM4ODg4ODgnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMyODk2ZmYnLFxuICAgICAgYm9yZGVyU3R5bGU6ICd3aGl0ZScsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3RyZW5kcycsXG4gICAgICAgICAgdGV4dDogJ+WKqOaAgScsXG4gICAgICAgICAgaWNvblBhdGg6ICcuL2Fzc2V0cy9pbWFnZS90YXJnZXQucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9hc3NldHMvaW1hZ2UvdGFyZ2V0LnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdHV0b3InLFxuICAgICAgICAgIHRleHQ6ICflr7zluIgnLFxuICAgICAgICAgIGljb25QYXRoOiAnLi9hc3NldHMvaW1hZ2UvdGFyZ2V0LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vYXNzZXRzL2ltYWdlL3RhcmdldC5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL21pbmUnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnLFxuICAgICAgICAgIGljb25QYXRoOiAnLi9hc3NldHMvaW1hZ2UvdGFyZ2V0LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vYXNzZXRzL2ltYWdlL3RhcmdldC5wbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIG93blVzZXJJbmZvOiB7XG4gICAgICBzdGF0dXM6ICd0ZWFjaGVyJyAvLyB0ZWFjaGVyIC8gc3R1ZGVudFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICAvLyDlvJXlhaXmj5Lku7ZcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpXG4gIH1cblxuICBhc3luYyBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsI/nqIvluo/lkK/liqjkuYvlkI4g6Kem5Y+RXG4gICAgY29uc29sZS5sb2coJ3N0YXJ0IHByb2dyYW0nKVxuICB9XG59XG4iXX0=