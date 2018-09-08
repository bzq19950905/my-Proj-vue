'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _hello = require('./../components/hello.js');

var _hello2 = _interopRequireDefault(_hello);

var _LoginInit = require('./../components/LoginInit.js');

var _LoginInit2 = _interopRequireDefault(_LoginInit);

var _mock = require('./../common/mock.js');

var _mock2 = _interopRequireDefault(_mock);

var _btnGroup = require('./../components/btnGroup.js');

var _btnGroup2 = _interopRequireDefault(_btnGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trends = function (_wepy$page) {
  _inherits(Trends, _wepy$page);

  function Trends() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Trends);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Trends.__proto__ || Object.getPrototypeOf(Trends)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '动态'
    }, _this.events = {
      hideHello: function hideHello() {
        this.isShowHello = false;
        this.isShowLoginInit = true;
        this.$apply();
      },
      showMain: function showMain() {
        this.isShowLoginInit = false;
        this.isShowMain = true;
        this.$apply();
        _wepy2.default.showTabBar({
          animation: true // 是否需要动画效果
        });
      }
    }, _this.$repeat = {}, _this.$props = { "hello-com": { "xmlns:wx": "" }, "loginInit-com": {} }, _this.$events = {}, _this.components = {
      'hello-com': _hello2.default,
      'loginInit-com': _LoginInit2.default,
      'btnGroup-com': _btnGroup2.default
    }, _this.data = {
      isShowHello: false,
      isShowLoginInit: false,
      isShowMain: false,
      list: [],
      mainList: _mock2.default.trendsData
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Trends, [{
    key: 'onLoad',
    value: function onLoad() {
      if (_wepy2.default.getStorageSync('uid')) {
        this.isShowHello = false;
        this.isShowLoginInit = false;
        this.isShowMain = true;
      } else {
        this.isShowHello = true;
        _wepy2.default.hideTabBar({
          animation: true // 是否需要动画效果
        });
      }
    }
  }]);

  return Trends;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Trends , 'pages/trends'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kcy5qcyJdLCJuYW1lcyI6WyJUcmVuZHMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZXZlbnRzIiwiaGlkZUhlbGxvIiwiaXNTaG93SGVsbG8iLCJpc1Nob3dMb2dpbkluaXQiLCIkYXBwbHkiLCJzaG93TWFpbiIsImlzU2hvd01haW4iLCJ3ZXB5Iiwic2hvd1RhYkJhciIsImFuaW1hdGlvbiIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIkhlbGxvIiwiTG9naW5Jbml0IiwiQnRuR3JvdXAiLCJkYXRhIiwibGlzdCIsIm1haW5MaXN0IiwibW9ja0RhdGEiLCJ0cmVuZHNEYXRhIiwiZ2V0U3RvcmFnZVN5bmMiLCJoaWRlVGFiQmFyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQWVUQyxNLEdBQVM7QUFDUEMsZUFETyx1QkFDSztBQUNWLGFBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxhQUFLQyxlQUFMLEdBQXVCLElBQXZCO0FBQ0EsYUFBS0MsTUFBTDtBQUNELE9BTE07QUFNUEMsY0FOTyxzQkFNSTtBQUNULGFBQUtGLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSxhQUFLRyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS0YsTUFBTDtBQUNBRyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxxQkFBVyxJQURHLENBQ0U7QUFERixTQUFoQjtBQUdEO0FBYk0sSyxRQWVWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsWUFBVyxFQUFaLEVBQWIsRUFBNkIsaUJBQWdCLEVBQTdDLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1YsbUJBQWFDLGVBREg7QUFFVix1QkFBaUJDLG1CQUZQO0FBR1Ysc0JBQWdCQztBQUhOLEssUUFLWkMsSSxHQUFPO0FBQ0xmLG1CQUFhLEtBRFI7QUFFTEMsdUJBQWlCLEtBRlo7QUFHTEcsa0JBQVksS0FIUDtBQUlMWSxZQUFNLEVBSkQ7QUFLTEMsZ0JBQVVDLGVBQVNDO0FBTGQsSzs7Ozs7NkJBbkNFO0FBQ1AsVUFBSWQsZUFBS2UsY0FBTCxDQUFvQixLQUFwQixDQUFKLEVBQWdDO0FBQzlCLGFBQUtwQixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsYUFBS0MsZUFBTCxHQUF1QixLQUF2QjtBQUNBLGFBQUtHLFVBQUwsR0FBa0IsSUFBbEI7QUFDRCxPQUpELE1BSU87QUFDTCxhQUFLSixXQUFMLEdBQW1CLElBQW5CO0FBQ0FLLHVCQUFLZ0IsVUFBTCxDQUFnQjtBQUNkZCxxQkFBVyxJQURHLENBQ0U7QUFERixTQUFoQjtBQUdEO0FBQ0Y7Ozs7RUFmaUNGLGVBQUtpQixJOztrQkFBcEIzQixNIiwiZmlsZSI6InRyZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBIZWxsbyBmcm9tICcuLi9jb21wb25lbnRzL2hlbGxvJ1xuaW1wb3J0IExvZ2luSW5pdCBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luSW5pdCdcbmltcG9ydCBtb2NrRGF0YSBmcm9tICcuLi9jb21tb24vbW9jaydcbmltcG9ydCBCdG5Hcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2J0bkdyb3VwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVuZHMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WKqOaAgSdcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgaWYgKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3VpZCcpKSB7XG4gICAgICB0aGlzLmlzU2hvd0hlbGxvID0gZmFsc2VcbiAgICAgIHRoaXMuaXNTaG93TG9naW5Jbml0ID0gZmFsc2VcbiAgICAgIHRoaXMuaXNTaG93TWFpbiA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Nob3dIZWxsbyA9IHRydWVcbiAgICAgIHdlcHkuaGlkZVRhYkJhcih7XG4gICAgICAgIGFuaW1hdGlvbjogdHJ1ZSAvLyDmmK/lkKbpnIDopoHliqjnlLvmlYjmnpxcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGV2ZW50cyA9IHtcbiAgICBoaWRlSGVsbG8oKSB7XG4gICAgICB0aGlzLmlzU2hvd0hlbGxvID0gZmFsc2VcbiAgICAgIHRoaXMuaXNTaG93TG9naW5Jbml0ID0gdHJ1ZVxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH0sXG4gICAgc2hvd01haW4oKSB7XG4gICAgICB0aGlzLmlzU2hvd0xvZ2luSW5pdCA9IGZhbHNlXG4gICAgICB0aGlzLmlzU2hvd01haW4gPSB0cnVlXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB3ZXB5LnNob3dUYWJCYXIoe1xuICAgICAgICBhbmltYXRpb246IHRydWUgLy8g5piv5ZCm6ZyA6KaB5Yqo55S75pWI5p6cXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaGVsbG8tY29tXCI6e1wieG1sbnM6d3hcIjpcIlwifSxcImxvZ2luSW5pdC1jb21cIjp7fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgJ2hlbGxvLWNvbSc6IEhlbGxvLFxuICAgICdsb2dpbkluaXQtY29tJzogTG9naW5Jbml0LFxuICAgICdidG5Hcm91cC1jb20nOiBCdG5Hcm91cFxuICB9XG4gIGRhdGEgPSB7XG4gICAgaXNTaG93SGVsbG86IGZhbHNlLFxuICAgIGlzU2hvd0xvZ2luSW5pdDogZmFsc2UsXG4gICAgaXNTaG93TWFpbjogZmFsc2UsXG4gICAgbGlzdDogW10sXG4gICAgbWFpbkxpc3Q6IG1vY2tEYXRhLnRyZW5kc0RhdGFcbiAgfVxufVxuIl19