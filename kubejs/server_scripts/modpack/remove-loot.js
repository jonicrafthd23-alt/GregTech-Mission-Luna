LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.CHEST) 
        .removeLoot("ad_astra:launch_pad")
        .removeLoot("ad_astra:desh_ingot")
        .removeLoot("ad_astra:desh_nugget")
        .addWeightedLoot([
            Item.of("minecraft:string").withChance(70),
        Item.of("minecraft:sugar_cane").withChance(60),
         Item.of("minecraft:oak_sapling").withChance(60),
          Item.of("minecraft:coarse_dirt").withChance(60),
            Item.of("gtceu:fluid_cell").withChance(30),
             Item.of("gtceu:lv_sodium_battery", '{Charge:40000L}').withChance(30),
              Item.of("ad_astra:gas_tank", '{BotariumData:{StoredFluids:[{Amount:800L,Fluid:"ad_astra:oxygen"}]}}').withChance(30),



    
    
    
    ])
       .anyStructure(["ad_astra:lunarian_village"], false)         
});
