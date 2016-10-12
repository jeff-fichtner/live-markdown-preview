var WidgetController = function() {
	this.view = new WidgetView();
}

WidgetController.prototype.init = function() {
	this.view.bindInput(this.process.bind(this));
}

WidgetController.prototype.process = function(event) {
	content = markdown.toHTML(this.view.getInput(event));
	this.view.postContent(content);
}

// WidgetController.prototype.parse = function(input) {
// 	input = this.embolden(input);
// 	input = this.italicize(input);
// 	return input;
// }

// WidgetController.prototype.embolden = function(input) {
// 	return input.replace(boldRegex, "$2".bold());
// }

// WidgetController.prototype.italicize = function(input) {
// 	return input.replace(italicsRegex, "$2".italics());
// }

// var boldRegex = /(\*\*)([^\*]*)(\*\*|\z)/g
// var italicsRegex = /(\*|\_)([^\*]*)(\*|\_|\z)/g
