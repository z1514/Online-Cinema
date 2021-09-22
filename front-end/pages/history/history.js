// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:[
    ]

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
    //进入页面时从到后端获取user的观影记录
    function add0(m){
      return m<10?'0'+m:m
    }
    var info = wx.getStorageSync('userInfo')
    var name = info.name;
    var that=this;
    wx.request({
      method: 'POST',
      //搜索
      url: 'http://localhost:8090/film/film/findRecord/'+info.name,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res);
        for (var i=0;i<res.data.data.length;i++){
            var temp= new Date(res.data.data[i].time);
            var y=temp.getFullYear();
            var m=temp.getMonth()+1;
            var d=temp.getDate();
            var h=temp.getHours();
            var mm=temp.getMinutes();
            var s=temp.getSeconds();
            res.data.data[i].time=y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+":"+add0(s);
        }
        that.setData({
          result:res.data.data,
        });
      },
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