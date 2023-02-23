class Runway {
    static MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS = 100;
    static planes = [];

    name;

    constructor(name) {
        this.name = name
    }
    
    add(plane) {

        if (Runway.planes.length>=Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS) {
            throw new Error("runways at full capacity!")
        }
        Runway.planes.push(plane)
    }

    remove(plane) {
        if(!plane){
            throw new Error("You must supply a plane")
        }
       let i = Runway.planes.findIndex(element => element === plane);
       if (i < 0) {
            throw new Error("The plane isn't on the runway")
       }
       Runway.planes.splice(i,1);
    }
}
module.exports = Runway