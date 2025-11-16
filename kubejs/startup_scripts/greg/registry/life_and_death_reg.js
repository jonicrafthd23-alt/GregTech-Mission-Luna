
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('alloy_of_life')
        .ingot()
        .dust()
        .liquid()
        .color(0x3da22d).iconSet(GTMaterialIconSet.METALLIC)
        .element(GTElements.get("life"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_FRAME,)



       
    event.create('alloy_of_death')
        .ingot()
        .dust()
        .liquid()
        .color(0x5d0404).iconSet(GTMaterialIconSet.METALLIC)
        .element(GTElements.get("death"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_FRAME,)
})

