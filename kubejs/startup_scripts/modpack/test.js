     GTCEuStartupEvents.registry('gtceu:machine', event => {

        event.create("gambler", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("gambler")
                .workableTieredHullModel("gtceu:block/machines/object_holder"))

     })