ServerEvents.recipes(event => {
    event.recipes.gtceu.alloy_smelter('redstone_to_exquisite_ruby')
        .itemInputs(
            'minecraft:redstone_block' // 1 Redstone Block als Input
        )
        .itemOutputs(
            'gtceu:exquisite_ruby_gem' // 1 Exquisite Ruby Gem als Output
        )
        .duration(350) // 350 Ticks = 17,5 Sekunden
        .EUt(30); // 30 EU/t × 350 Ticks = 10.500 EU total
});