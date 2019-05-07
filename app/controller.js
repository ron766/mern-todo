var model = require('./models/model');


function showTasks(req, res) {
  console.log("ccccccaaaallllllllll")
  // return res.status(200).send("JSON.parse(res1).access_token +++++++")
  model.showTasksModel(req).then(
    function (data) {
      return res.status(200).send(data)
    }
  ).catch((err) => {
    console.log(err)
  })//then close
}

module.exports = {
  showTasks
};
