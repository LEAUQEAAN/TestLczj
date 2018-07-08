Page({
  data: {
      src:''
  },
  onLoad: function () {
    var head_url = wx.getStorageSync('head_url');
    console.log(head_url);
    this.setData({
      src: head_url
    })

  }, loadCoupon:function(){
    wx.navigateTo({
      url: '../coupon/coupon',
    })
  }, shr:function(){
    wx.navigateTo({
      url: '../reciver/reciver',
    })
  }, order:function(){
    wx.navigateTo({
      url: '../order/order',
    })

  }, person: function () {
    wx.navigateTo({
      url: '../person/person',
    })

  }, stores: function () {
    wx.navigateTo({
      url: '../stores/stores',
    })

  }, exit:function(){
    wx.removeStorageSync('phone');
    wx.navigateTo({
      url: '../login/login',
    })
  },setHead:function(){ 
    var srtype = [];
    wx.showActionSheet({
      itemList: ['拍照','相册'],
      success: (res)=> {
        console.log(res.tapIndex)
        if (res.tapIndex==0){
          srtype.push('camera');
        }else{
          srtype.push('album');
        }

        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: srtype, // 可以指定来源是相册还是相机，默认二者都有
          success: (res) => {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var tempImagePath = res.tempFilePaths[0];
            this.setData({
              src: tempImagePath
            })
          }
        })
      },
      fail:  (res)=> {
        console.log(res.errMsg)
      }
    })
  }
});