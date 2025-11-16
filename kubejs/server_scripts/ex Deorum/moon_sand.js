const string = [
    // Moon Sand Sieving
    ["ad_astra:moon_sand", "string", "gtceu:crushed_iron_ore", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:crushed_copper_ore", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:raw_coal", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:raw_redstone", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:crushed_tin_ore", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:crushed_silver_ore", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:raw_sphalerite", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:crushed_zinc_ore", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:raw_quartzite", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:raw_tantalite", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:raw_certus_quartz", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:raw_diamond", 1.0, 0.25],
    ["ad_astra:moon_sand", "string", "gtceu:crushed_gold_ore", 1.0, 0.25],
     ["ad_astra:moon_sand", "string", "gtceu:crushed_nickel_ore", 1.0, 0.25],
]

ServerEvents.recipes(event => {
    function Sieving(Substract, Mesh, Result, num1, num2) {
        event.custom({
            "type": "exdeorum:sieve",
            "ingredient": { "item": Substract },
            "mesh": `exdeorum:${Mesh}_mesh`,
            "result": Result,
            "result_amount": {
                "type": "minecraft:binomial",
                "n": num1,
                "p": num2
            }
        })
    }

    for (const [Substract, Mesh, Result, num1, num2] of string) {
        Sieving(Substract, Mesh, Result, num1, num2)
    }
})