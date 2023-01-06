const express = require('express');
const app = express();
require('./influxdb2_windows_amd64/influxd.exe');

app.listen(8086, ()=> console.log('server started: 8086')); 

Headers('token pj');
