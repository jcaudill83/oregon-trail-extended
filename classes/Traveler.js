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

    heal (traveler) {
        traveler.isHealthy = true
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

    giveFood (traveler,numOfFoodUnits) {
        if (this.food >= numOfFoodUnits){
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }

    eat () {
        if (this.food <= 1) {
            this.food -= 1
            return this.isHealthy = false
        }
        this.food -= 2
    }

}