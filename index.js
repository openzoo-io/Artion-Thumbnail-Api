const express = require('express')
const app = express()
const port = 4000

app.get('/image/:id', function(req, res){
    res.sendFile(`${__dirname}/thumb-image/${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})