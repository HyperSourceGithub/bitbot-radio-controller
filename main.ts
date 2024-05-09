input.onButtonPressed(Button.A, function () {
    if (isReady == true) {
        if (mode == Auto) {
            radio.sendString("Leleka")
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # #
                `)
        } else {
            radio.sendNumber(1)
            music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        }
    }
})
function Init_List () {
    modes = ["remote", "auto"]
    modeLetter = ["R", "A"]
}
input.onGesture(Gesture.ScreenDown, function () {
    if (isReady == true) {
        if (mode == Remote) {
            radio.sendNumber(0)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
        } else {
        	
        }
    }
})
function Init_Mode_Variables () {
    Auto = 1
    Remote = 0
}
input.onButtonPressed(Button.AB, function () {
    if (isReady == true) {
        if (mode == Remote) {
            radio.sendNumber(12)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.InBackground)
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (isReady == true) {
        if (mode == Auto) {
            radio.sendString("Lotta")
            basic.showLeds(`
                # . # # #
                # . # . #
                # . # # #
                # . . . .
                # # # # #
                `)
        } else {
            radio.sendNumber(2)
            music.play(music.tonePlayable(659, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (isReady == true) {
        if (mode == Auto) {
            radio.sendString("Walker")
            basic.showLeds(`
                # . . . #
                # . . . #
                # . . . #
                # . # . #
                # # . # #
                `)
        } else {
            radio.sendNumber(0)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
        }
    }
})
let modes: string[] = []
let modeLetter: string[] = []
let Remote = 0
let Auto = 0
let isReady = false
let mode = 0
music.setVolume(255)
mode = 0
isReady = false
radio.setGroup(42)
radio.setTransmitPower(7)
Init_List()
Init_Mode_Variables()
while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
}
if (input.buttonIsPressed(Button.A)) {
    mode = Auto
} else {
    if (input.buttonIsPressed(Button.B)) {
        mode = Remote
    }
}
basic.showString("" + (modeLetter[mode]))
basic.pause(2000)
basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
basic.pause(200)
basic.showString("" + (modeLetter[mode]))
music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
isReady = true
