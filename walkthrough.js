let me = {};
me.firstName = 'Juliette';
me.lastName = 'Siny';

let friend = {
  firstName: 'Hélène',
  lastName: 'Ceti',
};

let mother = {
  firstName: 'Christine',
  lastName: 'Mom',
}

let father = {
  firstName: 'Fred',
  lastName: 'Dad',
}

let people = {
  collection: [me, friend, mother, father],

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) return;

    this.collection.push(person);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },
  
  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
            index = i;
          }
    });
    return index;
  },

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) return;

    index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1);
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.rollCall();

let partner = { firstName: 'Hervé', lastName: 'Cinema' };

people.add(partner);
people.rollCall();