const host = "http://comics.apiaz.cn/",
  url = host + 'api/v1/book_list/'
// pages/alllist/alllist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadbooklist()
      .then(this.codebooklist.bind(this))

  },

  //请求数据
  loadbooklist() {
    return new Promise((resolve) => {
      wx.request({
        url: url,
        success: resolve
      })
    })
  },
  //处理数据
  codebooklist(res) {
    const data = res.data;
    console.log(data.list)
    this.setData({
      booklist: data.list
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

  }
})