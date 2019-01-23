var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/formdata',  function(req, res){
      console.log(req.body); 
     res.render('formdata', {obj: req.body}); 
    //  res.render('form', { title: 'Form' });


});
module.exports = router;


