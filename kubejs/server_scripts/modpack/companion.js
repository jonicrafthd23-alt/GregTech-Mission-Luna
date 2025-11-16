ServerEvents.commandRegistry(event => {
    const Commands = event.commands;
    const StringArgumentType = Java.loadClass("com.mojang.brigadier.arguments.StringArgumentType");
    const Component = Java.loadClass("net.minecraft.network.chat.Component");

    event.register(
        Commands.literal("getdog")
            .then(Commands.argument("name", StringArgumentType.word())
                .executes(ctx => {
                    const player = ctx.source.player;
                    const level = player.level;
                    const name = ctx.getArgument("name");

                    const dog = level.createEntity("minecraft:wolf");
                    dog.setPos(player.x, player.y, player.z);
                    dog.tame(player);
                    dog.setCustomName(Component.literal(name));
                    dog.spawn();

                    player.tell(`You now have a dog named ${name}!`);
                    return 1;
                })
            )
            .executes(ctx => {
                const player = ctx.source.player;
                const level = player.level;

                const dog = level.createEntity("minecraft:wolf");
                dog.setPos(player.x, player.y, player.z);
                dog.tame(player);
                dog.setCustomName(Component.literal("Faithful Companion"));
                dog.spawn();

                player.tell("You now have a loyal dog!");
                return 1;
            })
    );
});
