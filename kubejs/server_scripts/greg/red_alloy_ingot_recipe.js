ServerEvents.recipes(event => {
  event.custom({
    type: "minecraft:crafting_shapeless",
    ingredients: [
      { "item": "gtceu:bronze_brass_ingot" },
      { "item": "minecraft:redstone" },
      { "item": "minecraft:redstone" },
      { "item": "minecraft:redstone" },
      { "item": "minecraft:redstone" }
    ],
    result: {
      "item": "gtceu:red_alloy_ingot",
      "count": 1
    }
  }).id("kubejs:shapeless/red_alloy_ingot")
})