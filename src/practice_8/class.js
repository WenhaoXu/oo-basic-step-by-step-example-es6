

class Class{

    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        if(student.klass===this)
          this.leader=student;
    }
    equal(klass){
        return klass.number===this.number;
    }
}
module.exports={Class}