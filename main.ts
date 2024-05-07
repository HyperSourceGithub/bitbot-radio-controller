input.onButtonPressed(Button.A, function () {
    radio.sendString("Leleka")
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Lotta")
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # # #
        # . . . .
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Walker")
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . # . #
        # # . # #
        `)
})
radio.setGroup(42)
