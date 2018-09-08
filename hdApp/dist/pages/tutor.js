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

var Tutor = function (_wepy$page) {
  _inherits(Tutor, _wepy$page);

  function Tutor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tutor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tutor.__proto__ || Object.getPrototypeOf(Tutor)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '惠答'
    }, _this.data = {
      toView: '',
      scrollTop: 0,
      list: _mock2.default.tutorData
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Tutor;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Tutor , 'pages/tutor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yLmpzIl0sIm5hbWVzIjpbIlR1dG9yIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0b1ZpZXciLCJzY3JvbGxUb3AiLCJsaXN0IiwibW9ja0RhdGEiLCJ0dXRvckRhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxpQkFBVyxDQUZOO0FBR0xDLFlBQU1DLGVBQVNDO0FBSFYsSzs7OztFQUowQkMsZUFBS0MsSTs7a0JBQW5CVixLIiwiZmlsZSI6InR1dG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBtb2NrRGF0YSBmcm9tICcuLi9jb21tb24vbW9jaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1dG9yIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oOg562UJ1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgdG9WaWV3OiAnJyxcclxuICAgIHNjcm9sbFRvcDogMCxcclxuICAgIGxpc3Q6IG1vY2tEYXRhLnR1dG9yRGF0YVxyXG4gIH1cclxufVxyXG4iXX0=