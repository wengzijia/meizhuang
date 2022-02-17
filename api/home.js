const request = require('./request.js');

exports.fetchindexData = function(){
  return request({
    url:"http://zlwh.jinghuanqiu.com/index"
  })
}