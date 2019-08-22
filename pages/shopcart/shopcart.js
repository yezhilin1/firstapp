// pages/shopcart/shopcart.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoppingcart: "购物车",
    tips: "你的订单为",
    
    totalprice: 0,
    pay: "支付",
    
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
    this.initData();
    this.valuation();
  },

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
    wx.showModal({
      title: '支付提示',
      content: '是否支付当前订单',
      success: (res) => {
        if (res.confirm) {
          console.log('支付成功');
          this.doPay();
        } else if (res.cancel) {
          console.log('取消支付');
        }
      }
    })
  },
  doPay(){
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
    wx.removeStorage({
      key: 'shopcart'
    })
    this.onShow();
  }
})