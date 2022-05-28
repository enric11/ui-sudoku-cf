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
/*
            var oModel = this.getOwnerComponent().getModel("sudoku");
				//oOperation = oModel.bindContext("/catalog/getTodos()");
                oModel.bindContext("/catalog/getTodos()").execute().then(function () {
					oModel.refresh();
					MessageBox.error(this._getText("sourceResetSuccessMessage"));
				}.bind(this), function (oError) {
					MessageBox.error(oError.message);
				}
			);
            */
            },
            onGetNextAvailableItem: function(oEvent){
                var that = this;
                //var oModel = this.getOwnerComponent().getModel("");
                this.getView().byId("getNextAvailableItem").getObjectBinding().execute().then(function () {
                    // Note: execute does not deliver the results
                    debugger;
                    var oResults = that.getView().byId("getNextAvailableItem").getObjectBinding().getBoundContext().getObject();
                    
                });



                //this.getView().byId("textData").getObjectBinding().execute();
                debugger;
            }
        });
    });
