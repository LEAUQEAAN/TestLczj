//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '进入我的小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    
  },
  //事件处理函数
  bindViewTap: function() {
    
  }
  // , onShow:function(){
  //   console.log(wx.getStorageSync('customer'));
  //   if (wx.getStorageSync('customer') == null || wx.getStorageSync('customer') == '') {
  //     wx.redirectTo({ 
  //       url: '../authorize/authorize',
  //     })
  //     return;
  //   } 
  // }
  ,
  onLoad: function () {
 
    wx.setStorageSync('host', 'http://jx-lczj.nat300.top/Lczj');
      //wx.setStorageSync('host', 'http://localhost:8087/Lczj'); 
    if (app.globalData.userInfo) {
      
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log(this.data.userInfo.avatarUrl);



      wx.setStorageSync('head_url', this.data.userInfo.avatarUrl);
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })

        wx.setStorageSync('head_url', this.data.userInfo.avatarUrl);

        console.log(JSON.stringify(this.data.userInfo,null,4));
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          console.log(JSON.stringify(app.globalData.userInfo));
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    console.log(JSON.stringify(this.data.userInfo,null,4));




     
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },enter:function(){
    wx.navigateTo({
      url: '../glasses_1/glasses_1',
    });
  
  } 
})