ServerEvents.recipes(event => {
  event.blasting(
    'gtceu:graphite_dust', // Ergebnis
    'gtceu:coal_dust'      // Eingabe
  ).id('kubejs:blasting/graphite_dust')
})