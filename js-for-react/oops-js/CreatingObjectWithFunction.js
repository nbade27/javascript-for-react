function Person (name,dob) {
    this.name = name;
    this.birthDay = new Date(dob);
    this.calculateAge = () => {
        const diff = Date.now()  - this.birthDay.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

const peter = new Person('Peter','12,01,97')
/*
    Note : When we are creating date object by passing string argument 
            we need to pass as MM-dd-YYYY or MM/dd/YYYY or MM.dd.YYYY or MM,dd,YYYY or MM

*/
console.log(peter.calculateAge());