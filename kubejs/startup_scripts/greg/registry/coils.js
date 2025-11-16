
Platform.mods.kubejs.name = 'GregTech'
StartupEvents.registry('block', event => {
    event.create('death_coil', 'gtceu:coil')
        .temperature(1800)
        .level(1)
        .energyDiscount(1) // 
        .tier(0)
        .coilMaterial(() => GTMaterials.get('red_alloy'))
        .texture('kubejs:block/coils/death_coil')
        .hardness(2)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .soundType("metal") })
        StartupEvents.registry('block', event => {
    event.create('life_coil', 'gtceu:coil')
        .temperature(1800)
        .level(1)
        .energyDiscount(2) // 
        .tier(0)
        .coilMaterial(() => GTMaterials.get('steel'))
        .texture('kubejs:block/coils/life_coil')
        .hardness(2)
        .requiresTool(true)
        .tagBlock('forge:mineable/wrench')
        .tagBlock('minecraft:mineable/pickaxe')
        .soundType("metal") })