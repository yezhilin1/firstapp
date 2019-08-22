// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record:"订单历史",
    deleterecord:"删除全部记录",
    orderList:[]
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
    this.getTime();
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
  getTime(){
    
    let orderList = wx.getStorageSync('orderList') || [];
    this.setData({
      orderList
    })
    
  },
  clickopen(e){
    
    let clickid = e.currentTarget.dataset.item.id;
    
    // wx.switchTab({
    //   url: `/pages/record/detailedrecord?id=${clickid}`,

    // })

    wx.navigateTo({
      url: `/pages/record/detailrecord?id=${clickid}`,
    })
  },
  delete(){
    wx.removeStorage({
      key: 'orderList'
    })
    this.onShow();
  }
})