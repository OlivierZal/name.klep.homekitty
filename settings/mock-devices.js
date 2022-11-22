if (! window.HomeyMock) window.HomeyMock = {};
window.HomeyMock.Devices = {
  "fc365e31-3dc3-4e3f-a9e4-2e02a5fab8c6": {
    "id": "fc365e31-3dc3-4e3f-a9e4-2e02a5fab8c6",
    "name": "Homey",
    "driverUri": "homey:manager:vdevice",
    "driverId": "homey",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": null,
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "iconOverride": null,
    "settings": {
      "energy_value_constant": null
    },
    "settingsObj": false,
    "class": "other",
    "energy": null,
    "energyObj": {
      "W": 2,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "virtualClass": null,
    "capabilities": [
      "measure_power"
    ],
    "capabilitiesObj": {
      "measure_power": {
        "value": 2,
        "lastUpdated": "2022-10-11T02:03:42.397Z",
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "Vermogen",
        "desc": "Vermogen in watt (W)",
        "units": "W",
        "decimals": 2,
        "chartType": "stepLine",
        "id": "measure_power",
        "options": {
          "approximate": true
        }
      }
    },
    "flags": [
      "homey",
      "sticky"
    ],
    "ui": {
      "components": [
        {
          "id": "sensor",
          "capabilities": [
            "measure_power"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "uiIndicator": null,
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:fc365e31-3dc3-4e3f-a9e4-2e02a5fab8c6",
        "id": "measure_power",
        "type": "number",
        "title": "Vermogen",
        "titleTrue": null,
        "titleFalse": null,
        "units": "W",
        "decimals": 2
      },
      {
        "uri": "homey:device:fc365e31-3dc3-4e3f-a9e4-2e02a5fab8c6",
        "id": "energy_power",
        "type": "number",
        "title": "Stroomverbruik",
        "units": "W",
        "decimals": 2
      }
    ],
    "data": {},
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "d6d96a99-4d6c-4b79-a9a8-a96a458adba0": {
    "id": "d6d96a99-4d6c-4b79-a9a8-a96a458adba0",
    "name": "Nefit Easy",
    "driverUri": "homey:app:nl.nefit.easy",
    "driverId": "nefit_easy",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": null,
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "syncInterval": 60,
      "pressureTooLow": 1.5,
      "pressureTooHigh": 2.8,
      "serialNumber": "517914590",
      "accessKey": "5CJb2U47gZWBWHkd",
      "password": "robert",
      "energy_value_constant": null
    },
    "settingsObj": false,
    "class": "thermostat",
    "energyObj": {},
    "capabilities": [
      "target_temperature",
      "measure_temperature",
      "measure_temperature.outdoor",
      "clock_programme",
      "operating_mode",
      "thermostat_mode",
      "central_heating",
      "system_pressure",
      "alarm_pressure",
      "fireplace_mode",
      "holiday_mode"
    ],
    "capabilitiesObj": null,
    "flags": [],
    "ui": {},
    "ready": false,
    "available": null,
    "repair": null,
    "unpair": null,
    "unavailableMessage": "Fout tijdens sync: POSSIBLE_INVALID_PASSWORD",
    "images": [],
    "insights": [],
    "color": null,
    "data": {
      "serialNumber": "517914590",
      "accessKey": "5CJb2U47gZWBWHkd",
      "password": "robert"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "ccafde03-6c28-44b8-8ace-78d867c19f48": {
    "id": "ccafde03-6c28-44b8-8ace-78d867c19f48",
    "name": "HK Light",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "light.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_off": null,
      "energy_value_on": null
    },
    "settingsObj": true,
    "class": "light",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "onoff",
      "dim",
      "light_hue",
      "light_saturation",
      "light_temperature",
      "light_mode"
    ],
    "capabilitiesObj": {
      "onoff": {
        "value": null,
        "lastUpdated": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Aangezet",
        "desc": null,
        "units": null,
        "id": "onoff",
        "options": {}
      },
      "dim": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Dim niveau",
        "desc": null,
        "units": "%",
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "dim",
        "options": {}
      },
      "light_hue": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Hue",
        "desc": null,
        "units": null,
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "light_hue",
        "options": {}
      },
      "light_saturation": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Kleurverzadiging",
        "desc": null,
        "units": null,
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "light_saturation",
        "options": {}
      },
      "light_temperature": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Kleurtemperatuur",
        "desc": null,
        "units": null,
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "light_temperature",
        "options": {}
      },
      "light_mode": {
        "value": "temperature",
        "lastUpdated": "2022-11-20T13:37:33.768Z",
        "type": "enum",
        "getable": true,
        "setable": true,
        "title": "Lamp modus",
        "desc": "Schakel tussen kleur of temperatuur modus",
        "units": null,
        "values": [
          {
            "id": "color",
            "title": "Kleur"
          },
          {
            "id": "temperature",
            "title": "Temperatuur"
          }
        ],
        "id": "light_mode",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "onoff",
      "components": [
        {
          "id": "toggle",
          "capabilities": [
            "onoff"
          ]
        },
        {
          "id": "slider",
          "capabilities": [
            "dim"
          ]
        },
        {
          "id": "color",
          "capabilities": [
            "light_hue",
            "light_saturation",
            "light_temperature",
            "light_mode"
          ]
        }
      ],
      "componentsStartAt": 1
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:ccafde03-6c28-44b8-8ace-78d867c19f48",
        "id": "onoff",
        "type": "boolean",
        "title": "Aangezet",
        "titleTrue": "Aangezet",
        "titleFalse": "Uitgezet",
        "units": null,
        "decimals": null
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "ccce9d8e-4f22-99c9-a558-e70d068418d2",
      "version": 3,
      "icon": "light.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "4af95bb0-58d2-4b84-a8ad-ba17db87b599": {
    "id": "4af95bb0-58d2-4b84-a8ad-ba17db87b599",
    "name": "HK Lock",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "lock.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "lock",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "locked",
      "lock_mode"
    ],
    "capabilitiesObj": {
      "locked": {
        "value": true,
        "lastUpdated": "2022-11-20T12:46:16.594Z",
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Op slot",
        "desc": "Geeft aan wanneer iets op slot is",
        "units": null,
        "id": "locked",
        "options": {}
      },
      "lock_mode": {
        "value": null,
        "type": "enum",
        "getable": true,
        "setable": true,
        "title": "Slot modus",
        "desc": null,
        "units": null,
        "values": [
          {
            "id": "always_locked",
            "title": "Altijd op slot"
          },
          {
            "id": "always_unlocked",
            "title": "Altijd open"
          },
          {
            "id": "locked_until_unlock",
            "title": "Op slot tot geopend"
          }
        ],
        "id": "lock_mode",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "toggle",
          "capabilities": [
            "locked"
          ]
        },
        {
          "id": "picker",
          "capabilities": [
            "lock_mode"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:4af95bb0-58d2-4b84-a8ad-ba17db87b599",
        "id": "locked",
        "type": "boolean",
        "title": "Op slot",
        "titleTrue": "Vergrendeld",
        "titleFalse": "Ontgrendeld",
        "units": null,
        "decimals": null
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "c7c7ba6c-ea3b-2c9e-7d61-96dd3309232a",
      "version": 3,
      "icon": "lock.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "55a6875e-b1a6-4efb-86f9-06eb084dbfb1": {
    "id": "55a6875e-b1a6-4efb-86f9-06eb084dbfb1",
    "name": "HK Curtains Set",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "curtains.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {},
    "settingsObj": false,
    "class": "curtain",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "windowcoverings_set"
    ],
    "capabilitiesObj": {
      "windowcoverings_set": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Positie",
        "desc": "Set the position of window coverings. 0% is closed, 100% is open",
        "units": "%",
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "windowcoverings_set",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "slider",
          "capabilities": [
            "windowcoverings_set"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#6720df",
    "data": {
      "id": "2d8dceca-c4d3-0885-f082-6d1807f6ce26",
      "version": 3,
      "icon": "curtains.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "50ba3e26-c2b7-455c-8f10-b84642506c07": {
    "id": "50ba3e26-c2b7-455c-8f10-b84642506c07",
    "name": "HK Blinds State",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "curtains.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {},
    "settingsObj": false,
    "class": "blinds",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "windowcoverings_state",
      "windowcoverings_tilt_down",
      "windowcoverings_tilt_up",
      "windowcoverings_tilt_set"
    ],
    "capabilitiesObj": {
      "windowcoverings_state": {
        "value": null,
        "type": "enum",
        "getable": true,
        "setable": true,
        "title": "Raambekleding status",
        "desc": null,
        "units": null,
        "values": [
          {
            "id": "up",
            "title": "Omhoog"
          },
          {
            "id": "idle",
            "title": "Stil"
          },
          {
            "id": "down",
            "title": "Omlaag"
          }
        ],
        "id": "windowcoverings_state",
        "options": {}
      },
      "windowcoverings_tilt_down": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Window coverings tilt down",
        "desc": null,
        "units": null,
        "id": "windowcoverings_tilt_down",
        "options": {}
      },
      "windowcoverings_tilt_up": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Window coverings tilt up",
        "desc": null,
        "units": null,
        "id": "windowcoverings_tilt_up",
        "options": {}
      },
      "windowcoverings_tilt_set": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Window coverings tilt set",
        "desc": null,
        "units": null,
        "decimals": 2,
        "min": 0,
        "max": 1,
        "id": "windowcoverings_tilt_set",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "slider",
          "capabilities": [
            "windowcoverings_tilt_set"
          ]
        },
        {
          "id": "ternary",
          "capabilities": [
            "windowcoverings_state"
          ]
        },
        {
          "id": "button",
          "capabilities": [
            "windowcoverings_tilt_down",
            "windowcoverings_tilt_up"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#6720df",
    "data": {
      "id": "b94bbf0f-f3af-565d-f9ed-31e7c9848b20",
      "version": 3,
      "icon": "curtains.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "cb65416e-34f2-4fbe-98b5-b029e77983c9": {
    "id": "cb65416e-34f2-4fbe-98b5-b029e77983c9",
    "name": "HK Socket",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "button.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_alwayson": false,
      "energy_value_off": null,
      "energy_value_on": null
    },
    "settingsObj": true,
    "class": "socket",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "onoff",
      "dim"
    ],
    "capabilitiesObj": {
      "onoff": {
        "value": null,
        "lastUpdated": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Aangezet",
        "desc": null,
        "units": null,
        "id": "onoff",
        "options": {}
      },
      "dim": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Dim niveau",
        "desc": null,
        "units": "%",
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "dim",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "onoff",
      "components": [
        {
          "id": "toggle",
          "capabilities": [
            "onoff"
          ]
        },
        {
          "id": "slider",
          "capabilities": [
            "dim"
          ]
        }
      ],
      "componentsStartAt": 1
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:cb65416e-34f2-4fbe-98b5-b029e77983c9",
        "id": "onoff",
        "type": "boolean",
        "title": "Aangezet",
        "titleTrue": "Aangezet",
        "titleFalse": "Uitgezet",
        "units": null,
        "decimals": null
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "eefe50b1-5b74-2fb6-c160-c059c035ac42",
      "version": 3,
      "icon": "button.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "a9bdf1a0-57d0-4560-93a1-ca6d560bdf46": {
    "id": "a9bdf1a0-57d0-4560-93a1-ca6d560bdf46",
    "name": "HK Fan",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "fan.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_off": null,
      "energy_value_on": null
    },
    "settingsObj": true,
    "class": "fan",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "onoff",
      "dim"
    ],
    "capabilitiesObj": {
      "onoff": {
        "value": false,
        "lastUpdated": "2022-11-20T12:45:55.861Z",
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Aangezet",
        "desc": null,
        "units": null,
        "id": "onoff",
        "options": {}
      },
      "dim": {
        "value": 0,
        "lastUpdated": "2022-11-20T12:45:55.860Z",
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Dim niveau",
        "desc": null,
        "units": "%",
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "dim",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "onoff",
      "components": [
        {
          "id": "toggle",
          "capabilities": [
            "onoff"
          ]
        },
        {
          "id": "slider",
          "capabilities": [
            "dim"
          ]
        }
      ],
      "componentsStartAt": 1
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:a9bdf1a0-57d0-4560-93a1-ca6d560bdf46",
        "id": "onoff",
        "type": "boolean",
        "title": "Aangezet",
        "titleTrue": "Aangezet",
        "titleFalse": "Uitgezet",
        "units": null,
        "decimals": null
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "28ef13f8-3560-77e6-12ca-307457b6f79d",
      "version": 3,
      "icon": "fan.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "f4d88961-ef5a-4600-ab8b-b2217f4c3656": {
    "id": "f4d88961-ef5a-4600-ab8b-b2217f4c3656",
    "name": "HK Coffeemachine",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "coffee_maker.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_off": null,
      "energy_value_on": null
    },
    "settingsObj": true,
    "class": "coffeemachine",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "onoff",
      "target_temperature",
      "measure_temperature"
    ],
    "capabilitiesObj": {
      "onoff": {
        "value": null,
        "lastUpdated": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Aangezet",
        "desc": null,
        "units": null,
        "id": "onoff",
        "options": {}
      },
      "target_temperature": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Ingestelde temperatuur",
        "desc": null,
        "units": "°C",
        "decimals": 2,
        "min": 12,
        "max": 100,
        "step": 1,
        "chartType": "stepLine",
        "id": "target_temperature",
        "options": {
          "min": 12,
          "max": 100,
          "step": 1
        }
      },
      "measure_temperature": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "Temperatuur",
        "desc": "Temperatuur in graden Celsius (°C)",
        "units": "°C",
        "decimals": 0,
        "chartType": "spline",
        "id": "measure_temperature",
        "options": {
          "decimals": 0
        }
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "onoff",
      "components": [
        {
          "id": "thermostat",
          "capabilities": [
            "measure_temperature",
            "target_temperature"
          ]
        },
        {
          "id": "toggle",
          "capabilities": [
            "onoff"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:f4d88961-ef5a-4600-ab8b-b2217f4c3656",
        "id": "onoff",
        "type": "boolean",
        "title": "Aangezet",
        "titleTrue": "Aangezet",
        "titleFalse": "Uitgezet",
        "units": null,
        "decimals": null
      },
      {
        "uri": "homey:device:f4d88961-ef5a-4600-ab8b-b2217f4c3656",
        "id": "target_temperature",
        "type": "number",
        "title": "Ingestelde temperatuur",
        "titleTrue": null,
        "titleFalse": null,
        "units": "°C",
        "decimals": 2
      },
      {
        "uri": "homey:device:f4d88961-ef5a-4600-ab8b-b2217f4c3656",
        "id": "measure_temperature",
        "type": "number",
        "title": "Temperatuur",
        "titleTrue": null,
        "titleFalse": null,
        "units": "°C",
        "decimals": 0
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "c989dee9-c930-32ce-d3f1-8b7e0c26ab93",
      "version": 3,
      "icon": "coffee_maker.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "0f48db22-2d51-4e38-b758-ce677eaed53c": {
    "id": "0f48db22-2d51-4e38-b758-ce677eaed53c",
    "name": "HK Remote",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "sensor2.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_off": null,
      "energy_value_on": null
    },
    "settingsObj": true,
    "class": "remote",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "onoff"
    ],
    "capabilitiesObj": {
      "onoff": {
        "value": null,
        "lastUpdated": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Aangezet",
        "desc": null,
        "units": null,
        "id": "onoff",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "onoff",
      "components": [
        {
          "id": "toggle",
          "capabilities": [
            "onoff"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:0f48db22-2d51-4e38-b758-ce677eaed53c",
        "id": "onoff",
        "type": "boolean",
        "title": "Aangezet",
        "titleTrue": "Aangezet",
        "titleFalse": "Uitgezet",
        "units": null,
        "decimals": null
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "1ce8e48a-1641-0fe0-e054-680c7bf21a08",
      "version": 3,
      "icon": "sensor2.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "8427bded-23e3-4c80-9620-b245944a2ba7": {
    "id": "8427bded-23e3-4c80-9620-b245944a2ba7",
    "name": "HK Thermostat",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "thermostat.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "thermostat",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "target_temperature",
      "thermostat_mode",
      "measure_temperature"
    ],
    "capabilitiesObj": {
      "target_temperature": {
        "value": 26.5,
        "lastUpdated": "2022-11-20T13:38:41.338Z",
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Ingestelde temperatuur",
        "desc": null,
        "units": "°C",
        "decimals": 2,
        "min": 12,
        "max": 32,
        "step": 0.5,
        "chartType": "stepLine",
        "id": "target_temperature",
        "options": {
          "min": 12,
          "max": 32,
          "step": 0.5
        }
      },
      "thermostat_mode": {
        "value": "auto",
        "lastUpdated": "2022-11-20T13:38:29.038Z",
        "type": "enum",
        "getable": true,
        "setable": true,
        "title": "Thermostaat modus",
        "desc": "Modus van de thermostaat",
        "units": null,
        "values": [
          {
            "id": "auto",
            "title": "Automatisch"
          },
          {
            "id": "heat",
            "title": "Verhitten"
          },
          {
            "id": "cool",
            "title": "Koelen"
          },
          {
            "id": "off",
            "title": "Uit"
          }
        ],
        "id": "thermostat_mode",
        "options": {}
      },
      "measure_temperature": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "Temperatuur",
        "desc": "Temperatuur in graden Celsius (°C)",
        "units": "°C",
        "decimals": 1,
        "chartType": "spline",
        "id": "measure_temperature",
        "options": {
          "decimals": 1
        }
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "thermostat",
          "capabilities": [
            "measure_temperature",
            "target_temperature"
          ]
        },
        {
          "id": "picker",
          "capabilities": [
            "thermostat_mode"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:8427bded-23e3-4c80-9620-b245944a2ba7",
        "id": "target_temperature",
        "type": "number",
        "title": "Ingestelde temperatuur",
        "titleTrue": null,
        "titleFalse": null,
        "units": "°C",
        "decimals": 2
      },
      {
        "uri": "homey:device:8427bded-23e3-4c80-9620-b245944a2ba7",
        "id": "measure_temperature",
        "type": "number",
        "title": "Temperatuur",
        "titleTrue": null,
        "titleFalse": null,
        "units": "°C",
        "decimals": 1
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "993eac1c-761e-a72a-3eec-f2e8db0c8782",
      "version": 3,
      "icon": "thermostat.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "39384188-ef89-46ba-bed8-1891dfa5f3ed": {
    "id": "39384188-ef89-46ba-bed8-1891dfa5f3ed",
    "name": "HK Doorbell",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "door.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "doorbell",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "button"
    ],
    "capabilitiesObj": {
      "button": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Knop",
        "desc": null,
        "units": null,
        "id": "button",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "button",
      "components": [
        {
          "id": "button",
          "capabilities": [
            "button"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#6720df",
    "data": {
      "id": "bc516042-5a38-d2a4-75b1-8059e40d41e2",
      "version": 3,
      "icon": "door.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "dd498619-6745-4aa2-9381-2d531e7f4208": {
    "id": "dd498619-6745-4aa2-9381-2d531e7f4208",
    "name": "HK Home Alarm",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "alarm.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_off": null,
      "energy_value_on": null,
      "zone_activity_disabled": false
    },
    "settingsObj": true,
    "class": "homealarm",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "homealarm_state",
      "onoff",
      "alarm_motion",
      "alarm_contact",
      "button"
    ],
    "capabilitiesObj": {
      "homealarm_state": {
        "value": null,
        "type": "enum",
        "getable": true,
        "setable": true,
        "title": "Thuisalarm status",
        "desc": null,
        "units": null,
        "values": [
          {
            "id": "armed",
            "title": "Geactiveerd"
          },
          {
            "id": "disarmed",
            "title": "Gedeactiveerd"
          },
          {
            "id": "partially_armed",
            "title": "Deels geactiveerd"
          }
        ],
        "id": "homealarm_state",
        "options": {}
      },
      "onoff": {
        "value": null,
        "lastUpdated": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Aangezet",
        "desc": null,
        "units": null,
        "id": "onoff",
        "options": {}
      },
      "alarm_motion": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": false,
        "title": "Bewegingsalarm",
        "desc": null,
        "units": null,
        "id": "alarm_motion",
        "options": {}
      },
      "alarm_contact": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": false,
        "title": "Contact alarm",
        "desc": "Contact sensor, bijvoorbeeld voor ramen",
        "units": null,
        "id": "alarm_contact",
        "options": {}
      },
      "button": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Knop",
        "desc": null,
        "units": null,
        "id": "button",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "onoff",
      "components": [
        {
          "id": "toggle",
          "capabilities": [
            "onoff"
          ]
        },
        {
          "id": "button",
          "capabilities": [
            "button"
          ]
        },
        {
          "id": "picker",
          "capabilities": [
            "homealarm_state"
          ]
        },
        {
          "id": "sensor",
          "capabilities": [
            "alarm_motion",
            "alarm_contact"
          ]
        }
      ],
      "componentsStartAt": 1
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:dd498619-6745-4aa2-9381-2d531e7f4208",
        "id": "onoff",
        "type": "boolean",
        "title": "Aangezet",
        "titleTrue": "Aangezet",
        "titleFalse": "Uitgezet",
        "units": null,
        "decimals": null
      },
      {
        "uri": "homey:device:dd498619-6745-4aa2-9381-2d531e7f4208",
        "id": "alarm_motion",
        "type": "boolean",
        "title": "Bewegingsalarm",
        "titleTrue": "Bewegingsalarm ging af",
        "titleFalse": "Bewegingsalarm ging uit",
        "units": null,
        "decimals": null
      },
      {
        "uri": "homey:device:dd498619-6745-4aa2-9381-2d531e7f4208",
        "id": "alarm_contact",
        "type": "boolean",
        "title": "Contact alarm",
        "titleTrue": "Contact alarm ging af",
        "titleFalse": "Contact alarm ging uit",
        "units": null,
        "decimals": null
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "3809e1e8-6fb2-64b8-c7cd-ffd79e22f4b9",
      "version": 3,
      "icon": "alarm.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "c2d45499-1937-49f3-962b-e3063a86fa41": {
    "id": "c2d45499-1937-49f3-962b-e3063a86fa41",
    "name": "HK Speaker",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "hifi.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "speaker",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "button",
      "volume_set",
      "volume_mute",
      "volume_up",
      "volume_down",
      "speaker_playing",
      "speaker_next",
      "speaker_prev",
      "speaker_shuffle",
      "speaker_repeat",
      "speaker_artist",
      "speaker_album",
      "speaker_track",
      "speaker_duration",
      "speaker_position"
    ],
    "capabilitiesObj": {
      "button": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Knop",
        "desc": null,
        "units": null,
        "id": "button",
        "options": {}
      },
      "volume_set": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "Set volume",
        "desc": "Volume",
        "units": null,
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "volume_set",
        "options": {}
      },
      "volume_mute": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Gedempt volume",
        "desc": null,
        "units": null,
        "id": "volume_mute",
        "options": {}
      },
      "volume_up": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Volume omhoog",
        "desc": null,
        "units": null,
        "id": "volume_up",
        "options": {}
      },
      "volume_down": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Volume omlaag",
        "desc": null,
        "units": null,
        "id": "volume_down",
        "options": {}
      },
      "speaker_playing": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Afspelen",
        "desc": null,
        "units": null,
        "id": "speaker_playing",
        "options": {}
      },
      "speaker_next": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Volgende",
        "desc": null,
        "units": null,
        "id": "speaker_next",
        "options": {}
      },
      "speaker_prev": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Vorige",
        "desc": null,
        "units": null,
        "id": "speaker_prev",
        "options": {}
      },
      "speaker_shuffle": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "Shuffle",
        "desc": null,
        "units": null,
        "id": "speaker_shuffle",
        "options": {}
      },
      "speaker_repeat": {
        "value": null,
        "type": "enum",
        "getable": true,
        "setable": true,
        "title": "Repeat",
        "desc": null,
        "units": null,
        "values": [
          {
            "id": "none",
            "title": "Uit"
          },
          {
            "id": "track",
            "title": "Repeat Track"
          },
          {
            "id": "playlist",
            "title": "Repeat Playlist"
          }
        ],
        "id": "speaker_repeat",
        "options": {}
      },
      "speaker_artist": {
        "value": null,
        "type": "string",
        "getable": true,
        "setable": false,
        "title": "Artiest",
        "desc": null,
        "units": null,
        "id": "speaker_artist",
        "options": {}
      },
      "speaker_album": {
        "value": null,
        "type": "string",
        "getable": true,
        "setable": false,
        "title": "Album",
        "desc": null,
        "units": null,
        "id": "speaker_album",
        "options": {}
      },
      "speaker_track": {
        "value": null,
        "type": "string",
        "getable": true,
        "setable": false,
        "title": "Track",
        "desc": null,
        "units": null,
        "id": "speaker_track",
        "options": {}
      },
      "speaker_duration": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "Lengte",
        "desc": null,
        "units": null,
        "id": "speaker_duration",
        "options": {}
      },
      "speaker_position": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "Positie",
        "desc": null,
        "units": null,
        "id": "speaker_position",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "button",
      "components": [
        {
          "id": "media",
          "capabilities": [
            "speaker_playing",
            "speaker_next",
            "speaker_prev",
            "speaker_shuffle",
            "speaker_repeat",
            "speaker_artist",
            "speaker_album",
            "speaker_track",
            "speaker_duration",
            "speaker_position"
          ]
        },
        {
          "id": "slider",
          "capabilities": [
            "volume_set"
          ]
        },
        {
          "id": "button",
          "capabilities": [
            "button",
            "volume_mute",
            "volume_up",
            "volume_down"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#6720df",
    "data": {
      "id": "3a542ed7-6898-0a92-5f34-e82c7e234b8a",
      "version": 3,
      "icon": "hifi.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "0e387765-588d-492f-b6f8-539114586636": {
    "id": "0e387765-588d-492f-b6f8-539114586636",
    "name": "HK Button",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "switch.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {},
    "settingsObj": false,
    "class": "button",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "button"
    ],
    "capabilitiesObj": {
      "button": {
        "value": null,
        "type": "boolean",
        "getable": false,
        "setable": true,
        "title": "Knop",
        "desc": null,
        "units": null,
        "id": "button",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "button",
      "components": [
        {
          "id": "button",
          "capabilities": [
            "button"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#6720df",
    "data": {
      "id": "03745a87-ac8f-111a-423b-4c016fca42a7",
      "version": 3,
      "icon": "switch.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "3c2a9409-83cd-45d5-9741-56d4ba17fd06": {
    "id": "3c2a9409-83cd-45d5-9741-56d4ba17fd06",
    "name": "HK Environmental Sensor",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "sensor.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "sensor",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "measure_temperature",
      "measure_pressure",
      "measure_humidity"
    ],
    "capabilitiesObj": {
      "measure_temperature": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "Temperatuur",
        "desc": "Temperatuur in graden Celsius (°C)",
        "units": "°C",
        "decimals": 1,
        "chartType": "spline",
        "id": "measure_temperature",
        "options": {
          "decimals": 1
        }
      },
      "measure_pressure": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "Druk",
        "desc": "Druk in millibar (mbar)",
        "units": "mbar",
        "decimals": 0,
        "chartType": "spline",
        "id": "measure_pressure",
        "options": {}
      },
      "measure_humidity": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "Luchtvochtigheid",
        "desc": "Relatieve luchtvochtigheid (%)",
        "units": "%",
        "decimals": 2,
        "chartType": "spline",
        "id": "measure_humidity",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "sensor",
          "capabilities": [
            "measure_temperature",
            "measure_pressure",
            "measure_humidity"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:3c2a9409-83cd-45d5-9741-56d4ba17fd06",
        "id": "measure_temperature",
        "type": "number",
        "title": "Temperatuur",
        "titleTrue": null,
        "titleFalse": null,
        "units": "°C",
        "decimals": 1
      },
      {
        "uri": "homey:device:3c2a9409-83cd-45d5-9741-56d4ba17fd06",
        "id": "measure_pressure",
        "type": "number",
        "title": "Druk",
        "titleTrue": null,
        "titleFalse": null,
        "units": "mbar",
        "decimals": 0
      },
      {
        "uri": "homey:device:3c2a9409-83cd-45d5-9741-56d4ba17fd06",
        "id": "measure_humidity",
        "type": "number",
        "title": "Luchtvochtigheid",
        "titleTrue": null,
        "titleFalse": null,
        "units": "%",
        "decimals": 2
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "44e2ab12-94f1-642d-34fa-10c540c766cf",
      "version": 3,
      "icon": "sensor.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "87f85d32-eb24-4366-bc13-e2d78db157b0": {
    "id": "87f85d32-eb24-4366-bc13-e2d78db157b0",
    "name": "HK Air Quality Sensor",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "sensor.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "sensor",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "measure_co2",
      "measure_pm25",
      "measure_co"
    ],
    "capabilitiesObj": {
      "measure_co2": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "CO2",
        "desc": "CO2 deeltjes per miljoen (ppm)",
        "units": "ppm",
        "decimals": 2,
        "chartType": "spline",
        "id": "measure_co2",
        "options": {}
      },
      "measure_pm25": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "PM2.5",
        "desc": "Deeltjesvormige luchtverontreiniging (μg/m³)",
        "units": "μg/m³",
        "decimals": 2,
        "chartType": "spline",
        "id": "measure_pm25",
        "options": {}
      },
      "measure_co": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "CO",
        "desc": "CO deeltjes per miljoen (ppm)",
        "units": "ppm",
        "decimals": 2,
        "chartType": "spline",
        "id": "measure_co",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "sensor",
          "capabilities": [
            "measure_co2",
            "measure_pm25",
            "measure_co"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:87f85d32-eb24-4366-bc13-e2d78db157b0",
        "id": "measure_co2",
        "type": "number",
        "title": "CO2",
        "titleTrue": null,
        "titleFalse": null,
        "units": "ppm",
        "decimals": 2
      },
      {
        "uri": "homey:device:87f85d32-eb24-4366-bc13-e2d78db157b0",
        "id": "measure_pm25",
        "type": "number",
        "title": "PM2.5",
        "titleTrue": null,
        "titleFalse": null,
        "units": "μg/m³",
        "decimals": 2
      },
      {
        "uri": "homey:device:87f85d32-eb24-4366-bc13-e2d78db157b0",
        "id": "measure_co",
        "type": "number",
        "title": "CO",
        "titleTrue": null,
        "titleFalse": null,
        "units": "ppm",
        "decimals": 2
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "dc71c5d6-dc4e-f450-dc0f-28c3470861dd",
      "version": 3,
      "icon": "sensor.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": false
    }
  },
  "726f6151-ebb0-4576-869e-df864d9e6d09": {
    "id": "726f6151-ebb0-4576-869e-df864d9e6d09",
    "name": "HK Motion Sensor",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "motion.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_constant": null,
      "zone_activity_disabled": false
    },
    "settingsObj": true,
    "class": "sensor",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "alarm_motion"
    ],
    "capabilitiesObj": {
      "alarm_motion": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": false,
        "title": "Bewegingsalarm",
        "desc": null,
        "units": null,
        "id": "alarm_motion",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "sensor",
          "capabilities": [
            "alarm_motion"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:726f6151-ebb0-4576-869e-df864d9e6d09",
        "id": "alarm_motion",
        "type": "boolean",
        "title": "Bewegingsalarm",
        "titleTrue": "Bewegingsalarm ging af",
        "titleFalse": "Bewegingsalarm ging uit",
        "units": null,
        "decimals": null
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "f06d7271-fecc-cfab-d51a-e1d2ea74ceae",
      "version": 3,
      "icon": "motion.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "10ae6823-7b7b-424e-a756-a0c475906479": {
    "id": "10ae6823-7b7b-424e-a756-a0c475906479",
    "name": "HK Contact Sensor",
    "driverUri": "homey:app:com.arjankranenburg.virtual",
    "driverId": "virtual_switch",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "motion.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "energy_value_constant": null,
      "zone_activity_disabled": false
    },
    "settingsObj": true,
    "class": "sensor",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "alarm_contact"
    ],
    "capabilitiesObj": {
      "alarm_contact": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": false,
        "title": "Contact alarm",
        "desc": "Contact sensor, bijvoorbeeld voor ramen",
        "units": null,
        "id": "alarm_contact",
        "options": {}
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "sensor",
          "capabilities": [
            "alarm_contact"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": false,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [
      {
        "uri": "homey:device:10ae6823-7b7b-424e-a756-a0c475906479",
        "id": "alarm_contact",
        "type": "boolean",
        "title": "Contact alarm",
        "titleTrue": "Contact alarm ging af",
        "titleFalse": "Contact alarm ging uit",
        "units": null,
        "decimals": null
      }
    ],
    "color": "#6720df",
    "data": {
      "id": "6ead1963-2995-c7ee-9618-6f9e01f0275a",
      "version": 3,
      "icon": "motion.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "ca580e6d-007d-4908-bbaf-a7751fc29034": {
    "id": "ca580e6d-007d-4908-bbaf-a7751fc29034",
    "name": "HK Garage Door",
    "driverUri": "homey:app:nl.qluster-it.DeviceCapabilities",
    "driverId": "virtualdevice",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_1.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "labelGotoRepair": "Begin door naar apparaat Onderhoud/Repareren te gaan",
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "garagedoor",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "garagedoor_closed.button1"
    ],
    "capabilitiesObj": {
      "garagedoor_closed.button1": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "garage door closed",
        "desc": null,
        "units": null,
        "id": "garagedoor_closed.button1",
        "options": {
          "title": "garage door closed",
          "preventInsights": true,
          "preventTag": true
        }
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "toggle",
          "capabilities": [
            "garagedoor_closed.button1"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": true,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#E8A713",
    "data": {
      "id": "DeviceCapabilityVirtualDevice_1",
      "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_1.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "c28c7bfe-5767-4862-933d-341cc1b5e481": {
    "id": "c28c7bfe-5767-4862-933d-341cc1b5e481",
    "name": "HK Water Leak Sensor",
    "driverUri": "homey:app:nl.qluster-it.DeviceCapabilities",
    "driverId": "virtualdevice",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_2.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "labelGotoRepair": "Begin door naar apparaat Onderhoud/Repareren te gaan",
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "sensor",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "alarm_water.boolean1"
    ],
    "capabilitiesObj": {
      "alarm_water.boolean1": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": false,
        "title": "water leak alarm",
        "desc": "Gaat af als er water gedetecteerd wordt",
        "units": null,
        "id": "alarm_water.boolean1",
        "options": {
          "title": "water leak alarm",
          "preventInsights": true,
          "preventTag": true
        }
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "sensor",
          "capabilities": [
            "alarm_water.boolean1"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": true,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#E8A713",
    "data": {
      "id": "DeviceCapabilityVirtualDevice_2",
      "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_2.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "b3fd684c-53ac-4eaa-93ef-44a02c30a30a": {
    "id": "b3fd684c-53ac-4eaa-93ef-44a02c30a30a",
    "name": "HK Sunshade Dim",
    "driverUri": "homey:app:nl.qluster-it.DeviceCapabilities",
    "driverId": "virtualdevice",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_3.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "labelGotoRepair": "Begin door naar apparaat Onderhoud/Repareren te gaan",
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "sunshade",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "dim.number1"
    ],
    "capabilitiesObj": {
      "dim.number1": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "dim",
        "desc": null,
        "units": "%",
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "dim.number1",
        "options": {
          "title": "dim",
          "preventInsights": true,
          "preventTag": true
        }
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "slider",
          "capabilities": [
            "dim.number1"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": true,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#E8A713",
    "data": {
      "id": "DeviceCapabilityVirtualDevice_3",
      "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_3.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "a6260d0a-fe08-4a4a-8cf8-1cab6bf8aa74": {
    "id": "a6260d0a-fe08-4a4a-8cf8-1cab6bf8aa74",
    "name": "HK Heater",
    "driverUri": "homey:app:nl.qluster-it.DeviceCapabilities",
    "driverId": "virtualdevice",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_4.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "labelGotoRepair": "Begin door naar apparaat Onderhoud/Repareren te gaan",
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "heater",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "target_temperature.number1",
      "measure_temperature.number1",
      "dim.number3",
      "onoff.button1"
    ],
    "capabilitiesObj": {
      "target_temperature.number1": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "target temp",
        "desc": null,
        "units": "°C",
        "decimals": 2,
        "min": 4,
        "max": 35,
        "chartType": "stepLine",
        "id": "target_temperature.number1",
        "options": {
          "title": "target temp",
          "preventInsights": true,
          "preventTag": true
        }
      },
      "measure_temperature.number1": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": false,
        "title": "measured temp",
        "desc": "Temperatuur in graden Celsius (°C)",
        "units": "°C",
        "decimals": 2,
        "chartType": "spline",
        "id": "measure_temperature.number1",
        "options": {
          "title": "measured temp",
          "preventInsights": true,
          "preventTag": true
        }
      },
      "dim.number3": {
        "value": null,
        "type": "number",
        "getable": true,
        "setable": true,
        "title": "speed",
        "desc": null,
        "units": "%",
        "decimals": 2,
        "min": 0,
        "max": 1,
        "chartType": "stepLine",
        "id": "dim.number3",
        "options": {
          "title": "speed",
          "preventInsights": true,
          "preventTag": true
        }
      },
      "onoff.button1": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "active",
        "desc": null,
        "units": null,
        "id": "onoff.button1",
        "options": {
          "title": "active",
          "preventInsights": true,
          "preventTag": true
        }
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "onoff.button1",
      "components": [
        {
          "id": "thermostat",
          "capabilities": [
            "measure_temperature.number1",
            "target_temperature.number1"
          ]
        },
        {
          "id": "toggle",
          "capabilities": [
            "onoff.button1"
          ]
        },
        {
          "id": "slider",
          "capabilities": [
            "dim.number3"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": true,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#E8A713",
    "data": {
      "id": "DeviceCapabilityVirtualDevice_4",
      "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_4.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "d2b613a4-a407-467d-8fdb-5e15a48b9f57": {
    "id": "d2b613a4-a407-467d-8fdb-5e15a48b9f57",
    "name": "HK Smoke Sensor",
    "driverUri": "homey:app:nl.qluster-it.DeviceCapabilities",
    "driverId": "virtualdevice",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_5.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "labelGotoRepair": "Begin door naar apparaat Onderhoud/Repareren te gaan",
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "sensor",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "alarm_smoke.boolean1"
    ],
    "capabilitiesObj": {
      "alarm_smoke.boolean1": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": false,
        "title": "smoke",
        "desc": "Gaat af als er rook gedetecteerd wordt",
        "units": null,
        "id": "alarm_smoke.boolean1",
        "options": {
          "title": "smoke",
          "preventInsights": true,
          "preventTag": true
        }
      }
    },
    "flags": [],
    "ui": {
      "components": [
        {
          "id": "sensor",
          "capabilities": [
            "alarm_smoke.boolean1"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": true,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#E8A713",
    "data": {
      "id": "DeviceCapabilityVirtualDevice_5",
      "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_5.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  },
  "351f0542-bbc0-41ff-a76c-0299a06b7bf5": {
    "id": "351f0542-bbc0-41ff-a76c-0299a06b7bf5",
    "name": "HK Other Onoff",
    "driverUri": "homey:app:nl.qluster-it.DeviceCapabilities",
    "driverId": "virtualdevice",
    "zone": "9919ee1e-ffbc-480b-bc4b-77fb047e9e68",
    "zoneName": "Thuis",
    "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_6.svg",
    "iconObj": {
      "url": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
    },
    "settings": {
      "labelGotoRepair": "Begin door naar apparaat Onderhoud/Repareren te gaan",
      "energy_value_constant": null
    },
    "settingsObj": true,
    "class": "other",
    "energyObj": {
      "W": null,
      "batteries": null,
      "cumulative": null,
      "generator": null
    },
    "capabilities": [
      "onoff.button1"
    ],
    "capabilitiesObj": {
      "onoff.button1": {
        "value": null,
        "type": "boolean",
        "getable": true,
        "setable": true,
        "title": "onoff",
        "desc": null,
        "units": null,
        "id": "onoff.button1",
        "options": {
          "title": "onoff",
          "preventInsights": true,
          "preventTag": true
        }
      }
    },
    "flags": [],
    "ui": {
      "quickAction": "onoff.button1",
      "components": [
        {
          "id": "toggle",
          "capabilities": [
            "onoff.button1"
          ]
        }
      ],
      "componentsStartAt": 0
    },
    "ready": true,
    "available": true,
    "repair": true,
    "unpair": false,
    "unavailableMessage": null,
    "images": [],
    "insights": [],
    "color": "#E8A713",
    "data": {
      "id": "DeviceCapabilityVirtualDevice_6",
      "icon": "../../../userdata/virtualdeviceicons/DeviceCapabilityVirtualDevice_6.svg"
    },
    "homekitty": {
      "exposed": true,
      "supported": true
    }
  }
}
