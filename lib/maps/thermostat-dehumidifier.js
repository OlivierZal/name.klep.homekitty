module.exports = (_, Service, Characteristic) => ({
  class: 'thermostat',
  service: Service.HumidifierDehumidifier,
  onUpdate: ({ accessory, characteristic, newValue }) => {
    if (
      characteristic === 'Active' &&
      newValue === Characteristic.Active.ACTIVE
    ) {
      accessory
        .getService(Service.Fan)
        .getCharacteristic(Characteristic.On)
        .updateValue(false)
    }
  },
  required: {
    onoff: {
      characteristics: Characteristic.Active,
      get: (value, { device }) =>
        value && device.capabilitiesObj.operation_mode?.value === 'dry'
          ? Characteristic.Active.ACTIVE
          : Characteristic.Active.INACTIVE,
      set: async (value, { device }) => {
        if (
          value === Characteristic.Active.ACTIVE ||
          device.capabilitiesObj.operation_mode?.value === 'dry'
        ) {
          if (
            value === Characteristic.Active.ACTIVE &&
            'operation_mode' in device.capabilitiesObj
          ) {
            await device.setCapabilityValue('operation_mode', 'dry')
          }
          return Boolean(value)
        }
      },
    },
    operation_mode: {
      characteristics: Characteristic.TargetHumidifierDehumidifierState,
      get: () => Characteristic.TargetHumidifierDehumidifierState.DEHUMIDIFIER,
      set: () => 'dry',
    },
  },
  forbidden: ['operation_mode'],
})
