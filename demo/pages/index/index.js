Page({
  data:{
    text:"欢迎来到小贺微信",
    province_list:[
        // {
        //     "province":"北京市",
        //     "city_list":[

        //     ],
        //     "code":110000
        // },
        // {
        //     "province":"天津市",
        //     "city_list":[
        //         {
        //             "city":"塘沽区"
        //         },
        //         {
        //             "city":"汉沽区"
        //         },
        //         {
        //             "city":"大港区"
        //         }
        //     ],
        //     "code":120000
        // }
        "北京市","天津市"
    ],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindPickerChange: function(events) {
    this.setData({
      index: events.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  }
})