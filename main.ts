input.onButtonPressed(Button.A, function () {
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
    }
})
function Init_List () {
    modes = ["remote", "auto"]
    modeLetter = ["R", "A"]
}
function Init_Mode_Variables () {
    Auto = 1
    Remote = 0
}
input.onButtonPressed(Button.AB, function () {
    if (mode == Remote) {
        radio.sendNumber(12)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
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
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
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
    }
})
let modes: string[] = []
let Auto = 0
let modeLetter: string[] = []
let Remote = 0
let mode = 0
radio.setGroup(42)
Init_List()
Init_Mode_Variables()
mode = Remote
basic.showString("" + (modeLetter[mode]))
