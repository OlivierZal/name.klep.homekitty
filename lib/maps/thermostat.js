module.exports = (Mapper, Service, Characteristic) => ({
  class:    'thermostat',
  service:  Service.Thermostat,
  onUpdate: ({ accessory, characteristic, oldValue, newValue, service, device, capability }) => {
    // set to Celsius
    service.getCharacteristic(Characteristic.TemperatureDisplayUnits).updateValue(Characteristic.TemperatureDisplayUnits.CELSIUS);
    if (
      characteristic === 'TargetHeatingCoolingState' &&
      newValue !== Characteristic.TargetHeatingCoolingState.OFF
    ) {
      const fan = accessory.getService(Service.Fan)
      if (fan) {
        fan.getCharacteristic(Characteristic.On).updateValue(false)
      }
      const humidifier = accessory.getService(Service.HumidifierDehumidifier)
      if (humidifier) {
        humidifier
          .getCharacteristic(Characteristic.Active)
          .updateValue(Characteristic.Active.INACTIVE)
      }
    }
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
