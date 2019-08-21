// pages/shopcart/shopcart.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingcart: "购物车",
    tips: "你的订单为",
    nofood: true,
    totalprice: 0,
    pay: "支付",
    nothing: "你的购物车空空如也",
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData();
    this.checkfood();
    this.valuation();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  initData() {
    let shopcart = wx.getStorageSync('shopcart') || [];
    this.setData({
      list: shopcart
    })
  },
  checkfood() {
    let arr = this.data.list;
    if (arr == null)
      this.setData({
        nofood: true
      })
    else
      this.setData({
        nofood: false
      })
  },
  valuation() {
    let totalPrice = 0;
    let foodList = this.data.list;
    for (let food of foodList) {
      totalPrice += food.num * food.val;
    }

    this.setData({
      totalprice: totalPrice
    })
  },
  pay() {
    let orderList = wx.getStorageSync('orderList') || [];
    let time = util.formatTime(new Date());
    let order = {
      id: orderList.length,
      time: time,
      totalprice: this.data.totalprice,
      foods: this.data.list
    }
    orderList.push(order)
    wx.setStorage({
      key: "orderList",
      data: orderList
    })

  }
})