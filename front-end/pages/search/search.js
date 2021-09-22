// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showsOfArea: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectArea: ['所有地区', '中国大陆', '中国香港','美国','欧洲','泰国','意大利'], //下拉列表的数据
    indexsOfArea: 0, //选择的下拉列 表下标,
    showsOfType: false,
    selectType: ['所有类型', '喜剧', '动作','动画','剧情','科幻','奇幻','爱情'],
    indexsOfType: 0,

    //搜索结果==film_favorite
    result:[
    ]
  },


  //地区
  // 点击下拉显示框
  selectTapsOfArea() {
    this.setData({
      showsOfArea: !this.data.showsOfArea,
    });
  },
  // 点击下拉列表
  optionTapsOfArea(e) {
    var that=this;
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    console.log(Indexs)
    this.setData({
      indexsOfArea: Indexs,
      showsOfArea: !this.data.showsOfArea,
    })
    console.log(this.data.indexsOfArea,this.data.indexsOfType)

    let indexsOfType = this.data.indexsOfType;
    let indexsOfArea = this.data.indexsOfArea;
    
    var info = {
      type:this.data.selectType[indexsOfType],
      location:this.data.selectArea[indexsOfArea],
    }

    wx.request({
      method: 'POST',
      //搜索
      url: 'http://localhost:8090/film/film/findFilmByInfo',
      data: info,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res);
        that.setData({
          result:res.data.data,
        });
      },
    })
  },

  //类型
  // 点击下拉显示框
  selectTapsOfType() {
    this.setData({
      showsOfType: !this.data.showsOfType,
    });
  },
  // 点击下拉列表
  optionTapsOfType(e) {
    var that=this;
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    console.log(Indexs)
    that.setData({
      indexsOfType: Indexs,
      showsOfType: !this.data.showsOfType,
    })
    console.log(this.data.indexsOfArea,this.data.indexsOfType)

    let indexsOfType = this.data.indexsOfType;
    let indexsOfArea = this.data.indexsOfArea;
    
    var info = {
      type:this.data.selectType[indexsOfType],
      location:this.data.selectArea[indexsOfArea],
    }

    wx.request({
      method: 'POST',
      //搜索
      url: 'http://localhost:8090/film/film/findFilmByInfo',
      data: info,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res);
        that.setData({
          result:res.data.data,
        });
      },
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
    var that=this;

    var info = {
      type:'所有类型',
      location:'所有地区',
    }

    wx.request({
      method: 'POST',
      //搜索
      url: 'http://localhost:8090/film/film/findFilmByInfo',
      data: info,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res);
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