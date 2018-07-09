// pages/znxj_2/znxj_2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:1, 
    age : 20,
    eyesdistance : 0,
    listData: [],
    currentFace: 0,
    left_eyes:{
      types: ['近视', '远视'],
      index: 0,
      text: '近视'
    }, 
    left_ds: {
      datas: [],
      index: 0,
      text: '0'
    },
    left_sg: {
      datas: [],
      index: 0,
      text: '0'
    }, 
    left_zw: {
      datas: [],
      index: 0,
      text: '0'
    },
    right_eyes: {
      types: ['近视', '远视'],
      index: 0,
      text: '近视'
    },
     right_ds: {
      datas: [],
      index: 0,
      text: '0'
    },
     right_sg: {
      datas: [],
      index: 0,
      text: '0'
     }, 
     right_zw: {
       datas: [],
       index: 0,
       text: '0'
     },
    
 
  }, 
  bindLeftPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)

    

    this.setData({
      left_eyes: {
        types: ['近视', '远视'],
        index: e.detail.value,
        text: this.data.left_eyes.types[e.detail.value]
      }
    })

    //左眼近视类型
    wx.setStorageSync('left_type', this.data.left_eyes.types[e.detail.value])


  }, bindRightPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      right_eyes: {
        types: ['近视', '远视'],
        index: e.detail.value,
        text: this.data.right_eyes.types[e.detail.value]
      }
    })

    //右眼近视类型
    wx.setStorageSync('right_type', this.data.right_eyes.types[e.detail.value])


  }, bindLeftDsPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      left_ds: {
        datas: this.crateNums(0, 1600, 25),
        index: e.detail.value,
        text: this.data.left_ds.datas[e.detail.value]
      }
    });
    //左眼度数
    wx.setStorageSync('left_ds', this.data.left_ds.datas[e.detail.value])

  }, bindRightDsPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
   
    this.setData({
      right_ds: {
        datas: this.crateNums(0, 1600, 25),
        index: e.detail.value,
        text: this.data.right_ds.datas[e.detail.value]
      }
    });
    //右眼度数
    wx.setStorageSync('right_ds', this.data.right_ds.datas[e.detail.value])

  }, bindLeftSgPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      left_sg: {
        datas: this.crateNums(0, 1000, 25),
        index: e.detail.value,
        text: this.data.left_sg.datas[e.detail.value]
      }
    });
    //左眼散光度数
    wx.setStorageSync('left_sg', this.data.left_sg.datas[e.detail.value])

  }, bindRightSgPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
  
    this.setData({
      right_sg: {
        datas: this.crateNums(0, 1000, 25),
        index: e.detail.value,
        text: this.data.right_sg.datas[e.detail.value]
      }
    });
    //右眼散光度数
    wx.setStorageSync('right_sg', this.data.right_sg.datas[e.detail.value])

  }, bindLeftZwPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
   
    this.setData({
      left_zw: {
        datas: this.crateNums(0, 180, 5),
        index: e.detail.value,
        text: this.data.left_zw.datas[e.detail.value]
      }
    });
    //左眼散光轴位
    wx.setStorageSync('left_zw', this.data.left_zw.datas[e.detail.value])

  }, bindRightZwPickerChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    
    this.setData({
      right_zw: {
        datas: this.crateNums(0, 180, 5),
        index: e.detail.value,
        text: this.data.right_zw.datas[e.detail.value]
      }
    });
    //右眼散光轴位
    wx.setStorageSync('right_zw', this.data.right_zw.datas[e.detail.value])

  },crateNums:function(min,max,dis){
      var nums = [];
      for(var i = min ; i <= max ; i += dis){
        nums.push(i);
      }
      //console.log(JSON.stringify(nums,null,4))
      return nums;
  },
  listenerAgeInput: function (e) {
    //年龄
    wx.setStorageSync("age", e.detail.value)
    this.data.age = e.detail.value;

  }, 
  listenerEyesdisInput: function (e) {
    //瞳距
    wx.setStorageSync("eyesdistance", e.detail.value)
    this.data.eyesdistance = e.detail.value;

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      left_ds: {
        datas: this.crateNums(0, 1600, 25),
        index: 0,
        text: '0'
      }
    });
    this.setData({
      right_ds: {
        datas: this.crateNums(0, 1600, 25),
        index: 0,
        text: '0'
      }
    });

    this.setData({
      left_sg: {
        datas: this.crateNums(0, 1000, 25),
        index: 0,
        text: '0'
      }
    });
    this.setData({
      right_sg: {
        datas: this.crateNums(0, 1000, 25),
        index: 0,
        text: '0'
      }
    });

    this.setData({
      left_zw: {
        datas: this.crateNums(5, 180, 5),
        index: 0,
        text: '5'
      }
    });
    this.setData({
      right_zw: {
        datas: this.crateNums(5, 180, 5),
        index: 0,
        text: '5'
      }
    });
   
    wx.setStorageSync('sex', 1);
    wx.setStorageSync('age', 20);   
    wx.setStorageSync('eyesdistance', 0);    
    wx.setStorageSync('left_type', this.data.left_eyes.types[0])
    wx.setStorageSync('left_ds', this.data.left_ds.datas[0])
    wx.setStorageSync('left_sg', this.data.left_sg.datas[0])
    wx.setStorageSync('left_zw', this.data.left_zw.datas[0])
    wx.setStorageSync('right_type', this.data.right_eyes.types[0])
    wx.setStorageSync('right_ds', this.data.right_ds.datas[0])
    wx.setStorageSync('right_sg', this.data.right_sg.datas[0])
    wx.setStorageSync('right_zw', this.data.right_zw.datas[0])
    

    var lists = wx.getStorageSync('lists');

    wx.request({
      url: 'http://jx-lczj.nat300.top/Lczj/face/list', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data)

        lists = [];

        for (var i = 0; i < res.data.length; i++) {
          var item = {};
          var it = res.data[i];
          item.face = it.face;
          item.name = it.name; 
          if(i==0) item.style = 'margin-left:0px;';
          else item.style = '';
          item.photo1 = 'http://jx-lczj.nat300.top/Lczj/face/' + it.photo;
          item.photo2 = 'http://jx-lczj.nat300.top/Lczj/face/' + it.photo.substr(0, it.photo.lastIndexOf('.jpg')) + '_1.jpg';
          lists.push(item);
        }
        
        console.log(lists)
        //设置默认脸型
        wx.setStorageSync('face', lists[0].face); 
        wx.setStorageSync('faces', lists); 
        this.setData({
          listData: lists,
          currentFace: lists[0].face
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
  next:function(){

    var customer = wx.getStorageSync("customer");
    console.log(customer.vip);

    var params = {}
    params.occasion = wx.getStorageSync('occasion')
    params.age = wx.getStorageSync('age')
    params.sex = wx.getStorageSync('sex')
    params.face = wx.getStorageSync('face')
    params.eyesdistance = wx.getStorageSync('eyesdistance')
    params.left_type = wx.getStorageSync('left_type')
    params.left_ds = wx.getStorageSync('left_ds')
    params.left_sg = wx.getStorageSync('left_sg')
    params.left_zw = wx.getStorageSync('left_zw')
    params.right_type = wx.getStorageSync('right_type')
    params.right_ds = wx.getStorageSync('right_ds')
    params.right_sg = wx.getStorageSync('right_sg')
    params.right_zw = wx.getStorageSync('right_zw')

    wx.setStorageSync("params", params)

    console.log(JSON.stringify(params,null,4))

    /**
     * 推荐镜框
     */
    wx.request({
      url: 'http://jx-lczj.nat300.top/Lczj/good/recommend',
      data: params,
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: (res) => {
        console.log(res.data)  
        wx.setStorageSync("recommends", res.data)
      }
    })




    wx.navigateTo({
      url: '../glasses_3/glasses_3',
    })
  },
  setSex: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.currentTarget.id);
    this.setData({
      sex: e.currentTarget.id
    }); 

    wx.setStorageSync('sex', e.currentTarget.id);
  }, setVal: function (event) {
    var id = event.currentTarget.dataset.id;
    console.log(id);
    wx.setStorageSync('face', id);
    this.setData({
      currentFace: id
    })

  } 
})