effects.blizzard.startScreenEffect()
music.play(music.stringPlayable("E G F E D F E C5 ", 90), music.PlaybackMode.UntilDone)
story.printText("En mørk aften, fredag d.13 Blev prinsesse Anne fanget", 0, 50, 15)
let Prinsesse = sprites.create(img`
    . . . . . 5 . 8 . 5 . . . . . . 
    . . . . 2 5 5 2 5 5 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 d d d 5 5 5 . . . . 
    . . 5 . 5 d 8 d 8 d 5 . 5 . . . 
    . 5 . 5 . d d d d d . 5 . 5 . . 
    . 5 5 . . . d 2 d . . . 5 5 . . 
    5 . . . d 3 3 3 3 3 d . . . 5 . 
    . . . d d 3 3 3 3 3 d d . . . . 
    . . d d . 3 3 3 3 3 . d d . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 d . d 3 3 . . . . . 
    . . . 3 3 . d . d . 3 3 . . . . 
    `, SpriteKind.Player)
Prinsesse.setPosition(140, 100)
pause(5000)
pause(2000)
story.printText("Det var den onde troldmand Dlop, der stod bag dette", 10, 80, 15)
let Troldmand = sprites.create(img`
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 f f f f f f f 1 . . . 
    . . . . 1 f f f f f f f f 1 1 . 
    . . . 1 1 f f f f f 1 f f f 1 1 
    . . 1 1 e f f f f f 1 1 f f f 1 
    . . 1 f f f f f f f f f 1 f f 1 
    . 1 1 e d d d d d d d f e 1 1 1 
    . 1 f f d d 2 d 2 d d f e 1 . . 
    . 1 1 f d d d d d d d f 1 1 . . 
    . . 1 f d 2 2 2 2 2 d f 1 . . . 
    . . 1 f 2 d d d d d 2 e 1 . . . 
    . 1 1 f d d d d d d d e f 1 . . 
    1 1 1 f f f f f f f f e f 1 1 . 
    f f e e e e e e e e e e f f 1 1 
    f e f f f f f f f f f f f f f 1 
    f . . . . . . . . . . . . . f f 
    `, SpriteKind.Player)
Troldmand.setPosition(140, 80)
pause(5000)
pause(2000)
story.printText("Kun én kan redde prinsesse Anne..", 10, 80, 15)
pause(5000)
story.printText("PRINS XXX !", 10, 80, 15)
let Prins = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e e . . . . 
    . . . . . e e e e e e e e . . . 
    . . . . . e d d d d d d e . . . 
    . . . . . d d 6 d 6 d d d . . . 
    . . . . . . d d d d d d . . . . 
    . . . . . . . d f d d . . . . . 
    . . . . . . . . d d . . . . . . 
    5 . . . d d 8 8 8 8 8 8 d d . . 
    5 5 . d d d 8 8 8 8 8 8 d d d . 
    5 5 5 d . . 8 8 8 8 8 8 . . d . 
    . 5 d . . . 8 8 8 8 8 8 . . . d 
    . . . . . . 2 2 . . 2 2 . . . . 
    . . . . . . 2 2 . . 2 2 . . . . 
    `, SpriteKind.Player)
Prins.setPosition(140, 60)
pause(5000)
story.printText("Og nårh jo, så var der kong gulerod. Han var ikke til stor hjælp, pga alderdom. Men han kendte vejen til Troldmandens hule", 10, 80)
let Kong = sprites.create(img`
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . . 4 4 7 4 4 7 4 4 4 . . . 
    . . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 4 7 4 4 4 4 7 4 4 . . . 
    . . . . . 4 7 7 7 7 4 4 . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . . 4 4 4 4 4 . . . . . 
    . . . . . . . 4 4 4 4 . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    `, SpriteKind.Player)
Kong.setPosition(141, 23)
