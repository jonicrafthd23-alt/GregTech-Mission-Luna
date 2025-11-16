ServerEvents.recipes(event => {
  event.custom({
    type: "minecraft:crafting_shaped",
    pattern: [
      "RBR",
      "VMV",
      "CCC"
    ],
    key: {
      "R": { "item": "gtceu:resistor" },
      "B": { "item": "gtceu:wrought_iron_plate" },
      "V": { "item": "gtceu:vacuum_tube" },
      "C": { "item": "gtceu:red_alloy_single_cable" },
      "M": { "item": "gtceu:resin_printed_circuit_board" }
    },
    result: {
      "item": "gtceu:basic_electronic_circuit",
      "count": 1
    }
  }).id("kubejs:shaped/basic_electronic_circuit")
})