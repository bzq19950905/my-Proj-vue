'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRegister = exports.upLoadFile = exports.editMaterial = exports.getUserInfo = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../common/config.js');

var _httpClient = require('./../utils/httpClient.js');

var http = _interopRequireWildcard(_httpClient);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取用户信息
var getUserInfo = exports.getUserInfo = function getUserInfo(url) {
  return http.get(url).then(function (res) {
    return res;
  });
};

// 编辑资料
var editMaterial = exports.editMaterial = function editMaterial(data) {
  return _wepy2.default.request({
    url: _config.API_HOST + '/api/user/edit',
    method: 'POST',
    data: data
  }).then(function (res) {
    return res.data;
  });
};

// 上传文件
var upLoadFile = exports.upLoadFile = function upLoadFile(obj, callback) {
  return wx.uploadFile({
    url: _config.API_HOST + '/api/upload/avatar',
    method: 'POST',
    filePath: obj.filePath,
    name: obj.name,
    success: callback
  });
};

// 用户注册
var userRegister = exports.userRegister = function userRegister(obj) {
  return http.post(_config.API_HOST + '/api/login/register', obj).then(function (res) {
    return res;
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJodHRwIiwiZ2V0VXNlckluZm8iLCJ1cmwiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZWRpdE1hdGVyaWFsIiwid2VweSIsInJlcXVlc3QiLCJBUElfSE9TVCIsIm1ldGhvZCIsImRhdGEiLCJ1cExvYWRGaWxlIiwib2JqIiwiY2FsbGJhY2siLCJ3eCIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJzdWNjZXNzIiwidXNlclJlZ2lzdGVyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEk7Ozs7OztBQUVaO0FBQ08sSUFBTUMsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDbEMsU0FBT0YsS0FBS0csR0FBTCxDQUFTRCxHQUFULEVBQWNFLElBQWQsQ0FBbUI7QUFBQSxXQUFPQyxHQUFQO0FBQUEsR0FBbkIsQ0FBUDtBQUNELENBRk07O0FBSVA7QUFDTyxJQUFNQyxzQ0FBZSxTQUFmQSxZQUFlLE9BQVE7QUFDbEMsU0FBT0MsZUFDSkMsT0FESSxDQUNJO0FBQ1BOLFNBQVFPLGdCQUFSLG1CQURPO0FBRVBDLFlBQVEsTUFGRDtBQUdQQyxVQUFNQTtBQUhDLEdBREosRUFNSlAsSUFOSSxDQU1DLGVBQU87QUFDWCxXQUFPQyxJQUFJTSxJQUFYO0FBQ0QsR0FSSSxDQUFQO0FBU0QsQ0FWTTs7QUFZUDtBQUNPLElBQU1DLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEVBQW1CO0FBQzNDLFNBQU9DLEdBQ0pDLFVBREksQ0FDTztBQUNWZCxTQUFRTyxnQkFBUix1QkFEVTtBQUVWQyxZQUFRLE1BRkU7QUFHVk8sY0FBVUosSUFBSUksUUFISjtBQUlWQyxVQUFNTCxJQUFJSyxJQUpBO0FBS1ZDLGFBQVNMO0FBTEMsR0FEUCxDQUFQO0FBUUQsQ0FUTTs7QUFXUDtBQUNPLElBQU1NLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ1AsR0FBRCxFQUFTO0FBQ25DLFNBQU9iLEtBQUtxQixJQUFMLENBQWFaLGdCQUFiLDBCQUE0Q0ksR0FBNUMsRUFBaURULElBQWpELENBQXNEO0FBQUEsV0FBT0MsR0FBUDtBQUFBLEdBQXRELENBQVA7QUFDRCxDQUZNIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgeyBBUElfSE9TVCB9IGZyb20gJy4uL2NvbW1vbi9jb25maWcnXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJy4uL3V0aWxzL2h0dHBDbGllbnQnXG5cbi8vIOiOt+WPlueUqOaIt+S/oeaBr1xuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKHVybCkgPT4ge1xuICByZXR1cm4gaHR0cC5nZXQodXJsKS50aGVuKHJlcyA9PiByZXMpXG59XG5cbi8vIOe8lui+kei1hOaWmVxuZXhwb3J0IGNvbnN0IGVkaXRNYXRlcmlhbCA9IGRhdGEgPT4ge1xuICByZXR1cm4gd2VweVxuICAgIC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYCR7QVBJX0hPU1R9L2FwaS91c2VyL2VkaXRgLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5kYXRhXG4gICAgfSlcbn1cblxuLy8g5LiK5Lyg5paH5Lu2XG5leHBvcnQgY29uc3QgdXBMb2FkRmlsZSA9IChvYmosIGNhbGxiYWNrKSA9PiB7XG4gIHJldHVybiB3eFxuICAgIC51cGxvYWRGaWxlKHtcbiAgICAgIHVybDogYCR7QVBJX0hPU1R9L2FwaS91cGxvYWQvYXZhdGFyYCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZmlsZVBhdGg6IG9iai5maWxlUGF0aCxcbiAgICAgIG5hbWU6IG9iai5uYW1lLFxuICAgICAgc3VjY2VzczogY2FsbGJhY2tcbiAgICB9KVxufVxuXG4vLyDnlKjmiLfms6jlhoxcbmV4cG9ydCBjb25zdCB1c2VyUmVnaXN0ZXIgPSAob2JqKSA9PiB7XG4gIHJldHVybiBodHRwLnBvc3QoYCR7QVBJX0hPU1R9L2FwaS9sb2dpbi9yZWdpc3RlcmAsIG9iaikudGhlbihyZXMgPT4gcmVzKVxufVxuIl19