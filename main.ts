namespace SpriteKind {
    export const flowy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.flowy, function (sprite, otherSprite) {
    story.queueStoryPart(function () {
        story.printText("hello there freind!", 0, 0)
    })
    story.queueStoryPart(function () {
        story.printText("my name is flowy!", 0, 0)
    })
    story.queueStoryPart(function () {
        story.printText("and im your beeest freind!", 0, 0)
    })
    story.queueStoryPart(function () {
        story.printText("wow! you are low level you need some L.V!", 0, 0)
    })
    story.queueStoryPart(function () {
        story.printText("dont worry i have plenty to share!", 0, 0)
    })
    story.queueStoryPart(function () {
        tiles.setTilemap(tilemap`level2`)
    })
})
let mySprite = sprites.create(img`
    ...................
    ...................
    ...eeeeeeeeeeeee...
    ...eeeeeeeeeeeee...
    .eeeeeeeeeeeeeeeee.
    .eeedddddddddddeee.
    .eeedddddddddddeee.
    .eeed1fdddddf1deee.
    .eeed1fdddddf1deee.
    .eeedddd333ddddeee.
    .eeedddd323ddddeee.
    .eee...ddddd...eee.
    .eee...ddddd...eee.
    dd222222222222222dd
    dd222222222222222dd
    dd333333333333333dd
    dd333333333333333dd
    dd...222222222...dd
    dd...222222222...dd
    dd...333333333...dd
    dd...333333333...dd
    .....222222222.....
    ....aaaaaaaaaaa....
    ....caacacacaac....
    ...caacaacaacaac...
    ..aacaacaaacaacaa..
    .....dd.....dd.....
    .....dd.....dd.....
    .....dd.....dd.....
    .....dd.....dd.....
    ..686868...868686..
    ..688888...888886..
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . 5 5 . . 1 1 1 1 1 . . 5 5 . . 
    . 5 5 5 5 1 f 1 f 1 5 5 5 5 . . 
    . 5 5 5 5 1 f 1 f 1 5 5 5 5 . . 
    . 5 5 5 5 f 1 1 1 f 5 5 5 5 . . 
    . 5 5 . . 1 f f f 1 . . 5 5 . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . 7 . 7 7 7 . . . . . . . 
    . . . . . 7 7 7 7 . 7 . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    `, SpriteKind.flowy)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite.setPosition(0, 112)
mySprite2.setPosition(80, 112)
tiles.setTilemap(tilemap`level1`)
forever(function () {
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        5 5 . . 1 1 1 1 1 . . 5 5 . . . 
        5 5 5 5 1 f 1 f 1 5 5 5 5 . . . 
        5 5 5 5 1 f 1 f 1 5 5 5 5 . . . 
        5 5 5 5 f 1 1 1 f 5 5 5 5 . . . 
        5 5 . . 1 f f f 1 . . 5 5 . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        5 5 . . 1 1 1 1 1 . . 5 5 . . . 
        5 5 5 5 1 f 1 f 1 5 5 5 5 . . . 
        5 5 5 5 1 f 1 f 1 5 5 5 5 . . . 
        5 5 5 5 f 1 1 1 f 5 5 5 5 . . . 
        . . . . 1 f f f 1 . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        5 5 5 5 1 f 1 f 1 5 5 5 5 . . . 
        5 5 5 5 1 f 1 f 1 5 5 5 5 . . . 
        5 5 5 5 f 1 1 1 f 5 5 5 5 . . . 
        5 5 . . 1 f f f 1 . . 5 5 . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        `],
    500,
    false
    )
})
