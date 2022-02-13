import Employee from '../model/employee-schema.js';

export const getEmployee = async(req, res) =>{
    try{
        const employees =  await Employee.find(); 
        res.json(employees);
       }catch(error){
           res.json({message: error.message});
       }
}

export const addEmployee = async(req, res)=>{
   const employee = req.body;
   const newEmployee = new Employee(employee); 

   try{
    await newEmployee.save(); 
    res.json(newEmployee);
   }catch(error){
       res.json({message: error.message});
   }
} 
 
// export const updateEmployee = async(req, res)=>{
//     const employee = req.params;;
//     const updateEmployee = new Employee(employee); 
 
//     try{
//      await newEmployee.save(); 
//      res.json(newEmployee);
//     }catch(error){
//         res.json({message: error.message});
//     }
//  } 

export const editEmployee = async (request, response) => {
    let user = await Employee.findById(request.params.id);
    user = request.body;

    const editUser = new Employee(user);
    try{
        await Employee.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}