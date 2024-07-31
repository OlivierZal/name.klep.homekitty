module.exports = (_, Service, Characteristic) => ({
  class: ['thermostat', 'heatpump'],
  service: Service.Fanv2,
  required: {
    fan_speed: {
      characteristics: [ Characteristic.Active, Characteristic.RotationSpeed ],
      get: (value, { characteristic, device }) => {
        if (characteristic === 'RotationSpeed') {
          const { max = 100 } = device.capabilitiesObj?.fan_speed ?? {};
          return Math.ceil(value * 100 / max);
        }
        // Characteristic.Active
        return Number(!!value);
      },
      set: (value, { characteristic, device, oldValue }) => {
        if (characteristic === 'RotationSpeed') {
          const { min = 0, max = 100, step = 1 } = device.capabilitiesObj?.fan_speed ?? {};
          const capabilityValue = value * max / 100;
          if (value < oldValue) {
            return Math.max(min, Math.floor(capabilityValue / step) * step);
          }
          return Math.max(min, Math.ceil(capabilityValue / step) * step);
        }
        // Characteristic.Active
        if (value === Characteristic.Active.INACTIVE) {
          return 0;
        }
      }
    }
  }
});
