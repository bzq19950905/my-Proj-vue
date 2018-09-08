'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_wepy$component) {
  _inherits(Hello, _wepy$component);

  function Hello() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hello);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hello.__proto__ || Object.getPrototypeOf(Hello)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      duration: 200,
      currentSwiper: 0
    }, _this.methods = {
      passFn: function passFn() {
        if (_wepy2.default.getStorageSync('WXUserInfo')) {
          this.$emit('hideHello');
        } else {
          _wepy2.default.showToast({
            title: '请授权', // 提示的内容
            icon: 'success', // 图标
            duration: 1500, // 延迟时间,1500是最佳的提示时间
            mask: true // 显示透明蒙层，防止触摸穿透
          });
        }
      },
      bindGetUserInfo: function bindGetUserInfo(e) {
        _wepy2.default.setStorageSync('WXUserInfo', e.detail.userInfo);
        this.$emit('hideHello');
      },
      swiperChange: function swiperChange(e) {
        this.currentSwiper = e.detail.current;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Hello;
}(_wepy2.default.component);

exports.default = Hello;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvLmpzIl0sIm5hbWVzIjpbIkhlbGxvIiwiZGF0YSIsImR1cmF0aW9uIiwiY3VycmVudFN3aXBlciIsIm1ldGhvZHMiLCJwYXNzRm4iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCIkZW1pdCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsIm1hc2siLCJiaW5kR2V0VXNlckluZm8iLCJlIiwic2V0U3RvcmFnZVN5bmMiLCJkZXRhaWwiLCJ1c2VySW5mbyIsInN3aXBlckNoYW5nZSIsImN1cnJlbnQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxnQkFBVSxHQURMO0FBRUxDLHFCQUFlO0FBRlYsSyxRQUlQQyxPLEdBQVU7QUFDUkMsWUFEUSxvQkFDQztBQUNQLFlBQUlDLGVBQUtDLGNBQUwsQ0FBb0IsWUFBcEIsQ0FBSixFQUF1QztBQUNyQyxlQUFLQyxLQUFMLENBQVcsV0FBWDtBQUNELFNBRkQsTUFFTztBQUNMRix5QkFBS0csU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLEtBRE0sRUFDQztBQUNkQyxrQkFBTSxTQUZPLEVBRUk7QUFDakJULHNCQUFVLElBSEcsRUFHRztBQUNoQlUsa0JBQU0sSUFKTyxDQUlGO0FBSkUsV0FBZjtBQU1EO0FBQ0YsT0FaTztBQWFSQyxxQkFiUSwyQkFhUUMsQ0FiUixFQWFXO0FBQ2pCUix1QkFBS1MsY0FBTCxDQUFvQixZQUFwQixFQUFrQ0QsRUFBRUUsTUFBRixDQUFTQyxRQUEzQztBQUNBLGFBQUtULEtBQUwsQ0FBVyxXQUFYO0FBQ0QsT0FoQk87QUFpQlJVLGtCQWpCUSx3QkFpQktKLENBakJMLEVBaUJRO0FBQ2QsYUFBS1gsYUFBTCxHQUFxQlcsRUFBRUUsTUFBRixDQUFTRyxPQUE5QjtBQUNEO0FBbkJPLEs7Ozs7RUFMdUJiLGVBQUtjLFM7O2tCQUFuQnBCLEsiLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG8gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgZGF0YSA9IHtcclxuICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICBjdXJyZW50U3dpcGVyOiAwXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBwYXNzRm4oKSB7XHJcbiAgICAgIGlmICh3ZXB5LmdldFN0b3JhZ2VTeW5jKCdXWFVzZXJJbmZvJykpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdoaWRlSGVsbG8nKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn6K+35o6I5p2DJywgLy8g5o+Q56S655qE5YaF5a65XHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsIC8vIOWbvuagh1xyXG4gICAgICAgICAgZHVyYXRpb246IDE1MDAsIC8vIOW7tui/n+aXtumXtCwxNTAw5piv5pyA5L2z55qE5o+Q56S65pe26Ze0XHJcbiAgICAgICAgICBtYXNrOiB0cnVlIC8vIOaYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAj1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiaW5kR2V0VXNlckluZm8oZSkge1xyXG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdXWFVzZXJJbmZvJywgZS5kZXRhaWwudXNlckluZm8pXHJcbiAgICAgIHRoaXMuJGVtaXQoJ2hpZGVIZWxsbycpXHJcbiAgICB9LFxyXG4gICAgc3dpcGVyQ2hhbmdlKGUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U3dpcGVyID0gZS5kZXRhaWwuY3VycmVudFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=