ServerEvents.recipes(event => {

    // ===== AE2 CELLS (1k–256k) =====

    event.recipes.gtceu.assembler('ae2_item_cell_1k')
        .itemInputs('ae2:cell_component_1k', 'ae2:item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:item_storage_cell_1k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_fluid_cell_1k')
        .itemInputs('ae2:cell_component_1k', 'ae2:fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:fluid_storage_cell_1k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.assembler('ae2_item_cell_4k')
        .itemInputs('ae2:cell_component_4k', 'ae2:item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:item_storage_cell_4k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_fluid_cell_4k')
        .itemInputs('ae2:cell_component_4k', 'ae2:fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:fluid_storage_cell_4k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.assembler('ae2_item_cell_16k')
        .itemInputs('ae2:cell_component_16k', 'ae2:item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:item_storage_cell_16k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_fluid_cell_16k')
        .itemInputs('ae2:cell_component_16k', 'ae2:fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:fluid_storage_cell_16k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.assembler('ae2_item_cell_64k')
        .itemInputs('ae2:cell_component_64k', 'ae2:item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:item_storage_cell_64k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_fluid_cell_64k')
        .itemInputs('ae2:cell_component_64k', 'ae2:fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:fluid_storage_cell_64k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.assembler('ae2_item_cell_256k')
        .itemInputs('ae2:cell_component_256k', 'ae2:item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:item_storage_cell_256k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_fluid_cell_256k')
        .itemInputs('ae2:cell_component_256k', 'ae2:fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:fluid_storage_cell_256k')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    // ===== MEGACELLS (1m–256m) =====

    event.recipes.gtceu.assembler('megacells_item_cell_1m')
        .itemInputs('megacells:cell_component_1m', 'megacells:mega_item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:item_storage_cell_1m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_fluid_cell_1m')
        .itemInputs('megacells:cell_component_1m', 'megacells:mega_fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:fluid_storage_cell_1m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.assembler('megacells_item_cell_4m')
        .itemInputs('megacells:cell_component_4m', 'megacells:mega_item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:item_storage_cell_4m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_fluid_cell_4m')
        .itemInputs('megacells:cell_component_4m', 'megacells:mega_fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:fluid_storage_cell_4m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.assembler('megacells_item_cell_16m')
        .itemInputs('megacells:cell_component_16m', 'megacells:mega_item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:item_storage_cell_16m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_fluid_cell_16m')
        .itemInputs('megacells:cell_component_16m', 'megacells:mega_fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:fluid_storage_cell_16m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.assembler('megacells_item_cell_64m')
        .itemInputs('megacells:cell_component_64m', 'megacells:mega_item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:item_storage_cell_64m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_fluid_cell_64m')
        .itemInputs('megacells:cell_component_64m', 'megacells:mega_fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:fluid_storage_cell_64m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    event.recipes.gtceu.assembler('megacells_item_cell_256m')
        .itemInputs('megacells:cell_component_256m', 'megacells:mega_item_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:item_storage_cell_256m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_fluid_cell_256m')
        .itemInputs('megacells:cell_component_256m', 'megacells:mega_fluid_cell_housing')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:fluid_storage_cell_256m')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

});
