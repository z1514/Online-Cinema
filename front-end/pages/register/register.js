// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /*注册事件 */
  registersubmit: function(e) {
    console.log(e.detail.value.id);
    if(e.detail.value.name == "" || e.detail.value.pwd == "" || e.detail.value.question == ""){
      wx.showToast({
        title: '用户名或密码或密保问题不能为空',
        icon: 'none',
        duration: 2000
      })
    }else{
    var that = this;
    var info = e.detail.value;
    wx.request({
      method: 'POST',
      url: 'http://localhost:8090/film/user/addUser',
      data: info,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res);
        if(res.data.code == 1){
          //注册成功
          wx.setStorage({
            data: info,
            key: 'userInfo',
          })
          wx.showToast({
            title: '注册成功',
            icon: 'none',
            duration: 2000
          })
          //页面跳转
          wx.switchTab({
          url: '../my/my'
        })
        }else{
          //注册失败
          wx.showToast({
            title: '注册失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
    })
  }
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

  }
})