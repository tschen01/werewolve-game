module.exports = app => {
    const users = require("../controllers/user.controller.js");
    
    // Create a new User
    app.post("/users/register", users.register);
  
    // Retrieve all Users
    app.get("/users", users.findAll);

    // Retrieve a single User with Username
    app.get("/users/authenticate", users.login);
  
    // Retrieve a single User with Username
    app.get("/users/:username", users.findOne);
  
    // Update a User with Username
    app.put("/users/:username", users.update);
  
    // Delete a User with Username
    app.delete("/users/:username", users.delete);
  
    // Create a new User
    app.delete("/users", users.deleteAll);
  };
  