module.exports = (_, Service, Characteristic) => ({
  class: 'heatpump',
  service: Service.WindowCovering,
  required: {
    vertical: {
      characteristics: [
        Characteristic.PositionState,
        Characteristic.CurrentPosition,
        Characteristic.TargetPosition,
      ],
      get: (value, { characteristic }) => {
        if (characteristic === 'PositionState') {
          return Characteristic.PositionState.STOPPED
        }
        switch (value) {
          case 'swing':
            return 100
          case 'upwards':
            return 83
          case 'mid_high':
            return 67
          case 'middle':
            return 50
          case 'mid_low':
            return 33
          case 'downwards':
            return 17
          case 'auto':
          default:
            return 0
        }
      },
      set: (value, { characteristic }) => {
        if (characteristic === 'TargetPosition') {
          switch (true) {
            case value === 100:
              return 'swing'
            case value > 80:
              return 'upwards'
            case value > 60:
              return 'mid_high'
            case value > 40:
              return 'middle'
            case value > 20:
              return 'mid_low'
            case value > 0:
              return 'downwards'
            default:
              return 'auto'
          }
        }
      },
    },
  },
  optional: {
    horizontal: {
      characteristics: [
        Characteristic.CurrentHorizontalTiltAngle,
        Characteristic.TargetHorizontalTiltAngle,
      ],
      get: (value) => {
        switch (value) {
          case 'swing':
            return 90
          case 'rightwards':
            return 60
          case 'center_right':
            return 30
          case 'center_left':
            return -30
          case 'leftwards':
            return -60
          case 'auto':
            return -90
          case 'center':
          default:
            return 0
        }
      },
      set: (value, { characteristic }) => {
        if (characteristic === 'TargetHorizontalTiltAngle') {
          switch (true) {
            case value === 90:
              return 'swing'
            case value > 60:
              return 'rightwards'
            case value > 15:
              return 'center_right'
            case value === -90:
              return 'auto'
            case value < -60:
              return 'leftwards'
            case value < -15:
              return 'center_left'
            default:
              return 'center'
          }
        }
      },
    },
  },
})
