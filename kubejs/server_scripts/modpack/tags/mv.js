// kubejs/server_scripts/tags/gtceu_mv.js

ServerEvents.tags('item', event => {
  // Basisname des Tags
  const tag = 'gtceu:tier/mv'

  // === Draht- und Kabeltypen ===
  const materials = ['copper', 'annealed_copper', 'magnesium_diboride', 'iron', 'cupronickel']
  const wireTypes = ['single', 'double', 'quadruple', 'octal', 'hex']

  materials.forEach(mat => {
    wireTypes.forEach(type => {
      event.add(tag, `gtceu:${mat}_${type}_wire`)
      event.add(tag, `gtceu:${mat}_${type}_cable`)
    })
  })

  // === Maschinen und Komponenten ===
  const mvItems = [
    'mv_machine_hull','mv_electric_furnace','mv_alloy_smelter','mv_arc_furnace','mv_assembler','mv_autoclave','mv_bender','mv_brewery','mv_canner','mv_centrifuge',
    'mv_chemical_bath','mv_chemical_reactor','mv_compressor','mv_cutter','mv_distillery','mv_electrolyzer','mv_electromagnetic_separator','mv_extractor','mv_extruder',
    'mv_fermenter','mv_fluid_heater','mv_fluid_solidifier','mv_forge_hammer','mv_forming_press','mv_lathe','mv_scanner','mv_mixer','mv_ore_washer','mv_packer','mv_polarizer',
    'mv_laser_engraver','mv_sifter','mv_thermal_centrifuge','mv_wiremill','mv_circuit_assembler','mv_macerator','mv_gas_collector','mv_rock_crusher','mv_air_scrubber',
    'mv_combustion','mv_steam_turbine','mv_gas_turbine','mv_pump','mv_fisher','mv_block_breaker','mv_miner','mv_world_accelerator','mv_item_collector','mv_buffer',
    'mv_super_chest','mv_super_tank','mv_input_bus','mv_output_bus','mv_input_hatch','mv_output_hatch','mv_energy_input_hatch','mv_energy_output_hatch','mv_muffler_hatch',
    'mv_item_passthrough_hatch','mv_fluid_passthrough_hatch',
    // Komponenten
    'mv_battery_hull','mv_sodium_battery','mv_lithium_battery','mv_cadmium_battery','mv_electric_motor','mv_electric_pump','mv_fluid_regulator','mv_conveyor_module',
    'mv_electric_piston','mv_robot_arm','mv_field_generator','mv_emitter','mv_sensor',
    'good_electronic_circuit','good_integrated_circuit',
    'mv_solar_panel','mv_power_unit','mv_voltage_coil',
    'electric_jetpack','portable_scanner','portable_debug_scanner','micro_processor'
  ]

  mvItems.forEach(id => event.add(tag, `gtceu:${id}`))

  // === Varianten mit Suffixen ===
  const multiVariants = [
    { base: 'mv_transformer_', suffixes: ['1a', '2a', '4a', '8a', '16a'] },
    { base: 'mv_battery_buffer', suffixes: ['4x', '8x', '16x'] },
    { base: 'gtmthings:mv_2a_wireless_energy_input', suffixes: ['2a', '4a', '16a'], prefix: false },
    { base: 'gtmthings:mv_2a_wireless_energy_output', suffixes: ['2a', '4a', '16a'], prefix: false },
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
    'gtmthings:mv_wireless_energy_receive_cover',
    'gtmthings:mv_4a_wireless_energy_receive_cover',
    'gtmthings:mv_digital_miner',
    'gtmthings:mv_huge_item_import_bus',
    'gtmthings:mv_huge_item_export_bus',
    'gtmthings:mv_huge_dual_hatch'
  ]

  gtmThings.forEach(id => event.add(tag, id))
})
