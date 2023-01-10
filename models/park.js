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

module.exports = Park;
