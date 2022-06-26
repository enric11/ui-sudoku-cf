sap.ui.define([], function () {
	"use strict";
	return {
		inputCheckForm: function (value) {
			switch (value) {
				case null:
					return '?';
				default:
					return value;
			}
		}
	};
});