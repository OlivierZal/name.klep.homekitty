module.exports = (_, Service, Characteristic) => ({
  class: 'thermostat',
  service: Service.Fan,
  onUpdate: ({ accessory, characteristic, newValue }) => {
    if (characteristic === 'On' && newValue) {
      const service = accessory.getService(Service.HumidifierDehumidifier)
      if (service) {
        service
          .getCharacteristic(Characteristic.Active)
          .updateValue(Characteristic.Active.INACTIVE)
      }
    }
  },
  required: {
    onoff: {
      characteristics: Characteristic.On,
      get: (value, { device }) =>
        'operation_mode' in device.capabilitiesObj
          ? value && device.capabilitiesObj.operation_mode?.value === 'fan'
          : value,
      set: async (value, { device }) => {
        if (!('operation_mode' in device.capabilitiesObj)) {
          return value
        }
        if (value || device.capabilitiesObj.operation_mode?.value === 'fan') {
          if (value && 'operation_mode' in device.capabilitiesObj) {
            await device.setCapabilityValue('operation_mode', 'fan')
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
  forbidden: ['operation_mode'],
})
