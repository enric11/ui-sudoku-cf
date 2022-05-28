sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
],
    /*
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("ecastella.sudokuui.controller.Main", {
            onInit: function () {

            },
            onGetNextAvailableItem: function(oEvent){
                var that = this;
                this.getView().byId("getNextAvailableItem").getObjectBinding().execute().then(function () {
                    // Note: execute does not deliver the results
                    var oResults = that.getView().byId("getNextAvailableItem").getObjectBinding().getBoundContext().getObject();
                    
                });
            }
        });
    });
