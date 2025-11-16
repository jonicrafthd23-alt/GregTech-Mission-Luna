ServerEvents.recipes(event => {
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [
      " H ",
      " S ",
      " S "
    ],
    key: {
      "H": {
        "tag": "gtceu:tools/crafting_hammers" // Hammer oben Mitte
      },
      "S": {
        "item": "gtceu:sticky_resin" // Sticky Resin in Mitte und unten
      }
    },
    result: {
      "item": "gtceu:rubber_ingot",
      "count": 1
    }
  }).id("kubejs:shaped/rubber_ingot_hammer")
})