// 处理数据的工具方法

export default {
  /**
   * 获取单个字符的长度
   * @param {*} char
   */
  zhCharSize(char) {
    let l = 0;
    if (char) {
      let charCode = char.charCodeAt(0);
      if (charCode > 127 || charCode === 94) {
        l = 2;
      } else {
        l = 1;
      }
    }
    return l;
  },
  /**
   * 计算文本长度
   * - 中文 计算值为2 英文为 1
   * @param {*} str
   */
  zhStrLength(str) {
    let me = this;
    let l = 0;
    if (typeof str === 'string' && str) {
      let strs = str.split('');
      strs.forEach(item => {
        l += me.zhCharSize(item);
      });
    }
    return l;
  },
  /**
   * 按中文字符串的方式，截取字符
   * @param {*} str
   * @param {*} start 开始位置
   * @param {*} length 截取长度，如果不设置，默认为最后一个字符
   */
  zhStrSubstring(str, start, length) {
    let me = this;
    let checkStr = str.substring(start);

    let strs = checkStr.split('');
    let nweStrs = [];
    let checkLength = 0;
    strs.forEach(function (item) {
      checkLength += me.zhCharSize(item);
      if (length && checkLength > length) {
        return false;
      } else {
        nweStrs.push(item);
      }
    });
    return nweStrs.join('');
  },

  /**
   * 数组转map
   *
   * - 注意如果key为空的话该值会被忽视
   *
   * @param {*} array 数组
   * @param {*} key 数组的唯一key
   */
  array2Map(array, key) {
    let map = {};

    if (array && array.length > 0 && key) {
      array.forEach(item => {
        if (item && item[key] !== null && item[key] !== undefined) {
          map[item[key]] = item;
        }
      });
    }
    return map;
  },

  /**
   * map(json)对象转数组
   * @param {*} map
   */
  map2Array(map) {
    let array = [];

    if (map) {
      for (let key in map) {
        array.push(map[key]);
      }
    }
    return array;
  },

  /**
   * 克隆对象
   * @param {*} obj 参数
   */
  clone (obj) {
    if (obj && typeof obj === 'object') {
      return JSON.parse(JSON.stringify(obj))
    } else {
      return obj;
    }
  },

  /*
    数组存在唯一值
  */
  isUnique (arr, target) {
    if (!Array.isArray(arr)) {
      return false;
    };
    if (arr.length !== 1) return false;
    return arr.indexOf(target) === 0;
  },
  /** 随机数 */
  random () {
    let stamp = new Date().getTime();
    return (((1 + Math.random()) * stamp) | 0).toString(16);
  },

  /** 判断是否为 json字符串 */
  isJSONString (str) {
    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};
    return start && end[start[1]].test(str);
  }
};
