import express from "express";
import {getEmployee, addEmployee, editEmployee} from "../controller/empolyeeController.js"

const route = express.Router();


route.get("/api/employees", getEmployee);
route.post('/api/employee', addEmployee);
route.put('/api/employee/:id', editEmployee);

export default route;