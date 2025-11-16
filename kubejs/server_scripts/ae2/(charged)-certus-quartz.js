ServerEvents.recipes(event => {
        event.recipes.gtceu.electric_blast_furnace('charged_certus_solution')
    .itemInputs('gtceu:certus_quartz_dust', '2x minecraft:redstone')
    .inputFluids('minecraft:water 144') // optional für Fluid-Form
    .outputFluids(Fluid.of('gtceu:charged_certus_solution', 144))
    .blastFurnaceTemp(1300) // aktivierende Hitze
    .duration(200)
    .EUt(GTValues.VA[GTValues.MV])
})
