// pages/menu/detailedfood.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    name: "",
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData(options.id);
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
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            num: 0
          }, {
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            num: 0
          }, {
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            num: 0
          }, {
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            num: 0
          }
          ]
        });
        break;
      case "ch":
        this.setData({
          name: "汉堡",
          list: [{
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            num: 0
          }, {
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            num: 0
          }, {
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
            num: 0
          }, {
            url: "../../image/bar/1.jpg",
            name: "鸡排汉堡",
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
              url: "../../image/bar/1.jpg",
              name: "鸡排汉堡",
              num: 0
            }, {
              url: "../../image/bar/1.jpg",
              name: "鸡排汉堡",
              num: 0
            }, {
              url: "../../image/bar/1.jpg",
              name: "鸡排汉堡",
              num: 0
            }, {
              url: "../../image/bar/1.jpg",
              name: "鸡排汉堡",
              num: 0
            }
          ]
        })
        break;
    }
  }
})