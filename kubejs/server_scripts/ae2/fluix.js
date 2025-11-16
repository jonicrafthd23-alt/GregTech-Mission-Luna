ServerEvents.recipes(event => {
    event.recipes.gtceu.electric_blast_furnace('fluix_fluid_from_dust')
    .itemInputs('gtceu:copper_dust', '2x gtceu:silicon_dust', 'gtceu:sulfur_dust')
    .outputFluids(Fluid.of('gtceu:fluix', 144))
    .blastFurnaceTemp(1800)
    .duration(200)
    .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.autoclave('fluix_gem_from_fluid')
    .inputFluids(Fluid.of('gtceu:fluix', 144))
    .itemOutputs('gtceu:fluix_gem')
    .duration(400)
    .EUt(GTValues.VA[GTValues.MV]);




})