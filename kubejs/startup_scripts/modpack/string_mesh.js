StartupEvents.registry('block', event => {
  event.create('refined_mesh')
    .textureAll('kubejs:block/refined_mesh')
    .hardness(1.0)
    .transparent(true)
    .renderType('cutout') 
    .displayName("Refined Mesh")
})