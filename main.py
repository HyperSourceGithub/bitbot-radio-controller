def on_button_pressed_a():
    if 0 == 0:
        radio.send_string("Leleka")
        basic.show_leds("""
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            """)
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_string("Lotta")
    basic.show_leds("""
        # . # # #
        # . # . #
        # . # # #
        # . . . .
        # # # # #
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    radio.send_string("Walker")
    basic.show_leds("""
        # . . . #
        # . . . #
        # . . . #
        # . # . #
        # # . # #
        """)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

radio.set_group(42)
modes = ["remote", "auto"] # Set modes list
modeLetter = ["R", "A"] # Set mode letters based on the mode list
mode = convert_to_text(modes[1]) # Mode variable based on the list (ensure text)
modeNumber = modes.index(mode) # get the number of the mode variable
basic.show_string(convert_to_text(modeNumber)) # show the letter