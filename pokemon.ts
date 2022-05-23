let pokemon = [
    { name: "Charmander", tipo: "fuoco", catchDiff: 15 },
    { name: "Bulbasaur", tipo: "erba", catchDiff: 10 },
    { name: "Squirtle", tipo: "acqua", catchDiff: 13 }
]
let yourParty: any = []
let oakPc: any = []

function catchEm(ball: any) {

    let encounter: any = pokemon[Math.round(Math.random() * 2)]
    console.log(encounter)
    let catchNum: number = Math.round(Math.random() * 100)
    if (ball.toLowerCase() === "mega ball") {
        console.log("You used a Mega Ball!")
        catchNum += 10
    }
    if (ball.toLowerCase() === "poke ball") {
        console.log("You used a Poke Ball")
        catchNum += 5
    }
    if (ball.toLowerCase() === "") {
        console.log("How the f*ck you want to catch it?")
        catchNum -= 100
    }
    if (catchNum > encounter.catchDiff) {
        console.log(`you catched ${encounter.name}`)
        yourParty.push(encounter.name)
        if (yourParty.length > 6) {
            yourParty.pop(encounter.name)
            oakPc.push(encounter.name)
        }
    }
    else {
        console.log(`ops, ${encounter.name} fled`)
    }

}

catchEm("poke ball")

console.log("this is your party " + yourParty)
console.log("these pokemon go to the pc " + oakPc)