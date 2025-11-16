ServerEvents.recipes(event => {

  // 🌙 Moon Sand → verschiedene Ores
  event.recipes.gtceu.sifter("gtceu:moon_sand_sifting")
    .itemInputs("ad_astra:moon_sand")
    .inputFluids(Fluid.of("minecraft:water", 100))
    .itemOutputs(
      "gtceu:crushed_iron_ore",
      "gtceu:crushed_copper_ore",
      "gtceu:raw_coal",
      "gtceu:raw_redstone",
      "gtceu:crushed_tin_ore",
      "gtceu:crushed_silver_ore",
      "gtceu:raw_sphalerite",
      "gtceu:raw_quartzite",
      "gtceu:raw_tantalite",
      "gtceu:raw_certus_quartz",
      "gtceu:raw_diamond",
      "gtceu:crushed_gold_ore",
      "gtceu:crushed_nickel_ore"
    )
    .duration(200)
      .EUt(GTValues.VA[GTValues.ULV])

  // 🪨 Gravel → Earlygame Ores
  event.recipes.gtceu.sifter("gtceu:gravel_sifting")
    .itemInputs("minecraft:gravel")
    .inputFluids(Fluid.of("minecraft:water", 100))
    .itemOutputs(
      "gtceu:raw_chromite",
      "gtceu:raw_pyrolusite",
      "gtceu:raw_bauxite",
      "gtceu:raw_saltpeter",
      "gtceu:raw_tungstate",
      "gtceu:raw_sulfur",
      "gtceu:raw_molybdenum",
      "gtceu:raw_uraninite",
      "gtceu:raw_palladium",
      "gtceu:raw_olivine",
      "gtceu:raw_neodymium",
      "gtceu:raw_emerald",
      "gtceu:raw_ruby",
      "gtceu:raw_bornite"
    )
    .duration(200)
     .EUt(GTValues.VA[GTValues.ULV])
      event.recipes.gtceu.sifter("gtceu:soul_soil")
    .itemInputs("minecraft:soul_soil")
    .inputFluids(Fluid.of("minecraft:water", 100))
    .itemOutputs(
      "gtceu:raw_stibnite",
      "gtceu:raw_plutonium",
      "gtceu:raw_uraninite",
      "gtceu:raw_beryllium",
      "gtceu:raw_cobalt"
    )
    .duration(200)
     .EUt(GTValues.VA[GTValues.ULV])
     
    event.recipes.gtceu.rock_breaker('moon_cobble')
        .notConsumable('ad_astra:moon_cobblestone')
        .itemOutputs('ad_astra:moon_cobblestone')
        .duration(16)
        .EUt(30)
  
 })



  