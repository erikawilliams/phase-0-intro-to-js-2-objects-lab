// Write your solution in this file!
const employee = {name: "erika", streetAddress:"123 main"}

function updateEmployeeWithKeyAndValue (employee,key,value){
    const newEmps = {...employee}
    newEmps[key]=value
    return newEmps
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee,key){
    const newEmps = {...employee}
    delete newEmps[key];
    return newEmps
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}