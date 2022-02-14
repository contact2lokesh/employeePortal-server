import Employee from '../model/employee-schema.js';

// get Employees List
export const getEmployee = async(req, res) =>{
    try{
        const employees =  await Employee.find(); 
        res.json(employees);
       }catch(error){
           res.json({message: error.message});
       }
}

// add Employees to the list 
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
 

//update Employee
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

// update active and deactive employee
export const editStatusEmployee = async (request, response) => {
    let user = await Employee.findById(request.params.id);
    let action = request.params.action
    // console.log(user)
    if(action === 'deactivate'){
        Object.assign(user, {DeletedAt : Date.now()})   
    }else{
        Object.assign(user, {DeletedAt : null})  
    }
    const editUser = new Employee(user);
    try{
        await Employee.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}