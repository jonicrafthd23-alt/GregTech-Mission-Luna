ServerEvents.recipes(event => {
event.recipes.gtceu.circuit_assembler('processor_certus')
      .itemInputs(['ae2:printed_calculation_processor', 'ae2:printed_silicon'])
      .itemOutputs('ae2:calculation_processor')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.circuit_assembler('processor_gold')
      .itemInputs(['ae2:printed_logic_processor', 'ae2:printed_silicon'])
      .itemOutputs('ae2:logic_processor')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV])

      event.recipes.gtceu.circuit_assembler('processor_dia')
      .itemInputs(['ae2:printed_engineering_processor', 'ae2:printed_silicon'])
      .itemOutputs('ae2:engineering_processor')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV])

      event.recipes.gtceu.circuit_assembler('sky-proc')
      .itemInputs(['megacells:printed_accumulation_processor', 'ae2:printed_silicon'])
      .itemOutputs('megacells:accumulation_processor')
      .duration(200)    
      .EUt(GTValues.VA[GTValues.MV])
    
    })