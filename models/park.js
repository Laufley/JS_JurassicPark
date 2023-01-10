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

Park.prototype.mostAttractiveDinosaur = function () {
    let MostPopularDino;
    let BiggestNumOfVisitors = 0;

    for (let i = 0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].guestsAttractedPerDay > BiggestNumOfVisitors) {
            BiggestNumOfVisitors = this.dinosaurs[i].guestsAttractedPerDay;
            mostPopularDinosaur = this.dinosaurs[i];
        }
    }
    return MostPopularDino;
}

Park.prototype.findDinosaursBySpecies = function (dinosaur) {
    const sameSpecies = [];
    for (let i = 0; i < this.dinosaurs.length; i++) {
        if (this.dinosaurs[i].species === dinosaur.species) {
        sameSpecies.push(this.dinosaurs[i]);
        }
    }
    return sameSpecies;
}

Park.prototype.getTotalVisitorsPerDay = function() {
    let totalVisitors = 0;
    for (let i = 0; i < this.dinosaurs.length; i++) {
        totalVisitors += this.dinosaurs[i].guestsAttractedPerDay;
    }
    return totalVisitors;
};


Park.prototype.getTotalVisitorsPerYear = function() {
    let totalVisitors = 0;
    for (let i = 0; i < this.dinosaurs.length; i++) {
        totalVisitors += (this.dinosaurs[i].guestsAttractedPerDay * 365);
    }
    return totalVisitors;
};

module.exports = Park;