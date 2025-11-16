ServerEvents.recipes(event => {
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [
      " H ",
      " R ",
      " R "
    ],
    key: {
      "H": {
        "tag": "gtceu:tools/crafting_hammers" // Hammer oben Mitte
      },
      "R": {
        "item": "gtceu:rubber_ingot" // Rubber Ingot in Mitte und unten
      }
    },
    result: {
      "item": "gtceu:rubber_plate",
      "count": 1
    }
  }).id("kubejs:shaped/rubber_plate_hammer")
})
