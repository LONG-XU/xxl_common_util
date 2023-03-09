const getParams  = () => {
    let url = window.location.search; // 获取url中"?"符后的字串
    let theRequest = {};
    if (url.indexOf('?') !== -1) {
      let str = url.substr(1);
      let strs = str.split('&');
      for (let i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1];
      }
    }
    theRequest['client_url'] = window.location.href;
    return theRequest;
  };

  export default {
    getParams
  }