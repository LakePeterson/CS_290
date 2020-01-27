/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Lake Peterson
 * Email: peterlak@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;
var photoData = require('./postData.json');
var photoCard;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('', function (req, res)
{
  photoCard = photoData;
  res.render('photoPages', {photoCard});
});

app.get('/:photoCardNum', function(req, res, next)
{
  var photoCardNum = req.params.photoCardNum;

  if(photoCardNum > 0 && photoCardNum <= 8)
  {
    photoCard = [photoData[photoCardNum - 1]];
    res.status(200).render('photoPages', {photoCard});
  }
  else
  {
    next();
  }
})

app.get('*', function(req, res, next)
{
  res.status(404).render('404')
});

app.listen(port, function ()
{
  console.log("== Server is listening on port", port);
});
