

######## Mongo DB Atlas Connection #######

			const mongoose = require("mongoose");

		const connectionString =
		  "mongodb+srv://mouli:mouli123@nodeexpressprojects.gn0jonk.mongodb.net/TaskManager";

		mongoose
		  .connect(connectionString, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		  })
		  .then(() => console.log("Connected to the DB..."))
		  .catch((err) => console.log(err));


    ########## Mongoose Schema ###################
	 
	 
	 
	 Setting the structure for all the document !
	 
	 const mongoose = require("mongoose");

		const TaskSchema = new mongoose.Schema({
		  name: String,
		  completed: Boolean,
		});

		module.exports= mongoose.model('Task',TaskSchema);
