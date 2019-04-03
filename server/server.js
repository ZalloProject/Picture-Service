const app = require('./index.js');

const PORT = process.env.PORT || 8081;


app.listen(PORT, () => console.log(PORT));
