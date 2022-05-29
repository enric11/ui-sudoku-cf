sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
],
    /*
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox,JSONModel) {
        "use strict";

        return Controller.extend("ecastella.sudokuui.controller.Main", {
            onInit: function () {

            },
            onGetNextAvailableItem: function(oEvent){
                var that = this;
                this.getView().byId("getNextAvailableItem").getObjectBinding().execute().then(function () {
                    // Note: execute does not deliver the results
                    var oResults = that.getView().byId("getNextAvailableItem").getObjectBinding().getBoundContext().getObject();

                    var sudoku = oResults.value;

                    for (var value in sudoku.board) {
                        for(var v_height = 0; v_height < sudoku.height; v_height++){  //Altura
                            for( var v_with = 0; v_with < sudoku.with; v_with++){ // Longitud
                                console.log(sudoku.board[value][v_with + ( v_height * sudoku.with)] + "|");

                            }
                            console.log("--------");
                            // Hi ha un quadrat fet al pasar per aquí
                        }

                    }

                    var oModel = new JSONModel(sudoku);
                    that.getView().setModel(oModel,"sudoku");
                    
                });
            }
        });
    });
