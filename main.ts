function Start_Loop () {
    if (!(Curnum == 1)) {
        if (Is_Even(Curnum)) {
            Curnum = Curnum / 2
        } else {
            Curnum = Curnum * 3 + 1
        }
        textSprite.setText(conv.ConvertNumber(Curnum))
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Start_Loop()
})
function Is_Even (num: number) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    Start_Loop()
    pause(100)
})
let textSprite: TextSprite = null
let Curnum = 0
Curnum = randint(11, 2.346789017623489e+31)
textSprite = textsprite.create(conv.ConvertNumber(Curnum), 0, 5)
textSprite.setOutline(5, 6)
textSprite.setPosition(80, 60)
