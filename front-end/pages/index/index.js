Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的导航菜单索引
    currentIndexNav: 0,
    // 轮播图数据
    swiperList: [],
    // 视频列表数据
    videosList: []
  },

  // 获取轮播图数据
  getSwiperList(){
    const _this = this;
    wx.request({
      url: 'http://localhost:8090/film/film/HighScore/9.5',
      success(res){
        // console.log(res);
        if(res.data.code === 0) {
          _this.setData({
            swiperList: res.data.data
          })
        }
      }
    });
  },

  // 获取视频数据
  getVideosList(){
    const _this = this;
    wx.request({
      url: 'http://localhost:8090/film/film/findAll',
      success(res){
        // console.log(res);
        if(res.data.code === 0) {
          _this.setData({
            videosList: res.data.data
          });
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList();
    this.getVideosList();
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