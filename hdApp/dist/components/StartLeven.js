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

var StartLeven = function (_wepy$component) {
  _inherits(StartLeven, _wepy$component);

  function StartLeven() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StartLeven);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StartLeven.__proto__ || Object.getPrototypeOf(StartLeven)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      propDatas: {
        type: Object,
        default: null
      }
    }, _this.data = {
      starData: [{
        id: 1
      }, {
        id: 2
      }, {
        id: 3
      }, {
        id: 4
      }, {
        id: 5
      }],
      activeIndex: 0
    }, _this.methods = {
      clickFn: function clickFn(e) {
        var id = e.currentTarget.dataset.id;
        this.activeIndex = id + 1;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return StartLeven;
}(_wepy2.default.component);

exports.default = StartLeven;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0YXJ0TGV2ZW4uanMiXSwibmFtZXMiOlsiU3RhcnRMZXZlbiIsInByb3BzIiwicHJvcERhdGFzIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJkYXRhIiwic3RhckRhdGEiLCJpZCIsImFjdGl2ZUluZGV4IiwibWV0aG9kcyIsImNsaWNrRm4iLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVc7QUFDVEMsY0FBTUMsTUFERztBQUVUQyxpQkFBUztBQUZBO0FBREwsSyxRQU1SQyxJLEdBQU87QUFDTEMsZ0JBQVUsQ0FDUjtBQUNFQyxZQUFJO0FBRE4sT0FEUSxFQUlSO0FBQ0VBLFlBQUk7QUFETixPQUpRLEVBT1I7QUFDRUEsWUFBSTtBQUROLE9BUFEsRUFVUjtBQUNFQSxZQUFJO0FBRE4sT0FWUSxFQWFSO0FBQ0VBLFlBQUk7QUFETixPQWJRLENBREw7QUFrQkxDLG1CQUFhO0FBbEJSLEssUUFvQlBDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJSixLQUFLSSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qk4sRUFBakM7QUFDQSxhQUFLQyxXQUFMLEdBQW1CRCxLQUFLLENBQXhCO0FBQ0Q7QUFKTyxLOzs7O0VBM0I0Qk8sZUFBS0MsUzs7a0JBQXhCaEIsVSIsImZpbGUiOiJTdGFydExldmVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0TGV2ZW4gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBwcm9wRGF0YXM6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBzdGFyRGF0YTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDFcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogM1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDRcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1XHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBhY3RpdmVJbmRleDogMFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2xpY2tGbihlKSB7XHJcbiAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXHJcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpZCArIDFcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19