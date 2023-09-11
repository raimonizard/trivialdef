namespace SpriteKind {
    export const option = SpriteKind.create()
}
function escollirOpcio () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    500,
    true
    )
    controller.moveSprite(mySprite)
    info.startCountdown(20)
    mySprite.sayText("Escull una opció i prem B per confirmar", 5000, false)
    if (solucions[randomNumber] == resposta && respost == 1) {
        mySprite.sayText("ETS UN GENI!", 2000, false)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim2`,
        500,
        true
        )
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
        info.stopCountdown()
        game.showLongText(explanation[randomNumber], DialogLayout.Bottom)
        respost = 0
        info.startCountdown(20)
    } else if (solucions[randomNumber] != resposta && respost == 1) {
        mySprite.sayText("HAURÀS DE REPASSAR EL TEMARI...", 2000, false)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim1`,
        100,
        true
        )
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
        info.stopCountdown()
        game.showLongText(explanation[randomNumber], DialogLayout.Bottom)
        respost = 0
        info.startCountdown(20)
    }
}
function createList () {
    preguntesList = []
    for (let index = 0; index < preguntes.length; index++) {
        preguntesList.insertAt(i, i)
        i = i + 1
    }
}
function professor () {
    randomNumber = preguntesList._pickRandom()
    preguntesList.removeAt(preguntesList.indexOf(randomNumber))
    // Display the text
    game.showLongText(preguntes[randomNumber], DialogLayout.Top)
    respostesList = [
    0,
    1,
    2,
    3
    ]
    opcioA = respostesList._pickRandom()
    respostesList.removeAt(respostesList.indexOf(opcioA))
    opcioB = respostesList._pickRandom()
    respostesList.removeAt(respostesList.indexOf(opcioB))
    opcioC = respostesList._pickRandom()
    respostesList.removeAt(respostesList.indexOf(opcioC))
    opcioD = respostesList._pickRandom()
    respostesList.removeAt(respostesList.indexOf(opcioD))
    escollirOpcio()
}
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    info.startCountdown(20)
    if (preguntesList.length != 0) {
        professor()
    }
})
function initVars () {
    info.setLife(3)
    info.setScore(0)
    A = sprites.create(assets.image`myImage6`, SpriteKind.option)
    A.setPosition(30, 53)
    B = sprites.create(assets.image`myImage3`, SpriteKind.option)
    B.setPosition(65, 53)
    C = sprites.create(assets.image`myImage5`, SpriteKind.option)
    C.setPosition(100, 53)
    D = sprites.create(assets.image`myImage8`, SpriteKind.option)
    D.setPosition(130, 53)
    mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    mySprite.setBounceOnWall(true)
    createList()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.option, function (sprite, otherSprite) {
    if (otherSprite == A) {
        mySprite.sayText(respostes[randomNumber][opcioA], 500, false)
        if (otherSprite == A && controller.B.isPressed()) {
            resposta = opcioA
            respost = 1
            escollirOpcio()
            if (preguntesList.length != 0) {
                professor()
            } else {
                if (info.score() >= 9) {
                    game.setGameOverEffect(true, effects.confetti)
                    // Display the text
                    game.showLongText("Ets un veritable geni! Has obtingut " + info.score() + " punts", DialogLayout.Top)
                } else if (info.score() >= 5) {
                    // Display the text
                    game.showLongText("Vas per bon camí! Has obtingut " + info.score() + " punts", DialogLayout.Top)
                } else {
                    // Display the text
                    game.showLongText("Hauràs d'estudiar més!", DialogLayout.Top)
                }
                game.reset()
            }
        }
    } else if (otherSprite == B) {
        mySprite.sayText(respostes[randomNumber][opcioB], 500, false)
        if (otherSprite == B && controller.B.isPressed()) {
            resposta = opcioB
            respost = 1
            escollirOpcio()
            if (preguntesList.length != 0) {
                professor()
            } else {
                if (info.score() >= 9) {
                    game.setGameOverEffect(true, effects.confetti)
                    // Display the text
                    game.showLongText("Ets un veritable geni! Has obtingut " + info.score() + " punts!", DialogLayout.Top)
                } else if (info.score() >= 5) {
                    // Display the text
                    game.showLongText("Vas per bon camí! Has obtingut " + info.score() + " punts!", DialogLayout.Top)
                } else {
                    // Display the text
                    game.showLongText("Hauràs d'estudiar més!", DialogLayout.Top)
                }
                game.reset()
            }
        }
    } else if (otherSprite == C) {
        mySprite.sayText(respostes[randomNumber][opcioC], 500, false)
        if (otherSprite == C && controller.B.isPressed()) {
            resposta = opcioC
            respost = 1
            escollirOpcio()
            if (preguntesList.length != 0) {
                professor()
            } else {
                if (info.score() >= 9) {
                    game.setGameOverEffect(true, effects.confetti)
                    // Display the text
                    game.showLongText("Ets un veritable geni! Has obtingut " + info.score() + " punts!", DialogLayout.Top)
                } else if (info.score() >= 5) {
                    // Display the text
                    game.showLongText("Vas per bon camí! Has obtingut " + info.score() + " punts!", DialogLayout.Top)
                } else {
                    // Display the text
                    game.showLongText("Hauràs d'estudiar més!", DialogLayout.Top)
                }
                game.reset()
            }
        }
    } else if (otherSprite == D) {
        mySprite.sayText(respostes[randomNumber][opcioD], 500, false)
        if (otherSprite == D && controller.B.isPressed()) {
            resposta = opcioD
            respost = 1
            escollirOpcio()
            if (preguntesList.length != 0) {
                professor()
            } else {
                if (info.score() >= 9) {
                    game.setGameOverEffect(true, effects.confetti)
                    // Display the text
                    game.showLongText("Ets un veritable geni! Has obtingut " + info.score() + " punts!", DialogLayout.Top)
                } else if (info.score() >= 5) {
                    // Display the text
                    game.showLongText("Vas per bon camí! Has obtingut " + info.score() + " punts!", DialogLayout.Top)
                } else {
                    // Display the text
                    game.showLongText("Hauràs d'estudiar més!", DialogLayout.Top)
                }
                game.reset()
            }
        }
    }
})
info.onLifeZero(function () {
    preguntesList = []
    info.stopCountdown()
    game.gameOver(false)
    game.reset()
})
let D: Sprite = null
let C: Sprite = null
let B: Sprite = null
let A: Sprite = null
let opcioD = 0
let opcioC = 0
let opcioB = 0
let opcioA = 0
let respostesList: number[] = []
let i = 0
let preguntesList: number[] = []
let respost = 0
let resposta = 0
let randomNumber = 0
let mySprite: Sprite = null
let explanation: string[] = []
let solucions: number[] = []
let respostes: string[][] = []
let preguntes: string[] = []
music.play(music.createSong(hex`0078000408020106001c00010a006400f401640000040000000000000000000000000000000002500000000400011d04000800011e08000c0001200c0010000122140018000220241c002000012520002400012024002800011e28002c00021d2030003400011d34003800011e38003c0001203c0040000125`), music.PlaybackMode.LoopingInBackground)
preguntes = [
"Quina és la màxima longitud d'un identificador de Python?",
"Qui va desenvolupar el llenguatge Python?",
"En quin any es va desenvolupar el llenguatge Python?",
"En quin llenguatge està escrit Python?",
"Quina de les següents és l'extensió correcta per un fitxer de Python?",
"Qui va desenvolupar la versió Python 3.0?",
"Com s'indica un bloc de codi a Python?",
"Quin serà el resultat del següent fragment de codi?  a = [1, 2, 3] a = tuple(a) a[0] = 2 print(a)",
"Quin serà el resultat del següent fragment de codi?  print(type(5 / 2)) print(type(5 // 2))"
]
respostes = [
[
"28",
"32",
"64",
"Cap"
],
[
"Zim Den",
"Guido van Rossum",
"Niene Stom",
"Wick van Rossum"
],
[
"1995",
"1972",
"1981",
"1989"
],
[
"Anglès",
"PHP",
"C",
"Tots els anteriors"
],
[
".py",
".python",
".p",
"Cap"
],
[
"2008",
"2000",
"2010",
"2005"
],
[
"Clau",
"Claudàtors",
"Identació",
"Cap de les anteriors"
],
[
"[2,2,3]",
"(2,2,3)",
"(1,2,3)",
"Error"
],
[
"float i int",
"int i float",
"float i float",
"int i int"
]
]
solucions = [
3,
1,
3,
2,
0,
0,
2,
3,
0
]
explanation = [
"La longitud màxima possible d'un identificador no està definida en el llenguatge Python. Pot ser de qualsevol nombre.",
"El llenguatge Python va ser desenvolupat per Guido van Rossum als Països Baixos.",
"El llenguatge Python va ser desenvolupat per Guido van Rossum el 1989",
"Python està escrit en el llenguatge de programació C i també se'l coneix com a CPython.",
"\".py\" és l'extensió correcta del fitxer de Python.",
"La versió 3.0 de Python va ser desenvolupada el 3 de desembre de 2008.",
"Un bloc de codi de Python s'indica mitjançant l'ús de la indentació.",
"Com que convertim \"a\" en una tupla i després intentem canviar-ne el contingut, obtindrem un error ja que les tuples són immutables.",
"La primera expressió realitza una divisió estàndard, de manera que el resultat s'emmagatzema com a tipus float. La segona expressió realitza una divisió d'enters, de manera que el resultat s'emmagatzema com a tipus int."
]
game.splash("Ets un/a crack de Python?")
scene.setBackgroundImage(img`
    5555555555555555555555555555555555555555555555555355555555555555555555555555555555555555553335555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555553555555555555555555555555555555555555555535553555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555535555555555555555555555555555555555555555355555355555555555555555555555555555555555555555555555555555555555555555
    5555555553335555555555555555555555555555555555355555555555555555555555555555555555555555555555355555555555555555555555555555555555555555555555533355555555555555
    5555555535553555555555555555555555555555555555355555555555555555555555555555555555555555555555355555555555555555555555555555555555555555555555355535555555555555
    5555555355555355555555555555555555555555555555555555555555555555555555555555555555555555555553555555555555555555555555555555555555555555555553555553555555555555
    5555555555555355555555555555555555555555555555355555555555555555555555555555555555555555555535555555555555555555555555555555555555555555555555555553555555555555
    5555555555555355555555555555555555555555555555555555555555555555555555555555555555555555555355555555555555555555555555555555555555555555555555555553555555555555
    5555555555553555555555555555555555555555555555555555555555555555555555555555555555555555555355555555555555555555555555555555555555555555555555555535555555555555
    5555555555535555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555355555555555555
    5555555555355555555555555555555555555555555555555555555555555555555555555555555555555555555355555555555555555555555555555555555555555555555555553555555555555555
    5555555555355555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555355555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555533355555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555355535555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa55555555555555555555
    5555555555555555aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa55555555555555555555
    5555555555555555aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555333555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555553555355555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555535555535555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555535555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555535555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555355555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555553555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555535555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555535555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555535555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    3355555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5535555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5553555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5553555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5553555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5535555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5355555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    3555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    3555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    3555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555555555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55533355555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55355535555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa53555553555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555553555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555553555555555555
    5555555555555555aaa6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666aaa55555535555555555555
    5555555555555555aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa55555355555555555555
    5555555555555555aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa55553555555555555555
    5555555555555555aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa55553555555555555555
    5555555555555555555555553335555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555553555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553555555555555555
    5555555555555555555555555535555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555355555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555553555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555553555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555553555555555555555555555555555555555555555555555555555555555555555555555333555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553555355555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555535555535555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555535555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555535555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555333555555555555555555555555555555555555555555355555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555553555355555555555555555555555555555555555555553555555555555555555555555555555533355555555555555555555555555555
    5555555555555555555555555555555555555555555555555535555535555555555555555555555555555555555555535555555555555555555555555555555355535555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555535555555555555555555555555555555555555535555555555555555555555555555553555553555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555535555555555555555555555555555555555555555555555555555555555555555555555555553555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555355555555555555555555555555555555555555535555555555555555555555555555555555553555555555555555555555555555
    5555555555555555555555555555555555555555555555555555553555555555555555555555555555555555555555555555555555555555555555555555555555535555555555555555555555555555
    5555555555555555555555555555555555555555555555555555535555555555555555555555555555555555555555555555555555555555555555555555555555355555555555555555555555555555
    5555555555555555555555555555555555555555555555555555535555555555555555555555555555555555555555555555555555555555555555555555555553555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555535555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555333555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555553555555555555555555555555555555
    5555555555553555355555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555535555535555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555535555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555535555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555355555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555553555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    `)
initVars()
professor()
