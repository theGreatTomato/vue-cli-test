const path = require('path')
const cmd = require('node-cmd')

process.env.APP_EVENT_ID = process.argv[2]
cmd.get("vue-cli-service build", function (err, data) {
  console.log(data);
})
cmd.run("vue-cli-service build");