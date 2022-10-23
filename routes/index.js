var express = require('express');
var router = express.Router();


router.post('/v1/upload', function(req, res) {
  let sampleFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req?.files?.file;
  console.log(__dirname);
  console.log(req.files);
  uploadPath = __dirname + '/../upload/' + sampleFile?.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

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
