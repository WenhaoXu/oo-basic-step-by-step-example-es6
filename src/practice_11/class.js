
class Class{

    constructor(number){
        this.number=number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        if(student.klass===this)
        {
            this.leader=student;
            if(this.teacher!==undefined)
            this.teacher.notiflyMe("leader",student);}
    else{
            console.log("It is not one of us.");
        }
    }

    appendMember(student){
        student.klass.number=this.number;
        if(this.teacher!==undefined)
        this.teacher.notiflyMe("join",student);
    }
    equal(klass){
        return klass.number===this.number;
    }
    isIn(klasses){
        return klasses.includes(this);
    }

    registerAssignLeaderListener(teacher){
         this.teacher=teacher;
    }
    registerJoinListener(teacher){
        this.teacher=teacher;
    }


}
module.exports={Class}