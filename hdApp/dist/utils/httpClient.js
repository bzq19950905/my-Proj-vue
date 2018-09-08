'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
exports.parseResponse = parseResponse;

var _axios = require('./axios.js');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = true;

/***
 * GET 请求
 * @param url
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
/*!
 * @file httpClient.js
 * @brief 基于axios封装客户端请求方法
 * @author hujun
 * @date 2018-8-8
 */
function get(url, responseType, headers) {
  if (!responseType) {
    responseType = 'json';
  }
  return (0, _axios2.default)({
    method: 'get',
    url: url,
    responseType: responseType,
    headers: headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error);
    }
  });
}

/***
 * POST 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
function post(url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json';
  }
  return (0, _axios2.default)({
    method: 'post',
    url: url,
    data: data,
    responseType: responseType,
    headers: headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error);
    }
  });
}

/***
 * PUT 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
function put(url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json';
  }
  return (0, _axios2.default)({
    method: 'post',
    url: url,
    data: data,
    responseType: responseType,
    headers: headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error);
    }
  });
}

/***
 * DELETE 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
function del(url, responseType, headers) {
  if (!responseType) {
    responseType = 'json';
  }
  return (0, _axios2.default)({
    method: 'delete',
    url: url,
    responseType: responseType,
    headers: headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error);
    }
  });
}

/**
 * 返回json数据
 * @param response
 * @returns {*}
 */
function parseResponse(response) {
  // 检查状态
  if (response.status >= 200 && response.status < 400) {
    return response.data;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBDbGllbnQuanMiXSwibmFtZXMiOlsiZ2V0IiwicG9zdCIsInB1dCIsImRlbCIsInBhcnNlUmVzcG9uc2UiLCJkZWJ1ZyIsInVybCIsInJlc3BvbnNlVHlwZSIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBZ0JnQkEsRyxHQUFBQSxHO1FBeUJBQyxJLEdBQUFBLEk7UUEwQkFDLEcsR0FBQUEsRztRQTBCQUMsRyxHQUFBQSxHO1FBdUJBQyxhLEdBQUFBLGE7O0FBOUdoQjs7Ozs7O0FBRUEsSUFBSUMsUUFBUSxJQUFaOztBQUVBOzs7Ozs7QUFWQTs7Ozs7O0FBZ0JPLFNBQVNMLEdBQVQsQ0FBYU0sR0FBYixFQUFrQkMsWUFBbEIsRUFBZ0NDLE9BQWhDLEVBQXlDO0FBQzlDLE1BQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQkEsbUJBQWUsTUFBZjtBQUNEO0FBQ0QsU0FBTyxxQkFBTTtBQUNYRSxZQUFRLEtBREc7QUFFWEgsU0FBS0EsR0FGTTtBQUdYQyxrQkFBY0EsWUFISDtBQUlYQyxhQUFTQTtBQUpFLEdBQU4sRUFNSkUsSUFOSSxDQU1DTixhQU5ELEVBT0pPLEtBUEksQ0FPRSxVQUFTQyxLQUFULEVBQWdCO0FBQ3JCLFFBQUlQLEtBQUosRUFBVztBQUNUUSxjQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBWEksQ0FBUDtBQVlEOztBQUVEOzs7Ozs7O0FBT08sU0FBU1gsSUFBVCxDQUFjSyxHQUFkLEVBQW1CUyxJQUFuQixFQUF5QlIsWUFBekIsRUFBdUNDLE9BQXZDLEVBQWdEO0FBQ3JELE1BQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQkEsbUJBQWUsTUFBZjtBQUNEO0FBQ0QsU0FBTyxxQkFBTTtBQUNYRSxZQUFRLE1BREc7QUFFWEgsU0FBS0EsR0FGTTtBQUdYUyxVQUFNQSxJQUhLO0FBSVhSLGtCQUFjQSxZQUpIO0FBS1hDLGFBQVNBO0FBTEUsR0FBTixFQU9KRSxJQVBJLENBT0NOLGFBUEQsRUFRSk8sS0FSSSxDQVFFLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckIsUUFBSVAsS0FBSixFQUFXO0FBQ1RRLGNBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0YsR0FaSSxDQUFQO0FBYUQ7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTVixHQUFULENBQWFJLEdBQWIsRUFBa0JTLElBQWxCLEVBQXdCUixZQUF4QixFQUFzQ0MsT0FBdEMsRUFBK0M7QUFDcEQsTUFBSSxDQUFDRCxZQUFMLEVBQW1CO0FBQ2pCQSxtQkFBZSxNQUFmO0FBQ0Q7QUFDRCxTQUFPLHFCQUFNO0FBQ1hFLFlBQVEsTUFERztBQUVYSCxTQUFLQSxHQUZNO0FBR1hTLFVBQU1BLElBSEs7QUFJWFIsa0JBQWNBLFlBSkg7QUFLWEMsYUFBU0E7QUFMRSxHQUFOLEVBT0pFLElBUEksQ0FPQ04sYUFQRCxFQVFKTyxLQVJJLENBUUUsVUFBU0MsS0FBVCxFQUFnQjtBQUNyQixRQUFJUCxLQUFKLEVBQVc7QUFDVFEsY0FBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQVpJLENBQVA7QUFhRDs7QUFFRDs7Ozs7OztBQU9PLFNBQVNULEdBQVQsQ0FBYUcsR0FBYixFQUFrQkMsWUFBbEIsRUFBZ0NDLE9BQWhDLEVBQXlDO0FBQzlDLE1BQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQkEsbUJBQWUsTUFBZjtBQUNEO0FBQ0QsU0FBTyxxQkFBTTtBQUNYRSxZQUFRLFFBREc7QUFFWEgsU0FBS0EsR0FGTTtBQUdYQyxrQkFBY0EsWUFISDtBQUlYQyxhQUFTQTtBQUpFLEdBQU4sRUFNSkUsSUFOSSxDQU1DTixhQU5ELEVBT0pPLEtBUEksQ0FPRSxVQUFTQyxLQUFULEVBQWdCO0FBQ3JCLFFBQUlQLEtBQUosRUFBVztBQUNUUSxjQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBWEksQ0FBUDtBQVlEOztBQUVEOzs7OztBQUtPLFNBQVNSLGFBQVQsQ0FBdUJZLFFBQXZCLEVBQWlDO0FBQ3RDO0FBQ0EsTUFBSUEsU0FBU0MsTUFBVCxJQUFtQixHQUFuQixJQUEwQkQsU0FBU0MsTUFBVCxHQUFrQixHQUFoRCxFQUFxRDtBQUNuRCxXQUFPRCxTQUFTRCxJQUFoQjtBQUNEO0FBQ0YiLCJmaWxlIjoiaHR0cENsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGZpbGUgaHR0cENsaWVudC5qc1xuICogQGJyaWVmIOWfuuS6jmF4aW9z5bCB6KOF5a6i5oi356uv6K+35rGC5pa55rOVXG4gKiBAYXV0aG9yIGh1anVuXG4gKiBAZGF0ZSAyMDE4LTgtOFxuICovXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi9heGlvcydcblxubGV0IGRlYnVnID0gdHJ1ZVxuXG4vKioqXG4gKiBHRVQg6K+35rGCXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gcmVzcG9uc2VUeXBlIDogJ2pzb24nLCAndGV4dCcsICdmaWxlJ1xuICogQHBhcmFtIGhlYWRlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldCh1cmwsIHJlc3BvbnNlVHlwZSwgaGVhZGVycykge1xuICBpZiAoIXJlc3BvbnNlVHlwZSkge1xuICAgIHJlc3BvbnNlVHlwZSA9ICdqc29uJ1xuICB9XG4gIHJldHVybiBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6IHVybCxcbiAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZSxcbiAgICBoZWFkZXJzOiBoZWFkZXJzXG4gIH0pXG4gICAgLnRoZW4ocGFyc2VSZXNwb25zZSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH1cbiAgICB9KVxufVxuXG4vKioqXG4gKiBQT1NUIOivt+axglxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSByZXNwb25zZVR5cGUgOiAnanNvbicsICd0ZXh0JywgJ2ZpbGUnXG4gKiBAcGFyYW0gaGVhZGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEsIHJlc3BvbnNlVHlwZSwgaGVhZGVycykge1xuICBpZiAoIXJlc3BvbnNlVHlwZSkge1xuICAgIHJlc3BvbnNlVHlwZSA9ICdqc29uJ1xuICB9XG4gIHJldHVybiBheGlvcyh7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiB1cmwsXG4gICAgZGF0YTogZGF0YSxcbiAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZSxcbiAgICBoZWFkZXJzOiBoZWFkZXJzXG4gIH0pXG4gICAgLnRoZW4ocGFyc2VSZXNwb25zZSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH1cbiAgICB9KVxufVxuXG4vKioqXG4gKiBQVVQg6K+35rGCXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHJlc3BvbnNlVHlwZSA6ICdqc29uJywgJ3RleHQnLCAnZmlsZSdcbiAqIEBwYXJhbSBoZWFkZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXQodXJsLCBkYXRhLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpIHtcbiAgaWYgKCFyZXNwb25zZVR5cGUpIHtcbiAgICByZXNwb25zZVR5cGUgPSAnanNvbidcbiAgfVxuICByZXR1cm4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogdXJsLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgcmVzcG9uc2VUeXBlOiByZXNwb25zZVR5cGUsXG4gICAgaGVhZGVyczogaGVhZGVyc1xuICB9KVxuICAgIC50aGVuKHBhcnNlUmVzcG9uc2UpXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbn1cblxuLyoqKlxuICogREVMRVRFIOivt+axglxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIGRhdGFcbiAqIEBwYXJhbSByZXNwb25zZVR5cGUgOiAnanNvbicsICd0ZXh0JywgJ2ZpbGUnXG4gKiBAcGFyYW0gaGVhZGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsKHVybCwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzKSB7XG4gIGlmICghcmVzcG9uc2VUeXBlKSB7XG4gICAgcmVzcG9uc2VUeXBlID0gJ2pzb24nXG4gIH1cbiAgcmV0dXJuIGF4aW9zKHtcbiAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgIHVybDogdXJsLFxuICAgIHJlc3BvbnNlVHlwZTogcmVzcG9uc2VUeXBlLFxuICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgfSlcbiAgICAudGhlbihwYXJzZVJlc3BvbnNlKVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgIH0pXG59XG5cbi8qKlxuICog6L+U5ZueanNvbuaVsOaNrlxuICogQHBhcmFtIHJlc3BvbnNlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgLy8g5qOA5p+l54q25oCBXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH1cbn1cbiJdfQ==