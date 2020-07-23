input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Happy)
})
input.onPinReleased(TouchPin.P1, function () {
    basic.clearScreen()
})
