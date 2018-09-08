'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegister = exports.upLoadFileAction = exports.editMaterial = exports.getUserInfo = undefined;

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

var _config = require('./../common/config.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function API(url) {
  var path = _config.API_HOST + url;
  return path;
}

/***
 * 获取用户信息
 */
var getUserInfo = exports.getUserInfo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uid) {
    var url, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 异步获取远程数据
            url = API('/api/user/info/uid/' + uid);
            _context.next = 3;
            return api.getUserInfo(url);

          case 3:
            result = _context.sent;

            if (!(result && !result.errcode)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', result.data);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***
 * 编辑资料
 */
var editMaterial = exports.editMaterial = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return api.editMaterial(data);

          case 2:
            result = _context2.sent;
            return _context2.abrupt('return', result);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function editMaterial(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***
 * 上传文件
 */
var upLoadFileAction = exports.upLoadFileAction = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(obj, callback) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return api.upLoadFile(obj, callback);

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function upLoadFileAction(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

/***
 * 用户注册
 */
var userRegister = exports.userRegister = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(obj) {
    var result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return api.userRegister(obj);

          case 2:
            result = _context4.sent;

            if (!(result && result.errcode === 0)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt('return', result.data);

          case 5:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function userRegister(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi5qcyJdLCJuYW1lcyI6WyJhcGkiLCJBUEkiLCJ1cmwiLCJwYXRoIiwiQVBJX0hPU1QiLCJnZXRVc2VySW5mbyIsInVpZCIsInJlc3VsdCIsImVycmNvZGUiLCJkYXRhIiwiZWRpdE1hdGVyaWFsIiwidXBMb2FkRmlsZUFjdGlvbiIsIm9iaiIsImNhbGxiYWNrIiwidXBMb2FkRmlsZSIsInVzZXJSZWdpc3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztJQUFZQSxHOztBQUNaOzs7Ozs7QUFFQSxTQUFTQyxHQUFULENBQWFDLEdBQWIsRUFBa0I7QUFDaEIsTUFBSUMsT0FBT0MsbUJBQVdGLEdBQXRCO0FBQ0EsU0FBT0MsSUFBUDtBQUNEOztBQUVEOzs7QUFHTyxJQUFNRTtBQUFBLHFFQUFjLGlCQUFlQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QjtBQUNJSixlQUZxQixHQUVmRCw0QkFBMEJLLEdBQTFCLENBRmU7QUFBQTtBQUFBLG1CQUdOTixJQUFJSyxXQUFKLENBQWdCSCxHQUFoQixDQUhNOztBQUFBO0FBR3JCSyxrQkFIcUI7O0FBQUEsa0JBSXJCQSxVQUFVLENBQUNBLE9BQU9DLE9BSkc7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBS2hCRCxPQUFPRSxJQUxTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFTUDs7O0FBR08sSUFBTUM7QUFBQSxzRUFBZSxrQkFBZUQsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVQVCxJQUFJVSxZQUFKLENBQWlCRCxJQUFqQixDQUZPOztBQUFBO0FBRXRCRixrQkFGc0I7QUFBQSw4Q0FHbkJBLE1BSG1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFNUDs7O0FBR08sSUFBTUk7QUFBQSxzRUFBbUIsa0JBQWVDLEdBQWYsRUFBb0JDLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN4QmIsSUFBSWMsVUFBSixDQUFlRixHQUFmLEVBQW9CQyxRQUFwQixDQUR3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQUlQOzs7QUFHTyxJQUFNRTtBQUFBLHNFQUFlLGtCQUFlSCxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1BaLElBQUllLFlBQUosQ0FBaUJILEdBQWpCLENBRE87O0FBQUE7QUFDdEJMLGtCQURzQjs7QUFBQSxrQkFFdEJBLFVBQVVBLE9BQU9DLE9BQVAsS0FBbUIsQ0FGUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FHakJELE9BQU9FLElBSFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOIiwiZmlsZSI6ImFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuaW1wb3J0IHsgQVBJX0hPU1QgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJ1xuXG5mdW5jdGlvbiBBUEkodXJsKSB7XG4gIGxldCBwYXRoID0gQVBJX0hPU1QgKyB1cmxcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqKlxuICog6I635Y+W55So5oi35L+h5oGvXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jIGZ1bmN0aW9uKHVpZCkge1xuICAvLyDlvILmraXojrflj5bov5znqIvmlbDmja5cbiAgbGV0IHVybCA9IEFQSShgL2FwaS91c2VyL2luZm8vdWlkLyR7dWlkfWApXG4gIGxldCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8odXJsKVxuICBpZiAocmVzdWx0ICYmICFyZXN1bHQuZXJyY29kZSkge1xuICAgIHJldHVybiByZXN1bHQuZGF0YVxuICB9XG59XG5cbi8qKipcbiAqIOe8lui+kei1hOaWmVxuICovXG5leHBvcnQgY29uc3QgZWRpdE1hdGVyaWFsID0gYXN5bmMgZnVuY3Rpb24oZGF0YSkge1xuICAvLyDlvILmraXojrflj5bov5znqIvmlbDmja5cbiAgbGV0IHJlc3VsdCA9IGF3YWl0IGFwaS5lZGl0TWF0ZXJpYWwoZGF0YSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKioqXG4gKiDkuIrkvKDmlofku7ZcbiAqL1xuZXhwb3J0IGNvbnN0IHVwTG9hZEZpbGVBY3Rpb24gPSBhc3luYyBmdW5jdGlvbihvYmosIGNhbGxiYWNrKSB7XG4gIGF3YWl0IGFwaS51cExvYWRGaWxlKG9iaiwgY2FsbGJhY2spXG59XG5cbi8qKipcbiAqIOeUqOaIt+azqOWGjFxuICovXG5leHBvcnQgY29uc3QgdXNlclJlZ2lzdGVyID0gYXN5bmMgZnVuY3Rpb24ob2JqKSB7XG4gIGxldCByZXN1bHQgPSBhd2FpdCBhcGkudXNlclJlZ2lzdGVyKG9iailcbiAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZXJyY29kZSA9PT0gMCkge1xuICAgIHJldHVybiByZXN1bHQuZGF0YVxuICB9XG59XG4iXX0=