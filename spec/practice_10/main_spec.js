"use strict";

const {Person} =require("../../src/practice_10/person") ;
const {Student} =require("../../src/practice_10/student") ;
const {Teacher} =require("../../src/practice_10/teacher") ;
const{Class}=require("../../src/practice_10/class");

describe("Person", () => {
    it("should have field name and age", () => {
        const person = new Person(1, "Tom", 21);
        expect(person.name).toEqual("Tom");
        expect(person.age).toEqual(21);
    });

    it("should have a method introduce, introduce person with name and age", () => {
        const person = new Person(1, "Tom", 21);
        const introduce = person.introduce();
        expect(introduce).toEqual("My name is Tom. I am 21 years old.");
    });

    describe("Student", () => {
        let klass= new Class(2);
        it("should have field name, age and class number", () => {
            const student = new Student(1, "Tom", 21, klass);
            expect(student.name).toEqual("Tom");
            expect(student.age).toEqual(21);
            expect(student.klass).toEqual(klass);
        });

        describe("#introduce", () => {
            it("should overwrite Person introduce, introduce with name, age and class number", () => {
                const student = new Student(1, "Tom", 21, klass);
                const introduce = student.introduce();
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
            });

            it("should print Leader role, given student is leader", () => {
                const klass = new Class(2);
                const student = new Student(1, "Tom", 21, klass);

                klass.assignLeader(student);
                const introduce = student.introduce();

                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.");
            });
        });
    });

    describe("Teacher", () => {
        let klasses;
        let klass;
            klass = new Class(2);
            klasses = [klass, new Class(3)];


        it("should have field name, age and class number", () => {
            const teacher = new Teacher(1, "Tom", 21, klasses);
            expect(teacher.name).toEqual("Tom");
            expect(teacher.age).toEqual(21);
            expect(teacher.klasses.length).toEqual(klasses.length);
            expect(teacher.klasses[0]).toEqual(klasses[0]);
            expect(teacher.klasses[1]).toEqual(klasses[1]);
        });

        describe("#introduce", () => {
            klass = new Class(2);
            klasses = [klass, new Class(3)];
            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have class", () => {
                const teacher = new Teacher(1, "Tom", 21, klasses);
                const introduce = teacher.introduce();
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2, 3.");
            });

            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have no class", () => {
                const teacher = new Teacher(1, "Tom", 21);
                const introduce = teacher.introduce();
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.");
            });
        });

        describe("#introduceWith", () => {
            let studentJerry;
            // before(() => {
            klass = new Class(2);
            klasses = [klass, new Class(3)];
                studentJerry = new Student(1, "Jerry", 8, klass);
            // });

            it("should return I am teaching some guy, given my class is same with this guy's class", () => {
                const teacher = new Teacher(1, "Tom", 21, klasses);
                const introduce = teacher.introduceWith(studentJerry);
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.");
            });

            it("should return I am teaching some guy, given my class is different with this guy's class", () => {
                const teacher = new Teacher(1, "Tom", 21, [new Class(10)]);
                const introduce = teacher.introduceWith(studentJerry);
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.");
            });
        });
    });
});

describe("Class", () => {
    it("should have class number", () => {
        const klass = new Class(2);
        expect(klass.number).toEqual(2);
    });

    it("should get display name with number", () => {
        const klass = new Class(2);
        expect(klass.getDisplayName()).toEqual("Class 2");
    });

    describe("#assignLeader", () => {
        // before(() => {
        //     sinon.spy(console, 'log');
        // });
        //
        // after(() => {
        //     console.log.restore();
        // });


        it("should assign student as Leader, given student is class member", () => {
            const klass = new Class(2);
            const student = new Student(1, "Jerry", 21, klass);

            klass.assignLeader(student);

            expect(klass.leader).toEqual(student);
        });

        it("should not assign student as Leader, given student is not class member", () => {
            const klass = new Class(2);
            const otherKlass = new Class(3);
            const student = new Student(1, "Jerry", 21, otherKlass);

            klass.assignLeader(student);

            expect(klass.leader).not.toEqual(student);
        });

        it("should not assign student as Leader, given student is not class member", () => {
            spyOn(console, 'log');
            const klass = new Class(2);
            const otherKlass = new Class(3);
            const student = new Student(1, "Jerry", 21, otherKlass);

            klass.assignLeader(student);

            expect(klass.leader).not.toEqual(student);
            expect(console.log).toHaveBeenCalledWith("It is not one of us.");
            //expect(console.log.getCall(0).args[0]).toEqual("It is not one of us."); //assert style 2.
            // expect(console.log).to.be.calledWith("It is not one of us.");
        });

    });

    describe("#appendMemeber", () => {
        it("should change student's klass attribute", () => {
            const klass = new Class(2);
            const otherKlass = new Class(3);

            const student = new Student(1, "Jerry", 21, otherKlass);

            expect(student.klass).toEqual(otherKlass);

            klass.appendMember(student);

            expect(student.klass).toEqual(klass);
        });
    });
});
