/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"C10/invoices/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
