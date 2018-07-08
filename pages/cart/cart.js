Page({
  data:{
    goods:[],
    cks:[],
    selected:false,
    selectedAll: false,
    totalPrice:0,
    currentTab:0
  },
  onLoad:function(){ 
   
     var  goods = [{
        id: 1,
        price: 15,
        title: "无框眼镜1",
        weight: "15kg",
        spec: "24X49",
        pic: '../../images/icon/good.jpg',
        count: 5,
        selected: false

      }, {
        id: 2,
        price: 15,
        title: "无框眼镜2",
        weight: "15kg",
        spec: "24X49",
        pic: '../../images/icon/good.jpg',
        count: 1,
        selected: false
       }, {
         id: 3,
         price: 15,
         title: "无框眼镜3",
         weight: "15kg",
         spec: "24X49",
         pic: '../../images/icon/good.jpg',
         count: 41,
         selected: false
      }, {
        id: 4,
        price: 15,
        title: "无框眼镜4",
        weight: "15kg",
        spec: "24X49",
        pic: '../../images/icon/good.jpg',
        count: 1,
        selected: false
       }, {
         id: 5,
         price: 15,
         title: "无框眼镜5",
         weight: "15kg",
         spec: "24X49",
         pic: '../../images/icon/good.jpg',
         count: 13,
         selected: false
      }, {
        id: 6,
        price: 15,
        title: "无框眼镜6",
        weight: "15kg",
        spec: "24X49",
        pic: '../../images/icon/good.jpg',
        count: 13,
        selected: false
      }];// this.data.goods;//wx.getStorageSync("goods");
     wx.setStorageSync("goods", goods);
     this.loadGoods();
  },
  loadGoods:function(){
    var goods = wx.getStorageSync("goods"); 
    console.log(JSON.stringify(goods,null,4));
    
    var totalPrice=0;
    for(var i=0;i<goods.length;i++){
      var good = goods[i];
      if (good.selected){
        totalPrice += good.price * good.count;
      }
    }
    this.setData({goods: goods, totalPrice: totalPrice});
    wx.setStorageSync("goods", goods);
    if(goods.length==0){
      this.setData({
        currentTab: 1
      })
    }else{
      this.setData({
        currentTab: 0
      })
    }
  },
  checkboxChange:function(e){ 
     var ids = e.detail.value; 
     this.setData({ cks:ids });
     if(ids.length==0){
       this.setData({selectedAll:false,totalPrice:0});
     }else{
       var goods = wx.getStorageSync("goods");
       var totalPrice = 0;
       for (var i = 0; i < goods.length; i++) {
         var good = goods[i];
         var exist = false;
         for (var j = 0; j < ids.length; j++) {
           if (good.id == ids[j]) { 
             good.selected = true;
             console.log(good.selected);
             totalPrice += good.price * good.count;
             exist = true; 
           }
         }
         if (!exist){
           good.selected = false;
         } 
       }
       if (goods.lenght == ids.length){
         this.setData({ selectedAll: true, totalPrice: totalPrice });
       }else{
         this.setData({ selectedAll: false, totalPrice: totalPrice });
       }

       wx.setStorageSync("goods", goods);
     } 
  },
  checkAll:function(e){
     var selected = this.data.selected;
     console.log(selected);
     var goods = wx.getStorageSync("goods");
     var addGoods = new Array();
     for (var i = 0; i < goods.length; i++) {
       goods[i].selected = !this.data.selectedAll;
       if (goods[i].selected)
       {
         addGoods.push(goods[i].id);
       } 
     }
     wx.setStorageSync("goods", goods);
     this.setData({ cks:addGoods,selectedAll: !this.data.selectedAll });
     this.loadGoods(); 
  },
  addGoods:function(e){
    var id = e.currentTarget.id;
    console.log(id);
    var goods = wx.getStorageSync("goods");
    
    var addGoods = new Array();
    for(var i=0;i<goods.length;i++){
      var good = goods[i];
      if(good.id == id){
        good.count = good.count + 1;
      }
      addGoods.push(good);
    } 
    wx.setStorageSync("goods", addGoods);
    this.loadGoods();
  },
  minusGoods:function(e){
    var id = e.currentTarget.id;
    console.log(id);
    var goods = wx.getStorageSync("goods");
    var addGoods = new Array();
    for (var i = 0; i < goods.length; i++) {
      var good = goods[i];
      if (good.id == id) {
        var count = good.count;
        if(count >= 2){
          good.count = good.count - 1;
        }
      }
      addGoods.push(good);
    }
    wx.setStorageSync("goods", addGoods);
    this.loadGoods();
  },dels:function(){
      if(this.data.cks.length==0){
        wx.showToast({
          title: '请先选择要删除的商品',
          icon: 'none',
          duration: 2000
        });
        return;
      }
      var goods = wx.getStorageSync("goods");
      var addGoods = new Array();
      for (var i = 0; i < goods.length; i++) {
        var good = goods[i];
        var ok = false;
        for (var j = 0; j < this.data.cks.length; j++) {
          if (good.id == this.data.cks[j]) {  
            ok = true;
            break;
          }
        }
        if(!ok) addGoods.push(good); 
      }
      wx.setStorageSync("goods", addGoods);
      this.loadGoods();

      wx.showToast({
        title: '删除成功',
        icon: 'success',
        duration: 2000
      });
      

  }
})