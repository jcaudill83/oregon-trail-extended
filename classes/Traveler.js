class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    
    hunt () {
        this.food += 2
    }

    eat () {
        if (this.food <= 0) {
         return  this.isHealthy = false
            
        }
        this.food -= 1
    }
}

class Doctor extends Traveler {
    constructor (name){
       super (name)
    }

    heal () {
        if (this.isHealthy = true) {
            return this.isHealthy = false 
        }
    }

    eat () {
        this.food - 1
    }
}

class Hunter extends Traveler {
    constructor (name) {
        super (name)
        this.food = 2
        
    }

    hunt () {
        this.food += 5
    }

    giveFood () {
        this.food -= 4
    }

    eat () {
        if (this.food <= 0) {
            return this.isHealthy = false
        }
        this.food - 2
    }

}