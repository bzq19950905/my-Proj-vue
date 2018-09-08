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

var TeacherWantSee = function (_wepy$page) {
  _inherits(TeacherWantSee, _wepy$page);

  function TeacherWantSee() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TeacherWantSee);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeacherWantSee.__proto__ || Object.getPrototypeOf(TeacherWantSee)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '想见我的人'
    }, _this.$repeat = {}, _this.$props = { "teacher-detailLR": { "xmlns:v-bind": "", "v-bind:con.sync": "content", "v-bind:isMargin.once": "isMargin" } }, _this.$events = {}, _this.components = {
      'teacher-detailLR': _teacherDetailLR2.default
    }, _this.data = {
      content: _mock2.default.TeacherWantSeeData,
      isMargin: true
    }, _this.methods = {
      clickToRoute: function clickToRoute() {
        _wepy2.default.navigateTo({
          url: './OfflineActivities'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TeacherWantSee;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TeacherWantSee , 'pages/teacherWantSee'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJXYW50U2VlLmpzIl0sIm5hbWVzIjpbIlRlYWNoZXJXYW50U2VlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlRlYWNoZXJEZXRhaWxMUiIsImRhdGEiLCJjb250ZW50IiwibW9ja0RhdGEiLCJUZWFjaGVyV2FudFNlZURhdGEiLCJpc01hcmdpbiIsIm1ldGhvZHMiLCJjbGlja1RvUm91dGUiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsb0JBQW1CLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLFNBQXJDLEVBQStDLHdCQUF1QixVQUF0RSxFQUFwQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWLDBCQUFvQkM7QUFEVixLLFFBR1pDLEksR0FBTztBQUNMQyxlQUFTQyxlQUFTQyxrQkFEYjtBQUVMQyxnQkFBVTtBQUZMLEssUUFJUEMsTyxHQUFVO0FBQ1JDLGtCQURRLDBCQUNPO0FBQ2JDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7OztFQWRnQ0YsZUFBS0csSTs7a0JBQTVCbEIsYyIsImZpbGUiOiJ0ZWFjaGVyV2FudFNlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgVGVhY2hlckRldGFpbExSIGZyb20gJy4uL2NvbXBvbmVudHMvdGVhY2hlckRldGFpbExSJ1xyXG5pbXBvcnQgbW9ja0RhdGEgZnJvbSAnLi4vY29tbW9uL21vY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFjaGVyV2FudFNlZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aDs+ingeaIkeeahOS6uidcclxuICB9XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRlYWNoZXItZGV0YWlsTFJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNvbi5zeW5jXCI6XCJjb250ZW50XCIsXCJ2LWJpbmQ6aXNNYXJnaW4ub25jZVwiOlwiaXNNYXJnaW5cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgJ3RlYWNoZXItZGV0YWlsTFInOiBUZWFjaGVyRGV0YWlsTFJcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGNvbnRlbnQ6IG1vY2tEYXRhLlRlYWNoZXJXYW50U2VlRGF0YSxcclxuICAgIGlzTWFyZ2luOiB0cnVlXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjbGlja1RvUm91dGUoKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi9PZmZsaW5lQWN0aXZpdGllcydcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19