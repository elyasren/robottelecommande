function aller_à_droite () {
    if (direction == "reculer") {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, vitesseVirage)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, vitesse + vitesseVirage)
    } else {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, vitesseVirage)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, vitesse + vitesseVirage)
    }
}
function obstacle_à_droite_ () {
    return k_Bit.obstacle(MotorObs.RightSide) == irRemote.irButton(IrButton.Number_1)
}
function reculer () {
    direction = "reculer"
    k_Bit.run(DIR.RunBack, 45)
}
function obstacle_à_gauche_ () {
    return k_Bit.obstacle(MotorObs.LeftSide) == 0
}
function obstacle_devant_ () {
    return k_Bit.ultra() < 100
}
function aller_à_gauche () {
    if (direction == "reculer") {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, vitesseVirage)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, vitesse + vitesseVirage)
    } else {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, vitesseVirage)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, vitesse + vitesseVirage)
    }
}
function avancer () {
    direction = "avancer"
    k_Bit.run(DIR.RunForward, vitesse)
}
let ordre = 0
let vitesse = 0
let vitesseVirage = 0
let direction = ""
irRemote.connectInfrared(DigitalPin.P16)
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
irRemote.connectInfrared(DigitalPin.P16)
direction = "avancer"
vitesseVirage = 13
vitesse = 45
basic.forever(function () {
    if (ordre == 70) {
        avancer()
    } else if (ordre == 68) {
        aller_à_gauche()
    } else if (ordre == 21) {
        reculer()
    } else if (ordre == 67) {
        avancer()
    } else {
        k_Bit.carStop()
    }
})
control.inBackground(function () {
    // else if (0 == 0) {
    // soundExpression.hello.play()
    // } else if (0 == 0) {
    // soundExpression.soaring.play()
    // }
    while (true) {
        if (irRemote.returnIrButton() == 22) {
            soundExpression.yawn.play()
        } else if (irRemote.returnIrButton() == 25) {
            soundExpression.mysterious.play()
        } else if (irRemote.returnIrButton() == 13) {
            soundExpression.twinkle.play()
        } else if (irRemote.returnIrButton() == 12) {
            soundExpression.giggle.play()
        } else if (irRemote.returnIrButton() == 24) {
            soundExpression.slide.play()
        } else if (irRemote.returnIrButton() == 94) {
            soundExpression.spring.play()
        } else if (irRemote.returnIrButton() == 28) {
            soundExpression.happy.play()
        } else if (irRemote.returnIrButton() == 90) {
            soundExpression.sad.play()
        }
    }
})
control.inBackground(function () {
    while (true) {
        if (0 != irRemote.returnIrButton()) {
            ordre = irRemote.returnIrButton()
        }
    }
})
