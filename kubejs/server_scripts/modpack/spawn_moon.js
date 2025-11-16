PlayerEvents.loggedIn(event => {
    let { player, server } = event
    if (player.stages.has("first_login")) return
    try {
        let moon = server.getLevel("ad_astra:moon")
        let x = 0
        let z = 0
        let found = null
        for (let y = moon.getMinBuildHeight(); y < moon.getMaxBuildHeight(); y++) {
            let pos = new BlockPos(x, y, z)
            if (
                moon.canSeeSkyFromBelowWater(pos) &&
                moon.getBlock(pos).blockState.fluidState.empty &&
                moon.getBlock(pos.above()).blockState.isAir()
            ) {
                found = pos
                break
            }
        }
        if (found) {
            player.setRespawnPosition(moon.dimensionKey, found, 0, true, false)
            player.teleportTo("ad_astra:moon", found.x, found.y, found.z, player.yaw, player.pitch)
            player.stages.add("first_login")
        } else {
            let spawnPos = moon.getHeightmapPos("world_surface", new BlockPos(x, 0, z))
            player.setRespawnPosition(moon.dimensionKey, spawnPos, 0, true, false)
            player.teleportTo("ad_astra:moon", spawnPos.x, spawnPos.y, spawnPos.z, player.yaw, player.pitch)
            player.stages.add("first_login")
        }
    } catch (error) {
        console.log(error)
    }
})