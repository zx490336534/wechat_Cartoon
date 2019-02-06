// pages/readlist/readlist.js

const host = "http://comics.apiaz.cn/",
url = host + 'api/v1/readlist/'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    abc:123,
    list:['二狗',1,2,3,4,5,6],

  },

  /**
   * 生命周期函数--监听页面加载
   * 在页面白屏的时候，该事件会被触发
   */
  onLoad: function (options) {
    //请求数据
    //处理数据
    //更新页面
    //this.setData 用来更新页面数据的
    const raw_id = options.raw_id
    console.log(raw_id)
    this.loadBook(raw_id, this.codeBook)
    .then(this.codeBook.bind(this))
  },
  /**
   * 请求漫画资源
   */
  loadBook(raw_id){
    return new Promise((resolve)=>{
      //开始请求数据
      wx.request({
        url: url+raw_id,
        //异步
        success:resolve
        })
      })
  },
  /**
   * 处理漫画的数据内容并更新到页面
   */
  codeBook(res) { 
    const data = res.data
    this.setData({
      book:data.book,
      readlist:data.readlist
    })
    console.log(data)
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