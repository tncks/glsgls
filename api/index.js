const app = require('express')();
const { v4 } = require('uuid');
const port = process.env.PORT || 3000;

app.get('/api/user', (req, res) => {
  console.log("get api user")
  // const path = `/api/`;
  // const path = `/api/item/${v4()}`;
  // res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  // res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.post('/api/user', (req, res) => {
  console.log("post api user")
  // const path = `/api/`;
  // const path = `/api/item/${v4()}`;
  // res.setHeader('Content-Type', 'text/html');
  // res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  // res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.listen(port, () => {
  console.log(`rest api server app listening on`)
})

//app.get('/api/item/:slug', (req, res) => {
  //const { slug } = req.params;
  //res.end(`Item: ${slug}`);
//});

module.exports = app;
