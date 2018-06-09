let numberOfNotes = 0
let beatLength = 0
let noteIncrementAmount = 0
let playMusic = false
let beatSwitcher = 0
function playNote()  {
    if (input.lightLevel() <= noteIncrementAmount * 1) {
        music.playTone(131, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 2) {
        music.playTone(147, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 3) {
        music.playTone(165, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 4) {
        music.playTone(175, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 5) {
        music.playTone(196, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 6) {
        music.playTone(220, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 7) {
        music.playTone(247, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 8) {
        music.playTone(262, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 9) {
        music.playTone(294, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 10) {
        music.playTone(294, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 11) {
        music.playTone(330, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 12) {
        music.playTone(349, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 13) {
        music.playTone(392, beatLength)
    } else if (input.lightLevel() <= noteIncrementAmount * 14) {
        music.playTone(440, beatLength)
    } else {
        music.playTone(494, beatLength)
    }
}
input.onButtonPressed(Button.A, () => {
    if (playMusic == false) {
        playMusic = true
    } else {
        playMusic = false
    }
})
input.onButtonPressed(Button.B, () => {
    beatSwitcher += 1
    if (beatSwitcher >= 5) {
        beatSwitcher = 0
    }
    if (beatSwitcher == 0) {
        beatLength = music.beat(BeatFraction.Whole)
    } else if (beatSwitcher == 1) {
        beatLength = music.beat(BeatFraction.Half)
    } else if (beatSwitcher == 2) {
        beatLength = music.beat(BeatFraction.Quarter)
    } else if (beatSwitcher == 3) {
        beatLength = music.beat(BeatFraction.Eighth)
    } else {
        beatLength = music.beat(BeatFraction.Sixteenth)
    }
})
input.onButtonPressed(Button.AB, () => {
    noteIncrementAmount = input.lightLevel() / numberOfNotes
})
playMusic = true
beatSwitcher = 0
beatLength = music.beat(BeatFraction.Whole)
numberOfNotes = 15
noteIncrementAmount = 255 / numberOfNotes
basic.forever(() => {
    if (playMusic == true) {
        playNote()
    }
})
