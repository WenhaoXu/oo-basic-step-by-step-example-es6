"use strict";
const {Person} =require("../../src/practice_7/person") ;
const {Student} =require("../../src/practice_7/student") ;
const {Teacher} =require("../../src/practice_7/teacher") ;
const{Class}=require("../../src/practice_7/class");

describe("Person", () => {
    it("should have field name and age", () => {
        const person = new Person("Tom", 21);
        expect(person.name).toEqual("Tom");
        expect(person.age).toEqual(21);
    });

    it("should have a method introduce, introduce person with name and age", () => {
        const person = new Person("Tom", 21);
        const introduce = person.introduce();
        expect(introduce).toEqual("My name is Tom. I am 21 years old.");
    });

    describe("Student", () => {
        let klass;

        // beforeAll(() => {

        // });

        it("should have field name, age and class number", () => {
            klass = new Class(2);
            const student = new Student("Tom", 21, klass);
            expect(student.name).toEqual("Tom");
            expect(student.age).toEqual(21);
            expect(student.klass).toEqual(klass);
        });

        it("should overwrite Person introduce, introduce with name, age and class number", () => {
            klass = new Class(2);
            const student = new Student("Tom", 21, klass);
            const introduce = student.introduce();
            expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
        });
    });

    describe("Teacher", () => {
        let klass;

        // beforeAll(() => {
        //     klass = new Class(2);
        // });

        it("should have field name, age and class number", () => {
            klass = new Class(2);
            const teacher = new Teacher("Tom", 21, klass);
            expect(teacher.name).toEqual("Tom");
            expect(teacher.age).toEqual(21);
            expect(teacher.klass).toEqual(klass);
        });

        describe("#introduce", () => {
            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have class", () => {
                klass = new Class(2);
                const teacher = new Teacher("Tom", 21, klass);
                const introduce = teacher.introduce();
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.");
            });

            it("should overwrite Person introduce, introduce with name, age and class number, given teacher have no class", () => {

                const teacher = new Teacher("Tom", 21);
                const introduce = teacher.introduce();
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.");
            });
        });

        describe("#introduceWith", () => {
            let studentJerry;

            // beforeAll(() => {
            //     studentJerry = new Student("Jerry", 8, klass);
            // });

            it("should return I am teaching some guy, given my class is same with this guy's class", () => {
                klass = new Class(2);
                studentJerry = new Student("Jerry", 8, klass);
                const teacher = new Teacher("Tom", 21, klass);
                const introduce = teacher.introduceWith(studentJerry);
                expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.");
            });

            it("should return I am teaching some guy, given my class is different with this guy's class", () => {
                klass = new Class(2);
                studentJerry = new Student("Jerry", 8, klass);
                const teacher = new Teacher("Tom", 21, new Class(10));
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
});
