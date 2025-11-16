ServerEvents.recipes(event => {
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [
      " S ",
      " P ",
      "   "
    ],
    key: {
      "S": {
        "tag": "gtceu:tools/crafting_saws" 
      },
      "P": {
        "tag": "minecraft:planks" 
      }
    },
    result: {
      "item": "gtceu:wood_plate",
      "count": 1
    }
  }).id("kubejs:shaped/wood_plate_saw")
})