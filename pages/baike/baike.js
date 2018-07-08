var base64 = require("../images/base64");
var app = getApp()
Page({
  data: { 
    icon20: base64.icon20,
    icon60: '../../images/icon/good.jpg',
    listData:[]
  },
  onLoad: function () {  

    wx.request({
      url: 'http://jx-lczj.nat300.top/Lczj/news/list', //仅为示例，并非真实的接口地址
      data: { 
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        console.log(res.data)  
        this.setData({
          listData: res.data
        })
      }
    })
  },
  
})  