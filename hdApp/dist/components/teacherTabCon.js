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

var TeacherTabCon = function (_wepy$component) {
  _inherits(TeacherTabCon, _wepy$component);

  function TeacherTabCon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TeacherTabCon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeacherTabCon.__proto__ || Object.getPrototypeOf(TeacherTabCon)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      content: {
        type: Array,
        default: null
      }
    }, _this.methods = {
      clickFn: function clickFn() {
        _wepy2.default.navigateTo({
          url: '../pages/activeRegistration'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TeacherTabCon;
}(_wepy2.default.component);

exports.default = TeacherTabCon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJUYWJDb24uanMiXSwibmFtZXMiOlsiVGVhY2hlclRhYkNvbiIsInByb3BzIiwiY29udGVudCIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJtZXRob2RzIiwiY2xpY2tGbiIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxLLEdBQVE7QUFDTkMsZUFBUztBQUNQQyxjQUFNQyxLQURDO0FBRVBDLGlCQUFTO0FBRkY7QUFESCxLLFFBTVJDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1JDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7OztFQVArQkYsZUFBS0csUzs7a0JBQTNCWCxhIiwiZmlsZSI6InRlYWNoZXJUYWJDb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlclRhYkNvbiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH1cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGNsaWNrRm4oKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvYWN0aXZlUmVnaXN0cmF0aW9uJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=