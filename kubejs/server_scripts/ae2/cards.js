ServerEvents.recipes(event => {
    
    event.recipes.gtceu.assembler('blank-card')
        .itemInputs('gtceu:iron_plate', 'gtceu:gold_screw','ae2:calculation_processor')
        .inputFluids('gtceu:redstone 144')
        .itemOutputs('4x ae2:basic_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('redstone-card')
        .itemInputs('ae2:basic_card')
        .inputFluids('gtceu:redstone 144')
        .itemOutputs('ae2:redstone_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('capacity-card')
        .itemInputs('ae2:basic_card','gtceu:certus_quartz_gem')
        .itemOutputs('ae2:capacity_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('overflow-card')
        .itemInputs('ae2:basic_card','ae2:calculation_processor')
        .itemOutputs('ae2:void_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('void-card')
        .itemInputs('ae2:basic_card','ae2:calculation_processor')
        .itemOutputs('ae2:void_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('advanced-card')
        .itemInputs('gtceu:iron_plate', 'gtceu:diamond_screw','ae2:calculation_processor')
        .inputFluids('gtceu:redstone 144')
        .itemOutputs('4x ae2:advanced_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('fuzzy-card')
        .itemInputs('ae2:advanced_card','#minecraft:wool')
        .itemOutputs('ae2:fuzzy_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);


        
    event.recipes.gtceu.assembler('speed-card')
        .itemInputs('ae2:advanced_card','gtceu:fluix_gem')
        .itemOutputs('ae2:speed_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('invert-card')
        .itemInputs('ae2:advanced_card')
        .inputFluids('gtceu:redstone 144')
        .itemOutputs('ae2:inverter_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler('crafting-card')
        .itemInputs('ae2:basic_card','minecraft:crafting_table')
        .itemOutputs('ae2:crafting_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler('equal-card')
        .itemInputs('ae2:advanced_card','ae2:calculation_processor')
        .itemOutputs('ae2:equal_distribution_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu.assembler('energy-card')
        .itemInputs('ae2:advanced_card','ae2:dense_energy_cell')
        .itemOutputs('ae2:energy_card')
        .duration(250)
        .EUt(GTValues.VA[GTValues.LV]);



      
})