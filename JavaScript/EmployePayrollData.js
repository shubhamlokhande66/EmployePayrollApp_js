class EmployeePayrollData {
    
    //getter and setter method
    get id() { 
        return this._id; 
    }

    set id(id) { 
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
            this._name=name;
        else throw ' Name is Incorrect ';
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

    get note() {
        return this._note;
    }

    set notes(note) {
        this._note = note;
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" : this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + ", picture=" + this.picture + ", department=" + this.department +", salary=" + this.salary + ", empDate=" + this.startDate + ", note=" + this.note;
    }
}