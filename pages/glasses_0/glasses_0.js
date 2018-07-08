// pages/znxj_0.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:1,
    nan:'../../images/icon/nan_1.png',
    nv: '../../images/icon/nv_0.png',
    age: 0,
    girl: '../../images/icon/girl_1.png',
    women: '../../images/icon/women_0.png',
    face: 0,
    tyl: '../../images/icon/tyl_0.png',
    yl: '../../images/icon/yl_1.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    wx.setStorageSync('sex', '1');
    wx.setStorageSync('age', '0');
    wx.setStorageSync('face', '0');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  setNv:function(){
    this.setData({
      sex:0, 
      nan: '../../images/icon/nan_0.png',
      nv: '../../images/icon/nv_1.png'
    })

    wx.setStorageSync('sex', '0');
    
  },
  setNan: function () {
    this.setData({
      sex: 1,
      nan: '../../images/icon/nan_1.png',
      nv: '../../images/icon/nv_0.png'
    });
    wx.setStorageSync('sex', '1');
  },
  setGirl: function () {
    this.setData({
      age: 0,
      women: '../../images/icon/women_0.png',
      girl: '../../images/icon/girl_1.png'
    });
    wx.setStorageSync('age', '0');
  },
  setWomen: function () {
    this.setData({
      age: 1,
      women: '../../images/icon/women_1.png',
      girl: '../../images/icon/girl_0.png'
    });

    wx.setStorageSync('age', '1');
  },
  setYL: function () {
    this.setData({
      face: 0,
      tyl: '../../images/icon/tyl_0.png',
      yl: '../../images/icon/yl_1.png'
    });
    wx.setStorageSync('face', '0');
  },
  setTyl: function () {
    this.setData({
      face: 1,
      tyl: '../../images/icon/tyl_1.png',
      yl: '../../images/icon/yl_0.png'
    });
    wx.setStorageSync('face', '1');

  },
  next:function(){
    wx.redirectTo ({
      url: '../glasses_1/glasses_1',
    })
  }
})