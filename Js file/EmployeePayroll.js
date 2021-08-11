class EmployeePayrollData {
    id;

    get id() {
        return this.id;
    }
    set id(d) {
        this.id = id;
    }

    get name() {
        return this.name
    }
    set name(name) {
        console.log(name);
        let pattern = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (pattern.test(name))
            this.name = name;
        else
            throw 'Incorrect Name';
    }

    get profilePic() {
        return this.profilePic;
    }

    set profilePic(profilePic) {
        this.profilePic = profilePic;
    }

    get gender() {
        return this.gender;
    }
    set gender(gender) {
        this.gender = gender;
    }

    get department() {
        return this.department;
    }
    set department(department) {
        this.department = department;
    }

    get salary() {
        return this.salary;
    }
    set salary(salary) {
        this.salary = salary;
    }

    get note() {
        return this.note;
    }
    set note(note) {
        this.note = note;
    }

    get startDate() {
        return this.startDate;
    }

    //To validate Date
    set startDate(startDate) {
        let currentDate = new Date();
        if (startDate > currentDate)
            throw "Start Date is a future date";

        var diff = Math.abs(currentDate.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30) {
            throw "Start Date is a beyond 30 days";
        }
        this._startDate = startDate;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !startDate ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "id=" + this.id + ",name='" + this.name + ", gender='" +
            this.gender + ", profilePic='" + this.profilePic +
            ", deparment=" + this.deparment + ", salary=" +
            this.salary + ", startDate=" + empDate + ",note=" + this.note;
    }

}