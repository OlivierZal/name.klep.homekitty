module.exports = (Mapper, Service, Characteristic) => ({
  class:    [ 'heatpump', 'thermostat' ],
  service:  Service.Thermostat,
  onUpdate: ({ accessory, characteristic, oldValue, newValue, service, device, capability }) => {
    // set to Celsius
    service.getCharacteristic(Characteristic.TemperatureDisplayUnits).updateValue(Characteristic.TemperatureDisplayUnits.CELSIUS);
  },
  required: {
    target_temperature:  Mapper.Characteristics.Temperature.Target,
    measure_temperature: Mapper.Characteristics.Temperature.Current,
  },
  optional : {
    thermostat_mode: [
      Mapper.Characteristics.HeatingCoolingState.Current,
      Mapper.Characteristics.HeatingCoolingState.Target,
    ],
    // Optional
    measure_humidity: Mapper.Characteristics.RelativeHumidity.Current,
  }
});
