const express = require('express');

const app = express();

// Trust the x-forwarded headers set by the ELB
app.set('trust proxy', true);

// Redirect HTTP to HTTPS
app.get('*', (req, res, next) => {
  req.protocol === 'http' ?
    res.redirect('https://' + req.hostname + req.url) :  
    next();
});

app.use((req, res) => res.send('hello boatz'));

app.listen(process.env.PORT || 3000);
