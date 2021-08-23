function Start_Loop () {
    textSprite.setText(conv.ConvertNumber(Curnum))
    if (!(Curnum == 1)) {
        if (Is_Even(Curnum)) {
            Curnum = Curnum / 2
        } else {
            Curnum = Curnum * 3 + 1
        }
        How_many_loops += 1
    }
    textSprite.setPosition(80, 60)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite.setText(conv.ConvertNumber(How_many_loops))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Start_Loop()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    How_many_loops = 0
    Curnum += 1
    textSprite.setText(conv.ConvertNumber(Curnum))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    How_many_loops = 0
    Curnum += -1
    textSprite.setText(conv.ConvertNumber(Curnum))
})
function Is_Even (num: number) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    How_many_loops = 0
    Curnum += 1
    textSprite.setText(conv.ConvertNumber(Curnum))
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    Start_Loop()
    pause(1)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    How_many_loops = 0
    Curnum += -1
    textSprite.setText(conv.ConvertNumber(Curnum))
})
let How_many_loops = 0
let textSprite: TextSprite = null
let Curnum = 0
Curnum = 29
textSprite = textsprite.create(conv.ConvertNumber(Curnum), 0, 5)
textSprite.setOutline(2, 6)
textSprite.setPosition(80, 60)
