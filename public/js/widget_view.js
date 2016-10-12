var WidgetView = function() {
	this.inputField = $("#text-input");
	this.output = $("#markdown-output");
	this.postContent = function(input) { this.output.html("<p class='flow-text'>" + input + "</p>"); }
	this.getInput = function(event) { return event.target.value; }
	this.bindInput = function(callback) { this.inputField.on("keyup", callback); }
}
