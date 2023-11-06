module.exports = (_, Service, Characteristic) => ({
  class: 'thermostat',
  service: Service.Fanv2,
  onUpdate: ({ characteristic, newValue, service }) => {
    if (
      characteristic === 'Active' &&
      newValue === Characteristic.Active.INACTIVE
    ) {
      service.getCharacteristic(Characteristic.RotationSpeed).updateValue(0)
      service
        .getCharacteristic(Characteristic.Active)
        .updateValue(Characteristic.Active.ACTIVE)
    }
  },
  required: {
    fan_power: {
      characteristics: [Characteristic.Active, Characteristic.RotationSpeed],
      get: (value, { characteristic }) =>
        characteristic === 'RotationSpeed'
          ? value * 20
          : Characteristic.Active.ACTIVE,
      set: (value, { characteristic }) => {
        if (characteristic === 'RotationSpeed') {
          switch (true) {
            case value === 100:
              return 5
            case value > 75:
              return 4
            case value > 50:
              return 3
            case value > 25:
              return 2
            case value > 0:
              return 1
            default:
              return 0
          }
        }
        if (value === Characteristic.Active.INACTIVE) {
          return 0
        }
      },
    },
  },
})
