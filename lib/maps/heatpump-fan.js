module.exports = (_, Service, Characteristic) => ({
  class: ['heatpump', 'thermostat'],
  service: Service.Fan,
  required: {
    onoff: {
      characteristics: Characteristic.On,
      get: (value, { device }) =>
        'thermostat_mode' in device.capabilitiesObj
          ? value && device.capabilitiesObj.thermostat_mode?.value === 'fan'
          : value,
      set: async (value, { device }) => {
        if (!('thermostat_mode' in device.capabilitiesObj)) {
          return value
        }
        if (value || device.capabilitiesObj.thermostat_mode?.value === 'fan') {
          if (value && 'thermostat_mode' in device.capabilitiesObj) {
            await device.setCapabilityValue('thermostat_mode', 'fan')
          }
          return value
        }
      },
    },
  },
  optional: {
    mode: {
      characteristics: Characteristic.RotationSpeed,
      get: (value) =>
        ({
          cft: 100,
          eco: 67,
          fro: 33,
          stop: 0,
        }[value]),
      set: (value) => {
        switch (true) {
          case value === 100:
            return 'cft'
          case value > 50:
            return 'eco'
          case value > 0:
            return 'fro'
          default:
            return 'stop'
        }
      },
    },
  },
})
