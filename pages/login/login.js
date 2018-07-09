// pages/login/login.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
  
    hiddenmodalput: false,
    phone: '',
    types: '',
    typescolor: '',
    textGet: '获取',
    vcode: ''  , 
  } ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.phone = options.phone; 
    console.log(options.phone)
    this.setData({
      phone: options.phone
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
  
  }, confirm: function () {

    var icode = wx.getStorageSync('icode');

    if (this.data.vcode == icode) { 
      wx.request({
        url: 'http://jx-lczj.nat300.top/Lczj/customer/login',
        data: {
          phone: this.data.phone,
          _name: app.globalData.userInfo.nickName+'中文',
          sex: app.globalData.userInfo.gender+''
        },
        method:"POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success: (res) => {
          console.log(res.data)
          wx.setStorageSync("customer", res.data)  
          wx.switchTab({
            url: '../index/index',
          })
        }
      })



    
    } else {
      wx.showToast({
        title: '验证码错误',
        icon: 'none',
        duration: 2000
      })
    }


  }, bindKeyInput: function (e) {
    this.setData({
      phone: e.detail.value
    });

    if (this.data.phone == '' || this.data.phone.length !=11 ) {
      this.setData({
        types: 'warn',
        typescolor: '#E64340'
      })
    } else {

      this.setData({
        types: 'success',
        typescolor: 'green',

      });
    }
  }, bindIcodeInput: function (e) {
    this.setData({
      vcode: e.detail.value
    });
  }, getVcode:function () {
    console.log(this.data.phone)

    if (this.data.textGet != '获取') {
      return;
    }


    if (this.data.phone == '' || this.data.phone.length != 11 ) {
      this.setData({
        types: 'warn',
        typescolor: '#E64340'
      })
    } else {

      this.setData({
        types: 'success',
        typescolor: 'green',

      });

      wx.request({
        url: 'http://68eyn5.natappfree.cc/LczjServer/sms/icode', //仅为示例，并非真实的接口地址
        data: {
          phone: this.data.phone
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: (res) => {
          console.log(res.data);
          wx.setStorageSync('icode', res.data);
          var n = 60;
          var int = setInterval(() => {
            this.setData({
              textGet: (n + '\'')
            });
            n--;
            if (n == 0) {
              clearInterval(int);
              this.setData({
                textGet: '获取'
              });
            }
          }, 1000);
        }
      })


    }
  }
})