ServerEvents.loaded(event => {
  event.server.runCommandSilent("gamerule doDaylightCycle false")
  event.server.runCommandSilent("time set 16000")
})