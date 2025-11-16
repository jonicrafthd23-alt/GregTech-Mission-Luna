StartupEvents.registry('block', event => {
  event.create('casing_of_life') // Create a new block
    .displayName('<wiggle>Life Casing') // Set a custom name
    .soundType('metal') // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .textureAll('kubejs:block/life_casing')
 
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe

})