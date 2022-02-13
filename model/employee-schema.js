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
    department: String
});

autoInCrement.initialize(Mongoose.connection)
employeeSchema.plugin(autoInCrement.plugin, 'employee');
const Employee =Mongoose.model('employee', employeeSchema);
export default Employee;