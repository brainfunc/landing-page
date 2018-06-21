const express = require('express');
const path = require('path');
// const sslRedirect = require('heroku-ssl-redirect');
const port = process.env.PORT || 8080;

const app = express();

<<<<<<< HEAD
// For enforcing ssl on any domain access
=======
// Forces website accesses to https
>>>>>>> eb7c2e32fa1882d975715a9e4b2664b2813bd0b2
// app.use(sslRedirect());
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(port, () => {
  console.log(`Started listening on port ${port}`);
})
