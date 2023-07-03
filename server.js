// import { Express } from "express";
// import { Faker } from "@faker-js/faker";
const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

// we can create a function to return a random / fake "Product"

const createCompany = () => ({
    // why these parentheses??
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        streetAddress: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    }
});
// return newCo;
// could you put a return statements here and reference that in the get??
console.log(createCompany)

const createRandomUser = () => ({

    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.string.uuid(),
});


console.log(createRandomUser);

// why aren't we using these?
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    const newUser = createRandomUser();
    res.json(newUser);
    // why no curly brackets for newUser??
});
app.get("/api/companies/new", (req, res) => {
    const newCo = createCompany();
    res.json(newCo);
});
app.get("/api/user/company", (req, res) => {
    const newUser = createRandomUser();
    const newCo = createCompany();
    const companyUser = {
        user: newUser,
        company: newCo,
    };
    res.json(companyUser);

});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
