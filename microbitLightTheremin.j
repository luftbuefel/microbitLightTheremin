let beatLength = 0
let beatSwitcher = 0
let playMusic = false
function playNote()  {
    if (input.lightLevel() <= 15) {
        music.playTone(131, beatLength)
    } else if (input.lightLevel() <= 30) {
        music.playTone(147, beatLength)
    } else if (input.lightLevel() <= 45) {
        music.playTone(165, beatLength)
    } else if (input.lightLevel() <= 60) {
        music.playTone(175, beatLength)
    } else if (input.lightLevel() <= 75) {
        music.playTone(196, beatLength)
    } else if (input.lightLevel() <= 90) {
        music.playTone(220, beatLength)
    } else if (input.lightLevel() <= 105) {
        music.playTone(247, beatLength)
    } else if (input.lightLevel() <= 120) {
        music.playTone(262, beatLength)
    } else if (input.lightLevel() <= 135) {
        music.playTone(294, beatLength)
    } else if (input.lightLevel() <= 150) {
        music.playTone(294, beatLength)
    } else if (input.lightLevel() <= 165) {
        music.playTone(330, beatLength)
    } else if (input.lightLevel() <= 180) {
        music.playTone(349, beatLength)
    } else if (input.lightLevel() <= 210) {
        music.playTone(392, beatLength)
    } else if (input.lightLevel() <= 195) {
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
playMusic = false
beatSwitcher = 0
beatLength = music.beat(BeatFraction.Whole)
basic.forever(() => {
    if (playMusic == true) {
        playNote()
    }
})
