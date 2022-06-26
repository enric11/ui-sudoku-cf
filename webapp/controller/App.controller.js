sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("ecastella.sudokuui.controller.controller.App", {
        onInit() {
            var busyImage = new sap.m.BusyIndicator({
                text:'this is an image busy indicator ...',
                customIcon: "images/loading.gif",
                customIconRotationSpeed: 0
            });
        }
      });
    }
  );
  