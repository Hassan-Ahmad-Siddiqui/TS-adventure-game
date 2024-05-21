#! /usr/bin/env node
class Player {
    name;
    health;
    inventory;
    location;
    constructor(name, startingLocation) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.location = startingLocation;
    }
    move(direction) {
        // Implement logic to move the player to a new location
    }
    takeItem(item) {
        // Implement logic to add an item to the player's inventory
    }
    useItem(item) {
        // Implement logic to use an item from the player's inventory
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Location: ${this.location}`);
        console.log(`Inventory: ${this.inventory}`);
    }
}
class Location {
    name;
    description;
    exits;
    constructor(name, description, exits) {
        this.name = name;
        this.description = description;
        this.exits = exits;
    }
}
class Game {
    player;
    locations;
    constructor() {
        this.player = new Player("Player", "start");
        this.locations = {
            "start": new Location("Start", "You are in a dark room.", { "north": "room1", "east": "room2" }),
            "room1": new Location("Room 1", "You are in a spooky forest.", { "south": "start" }),
            "room2": new Location("Room 2", "You are in a mysterious cave.", { "west": "start" })
        };
    }
    handleInput(input) {
        // Implement logic to handle player input
    }
    displayLocationDescription() {
        const currentLocation = this.locations[this.player.location];
        console.log(currentLocation.description);
    }
    displayAvailableExits() {
        const currentLocation = this.locations[this.player.location];
        console.log("Exits:");
        for (const direction in currentLocation.exits) {
            console.log(direction);
        }
    }
}
// Example usage:
const game = new Game();
game.displayLocationDescription();
game.displayAvailableExits();
export {};
