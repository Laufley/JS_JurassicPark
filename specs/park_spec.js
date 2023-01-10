const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park("Jurassic Park", 1000, [])
    dinosaur1 =  new Dinosaur("Triceratops", "herbivore", 100 )
    dinosaur2 =  new Dinosaur("T-RageRex", "carnivore", 600 )
  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual( actual , "Jurassic Park");

  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 1000 )
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur("T-RageRex");
    const actual = park.getNumberOfDinosaurs();
    assert.strictEqual(actual, 1)
  });
  
  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur1]
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, expected)
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = dinosaur.mostAttractiveDinosaur();
    const expected = dinosaur2;
    assert.deepStrictEqual(actual, dinosaur2)
  });

  it('should be able to find all dinosaurs of a particular species');
    const actual = dinosaur1.foundSpecies();
    const expected = dinosaur1;
    assert.deepStrictEqual(actual, expected)



  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
