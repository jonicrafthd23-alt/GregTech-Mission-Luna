ServerEvents.tags('item', event => {

  // === Haupttag für alle Circuits ===
  event.add('gtceu:circuits', [
    'kubejs:circuit_1uv', 'kubejs:circuit_2uhv', 'kubejs:circuit_3uev',
    'kubejs:circuit_4uhv', 'kubejs:circuit_5uev', 'kubejs:circuit_6uiv',
    'kubejs:circuit_7uev', 'kubejs:circuit_8uiv', 'kubejs:circuit_9uxv',
    'kubejs:circuit_10uiv', 'kubejs:circuit_11uxv', 'kubejs:circuit_12opv',
    'kubejs:circuit_13ulv', 'kubejs:circuit_14lv', 'kubejs:circuit_15mv',
    'kubejs:circuit_16hv', 'kubejs:circuit_17ev', 'kubejs:circuit_18iv',
    'kubejs:circuit_19luv', 'kubejs:circuit_20zpm', 'kubejs:circuit_21uv',
    'kubejs:circuit_22uhv', 'kubejs:circuit_23uev', 'kubejs:circuit_24uiv',
    'kubejs:circuit_25uxv', 'kubejs:circuit_26opv', 'kubejs:circuit_27max'
  ])

  // === Unterkategorien für Tiers ===
  event.add('gtceu:circuits/ulv', ['kubejs:circuit_13ulv'])
  event.add('gtceu:circuits/lv',  ['kubejs:circuit_14lv'])
  event.add('gtceu:circuits/mv',  ['kubejs:circuit_15mv'])
  event.add('gtceu:circuits/hv',  ['kubejs:circuit_16hv'])
  event.add('gtceu:circuits/ev',  ['kubejs:circuit_17ev'])
  event.add('gtceu:circuits/iv',  ['kubejs:circuit_18iv'])
  event.add('gtceu:circuits/luv', ['kubejs:circuit_19luv'])
  event.add('gtceu:circuits/zpm', ['kubejs:circuit_20zpm'])
  event.add('gtceu:circuits/uv',  ['kubejs:circuit_1uv', 'kubejs:circuit_21uv'])
  event.add('gtceu:circuits/uhv', ['kubejs:circuit_2uhv', 'kubejs:circuit_4uhv', 'kubejs:circuit_22uhv'])
  event.add('gtceu:circuits/uev', ['kubejs:circuit_3uev', 'kubejs:circuit_5uev', 'kubejs:circuit_7uev', 'kubejs:circuit_23uev'])
  event.add('gtceu:circuits/uiv', ['kubejs:circuit_6uiv', 'kubejs:circuit_8uiv', 'kubejs:circuit_10uiv', 'kubejs:circuit_24uiv'])
  event.add('gtceu:circuits/uxv', ['kubejs:circuit_9uxv', 'kubejs:circuit_11uxv', 'kubejs:circuit_25uxv'])
  event.add('gtceu:circuits/opv', ['kubejs:circuit_12opv', 'kubejs:circuit_26opv'])
  event.add('gtceu:circuits/max', ['kubejs:circuit_27max'])
})
