import GB2260 from './data/GB2260';

import { formatNum } from './util';

export default class ChinaIDCard {
  constructor(options) {
    this.defaultOptions = {
      ID_SPEC: ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'],
      ID_MALE: [1, 3, 5, 7, 9],
      ID_FEMALE: [0, 2, 4, 6, 8]
    };

    this.options = Object.assign({}, this.defaultOptions, options);

    this.srcData = GB2260;
    this.resData = {
      // '110000': {
      //   name: 'xxx',
      //   children: 'yyy'
      // }
    };
    this.tmpData = {};
    this.init();
  }

  init() {
    //一级
    for (let k in this.srcData) {
      if (/\d\d0000/.test(k)) {
        this.tmpData[k] = this.resData[k.substring(0, 2)] = {
          level: 1,
          name: this.srcData[k],
          value: k,
          children: {}
        };
      }
    }

    //二级
    for (let k in this.srcData) {
      if (/\d\d0000/.test(k)) {
        continue;
      }

      if (/\d\d\d\d00/.test(k)) {
        let t = this.resData[k.substring(0, 2)];
        t &&
          (this.tmpData[k] = t.children[k.substring(2, 4)] = {
            level: 2,
            name: this.srcData[k],
            value: k,
            children: {}
          });
      }
    }

    //三级
    for (let k in this.srcData) {
      if (/\d\d0000/.test(k) || /\d\d\d\d00/.test(k)) {
        continue;
      }
      let _t = this.tmpData[k.substring(0, 4) + '00'];
      _t &&
        (this.tmpData[k] = _t.children[k.substring(4, 6)] = {
          level: 3,
          name: this.srcData[k],
          value: k
        });
    }
  }
  getProvinces() {
    let res = [];
    for (let k in this.resData) {
      res.push(this.resData[k]);
    }
    return res;
  }
  getCities(provinceID) {
    let res = [],
      t = this.tmpData[provinceID];

    if (t && t.level == 1) {
      for (let k in t.children) {
        res.push(t.children[k]);
      }
    }

    return res;
  }
  getAreas(cityID) {
    let res = [],
      t = this.tmpData[cityID];

    if (t && t.level == 2) {
      for (let k in t.children) {
        res.push(t.children[k]);
      }
    }

    return res;
  }

  _generate(id, options) {
    let now = new Date();
    let defaultOptions = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      date: now.getDate(),
      isFemale: false
    };

    options = Object.assign(defaultOptions, options);

    let res =
      id +
      formatNum(options.year, 4) +
      formatNum(options.month, 2) +
      formatNum(options.date, 2) +
      formatNum(parseInt(Math.random() * 100), 2);

    if (options.isFemale) {
      res += this.options.ID_FEMALE[
        parseInt(Math.random() * this.options.ID_FEMALE.length)
      ];
    } else {
      res += this.options.ID_MALE[
        parseInt(Math.random() * this.options.ID_MALE.length)
      ];
    }

    var t = 0;
    for (let i = 0; i < res.length; i++) {
      var a = parseInt(res[i]);
      var b = Math.pow(2, 18 - i - 1) % 11;
      t += a * b;
    }
    t %= 11;
    res += this.options.ID_SPEC[t];
    return res;
  }

  generate(id = '110000', options = {}, number = 1) {
    let res = [];

    for (let i = 0; i < number; i++) {
      res.push(this._generate(id, options));
    }

    return res;
  }

  check(id) {
    let l = id.length;
    if (l < 18) {
      return false;
    }

    let t = 0;
    for (let i = 0; i < 17; i++) {
      var a = parseInt(id[i]);
      var b = Math.pow(2, 18 - i - 1) % 11;
      t += a * b;
    }
    t %= 11;
    return this.options.ID_SPEC[t] == id[17];
  }

  info(id) {
    if (!this.check(id)) {
      return false;
    }

    var t = this.tmpData[id.substring(0, 6)];
    return t ? t.name : false;
  }
}
