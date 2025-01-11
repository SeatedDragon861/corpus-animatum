function Quest10 () {
    story.printText("You step outside the elevator, onto a catwalk. you see decrepit mutated bodies scattered along the floor beneath you. you see a zombie tumbling towards you and a metal bar.", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to fight", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        story.printText("You pick up the bar and begin to fight.", 80, 0)
        Fight_sequence()
    } else {
        story.printText("You stay in the elevator. As you go down, the wait for the doors to open never seems to end. at last, the groaning ceases. The doors open and you arrive at the reception.", 80, 0)
        Quest2()
    }
}
function Quest3 () {
    story.printText("You walk into the elevator. the doors were already open, but they close with a groaning noise. you hear rattles and shudders as you go up, to a floor you haven't chosen.", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("The doors finally open, to a long hall with only one room. Do you wish to enter?", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        Quest4()
    } else {
        story.printText("you are grabbed by some beast and dragged into the darkness.", 80, 0)
        game.gameOver(false)
    }
}
function Quest7 () {
    story.printText("You spot a radiator you can pull out.", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to use it?", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        Quest6()
    } else {
        story.printText("You freeze before you grab the radiator. too late. the room begins digesting you.", 80, 0)
        game.gameOver(false)
    }
}
function Quest13 () {
    story.printText("You decide to stay here and investigate the room. it appears to be a laboratory. you see some vials.", 80, 0)
    story.printText("Do you wish to test them?", 80, 0)
    story.showPlayerChoices("Drink", "No", "Throw.")
    if (story.checkLastAnswer("Drink")) {
        story.printText("You drink them vial. you feel dizzy, and the world starts to warp.", 80, 0)
        Quest2()
    } else {
        if (story.checkLastAnswer("Throw")) {
            story.printText("You throw it. the ground begins to melt, in a strategic way, not a random way. like it's reaching for you. the ground drops beneath you.", 80, 0)
        } else {
            Quest12()
        }
    }
}
function Quest14 () {
    story.printText("As you go down into the depths, gravity grows heavier on you. when you finally somehow reach the ground safely, you are almost blinded by the green light. you can see glowing green test tubes filled with zombies. you see a lighter. you can destroy this. you can end the infection. but you will die too.", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to end this story your way?", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        story.printText("you turn the lighter on. and you throw it. the flame hits one of the containers and breaks it, lighting it on fire. it explodes, then another, and another. soon you are consumed by the flames, and you see a blinding white, then nothing. the pain doesn't matter anymore. what matters is letting go. this place will kill you but at least this way your death does something. ", 80, 0)
        story.printText("Goodbye.", 80, 0)
        game.setGameOverMessage(true, "This was your story.")
        game.gameOver(true)
    } else {
        story.printText("You choose to let the zombies live. they have done nothing wrong. you go to the elevator. once you reach the main floor, you do not run or hide or do anything except walk and thank the receptionist. ", 0, 0)
        story.printText("It was never your story to end. they deserve something better, not to be killed because of their circumstances. thank you.", 80, 0)
        game.setGameOverMessage(true, "Your story continues. but not here. somewhere else. You wake up to a hospital room. you have an IV, and you see people. people you begin to recognize. this is your family.")
        game.gameOver(true)
    }
}
function Quest12 () {
    story.printText("You ignore the exit, but you do see a way further down. a ladder. it seems dangerous, but it's safer than staying inside this room.", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to head downwards?", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        story.printText("You head down into the depths", 80, 0)
    } else {
        Quest13()
    }
}
function Quest6 () {
    story.printText("You ram the heavy object through the door. it shatters like a tooth.", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to run?", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        Quest8()
    } else {
        story.printText("You get absorbed by the room, seconds away from freedom.", 80, 0)
        game.gameOver(false)
    }
}
function Quest5 () {
    story.printText("you begin to notice that the items in the room  do not line up. a radio from the 50's, some war souvenirs from world war one. the ground softens as you take a step, and the wallpaper turns into a cavernous mouth. the door is still locked, but you could use the tv", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to ram the TV?", 80, 0)
    story.showPlayerChoices("Yes", "Find another object", "submit to the room")
    if (story.checkLastAnswer("Yes")) {
        Quest6()
    } else {
        if (story.checkLastAnswer("Find another object")) {
            Quest7()
        } else {
            story.printText("You don't do anything, and you die in the room.", 80, 0)
            game.gameOver(false)
        }
    }
}
function Quest9 () {
    story.printText("You take the elevator. it opens up at the reception. ", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to exit?", 80, 0)
    story.showPlayerChoices("Yes", "Exit at next open")
    if (story.checkLastAnswer("Yes")) {
        story.printText("You exit the elevator, but the receptionist goes after you. They bite you and you fall asleep, forgetting everything.", 80, 0)
        Quest2()
    } else {
        story.printText("You stay in the elevator. As you go down, the wait for the doors to open never seems to end. at last, the groaning ceases. The doors open and you arrive.", 0, 0)
    }
}
function Quest11 () {
    story.printText("After killing the zombie, you spot an exit.", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to exit?", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        story.printText("You go towards the exit. the door swings open and you fall into a bright white outside. welcome back to the land of the living.", 80, 0)
        game.setGameOverEffect(true, effects.dissolve)
        game.gameOver(true)
    } else {
        story.printText("You stay inside the hotel. you need to get to the bottom of this.", 0, 0)
        Quest12()
    }
}
function Quest2 () {
    story.printText("You walk into the hotel reception. It looks old, and decrepit. Do you choose to walk to the elevator?", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        Quest3()
    } else {
        story.printText("dead corpse rises from the receptionists seat. it points at you with a rotten finger. you feel a rotting emerge from your chest, and you blister.", 80, 0)
        game.gameOver(false)
    }
}
function Quest4 () {
    story.printText("You walk to the door and it opens itself. as you step in, the door slams with a loud sound. the room looks old, but you see it hasn't been set up for the next guest.  ", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do you wish to investigate?", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        Quest5()
    } else {
        story.printText("You don't investigate. you try to leave the room, but the door is locked. the ground turns sticky and rough, and the floor and ceiling move closer.", 80, 0)
        game.gameOver(false)
    }
}
function Quest1 () {
    story.printText("Are you ready?", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        Quest2()
    } else {
        story.printText("the story goes on with a different host.", 80, 0)
        game.gameOver(false)
    }
}
function Quest8 () {
    story.printText("You escape the room. ", 80, 0, 15, 1, story.TextSpeed.Normal)
    story.printText("Do  you wish to take the elevator?", 80, 0)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
    	
    } else {
        story.printText("You run but you keep on coming back to the elevator. this hallway has no end, and only one room.", 80, 0)
        Quest8()
    }
}
function Fight_sequence () {
    EnemyDamage = 2
    Playerhealth = 10
    Enemy_Health = 10
    WeaponHave = 1
    WeaponDamage = 5
    while (Enemy_Health != 0) {
        story.showPlayerChoices("swing", "throw", "run")
        if (story.checkLastAnswer("swing")) {
            if (WeaponHave == 1) {
                Enemy_Health += 0 - WeaponDamage
            } else {
                story.printText("You do not have a weapon", 80, 0, 15, 1, story.TextSpeed.VerySlow)
            }
        } else {
            if (story.checkLastAnswer("run")) {
                story.printText("You run into the elevator. the doors and you drop 500 feet", 80, 0)
            } else {
                WeaponHave = 0
            }
        }
        if (Playerhealth != 0) {
            Playerhealth += 0 - EnemyDamage
        } else {
            story.printText("The zombie bit you. you fall asleep.", 0, 0)
            Quest2()
        }
    }
    story.printText("You hit the zombie one too many times, making the zombie blister and explode", 80, 0)
    Quest11()
}
let WeaponDamage = 0
let WeaponHave = 0
let Enemy_Health = 0
let Playerhealth = 0
let EnemyDamage = 0
story.setPagePauseLength(500, 5000)
Quest1()
