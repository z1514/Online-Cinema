// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc:null,
    videoInfo:[],
    userfilm:{
      userid:'',
      filmid:''
    },
  },

  // 获取视频详情
  getCurrentVideo(videoId){
    const _this = this;
    var info = wx.getStorageSync('userInfo');
    var userfilm={
      name:info.name,
      filmid:videoId
    };
    wx.request({
      method:'POST',
      url: 'http://localhost:8090/film/film/addRecord/',
      data:userfilm,
      header:{
        'content-type':'application/json'
      },
      success(res){
        console.log(res);
      },
    })

    _this.setData({
      videoSrc: "http://localhost:8090/film/resource/video/movie_"+videoId+".mp4"
    });
  },

  getCurrentVideoInfo(videoId){
    const _this = this;
    wx.request({
      method:'POST',
      url: 'http://localhost:8090/film/film//findFilmByID/'+videoId,
      // header:{
      //   'content-type':'application/json'
      // },
      success(res){
        console.log(res);
        if(res.data.code === 0) {
          _this.setData({
            videoInfo: res.data.data
          })
        }
      },
    })

   ;
  },

  //获取推荐视频
  getOthersList(videoId){
    const _this = this;

    wx.request({
      url: 'http://localhost:8090/film/film/findAll',
      success(res){
        console.log(res);
        if(res.data.code === 0) {
          _this.setData({
            othersList: res.data.data
          });
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getCurrentVideoInfo(videoId);
    this.getOthersList(videoId);
    // this.getCommentList(videoId);
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

