// kubejs/server_scripts/tags/gtceu_lv.js

ServerEvents.tags('item', event => {
  // Basisname des Tags
  const tag = 'gtceu:tier/lv'

  // === Draht- und Kabeltypen ===
  const materials = ['nickel', 'cobalt', 'manganese_phosphide', 'tin']
  const wireTypes = ['single', 'double', 'quadruple', 'octal', 'hex']

  // Alle Wire-Varianten hinzufügen
  materials.forEach(mat => {
    wireTypes.forEach(type => {
      event.add(tag, `gtceu:${mat}_${type}_wire`)
      event.add(tag, `gtceu:${mat}_${type}_cable`)
    })
  })

  // === Maschinen und Komponenten ===
  const lvItems = [
    // Maschinen
    'lv_machine_hull','lv_electric_furnace','lv_alloy_smelter','lv_arc_furnace','lv_assembler','lv_autoclave','lv_bender','lv_brewery','lv_canner','lv_centrifuge',
    'lv_chemical_bath','lv_chemical_reactor','lv_compressor','lv_cutter','lv_distillery','lv_electrolyzer','lv_electromagnetic_separator','lv_extractor','lv_extruder',
    'lv_fermenter','lv_fluid_heater','lv_fluid_solidifier','lv_forge_hammer','lv_forming_press','lv_lathe','lv_scanner','lv_mixer','lv_ore_washer','lv_packer','lv_polarizer',
    'lv_laser_engraver','lv_sifter','lv_thermal_centrifuge','lv_wiremill','lv_circuit_assembler','lv_macerator','lv_gas_collector','lv_rock_crusher','lv_air_scrubber',
    'lv_combustion','lv_steam_turbine','lv_gas_turbine','lv_pump','lv_fisher','lv_block_breaker','lv_miner','lv_world_accelerator','lv_item_collector','lv_buffer',
    'lv_super_chest','lv_super_tank','lv_input_bus','lv_output_bus','lv_input_hatch','lv_output_hatch','lv_energy_input_hatch','lv_energy_output_hatch','lv_muffler_hatch',
    'lv_item_passthrough_hatch','lv_fluid_passthrough_hatch',
    // Komponenten
    'lv_battery_hull','lv_sodium_battery','lv_lithium_battery','lv_cadmium_battery','lv_electric_motor','lv_electric_pump','lv_fluid_regulator','lv_conveyor_module',
    'lv_electric_piston','lv_robot_arm','lv_field_generator','lv_emitter','lv_sensor','basic_electronic_circuit','basic_integrated_circuit','microchip_processor',
    'lv_solar_panel','lv_power_unit','prospector.lv','lv_item_magnet','lv_voltage_coil','nightvision_goggles'
  ]

  lvItems.forEach(id => event.add(tag, `gtceu:${id}`))

  // === Varianten mit Suffixen (z. B. 1a, 2a, 4a, 8a, 16a, 4x, 8x, 16x) ===
  const multiVariants = [
    { base: 'lv_transformer_', suffixes: ['1a', '2a', '4a', '8a', '16a'] },
    { base: 'lv_battery_buffer', suffixes: ['4x', '8x', '16x'] },
    { base: 'gtmthings:lv_2a_wireless_energy_input', suffixes: ['2a', '4a', '16a'], prefix: false },
    { base: 'gtmthings:lv_2a_wireless_energy_output', suffixes: ['2a', '4a', '16a'], prefix: false },
  ]

  multiVariants.forEach(group => {
    group.suffixes.forEach(suffix => {
      if (group.prefix === false) {
        const id = group.base.replace('2a', suffix)
        event.add(tag, id)
      } else {
        event.add(tag, `gtceu:${group.base}${suffix}`)
      }
    })
  })

  // === GTMThings-Items ===
  const gtmThings = [
    'gtmthings:lv_wireless_energy_receive_cover',
    'gtmthings:lv_4a_wireless_energy_receive_cover',
    'gtmthings:lv_digital_miner',
    'gtmthings:lv_huge_item_import_bus',
    'gtmthings:lv_huge_item_export_bus',
    'gtmthings:lv_huge_dual_hatch'
  ]

  gtmThings.forEach(id => event.add(tag, id))
})
