Platform.mods.kubejs.name = '<pulse><neon><grad><glitch>Project Luna'

StartupEvents.registry('item', event => {
  event.create('lunar_coin')
    .texture('fragmentum:item/rocket_emblermanim')
    .maxStackSize(64)
    .glow(true)
    .displayName("§5Lunar Coin") 
    .tooltip("§7A mysterious coin shimmering under the moonlight...") 
    .tooltip("§8Perhaps it can be traded for ancient secrets.") 
    .rarity('epic'); 
});