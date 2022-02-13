import Mongoose from "mongoose";
import autoInCrement from 'mongoose-auto-increment';

const employeeSchema = Mongoose.Schema({
    fname: String,
    lname: String,
    mobileNumber: String,
    email: String,
    gender: String,
    designation: String,
    dateOfJoining : String,
    reportingManager: String,
    salary: Number,
    employeeCode: Number,
    location: String,
    state: String,
    country: String,
    department: String,
    DeletedAt: Date
});

autoInCrement.initialize(Mongoose.connection)
employeeSchema.plugin(autoInCrement.plugin, 'employee');
const Employee =Mongoose.model('employee', employeeSchema);
let newEmp = new Employee();
newEmp.save(function (err) {
 
    // book._id === 100 -> true
 
    newEmp.nextCount(function(err, count) {
 
        // count === 101 -> true
 
        newEmp.resetCount(function(err, nextCount) {
 
            // nextCount === 100 -> true
 
        });
 
    });
 
});
export default Employee;