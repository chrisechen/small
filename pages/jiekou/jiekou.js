var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItem:[]
  },
  onPullDownRefresh: function () {
    console.log('触发');
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5abaf18742f56d2fba4391bd/homeList2/example',
      method: 'GET',
      success: function (res) { 
        console.log('下拉成功'); 
        that.setData({
          listItem: res.data
        }) 
      },
      fail: function (res) { console.log('下拉失败'); },
      complete: function (res) {
        console.log('1');
        wx.stopPullDownRefresh();
        console.log('2');
      }
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
    var that = this;
    app.myRequest({  
      method: 'GET',  
      url: 'https://www.easy-mock.com/mock/5a90d25e81763562832917ab/myTest/homeList'
    }).then(response => {  
       that.setData({
          listItem: response
        }) 
    })  
    /*wx.request({
      url: 'https://www.easy-mock.com/mock/5a90d25e81763562832917ab/myTest/homeList', //仅为示例，并非真实的接口地址
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        app.test02();
        that.setData({
          listItem: res.data
        }) 
      }
    })*/
  }

})