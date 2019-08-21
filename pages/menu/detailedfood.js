// pages/menu/detailedfood.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    name: "",
    gopay:"去结算",
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData(options.id);
    this.initNum();
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

  initData(id) {
    switch (id) {
      case "ham":
        this.setData({
          name: "汉堡",
          list: [{
            totalOrder: 0,
            order: 0,
            hasnum: true,
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            val: 6,
            num: 0
          }, {
            totalOrder: 1,
            order: 1,
            hasnum: true,
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            val: 6,
            num: 0
          }, {
            totalOrder: 2,
            order: 2,
            hasnum: true,
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            val: 6,
            num: 0
          }, {
            totalOrder: 3,
            order: 3,
            hasnum: true,
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            val: 6,
            num: 0
          }
          ]
        });
        break;
      case "ch":
        this.setData({
          name: "汉堡",
          list: [{
            totalOrder: 4,
            order: 0,
            hasnum: true,
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            val: 6,
            num: 0
          }, {
            totalOrder: 5,
            order: 1,
            hasnum: true,
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            val: 6,
            num: 0
          }, {
            totalOrder: 6,
            order: 2,
            hasnum: true,
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            num: 0
          }, {
            totalOrder: 7,
            order: 3,
            hasnum: true,
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            val: 6,
            num: 0
          }
          ]
        });
        break;
      case "dr":
        this.setData({
          name: "冷饮",
          list: [
            {
              totalOrder: 8,
              order: 0,
              hasnum: true,
              url: "../../image/bar/1.jpg",
              name: "鸡排汉堡",
              val: 6,
              num: 0
            }, {
              totalOrder: 9,
              order: 1,
              hasnum: true,
              url: "../../image/bar/1.jpg",
              name: "鸡排汉堡",
              val: 6,
              num: 0
            }, {
              totalOrder: 10,
              order: 2,
              hasnum: true,
              url: "../../image/bar/1.jpg",
              name: "鸡排汉堡",
              val: 6,
              num: 0
            }, {
              totalOrder: 11,
              order: 3,
              hasnum: true,
              url: "../../image/bar/1.jpg",
              name: "鸡排汉堡",
              val: 6,
              num: 0
            }
          ]
        })
        break;
    }
  },
  initNum() {
    let shopcart = wx.getStorageSync('shopcart') || [];

    this.data.list.forEach(foodItem => {
      let shopItem = shopcart.find(shopItem => shopItem.totalOrder === foodItem.totalOrder);
      if (shopItem) {
        const up = `list[${shopItem.order}].num`
        this.setData({
          [up]: shopItem.num
        })
      }
    })
  },
  minusClick(e) {
    let num = e.currentTarget.dataset.item.num;
    this.doClick(num <= 0 ? 0 : num - 1, e.currentTarget.dataset.item);
  },
  plusClick(e) {
    let num = e.currentTarget.dataset.item.num;
    this.doClick(num + 1, e.currentTarget.dataset.item);
  },
  doClick(newNum, foodItem) {

    let order = foodItem.order;
    let totalOrder = foodItem.totalOrder;

    const up = `list[${order}].num`

    this.setData({
      [up]: newNum
    })

    let shopcart = wx.getStorageSync('shopcart') || [];

    if (newNum <= 0) {
      shopcart = shopcart.filter(item => item.totalOrder !== totalOrder);
    } else {
      let shopcartItem = shopcart.filter(item => item.totalOrder === totalOrder);
      if (shopcartItem.length === 0) {
        shopcart.push(foodItem)
      } else {
        shopcartItem[0].num = newNum;
      }
    }
    wx.setStorage({
      key:"shopcart",
      data: shopcart
    })
  },
jumpshopcart(){
  wx.switchTab({
    url: `/pages/shopcart/shopcart`
  })
}
})