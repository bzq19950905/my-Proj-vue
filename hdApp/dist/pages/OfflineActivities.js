'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mock = require('./../common/mock.js');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OfflineActivities = function (_wepy$page) {
  _inherits(OfflineActivities, _wepy$page);

  function OfflineActivities() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OfflineActivities);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OfflineActivities.__proto__ || Object.getPrototypeOf(OfflineActivities)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发起线下活动'
    }, _this.data = {
      headData: _mock2.default.offlineActivitiesHeadData,
      mainData: _mock2.default.offlineActivitiesMainData
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return OfflineActivities;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(OfflineActivities , 'pages/OfflineActivities'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9mZmxpbmVBY3Rpdml0aWVzLmpzIl0sIm5hbWVzIjpbIk9mZmxpbmVBY3Rpdml0aWVzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWFkRGF0YSIsIm1vY2tEYXRhIiwib2ZmbGluZUFjdGl2aXRpZXNIZWFkRGF0YSIsIm1haW5EYXRhIiwib2ZmbGluZUFjdGl2aXRpZXNNYWluRGF0YSIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVQyxlQUFTQyx5QkFEZDtBQUVMQyxnQkFBVUYsZUFBU0c7QUFGZCxLLFFBSVBDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1pDLGdCQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBL0M7QUFDRDtBQUhPLEs7Ozs7RUFSbUNDLGVBQUtDLEk7O2tCQUEvQmpCLGlCIiwiZmlsZSI6Ik9mZmxpbmVBY3Rpdml0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBtb2NrRGF0YSBmcm9tICcuLi9jb21tb24vbW9jaydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2ZmbGluZUFjdGl2aXRpZXMgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflj5Hotbfnur/kuIvmtLvliqgnXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBoZWFkRGF0YTogbW9ja0RhdGEub2ZmbGluZUFjdGl2aXRpZXNIZWFkRGF0YSxcclxuICAgIG1haW5EYXRhOiBtb2NrRGF0YS5vZmZsaW5lQWN0aXZpdGllc01haW5EYXRhXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtU3VibWl0KGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19