'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _teacherTabCon = require('./../components/teacherTabCon.js');

var _teacherTabCon2 = _interopRequireDefault(_teacherTabCon);

var _mock = require('./../common/mock.js');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Teacher = function (_wepy$page) {
  _inherits(Teacher, _wepy$page);

  function Teacher() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Teacher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Teacher.__proto__ || Object.getPrototypeOf(Teacher)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '想见的导师'
    }, _this.$repeat = {}, _this.$props = { "teacher-TabCon": { "xmlns:v-bind": "", "v-bind:content.sync": "propData" } }, _this.$events = {}, _this.components = {
      'teacher-TabCon': _teacherTabCon2.default
    }, _this.data = {
      tabs: ['我想见的', '约见记录'],
      activeIndex: 0,
      content1: _mock2.default.TeacherList1,
      content2: _mock2.default.TeacherList2,
      propData: null
    }, _this.methods = {
      checkStyleFn: function checkStyleFn(index) {
        console.log(index);
        this.activeIndex = index;
        var arr = index == 0 ? this.content1 : this.content2;
        this.propData = arr;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Teacher, [{
    key: 'onLoad',
    value: function onLoad() {
      this.propData = this.content1;
    }
  }]);

  return Teacher;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Teacher , 'pages/teacher'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXIuanMiXSwibmFtZXMiOlsiVGVhY2hlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJUZWFjaGVyVGFiQ29uIiwiZGF0YSIsInRhYnMiLCJhY3RpdmVJbmRleCIsImNvbnRlbnQxIiwibW9ja0RhdGEiLCJUZWFjaGVyTGlzdDEiLCJjb250ZW50MiIsIlRlYWNoZXJMaXN0MiIsInByb3BEYXRhIiwibWV0aG9kcyIsImNoZWNrU3R5bGVGbiIsImluZGV4IiwiY29uc29sZSIsImxvZyIsImFyciIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFVBQXpDLEVBQWxCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1Ysd0JBQWtCQztBQURSLEssUUFHWkMsSSxHQUFPO0FBQ0xDLFlBQU0sQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUREO0FBRUxDLG1CQUFhLENBRlI7QUFHTEMsZ0JBQVVDLGVBQVNDLFlBSGQ7QUFJTEMsZ0JBQVVGLGVBQVNHLFlBSmQ7QUFLTEMsZ0JBQVU7QUFMTCxLLFFBVVBDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDS0MsS0FETCxFQUNZO0FBQ2xCQyxnQkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0EsYUFBS1QsV0FBTCxHQUFtQlMsS0FBbkI7QUFDQSxZQUFJRyxNQUFNSCxTQUFTLENBQVQsR0FBYSxLQUFLUixRQUFsQixHQUE2QixLQUFLRyxRQUE1QztBQUNBLGFBQUtFLFFBQUwsR0FBZ0JNLEdBQWhCO0FBQ0Q7QUFOTyxLOzs7Ozs2QkFIRDtBQUNQLFdBQUtOLFFBQUwsR0FBZ0IsS0FBS0wsUUFBckI7QUFDRDs7OztFQW5Ca0NZLGVBQUtDLEk7O2tCQUFyQnhCLE8iLCJmaWxlIjoidGVhY2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBUZWFjaGVyVGFiQ29uIGZyb20gJy4uL2NvbXBvbmVudHMvdGVhY2hlclRhYkNvbidcbmltcG9ydCBtb2NrRGF0YSBmcm9tICcuLi9jb21tb24vbW9jaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oOz6KeB55qE5a+85biIJ1xuICB9XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ0ZWFjaGVyLVRhYkNvblwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y29udGVudC5zeW5jXCI6XCJwcm9wRGF0YVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgJ3RlYWNoZXItVGFiQ29uJzogVGVhY2hlclRhYkNvblxuICB9XG4gIGRhdGEgPSB7XG4gICAgdGFiczogWyfmiJHmg7Pop4HnmoQnLCAn57qm6KeB6K6w5b2VJ10sXG4gICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgY29udGVudDE6IG1vY2tEYXRhLlRlYWNoZXJMaXN0MSxcbiAgICBjb250ZW50MjogbW9ja0RhdGEuVGVhY2hlckxpc3QyLFxuICAgIHByb3BEYXRhOiBudWxsXG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMucHJvcERhdGEgPSB0aGlzLmNvbnRlbnQxXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjaGVja1N0eWxlRm4oaW5kZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4XG4gICAgICBsZXQgYXJyID0gaW5kZXggPT0gMCA/IHRoaXMuY29udGVudDEgOiB0aGlzLmNvbnRlbnQyXG4gICAgICB0aGlzLnByb3BEYXRhID0gYXJyXG4gICAgfVxuICB9XG59XG4iXX0=