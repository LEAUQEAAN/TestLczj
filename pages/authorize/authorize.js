// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {  
    },getPhoneNumber: function(e) {
        var that = this;
        if (e.detail.errMsg == 'getPhoneNumber:fail user deny'){
            wx.showModal({
                title: '提示',
                showCancel: false,
                content: '未授权',
                success: function (res) {
                }
            })
        } else {
            console.log(e.detail.errMsg)
            console.log(e.detail.iv)
            console.log(e.detail.encryptedData) 
            wx.request({
                url: 'http://jx-lczj.nat300.top/Lczj/wx/decodePhoneNumber',
                data: {
                    sessionId: wx.getStorageSync('session_key'),
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: (res) => {
                console.log(res.data)
                wx.redirectTo({
                  url: '../login/login?phone='+res.data.phoneNumber,
                })

        }
        })
        }
    },showLogins:function(e){ 
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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