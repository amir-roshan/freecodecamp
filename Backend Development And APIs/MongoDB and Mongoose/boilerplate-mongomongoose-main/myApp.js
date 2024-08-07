const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let Person;

// Schema is a JSON object that defines the structure and contents of your data.
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    favoriteFoods: {
        type: [String]
    }
});

// Models are in capital
Person = mongoose.model("Person", personSchema);
console.log(Person);


const createAndSavePerson = (done) => {
    const amir = new Person({ name: "Amir", age: 21, favoriteFoods: ["Loobia Polo", "pizza", "Qeime"] });
    amir.save((err, data) => {
        if (err)
            return console.error(err);
        done(null, data);
    });

};

const arrayOfPeople = [{ name: "Hashem" }, { name: "Ali" }, { name: "David" }, { nmame: "Lida" }];

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, data) => {
        if (err)
            return console.error(err);
        done(null, data);
    });
};

const findPeopleByName = (personName, done) => {
    done(null /*, data*/);
};

const findOneByFood = (food, done) => {
    done(null /*, data*/);
};

const findPersonById = (personId, done) => {
    done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    done(null /*, data*/);
};

const removeById = (personId, done) => {
    done(null /*, data*/);
};

const removeManyPeople = (done) => {
    const nameToRemove = "Mary";

    done(null /*, data*/);
};

const queryChain = (done) => {
    const foodToSearch = "burrito";

    done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
