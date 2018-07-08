// pages/shr/shr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.request({
    //   url: 'http://jx-lczj.nat300.top/Lczj/face/list', //仅为示例，并非真实的接口地址
    //   data: {
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: (res) => {
    //     console.log(res.data)

    //     lists = [];

    //     for (var i = 0; i < res.data.length; i++) {
    //       var item = {};
    //       var it = res.data[i];
    //       item.face = it.face;
    //       item.name = it.name;
    //       if (i == 0) item.style = 'margin-left:0px;';
    //       else item.style = ''; 
    //       lists.push(item);
    //     }

    //     console.log(lists)
      
    //     this.setData({
    //       listData: lists,
    //       currentFace: lists[0].face
    //     })
    //   }
    // })

  }, goAdd:function(e){
    wx.navigateTo({
      url: '../reciver-add/reciver-add',
    })
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
  
  }
})