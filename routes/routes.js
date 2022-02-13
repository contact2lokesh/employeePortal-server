import express from "express";
import {getEmployee, addEmployee, editEmployee,editStatusEmployee} from "../controller/empolyeeController.js"

const route = express.Router();


route.get("/api/employees", getEmployee);
route.post('/api/employee', addEmployee);
route.put('/api/employee/:id', editEmployee);
route.put('/api/employee/:id/:action', editStatusEmployee);


export default route;