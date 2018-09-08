'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _teacherDetailLR = require('./../components/teacherDetailLR.js');

var _teacherDetailLR2 = _interopRequireDefault(_teacherDetailLR);

var _mock = require('./../common/mock.js');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivityRegistration = function (_wepy$page) {
  _inherits(ActivityRegistration, _wepy$page);

  function ActivityRegistration() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActivityRegistration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActivityRegistration.__proto__ || Object.getPrototypeOf(ActivityRegistration)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '活动报名'
    }, _this.$repeat = {}, _this.$props = { "teacher-detailLR": { "xmlns:v-bind": "", "v-bind:con.sync": "content" } }, _this.$events = {}, _this.components = {
      'teacher-detailLR': _teacherDetailLR2.default
    }, _this.methods = {}, _this.data = {
      activeData: _mock2.default.activityRegistrationData,
      content: [{
        img: '../assets/image/headSculpture.jpg',
        name: 'Johoon',
        position: '阿里巴巴资深前端工程师',
        fans: '100',
        questuion: '150',
        see: '1000',
        title: '给年轻学者的基本网络技巧：',
        content: 'Google scholar页面'
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ActivityRegistration;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ActivityRegistration , 'pages/activeRegistration'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZVJlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJBY3Rpdml0eVJlZ2lzdHJhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJUZWFjaGVyRGV0YWlsTFIiLCJtZXRob2RzIiwiZGF0YSIsImFjdGl2ZURhdGEiLCJtb2NrRGF0YSIsImFjdGl2aXR5UmVnaXN0cmF0aW9uRGF0YSIsImNvbnRlbnQiLCJpbWciLCJuYW1lIiwicG9zaXRpb24iLCJmYW5zIiwicXVlc3R1aW9uIiwic2VlIiwidGl0bGUiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxvQjs7Ozs7Ozs7Ozs7Ozs7a05BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsb0JBQW1CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLFNBQXJDLEVBQXBCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1YsMEJBQW9CQztBQURWLEssUUFHWkMsTyxHQUFVLEUsUUFDVkMsSSxHQUFPO0FBQ0xDLGtCQUFZQyxlQUFTQyx3QkFEaEI7QUFFTEMsZUFBUyxDQUNQO0FBQ0VDLGFBQUssbUNBRFA7QUFFRUMsY0FBTSxRQUZSO0FBR0VDLGtCQUFVLGFBSFo7QUFJRUMsY0FBTSxLQUpSO0FBS0VDLG1CQUFXLEtBTGI7QUFNRUMsYUFBSyxNQU5QO0FBT0VDLGVBQU8sZUFQVDtBQVFFUCxpQkFBUztBQVJYLE9BRE87QUFGSixLOzs7O0VBWHlDUSxlQUFLQyxJOztrQkFBbEN0QixvQiIsImZpbGUiOiJhY3RpdmVSZWdpc3RyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IFRlYWNoZXJEZXRhaWxMUiBmcm9tICcuLi9jb21wb25lbnRzL3RlYWNoZXJEZXRhaWxMUidcclxuaW1wb3J0IG1vY2tEYXRhIGZyb20gJy4uL2NvbW1vbi9tb2NrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZpdHlSZWdpc3RyYXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmtLvliqjmiqXlkI0nXHJcbiAgfVxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0ZWFjaGVyLWRldGFpbExSXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjb24uc3luY1wiOlwiY29udGVudFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAndGVhY2hlci1kZXRhaWxMUic6IFRlYWNoZXJEZXRhaWxMUlxyXG4gIH1cclxuICBtZXRob2RzID0ge31cclxuICBkYXRhID0ge1xyXG4gICAgYWN0aXZlRGF0YTogbW9ja0RhdGEuYWN0aXZpdHlSZWdpc3RyYXRpb25EYXRhLFxyXG4gICAgY29udGVudDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaW1nOiAnLi4vYXNzZXRzL2ltYWdlL2hlYWRTY3VscHR1cmUuanBnJyxcclxuICAgICAgICBuYW1lOiAnSm9ob29uJyxcclxuICAgICAgICBwb3NpdGlvbjogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICAgICAgZmFuczogJzEwMCcsXHJcbiAgICAgICAgcXVlc3R1aW9uOiAnMTUwJyxcclxuICAgICAgICBzZWU6ICcxMDAwJyxcclxuICAgICAgICB0aXRsZTogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3p++8micsXHJcbiAgICAgICAgY29udGVudDogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiJdfQ==