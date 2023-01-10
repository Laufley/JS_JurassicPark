const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
    }


Park.prototype.getNumberOfDinosaurs = function () {
    return this.dinosaurs.length
}

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur)
    this.dinosaurs.splice(indexOfDinosaur, 1)
}

// Park.prototype.mostAttractiveDinosaur = function () {
//     let currentMostAttractiveDino

//     return currentMostAttractiveDino
// }

Park.prototype.foundSpecies = function () {
    const sameSpecies = [];
    sameSpecies.push(Dinosaur.species);
    return sameSpecies
}

module.exports = Park;
