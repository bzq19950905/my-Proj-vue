'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _TeacherWalletTabLeftCon = require('./../components/TeacherWalletTabLeftCon.js');

var _TeacherWalletTabLeftCon2 = _interopRequireDefault(_TeacherWalletTabLeftCon);

var _mock = require('./../common/mock.js');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeacherWallet = function (_wepy$page) {
  _inherits(TeacherWallet, _wepy$page);

  function TeacherWallet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TeacherWallet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeacherWallet.__proto__ || Object.getPrototypeOf(TeacherWallet)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '账户资金'
    }, _this.$repeat = {}, _this.$props = { "teacher-WalletTabLeftCon": { "xmlns:v-bind": "", "v-bind:propDatas.sync": "PropsList" } }, _this.$events = {}, _this.components = {
      'teacher-WalletTabLeftCon': _TeacherWalletTabLeftCon2.default
    }, _this.data = {
      list: _mock2.default.TeacherWalletList1,
      list2: _mock2.default.TeacherWalletList2,
      PropsList: [],
      activeIndex: 0
    }, _this.methods = {
      clickFn: function clickFn(id) {
        this.activeIndex = Number(id);
        var datas = this.activeIndex === 0 ? this.list : this.list2;
        this.PropsList = datas;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TeacherWallet, [{
    key: 'onLoad',
    value: function onLoad() {
      this.PropsList = this.list;
    }
  }]);

  return TeacherWallet;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TeacherWallet , 'pages/teacherWallet'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJXYWxsZXQuanMiXSwibmFtZXMiOlsiVGVhY2hlcldhbGxldCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJUZWFjaGVyV2FsbGV0VGFiTGVmdENvbiIsImRhdGEiLCJsaXN0IiwibW9ja0RhdGEiLCJUZWFjaGVyV2FsbGV0TGlzdDEiLCJsaXN0MiIsIlRlYWNoZXJXYWxsZXRMaXN0MiIsIlByb3BzTGlzdCIsImFjdGl2ZUluZGV4IiwibWV0aG9kcyIsImNsaWNrRm4iLCJpZCIsIk51bWJlciIsImRhdGFzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyw0QkFBMkIsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix5QkFBd0IsV0FBM0MsRUFBNUIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVixrQ0FBNEJDO0FBRGxCLEssUUFHWkMsSSxHQUFPO0FBQ0xDLFlBQU1DLGVBQVNDLGtCQURWO0FBRUxDLGFBQU9GLGVBQVNHLGtCQUZYO0FBR0xDLGlCQUFXLEVBSE47QUFJTEMsbUJBQWE7QUFKUixLLFFBU1BDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxFQURBLEVBQ0k7QUFDVixhQUFLSCxXQUFMLEdBQW1CSSxPQUFPRCxFQUFQLENBQW5CO0FBQ0EsWUFBSUUsUUFBUSxLQUFLTCxXQUFMLEtBQXFCLENBQXJCLEdBQXlCLEtBQUtOLElBQTlCLEdBQXFDLEtBQUtHLEtBQXREO0FBQ0EsYUFBS0UsU0FBTCxHQUFpQk0sS0FBakI7QUFDRDtBQUxPLEs7Ozs7OzZCQUhEO0FBQ1AsV0FBS04sU0FBTCxHQUFpQixLQUFLTCxJQUF0QjtBQUNEOzs7O0VBbEJ3Q1ksZUFBS0MsSTs7a0JBQTNCdEIsYSIsImZpbGUiOiJ0ZWFjaGVyV2FsbGV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBUZWFjaGVyV2FsbGV0VGFiTGVmdENvbiBmcm9tICcuLi9jb21wb25lbnRzL1RlYWNoZXJXYWxsZXRUYWJMZWZ0Q29uJ1xyXG5pbXBvcnQgbW9ja0RhdGEgZnJvbSAnLi4vY29tbW9uL21vY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFjaGVyV2FsbGV0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSm5oi36LWE6YeRJ1xyXG4gIH1cclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGVhY2hlci1XYWxsZXRUYWJMZWZ0Q29uXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpwcm9wRGF0YXMuc3luY1wiOlwiUHJvcHNMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICd0ZWFjaGVyLVdhbGxldFRhYkxlZnRDb24nOiBUZWFjaGVyV2FsbGV0VGFiTGVmdENvblxyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgbGlzdDogbW9ja0RhdGEuVGVhY2hlcldhbGxldExpc3QxLFxyXG4gICAgbGlzdDI6IG1vY2tEYXRhLlRlYWNoZXJXYWxsZXRMaXN0MixcclxuICAgIFByb3BzTGlzdDogW10sXHJcbiAgICBhY3RpdmVJbmRleDogMFxyXG4gIH1cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLlByb3BzTGlzdCA9IHRoaXMubGlzdFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2xpY2tGbihpZCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gTnVtYmVyKGlkKVxyXG4gICAgICBsZXQgZGF0YXMgPSB0aGlzLmFjdGl2ZUluZGV4ID09PSAwID8gdGhpcy5saXN0IDogdGhpcy5saXN0MlxyXG4gICAgICB0aGlzLlByb3BzTGlzdCA9IGRhdGFzXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==