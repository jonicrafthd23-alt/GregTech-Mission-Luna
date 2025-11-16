StartupEvents.registry('block', event => {
  event.create('blood_infused_casing') // Create a new block
    .displayName('<wiggle>Blood infused casing') // Set a custom name
    .soundType('metal') // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .textureAll('kubejs:block/blood_infused_casing')
 
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe

})