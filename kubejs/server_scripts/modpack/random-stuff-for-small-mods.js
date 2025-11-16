ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler("megatorch")
.itemInputs("3x gtceu:sulfur_dust")
.itemInputs("4x gtceu:long_wood_rod")
.itemInputs("gtceu:gold_dust")
.itemOutputs("torchmaster:megatorch")
.inputFluids("gtceu:glue 144")
.circuit(1)
.EUt(180)
.duration(100)
event.shaped("ad_astra:photovoltaic_etrium_cell", [
    "AAA",
    "BBB",
    "   "
], {
    A: "minecraft:diamond",
    B: "gtceu:wrought_iron_plate"
})


event.shaped("ad_astra:solar_panel", [
    "AAA",
    "BCB",
    "DDD"
], {
    A: "ad_astra:photovoltaic_etrium_cell",
    B: "gtceu:red_alloy_single_wire",
    C: "gtceu:bronze_frame",
    D: "gtceu:bronze_plate"
})

})