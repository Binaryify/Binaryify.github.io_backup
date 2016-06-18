new Vue({
  el:"body",
  data:{
    listData:[],
    slideIndex:0,
    shopCar:[],
    totle:0,
    totleMoney:0,
    shopCarShopState:false
  },
  methods:{
    reduce:function(item,index){
      var that=this;
      if(item.number<1){
        return false
      }
      item.number=parseInt(item.number)-1;
      this.shopCar =this.listData.map(function(item,index){
        return that.listData[index].content
      }).reduce(function(a,b){
        return a.concat(b)
      }).filter(function(item){
        return item.number>0
      })
      if(this.shopCar.length==0){
        this.totleMoney=this.totle=0;
        return false;
      }
      this.totleMoney=this.shopCar.map(function(item,index){
        return item.number * item.money
      }).reduce(function(a,b){
        return a+b
      })
      this.totle=this.shopCar.map(function(item,index){
        return (item.number-0)
      }).reduce(function(a,b){
        return a+b
      })
      // console.log(JSON.parse(JSON.stringify(this.shopCar)))
    },
    add:function(item,index){
      var that=this;
      item.number=parseInt(item.number)+1;
      this.shopCar =this.listData.map(function(item,index){
        return that.listData[index].content
      }).reduce(function(a,b){
        return a.concat(b)
      }).filter(function(item){
        return item.number>0
      })
      this.totleMoney=this.shopCar.map(function(item,index){
        return item.number*item.money
      }).reduce(function(a,b){
        return a+b
      })
      this.totle=this.shopCar.map(function(item,index){
        return (item.number-0)
      }).reduce(function(a,b){
        return a+b
      })
    },
    toggleShopCar:function(){
      if(this.totle>0){
        this.shopCarShopState=!this.shopCarShopState
      }
    },
    sendData:function(){
      if(this.totle>0){
        alert(111)
      }
    }
  },
  ready:function(){
    this.listData=[
    {
      "kind":"披萨1","content":[
        {"id":"1","shopName":"海鲜披萨1","money":"20","totle":"101",'number':0},
        {"id":"2","shopName":"海鲜披萨2","money":"21","totle":"101",'number':0},
        {"id":"3","shopName":"海鲜披萨3","money":"22","totle":"101",'number':0},
        {"id":"4","shopName":"海鲜披萨4","money":"23","totle":"101",'number':0},
        {"id":"5","shopName":"海鲜披萨5","money":"24","totle":"101",'number':0},
        {"id":"6","shopName":"海鲜披萨6","money":"25","totle":"101",'number':0},
    ]
    },
    {
      "kind":"披萨2","content":[
        {"id":"7","shopName":"海鲜披萨7","money":"26","totle":"101",'number':0},
        {"id":"8","shopName":"海鲜披萨8","money":"27","totle":"101",'number':0}
      ]
    }
  ]
  }
})
