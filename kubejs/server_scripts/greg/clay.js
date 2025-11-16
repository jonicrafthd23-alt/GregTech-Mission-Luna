ServerEvents.recipes(event => {
    event.shaped(Item.of('minecraft:clay', 4), [
        'SSS',
        'S S',
        'SSS'
    ], {
        S: 'ad_astra:moon_sand'
    })
})