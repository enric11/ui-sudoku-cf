sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "ecastella/sudokuui/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("ecastella.sudokuui.Component", {
            metadata: {
                manifest: "json",
                includes: ["images/loading.gif"]
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
                
                var busyImage = new sap.m.BusyIndicator({
                    text:'this is an image busy indicator ...',
                    customIcon: "images/loading.gif",
                    customIconRotationSpeed: 0
                });

            }
        });
    }
);