GTCEuStartupEvents.registry("gtceu:material", event => {
event.create("charged_certus_solution")
    .color(0xadddfc).secondaryColor(0x507391).iconSet("dull")
    .liquid()
    .formula("SiO2*e-");
    
event.create("moon_stone")
    .color(0x434346).iconSet("dull")
    .liquid()
    .formula("(Na,K)AlSi3O8");
event.create("fluix")
    .gem()
    .fluid()
    .color(0x826bde).secondaryColor(0x9e3ea5).iconSet("certus")
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS)
    .formula("CuSi2S");
    event.create("ender")
    .color(0x5f2afe).iconSet("dull")
    .liquid()
    .formula("BeK4N5");

    event.create("moon_steel")
     .ingot()
    .color(0x434346).iconSet("metallic")
    .formula("Fe(Na,K)AlSi3O8");
    
})