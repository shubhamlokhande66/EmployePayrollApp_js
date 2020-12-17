class EmployeePayroll {

    constructor(...params) {
        this.name = params[0];
        this.picture = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get name() {
        return this._name;
    }

    set name(name) {
      
            this._name=name;
      
    }
       
    get picture() {
        return this._picture;
    }
    set picture(picture) {
        this._picture = picture;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {

        
            this._startDate = startDate;
       
        
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
        return name=" + this.name + ", gender=" + this.gender + ", picture=" + this.picture + ", department=" + this.department +", salary=" + this.salary + ", empDate=" + this.startDate + ", notes=" + this.notes";
    }
}