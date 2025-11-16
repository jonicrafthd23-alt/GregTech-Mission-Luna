ServerEvents.recipes(event => {

    // ===== AE2 CRAFTING STORAGE (1k–256k) =====

    event.recipes.gtceu.assembler('ae2_1k_crafting_storage')
        .itemInputs('ae2:cell_component_1k', 'ae2:crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:1k_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_4k_crafting_storage')
        .itemInputs('ae2:cell_component_4k', 'ae2:crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:4k_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_16k_crafting_storage')
        .itemInputs('ae2:cell_component_16k', 'ae2:crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:16k_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_64k_crafting_storage')
        .itemInputs('ae2:cell_component_64k', 'ae2:crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:64k_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('ae2_256k_crafting_storage')
        .itemInputs('ae2:cell_component_256k', 'ae2:crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('ae2:256k_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);


    // ===== MEGACELLS CRAFTING STORAGE (1m–256m) =====

    event.recipes.gtceu.assembler('megacells_1m_crafting_storage')
        .itemInputs('megacells:cell_component_1m', 'megacells:mega_crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:1m_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_4m_crafting_storage')
        .itemInputs('megacells:cell_component_4m', 'megacells:mega_crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:4m_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_16m_crafting_storage')
        .itemInputs('megacells:cell_component_16m', 'megacells:mega_crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:16m_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_64m_crafting_storage')
        .itemInputs('megacells:cell_component_64m', 'megacells:mega_crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:64m_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler('megacells_256m_crafting_storage')
        .itemInputs('megacells:cell_component_256m', 'megacells:mega_crafting_unit')
        .inputFluids('gtceu:glass 144')
        .itemOutputs('megacells:256m_crafting_storage')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

});
