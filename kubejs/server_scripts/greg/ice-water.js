ServerEvents.recipes(event => {
event.recipes.gtceu.extractor("ice-shard")
        .itemInputs("ad_astra:ice_shard")
        .outputFluids("gtceu:ice 144")
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV]);
})