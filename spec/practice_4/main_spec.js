"use strict";


const {Person} =require("../../src/practice_4/person") ;
const {Student} =require("../../src/practice_4/student") ;
const {Worker} =require("../../src/practice_4/worker") ;

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
        it("should have field name, age and class number", () => {
            const student = new Student("Tom", 21, 2);
            expect(student.name).toEqual("Tom");
            expect(student.age).toEqual(21);
            expect(student.klass).toEqual(2);
        });

        it("should overwrite Person introduce, introduce with name, age and class number", () => {
            const student = new Student("Tom", 21, 2);
            const introduce = student.introduce();
            expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
        });
    });

    describe("Worker", () => {
        it("should have field name, age", () => {
            const worker = new Worker("Tom", 21);
            expect(worker.name).toEqual("Tom");
            expect(worker.age).toEqual(21);
        });

        it("should overwrite Person introduce, introduce with name and age, but different with Person introduce", () => {
            const worker = new Worker("Tom", 21);
            const introduce = worker.introduce();
            expect(introduce).toEqual("My name is Tom. I am 21 years old. I am a Worker. I have a job.");
        });
    });
});
