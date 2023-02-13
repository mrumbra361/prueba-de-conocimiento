input.onButtonPressed(Button.A, function () {
    a.move(1)
    b.move(1)
    c.move(1)
    basic.pause(500)
    basic.clearScreen()
})
let c: game.LedSprite = null
let b: game.LedSprite = null
let a: game.LedSprite = null
a = game.createSprite(1, 3)
b = game.createSprite(2, 1)
c = game.createSprite(3, 3)
basic.forever(function () {
	
})
