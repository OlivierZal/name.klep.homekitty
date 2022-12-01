const VirtualDevice               = require('../virtual-device');
const { Service, Characteristic } = require('../../modules/hap-nodejs');

module.exports = class VirtualButtonDevice extends VirtualDevice {
  #onButtonPressTrigger = null;

  async onInit() {
    this.log('VirtualButtonDevice has been initialized');
    this.#onButtonPressTrigger = this.homey.flow.getDeviceTriggerCard('buttonpress');

    await this.setUnavailable();
    await this.accessorize();
    await this.setAvailable();
  }

  async accessorize() {
    // create a new accessory
    const accessory      = this.Accessory();
    const service        = accessory.addService(Service.Switch);
    const characteristic = service.getCharacteristic(Characteristic.On);

    // make the switch act as a sort of stateless button
    // by automatically turning it off after 300ms
    const turnOff = () => {
      setTimeout(() => {
        this.setCapabilityValue('button', false);
        characteristic.updateValue(false);
      }, 300);
    }

    // called when the button is pressed from HomeKit
    characteristic.onSet(async value => {
      if (! value) return;
      // turn the switch on
      await this.setCapabilityValue('button', true);
      // trigger the flow
      await this.#onButtonPressTrigger.trigger(this).catch(this.error);
      // turn the switch off again after 300ms
      turnOff();
    }).onGet(() => false);

    // call when the button is pressed on the Homey side
    this.registerCapabilityListener('button', async value => {
      characteristic.updateValue(true);
      turnOff();
    });

    // add to bridge
    await this.addToBridge();
  }
}
