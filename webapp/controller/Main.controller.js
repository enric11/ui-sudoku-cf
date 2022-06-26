sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
	"ecastella/sudokuui/model/formatter"
],
    /*
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox,JSONModel,formatter) {
        "use strict";

        return Controller.extend("ecastella.sudokuui.controller.Main", {
            formatter: formatter,
            onInit: function () {

            },

            /*
            * Create soduku structure to print
            */

            onGetNextAvailableItem: function(oEvent){
                var that = this;
                this.getView().byId("getNextAvailableItem").getObjectBinding().execute().then(function () {
                    // Note: execute does not deliver the results
                    var oResults = that.getView().byId("getNextAvailableItem").getObjectBinding().getBoundContext().getObject();

                    var sudoku = oResults.value;
                    
                    var oModel = new JSONModel(oResults.value);
                    that.getView().setModel(oModel,"sudoku_board");
/*
                    var sudokuBoard = [];
                    var sudokuLineAllBoard = [];
                    var count = 0;
                    for (var value in sudoku.board) {
                        if (Object.prototype.hasOwnProperty.call(sudoku.board,value)) {
                            var sudokuBoardLine = [];
                            count += 1;

                            for(var vHeight = 0; vHeight < sudoku.height; vHeight++){  //Altura
                                var sudokuBoardCol = [];
                                for( var vWith = 0; vWith < sudoku.with; vWith++){ // Longitud
                                    sudokuBoardCol.push(sudoku.board[value][vWith + ( vHeight * sudoku.with)]);
                                }
                                sudokuBoardLine.push(sudokuBoardCol);
                            }

                            sudokuBoard.push(sudokuBoardLine);
                            
                            if(count >= sudoku.with){
                                sudokuLineAllBoard.push(sudokuBoard);
                                sudokuBoard = [];
                                count = 0;
                            }
                        }
                    }
                    var oModel = new JSONModel(sudokuLineAllBoard);
                    that.getView().setModel(oModel,"sudoku");
                    */
                   
                    console.log(oResults.value.board);

                    
                });
            }
        });
    });
