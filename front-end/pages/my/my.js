// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      //"id": 0,
      //"name": "admin",
      //"pwd": "",
      //balance: 0,
      //birth: "",
      //"gender": 1,
      //"province": "浙江",
      //"city": "杭州"
    },
    keyWord: '123',
    films: [],


    gridList: [
      {enName:'recharge', zhName:'VIP充值'},
      {enName:'history', zhName:'观影记录'},
      {enName:'changePwd', zhName:'修改密码'},
    ],

    newPassword:''
  },
  //点击右上角图标，进行用户注销
  cancel:function(){
    console.log(1);
    wx.clearStorage({
      complete: (userInfo) => {},
    })
    this.setData({
      userInfo:null
    })
    wx.showToast({
      title: '用户已注销',
      icon: 'none',
      duration: 2000
    })
    
  },
  //点击头像，进行登录
  goLogin:function()
  {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  //VIP充值，观影记录，修改密码
  viewGridDetail: function(e) {
    var data = e.currentTarget.dataset
    console.log(data);

    var that = this;
    var info = wx.getStorage({
      key: 'userInfo',
    })

    //VIP充值
		if(data.url=="recharge"){
      console.log("recharge");
      console.log(info);
      //VIP
      var userinfo = {
        name:wx.getStorageSync('userInfo').name,
        pwd:wx.getStorageSync('userInfo').pwd,
      }
      
      wx.request({
        method: 'POST',
        url: 'http://localhost:8090/film/user/vipUser',
        data: userinfo,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res){
          console.log(info);
          console.log(res);
          if(res.data.code == 1){
            //充值成功
            console.log("充值成功");
            wx.showToast({
              title: '充值成功',
              icon: 'none',
              duration: 2000
            })
            
          }else{
            //充值不成功
            wx.showToast({
              title: '充值失败',
              icon: 'none',
              duration: 2000
            })
          }
        },
      })
      //观影历史
    }else if(data.url=="history"){
      console.log("history");
      console.log(info);
      wx.navigateTo({
        url: '../history/history',
      })
    }else if(data.url=="changePwd"){//修改密码
      console.log("changePwd");
      console.log(info);
      this.popup.showPopup();
    }
  },

  /*修改密码 弹窗 */
  showPopup:function() {
    this.popup.showPopup();
  },
   
    //取消事件
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
    //确认事件
  _success() {
    console.log('你点击了确定');
    var newPwd = wx.getStorageSync('newPwd');
    
    var that = this;
    that.data.newPassword = newPwd;
    console.log(newPwd);

    //通信
    var info = wx.getStorageSync('userInfo')
    console.log(info);

    var data = {name:"",answer:"",pwd:""}
    data.name = info.name;
    data.answer = info.answer;
    data.pwd = newPwd;
    console.log(data);

    wx.request({
      method: 'POST',
      url: 'http://localhost:8090/film/user/reviseUser',
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res);
        //服务器数据先存到当前页面的data中，然后获取
        if(res.data.code == 1){
          console.log(1);
        }else{
          
        }

        //清理newPassword缓存
        wx.removeStorageSync('newPwd')
      },
    })

    this.popup.hidePopup();
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
    this.popup = this.selectComponent("#popup");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var userInfo = wx.getStorageSync('userInfo');
    console.log('user-nickname',userInfo.name);
    this.setData({
      userInfo: userInfo,
    })
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

