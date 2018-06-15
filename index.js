const express = require('express');

const app = express();

// Trust the x-forwarded headers set by the ELB
app.set('trust proxy', true);

// Redirect HTTP to HTTPS
// app.get('*', (req, res, next) => {
//   req.protocol === 'http' && process.env.NODE_ENV === 'production' ?
//     res.redirect('https://' + req.hostname + req.url) :
//     next();
// });

app.use(express.static('dist'));

app.use(((req, res) => res.send()));

app.listen(process.env.PORT || 3000);
