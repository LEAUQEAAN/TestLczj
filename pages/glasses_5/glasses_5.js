//camera.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src:'',
    current: 0,
    front: 'front',
    hidden:true
    },
  //事件处理函数
  bindViewTap: function () {
     
  }, onShow: function () {
    this.setData({
      current: 0,
      hidden: true
    })
  },
  onLoad: function () {
 
  },
  setFront: function () {
    if(this.data.front=='front'){
      this.setData({
        front: 'back'
      })
    }else{
      this.setData({
        front: 'front'
      })
    }

  },
  resets:function () {
    console.log("AAAA");
    this.setData({
      current: 0
    });
  },
  chooseImage: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) =>{
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(JSON.stringify(tempFilePaths,null,4));
        this.setData({
          src: res.tempFilePaths[0],
          hidden: false,
          current: 1
        })
        wx.removeStorageSync('card');
        wx.setStorage({ key: "card", data: res.tempFilePaths[0]});
        wx.showLoading({
          title: '眼镜推荐中....'
        })
        var intnal = setInterval(() => {
          this.upload();
          clearInterval(intnal);
        }, 1000);
      }
    })

  }, takePhoto:function() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        
        this.setData({
          src: res.tempImagePath,
          hidden:false,
          current:1
        })
        wx.removeStorageSync('card');
        wx.setStorage({ key: "card", data: res.tempImagePath });
        wx.showLoading({
          title: '眼镜推荐中....' 
        })
        var intnal= setInterval(()=>{
         this.upload();
         clearInterval(intnal);
       },1000);
        
      }
    })
  }, upload: function (e) { 
    var card = wx.getStorageSync('card');
    wx.uploadFile({
      url: wx.getStorageSync('host')+'/files/upload',
      filePath: card, 
      name: 'file',
      formData: {
        age: wx.getStorageSync('age'),
        sex: wx.getStorageSync('sex'),
        station: wx.getStorageSync('station'),
      },
      success:  (res)=> {

        if(res.data=='-2'){
          //alert("照片未找到正脸");
          wx.showToast({
            title: '照片未找到正脸',
            icon: 'none',
            duration: 2000
          });
          this.setData({
            current: 0
          });
        } else if(res.data=='-1'){
          //alert("照片未找到眼睛，请睁大眼睛！");
          wx.showToast({
            title: '照片未找到眼睛，请睁大眼睛！',
            icon: 'none',
            duration: 2000
          });
          this.setData({
            current: 0
          });
        } else if (res.data == '-3') {
          //alert("请重新选择图片或拍照");
          wx.showToast({
            title: '请重新选择图片或拍照',
            icon: 'none',
            duration: 2000
          });
          this.setData({
            current: 0,
            hidden: true
          });
        }else{ 
          this.setData({ 
            src: wx.getStorageSync('host') +res.data
          })

          wx.navigateTo({
            url: '../glasses_6/glasses_6?src_url='+wx.getStorageSync('host') + res.data,
          })
        }

        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
        console.log(res);
        
      }
    })
  } ,reset(){
    this.setData({
      src: ''
    })
  }, saveImage() {
    wx.downloadFile({
      url: this.data.src, //仅为示例，并非真实的资源
      success:  (res) => {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
       if (res.statusCode === 200) {
          wx.saveFile({
            tempFilePath: res.tempFilePath,
            success: function (res) {
              var savedFilePath = res.savedFilePath
              wx.showToast({
                title: '保存成功',
                duration: 2000
              })
            }
          }) 
        }
      }
      ,
      error:err=>{
        console.log(err.detail)
      }
    })
  }
})
