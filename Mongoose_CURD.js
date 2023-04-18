	
		######## Mongoose CURD funcitons !##### 
		
		const Task = require("../models/Task");

// 		Getting all the data
		    const task = await Task.find({});

// Creating a Specific Data 
		    const task = await Task.create(req.body);
			 
// 			 Patching the Data
			 const { id: taskId } = req.params;
			  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
				  new: true,
				  runValidators: true,
				});
			
// Deleting the Data
			 const { id: taskId } = req.params;
			const task = await Task.findOneAndDelete({ _id: taskId }); 
			 

					// Delete all data from the cluster ! 
				   await Product.deleteMany();

				   // Adding our own data 
				await Product.create(jsonProducts);
				
				########## Finding and Searching our Data #########3

				// Getting all the Products Data
			
					const products = await Product.find({});
			  
					//finding a single product based on a name !
			  
