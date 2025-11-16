ServerEvents.recipes(event => {
    event.recipes.gtceu.distillation_tower('space_gas')
        .inputFluids("gtceu:space_gas 10000")
         .outputFluids("gtceu:air 4000","gtceu:methane 2000","gtceu:ethane 1000","gtceu:ethenone 3000")
        .duration(1600)
        .EUt(GTValues.VA[GTValues.HV])
         event.recipes.gtceu.gas_collector("space_gas")
        .dimension("ad_astra:moon")
        .outputFluids(Fluid.of("gtceu:space_gas", 10000))
        .circuit(5)
        .EUt(400)
        .duration(300)

})