ServerEvents.recipes(event => {

    // 🔹 Shapeless Crafting: 3x Coal Dust + 1x Iron Dust → 1x Steel Dust
    event.shapeless(
        'gtceu:steel_dust', // Output
        [
            '3x gtceu:coal_dust',
            'gtceu:iron_dust'
        ]
    ).id('kubejs:steel_dust_manual_mix');

    // 🔹 Smelting: Steel Dust → Steel Ingot
    event.smelting(
        'gtceu:steel_ingot', // Output
        'gtceu:steel_dust'   // Input
    ).xp(0.5).id('kubejs:steel_ingot_from_dust')});