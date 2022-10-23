var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v1/homelist', function(req, res, next) {
  res.json({
    success:true,
    code:0,
    msg:'success',
    data:[{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-24',
      platf:'Android',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'Android',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    },{
      createAt:'2022-09-23',
      platf:'ios',
      imgurl:'https://img0.baidu.com/it/u=3222079260,4146877074&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    }]
  })
});

module.exports = router;
