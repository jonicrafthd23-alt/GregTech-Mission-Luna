GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('gambler')
        .category('test')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.COOLING)
})