const Runway =  require("./Runway.js");
describe('is jest working?',() => {
    test("1 = 1",()=>{
        expect(1).toBe(1)
    })
})
describe('Runway',() => {
    test("add plane to Runway", ()=>{
        const runway = new Runway("runway0");
        runway.add("plane");
        expect(Runway.planes.length).toBeGreaterThan(0);
    })
    test("Runway won't allow 101 planes",() => {
        const runway1 = new Runway('runway1')
        Runway.planes.length = 100;
        expect(() => runway1.add("plane")).toThrowError("runways at full capacity!")
    })

    test("remove null from Runway to get error",() => {
        const runway2 = new Runway('runway2')
        expect(()=> runway2.remove()).toThrowError("You must supply a plane");
    })
    test("no plane exists",() => {
        const runway3 = new Runway('runway3')
        expect(()=> runway3.remove("plane1")).toThrowError("The plane isn't on the runway")
    })
    test("plane removal",() => {
        const startLen = Runway.planes.length
        const runway4 = new Runway('runway4')
        runway4.remove("plane")
        expect(Runway.planes.length).toBeLessThan(startLen)
    })
})