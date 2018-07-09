// pages/znxj_1/znxj_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:1,
    listData:[], 
    currentValue: 0,
  },onShow: function () {
    console.log(wx.getStorageSync('customer'));
    if (wx.getStorageSync('customer') == null || wx.getStorageSync('customer') == '') {
      wx.redirectTo({
        url: '../authorize/authorize',
      })
      return;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var lists = wx.getStorageSync('lists'); 

    wx.request({
      url: 'http://jx-lczj.nat300.top/Lczj/occasion/list', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data)
         
        lists = []; 

        for(var i = 0 ; i < res.data.length ; i++){
          var item = {};
          var it = res.data[i];
          item.occasion = it.occasion;
          item.name = it.name;
          item.english = it.photo;
          item.photo1 = 'http://jx-lczj.nat300.top/Lczj/occasion/' + it.occasion + '_0.png';
          item.photo2 = 'http://jx-lczj.nat300.top/Lczj/occasion/' + it.occasion + '_1.png'; 
          lists.push(item);
        }

        wx.setStorageSync('lists', lists);
        wx.setStorageSync('occasion', lists[0].occasion);
        this.setData({
          listData: lists,
          currentValue: lists[0].occasion
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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


  next:function(){
    wx.navigateTo({ 
      url: '../glasses_2/glasses_2',
    })
  },setVal:function(event) {
    var id = event.currentTarget.dataset.id;
    console.log(id); 
    wx.setStorageSync('occasion', id);

    this.setData({
      currentValue:id
    })

  } 
})