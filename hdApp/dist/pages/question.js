'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _questionCom = require('./../components/questionCom.js');

var _questionCom2 = _interopRequireDefault(_questionCom);

var _mock = require('./../common/mock.js');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Question = function (_wepy$page) {
  _inherits(Question, _wepy$page);

  function Question() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Question);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Question.__proto__ || Object.getPrototypeOf(Question)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '惠答'
    }, _this.$repeat = {}, _this.$props = { "question-con": { "xmlns:v-bind": "", "v-bind:datas.sync": "propData" } }, _this.$events = {}, _this.components = {
      'question-con': _questionCom2.default
    }, _this.methods = {
      checkStyleFn: function checkStyleFn(e) {
        var id = e.target.dataset.id;
        this.activeId = id;
        var arr = id == 0 ? this.list : this.list2;
        this.propData = arr;
      }
    }, _this.data = {
      list: _mock2.default.QuestionAnsw,
      list2: _mock2.default.QuestionQues,
      activeId: 0,
      propData: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Question, [{
    key: 'onLoad',
    value: function onLoad() {
      this.propData = this.list;
      var status = this.$parent.globalData.ownUserInfo.status;
      var tit = status === 'teacher' ? '我的回答' : '我的提问';
      _wepy2.default.setNavigationBarTitle({
        title: tit
      });
    }
  }]);

  return Question;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Question , 'pages/question'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLmpzIl0sIm5hbWVzIjpbIlF1ZXN0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInF1ZXN0aW9uQ29tIiwibWV0aG9kcyIsImNoZWNrU3R5bGVGbiIsImUiLCJpZCIsInRhcmdldCIsImRhdGFzZXQiLCJhY3RpdmVJZCIsImFyciIsImxpc3QiLCJsaXN0MiIsInByb3BEYXRhIiwiZGF0YSIsIm1vY2tEYXRhIiwiUXVlc3Rpb25BbnN3IiwiUXVlc3Rpb25RdWVzIiwic3RhdHVzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJvd25Vc2VySW5mbyIsInRpdCIsIndlcHkiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQVdWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHFCQUFvQixVQUF2QyxFQUFoQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWLHNCQUFnQkM7QUFETixLLFFBR1pDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDS0MsQ0FETCxFQUNRO0FBQ2QsWUFBSUMsS0FBS0QsRUFBRUUsTUFBRixDQUFTQyxPQUFULENBQWlCRixFQUExQjtBQUNBLGFBQUtHLFFBQUwsR0FBZ0JILEVBQWhCO0FBQ0EsWUFBSUksTUFBTUosTUFBTSxDQUFOLEdBQVUsS0FBS0ssSUFBZixHQUFzQixLQUFLQyxLQUFyQztBQUNBLGFBQUtDLFFBQUwsR0FBZ0JILEdBQWhCO0FBQ0Q7QUFOTyxLLFFBUVZJLEksR0FBTztBQUNMSCxZQUFNSSxlQUFTQyxZQURWO0FBRUxKLGFBQU9HLGVBQVNFLFlBRlg7QUFHTFIsZ0JBQVUsQ0FITDtBQUlMSSxnQkFBVTtBQUpMLEs7Ozs7OzZCQXRCRTtBQUNQLFdBQUtBLFFBQUwsR0FBZ0IsS0FBS0YsSUFBckI7QUFDQSxVQUFJTyxTQUFTLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsV0FBeEIsQ0FBb0NILE1BQWpEO0FBQ0EsVUFBSUksTUFBTUosV0FBVyxTQUFYLEdBQXVCLE1BQXZCLEdBQWdDLE1BQTFDO0FBQ0FLLHFCQUFLQyxxQkFBTCxDQUEyQjtBQUN6QkMsZUFBT0g7QUFEa0IsT0FBM0I7QUFHRDs7OztFQVhtQ0MsZUFBS0csSTs7a0JBQXRCL0IsUSIsImZpbGUiOiJxdWVzdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBxdWVzdGlvbkNvbSBmcm9tICcuLi9jb21wb25lbnRzL3F1ZXN0aW9uQ29tJ1xuaW1wb3J0IG1vY2tEYXRhIGZyb20gJy4uL2NvbW1vbi9tb2NrJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aDoOetlCdcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5wcm9wRGF0YSA9IHRoaXMubGlzdFxuICAgIGxldCBzdGF0dXMgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5vd25Vc2VySW5mby5zdGF0dXNcbiAgICBsZXQgdGl0ID0gc3RhdHVzID09PSAndGVhY2hlcicgPyAn5oiR55qE5Zue562UJyA6ICfmiJHnmoTmj5Dpl64nXG4gICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgdGl0bGU6IHRpdFxuICAgIH0pXG4gIH1cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInF1ZXN0aW9uLWNvblwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZGF0YXMuc3luY1wiOlwicHJvcERhdGFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICdxdWVzdGlvbi1jb24nOiBxdWVzdGlvbkNvbVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY2hlY2tTdHlsZUZuKGUpIHtcbiAgICAgIGxldCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRcbiAgICAgIHRoaXMuYWN0aXZlSWQgPSBpZFxuICAgICAgbGV0IGFyciA9IGlkID09IDAgPyB0aGlzLmxpc3QgOiB0aGlzLmxpc3QyXG4gICAgICB0aGlzLnByb3BEYXRhID0gYXJyXG4gICAgfVxuICB9XG4gIGRhdGEgPSB7XG4gICAgbGlzdDogbW9ja0RhdGEuUXVlc3Rpb25BbnN3LFxuICAgIGxpc3QyOiBtb2NrRGF0YS5RdWVzdGlvblF1ZXMsXG4gICAgYWN0aXZlSWQ6IDAsXG4gICAgcHJvcERhdGE6IG51bGxcbiAgfVxufVxuIl19