#! /usr/bin/env node


class Player {
    name: string;
    health: number;
    inventory: string[];
    location: string;

    constructor(name: string, startingLocation: string) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.location = startingLocation;
    }

    move(direction: string) {
        // Implement logic to move the player to a new location
    }

    takeItem(item: string) {
        // Implement logic to add an item to the player's inventory
    }

    useItem(item: string) {
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
    name: string;
    description: string;
    exits: { [key: string]: string };

    constructor(name: string, description: string, exits: { [key: string]: string }) {
        this.name = name;
        this.description = description;
        this.exits = exits;
    }
}

class Game {
    player: Player;
    locations: { [key: string]: Location };

    constructor() {
        this.player = new Player("Player", "start");
        this.locations = {
            "start": new Location("Start", "You are in a dark room.", { "north": "room1", "east": "room2" }),
            "room1": new Location("Room 1", "You are in a spooky forest.", { "south": "start" }),
            "room2": new Location("Room 2", "You are in a mysterious cave.", { "west": "start" })
        };
    }

    handleInput(input: string) {
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
