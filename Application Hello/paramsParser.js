function parse(req) {
    var arrayParams = [],params = {};
    if(req.url.indexOf("?") > 0) {
      var urlData = req.url.split("?");
      var arrayParams = urlData[1].split("&");
    }
    for(var j = arrayParams.length-1; j >= 0; j--) {
      var param = arrayParams[j];
      var paramData = param.split("=");
      params[paramData[0]] = [paramData[1]];    
    };
    return params;
}

module.exports.parse = parse;