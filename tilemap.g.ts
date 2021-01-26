// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001000020202020202020202020202020202020202020202020202020202020202030303030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030302010101010303030303030303030303030303030303030303030303030302010101010303030303030303030303030303030303030303030303030302010101010303030303030303030303030303030303030303030303030302010101010303030303030303030303030303030303030303030303030302010101010303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030302030303030303030303030303030303030303030303030303030303030302020202020202020202020202020202020202020202020202020202020202`, img`
222222222222222222222222222222
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
.............................2
222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`09000900000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. 2 2 2 2 2 2 2 2 
. 2 . . . . . . 2 
. 2 . . . . . . 2 
. 2 . . . . . . 2 
. 2 . . . . . . 2 
. 2 . . . . . . 2 
. 2 . . . . . . 2 
. 2 2 2 2 2 2 2 2 
. . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
            case "tile4":
            case "tile3":return tile3;
            case "tile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
