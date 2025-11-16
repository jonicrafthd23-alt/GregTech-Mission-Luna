ServerEvents.recipes(event => {
    event.recipes.gtceu.compressor('printet-aecrys')
      .itemInputs('ae2:certus_quartz_crystal')
      .itemOutputs('ae2:printed_calculation_processor')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV])

      event.recipes.gtceu.compressor('printet-aedia')
      .itemInputs('minecraft:diamond')
      .itemOutputs('ae2:printed_engineering_processor')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV]);

      event.recipes.gtceu.compressor('printet-aesili')
      .itemInputs('ae2:silicon')
      .itemOutputs('ae2:printed_silicon')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV]);

          event.recipes.gtceu.compressor('printet-aegold')
      .itemInputs('minecraft:gold_ingot')
      .itemOutputs('ae2:printed_logic_processor')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV]);
        event.recipes.gtceu.compressor('printet-mgsky')
      .itemInputs('gtceu:moon_steel_ingot')
      .itemOutputs('megacells:printed_accumulation_processor')
      .duration(100)    
      .EUt(GTValues.VA[GTValues.MV]);

    
})