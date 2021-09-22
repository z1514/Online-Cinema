// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
  },

  loginsubmit: function(e) {
    console.log(e.detail.value.id);
    if(e.detail.value.id == "" || e.detail.value.name == ""){
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    }else{
    var that = this;
    var info = e.detail.value;
    console.log(info);
    wx.request({
      method: 'POST',
      url: 'http://localhost:8090/film/user/loginUser',
      data: info,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res);
        console.log(res.data.code);
        //服务器数据先存到当前页面的data中，然后获取
        if(res.data.code == 1){
          //登陆成功
          that.setData({
            userInfo: e.detail.value,
          });
          console.log(that.data.userInfo);
          wx.setStorage({
          data: that.data.userInfo,
          key: 'userInfo',
          })
          wx.switchTab({
            url: '../my/my',
          })
        }else{
          //登录不成功
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000
          })
        }
      },
    })
  }
  },

  /*注册*/
  register: function(){
    console.log("注册");
    wx.navigateTo({
      url: '../register/register'
    })
  },

  /*忘记密码 */
  toForgotPwd: function(){
    console.log("1");
    wx.navigateTo({
      url: '../forgotPwd/forgotPwd'
    })
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