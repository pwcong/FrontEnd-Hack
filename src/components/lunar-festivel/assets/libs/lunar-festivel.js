;
(function ($, window, document, undefined) {
  /**************************************************************
   * 农历及节日常量表
   **************************************************************/
  var Gan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  var Zhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  var Animals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  var LunarDate = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  var LunarOdate = ['初', '十', '廿', '卅', '　'];
  var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0];
  var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
  var solarTerms = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
  var solarFestivals = ['0101 元旦', '0214 情人节', '0308 妇女节', '0312 植树节', '0401 愚人节', '0501 劳动节', '0504 青年节', '0512 护士节', '0601 儿童节', '0701 建党节', '0801 建军节', '0910 教师节', '1001 国庆节', '1031 万圣节', '1225 圣诞节'];
  var lunarFestivals = ['0101 春节', '0115 元宵节', '0505 端午节', '0707 七夕', '0715 中元节', '0815 中秋节', '0909 重阳节', '1208 腊八节', '1224 小年', '0100 除夕'];
  var weekFestivals = ['0520 母亲节', '0630 父亲节', '1144 感恩节'];

  /**
   * 农历对象
   *  
   * @param {Date} refDate 
   */
  var Lunar = function (refDate) {
    var _cyclical = function (num) {
      num = num - 1900 + 36;
      return (Gan[num % 10] + Zhi[num % 12] + Animals[(num - 4) % 12]);
    };
    var _leapMonth = function (y) {
      return (lunarInfo[y - 1900] & 0xf);
    };
    var _monthDays = function monthDays(y, m) {
      return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
    };
    var _leapDays = function (y) {
      if (_leapMonth(y))
        return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
      else
        return (0);
    };
    var _lYearDays = function (y) {
      var i, sum = 348;
      for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
      }
      return (sum + _leapDays(y));
    };
    var i, leap = 0,
      temp = 0;
    var baseDate = new Date(1900, 0, 31);
    var offset = (refDate - baseDate.getTime()) / 86400000;
    this.dayCyl = offset + 40;
    this.monCyl = 14;
    for (i = 1900; i < 2050 && offset > 0; i++) {
      temp = _lYearDays(i);
      offset -= temp;
      this.monCyl += 12;
    }
    if (offset < 0) {
      offset += temp;
      i--;
      this.monCyl -= 12;
    }
    this.year = i;
    this.yearCyl = i - 1864;
    leap = _leapMonth(i);
    this.isLeap = false;
    for (i = 1; i < 13 && offset > 0; i++) {
      if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
        --i;
        this.isLeap = true;
        temp = _leapDays(this.year);
      } else {
        temp = _monthDays(this.year, i);
      }
      if (this.isLeap == true && i == (leap + 1))
        this.isLeap = false;
      offset -= temp;
      if (this.isLeap == false)
        this.monCyl++;
    }
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (this.isLeap) {
        this.isLeap = false;
      } else {
        this.isLeap = true;
        --i;
        --this.monCyl;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
      --this.monCyl;
    }
    this.month = i;
    this.day = offset + 1;
  };

  /**
   * 获取日期对应的阴历或节日
   * 
   * @param {Date} refDate 
   */
  var getLunarOrFestivelDay = function (refDate) {
    var SY = refDate.getFullYear();
    var SM = refDate.getMonth();
    var SD = refDate.getDate();
    var SW = refDate.getDay(); //星期几
    var SN = Math.ceil((SD + 6 - SW) / 7); //第几周
    var cDay = function (m, d) {
      var s = '';
      switch (parseInt(d)) {
        case 10:
          s += '初十';
          break;
        case 20:
          s += '二十';
          break;
        case 30:
          s += '三十';
          break;
        default:
          s += LunarOdate[Math.floor(d / 10)];
          s += LunarDate[Math.round(d % 10)];
      }
      return (s);
    };
    var lDObj = new Lunar(refDate);
    var solarTerm = '',
      solarFestival = '',
      lunarFestival = '',
      sFtv = '',
      tmp1, tmp2;
    if (!lDObj.isLeap) {
      for (i in lunarFestivals) { //农历节日
        if (lunarFestivals[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
          tmp1 = Number(RegExp.$1) - lDObj.month;
          tmp2 = Number(RegExp.$2) - lDObj.day;
          if (tmp1 == 0 && tmp2 == 0) {
            lunarFestival = RegExp.$4;
          }
        }
      }
    }
    if (lunarFestival == '') {
      for (i in solarFestivals) { //阳历节日
        if (solarFestivals[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
          tmp1 = Number(RegExp.$1) - (SM + 1);
          tmp2 = Number(RegExp.$2) - SD;
          if (tmp1 == 0 && tmp2 == 0)
            solarFestival = RegExp.$4;
        }
      }
      for (i in weekFestivals) { //月周节日
        if (weekFestivals[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/)) {
          if (Number(RegExp.$1) == (SM + 1)) {
            var firstWeek = new Date(SY, SM, 1).getDay();
            tmp1 = Number(RegExp.$2);
            tmp2 = Number(RegExp.$3);
            if (((firstWeek > tmp2) ? 7 : 0) + 7 * (tmp1 - 1) + tmp2 - firstWeek + 1 == SD)
              solarFestival = RegExp.$5;
            //this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' '  
          }
        }
      }
      if (solarFestival == '') { //阴历节气						
        tmp1 = new Date((31556925974.7 * (SY - 1900) + sTermInfo[SM * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
        tmp2 = tmp1.getUTCDate();
        if (tmp2 == SD) {
          solarTerm = solarTerms[SM * 2 + 1];
        }
        tmp1 = new Date((31556925974.7 * (SY - 1900) + sTermInfo[SM * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
        tmp2 = tmp1.getUTCDate();
        // #34545 修复 2012,2016,2020年大雪节气计算错误, 其他年份正确
        if (SM == 11 && (SY == 2012 || SY == 2016 || SY == 2020)) {
          tmp2 = tmp2 + 1;
        }
        if (tmp2 == SD) {
          solarTerm = solarTerms[SM * 2];
        }
        if (solarTerm == '') {
          sFtv = '';
        } else {
          sFtv = solarTerm;
        }
      } else {
        sFtv = solarFestival;
      }
    } else {
      sFtv = lunarFestival;
    }
    if (sFtv != '') {
      return sFtv;
    } else {
      return cDay(lDObj.month, lDObj.day);
    }
  };

  if (typeof $ === 'function') {

    $.extend({
      getLunarOrFestivelDay: getLunarOrFestivelDay
    });

  } else if (typeof define === 'function') {
    define(function () {
      return getLunarOrFestivelDay;
    });
  } else if (typeof exports === 'object') {
    module.exports = getLunarOrFestivelDay;
  } else {
    window.getLunarOrFestivelDay = getLunarOrFestivelDay;
  };


})(jQuery, window, document);