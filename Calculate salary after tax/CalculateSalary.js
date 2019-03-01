function salaryTax(salary, Craftsman){
    if(Craftsman === true && salary > 1000){
        extraSalary = salary - 1000;
        return extraSalary * 0.10 + 1000 * 0.05; 
    }else if(Craftsman === true && salary <= 1000){
        return salary * 0.05;
    }else if(salary > 1000){
        extraSalary = salary - 1000;
        return extraSalary * 0.18 + 1000 * 0.11;
    }else{
        return salary * 0.11;
    }
}
var totalSalaryTax = salaryTax(1890, false);
document.write("Total Tax salary is " + totalSalaryTax + " EUR");
    