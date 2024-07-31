module.exports = (_, Service, Characteristic) => ({
  class: 'heatpump',
  service: Service.HumidifierDehumidifier,
  required: {
    onoff: {
      characteristics: Characteristic.Active,
      get: (value, { device }) =>
        value && device.capabilitiesObj.thermostat_mode?.value === 'dry'
          ? Characteristic.Active.ACTIVE
          : Characteristic.Active.INACTIVE,
      set: async (value, { device }) => {
        if (
          value === Characteristic.Active.ACTIVE ||
          device.capabilitiesObj.thermostat_mode?.value === 'dry'
        ) {
          if (
            value === Characteristic.Active.ACTIVE &&
            'thermostat_mode' in device.capabilitiesObj
          ) {
            await device.setCapabilityValue('thermostat_mode', 'dry')
          }
          return Boolean(value)
        }
      },
    },
    thermostat_mode: {
      characteristics: Characteristic.TargetHumidifierDehumidifierState,
      get: () => Characteristic.TargetHumidifierDehumidifierState.DEHUMIDIFIER,
      set: () => 'dry',
    },
  },
})
