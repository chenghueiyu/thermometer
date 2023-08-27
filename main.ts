TM1650.on()
basic.showLeds(`
    . # # . #
    # . . . .
    # . . . .
    # . . . .
    . # # . .
    `)
basic.forever(function () {
    TM1650.showNumber(ModuleWorld_Digital.dht11value(ModuleWorld_Digital.DHT11Type.DHT11_temperature_C, ModuleWorld_Digital.mwDigitalNum.P0P1))
})
