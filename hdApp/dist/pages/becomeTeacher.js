'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BecomeTeacher = function (_wepy$page) {
  _inherits(BecomeTeacher, _wepy$page);

  function BecomeTeacher() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BecomeTeacher);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BecomeTeacher.__proto__ || Object.getPrototypeOf(BecomeTeacher)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '申请成为导师'
    }, _this.data = {
      isIphoneX: false,
      formList: [{
        id: 1,
        tit: '当前公司名称'
      }, {
        id: 2,
        tit: '职位'
      }, {
        id: 3,
        tit: '前任公司名称'
      }, {
        id: 4,
        tit: '职位'
      }, {
        id: 5,
        tit: '工作年限'
      }, {
        id: 6,
        tit: '擅长领域'
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return BecomeTeacher;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(BecomeTeacher , 'pages/becomeTeacher'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlY29tZVRlYWNoZXIuanMiXSwibmFtZXMiOlsiQmVjb21lVGVhY2hlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaXNJcGhvbmVYIiwiZm9ybUxpc3QiLCJpZCIsInRpdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGlCQUFXLEtBRE47QUFFTEMsZ0JBQVUsQ0FDUjtBQUNFQyxZQUFJLENBRE47QUFFRUMsYUFBSztBQUZQLE9BRFEsRUFLUjtBQUNFRCxZQUFJLENBRE47QUFFRUMsYUFBSztBQUZQLE9BTFEsRUFTUjtBQUNFRCxZQUFJLENBRE47QUFFRUMsYUFBSztBQUZQLE9BVFEsRUFhUjtBQUNFRCxZQUFJLENBRE47QUFFRUMsYUFBSztBQUZQLE9BYlEsRUFpQlI7QUFDRUQsWUFBSSxDQUROO0FBRUVDLGFBQUs7QUFGUCxPQWpCUSxFQXFCUjtBQUNFRCxZQUFJLENBRE47QUFFRUMsYUFBSztBQUZQLE9BckJRO0FBRkwsSzs7OztFQUprQ0MsZUFBS0MsSTs7a0JBQTNCVCxhIiwiZmlsZSI6ImJlY29tZVRlYWNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWNvbWVUZWFjaGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnlLPor7fmiJDkuLrlr7zluIgnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpc0lwaG9uZVg6IGZhbHNlLFxuICAgIGZvcm1MaXN0OiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXQ6ICflvZPliY3lhazlj7jlkI3np7AnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0OiAn6IGM5L2NJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdDogJ+WJjeS7u+WFrOWPuOWQjeensCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0aXQ6ICfogYzkvY0nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgdGl0OiAn5bel5L2c5bm06ZmQJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIHRpdDogJ+aThemVv+mihuWfnydcbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cbiJdfQ==