var app = getApp()
Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../images/jpgs/_1.jpg'
        }, {
        link: '/pages/logs/logs',
        url: '../../images/jpgs/_2.jpg'
      }, {
        link: '/pages/test/test',
        url: '../../images/jpgs/_3.jpg'
      }, {
        link: '/pages/test/test',
        url: '../../images/jpgs/_4.jpg'
      }, {
        link: '/pages/test/test',
        url: '../../images/jpgs/_5.jpg'
      }
    ], items: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad test');

    wx.request({
      url: 'http://jx-lczj.nat300.top/Lczj/model/list', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data)

       var  lists = [];

        for (var i = 0; i < res.data.length; i++) {
          var item = {};
          var it = res.data[i];
          item.face = it.t_model.model;
          item.name = it.t_model.name;  
          item.url = it.t_model.photo;  
          item.photo1 = 'http://jx-lczj.nat300.top/Lczj/models/' + it.t_model.photo; 
          lists.push(item);
        }

        console.log(lists) 
        this.setData({
          items: lists
        })
      }
    })



  }, goes: function (event) {
    var url = event.currentTarget.dataset.url;
    console.log(url);

    wx.request({
      url: 'http://jx-lczj.nat300.top/Lczj/files/wearglasses', //仅为示例，并非真实的接口地址
      data: {
        url:url,
        glasses:'C:/OpenCVConfig/glasses/male/glasses_0.png',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data)  
        wx.navigateTo({
          url: '../glasses_6/glasses_6?src_url=' + wx.getStorageSync('host') + res.data,
        })
      }
    })
  } 
})  