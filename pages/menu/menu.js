// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  click1: function () { },

  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../image/bar/1.jpg'
      }, {
        link: '/pages/logs/logs',
        url: '../../image/bar/1.jpg'
      }, {
        link: '/pages/index/index',
        url: '../../image/bar/1.jpg'
      }, {
        link: '/pages/index/index',
        url: '../../image/bar/1.jpg'
      }
    ],
    optionurls: [
      {
        name: '汉堡',
        url: '../../image/bar/1.jpg',
        kind: 'ham'
      }, {
        name: '鸡肉',
        url: '../../image/bar/1.jpg',
        kind: 'ch'
      }, {
        name: '冷饮',
        url: '../../image/bar/1.jpg',
        kind: 'dr'
      }

    ],


    indicatorDots: true, //小点

    autoplay: true, //是否自动轮播

    interval: 3000, //间隔时间

    duration: 3000, //滑动时间
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

  },

  skip(e) {
    debugger;
    let kind = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: `/pages/menu/detailedfood?id=${kind}`,

    })
  },
})