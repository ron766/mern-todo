var { mernTodoDBSchm} = require('./dbSchemaModel')

function showTasksModel(callback) {
  console.log("dddddddddddddd", mernTodoDBSchm)
  return new Promise(function (resolve, reject) {
    mernTodoDBSchm.find({})
      .exec(function (err, todos) {
        if (err) {
          reject('error occured')
        }
        else {
          console.log("ttttttttttttttt",todos);
          resolve(todos);
        }
      });
  })//Promise  
}

module.exports = {showTasksModel}