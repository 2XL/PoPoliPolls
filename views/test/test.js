function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!DOCTYPE html><html><head></head><body><h1>Hello World</h1><p><This>is a comment</This><This>is a comment</This></p><p>This is another comment\nThis is another comment\nThis is another comment<br>This is another comment</p><p>This is magic\nThis is magic 2\nThis is a html tag <br>\nThis is magic <b>bold</b>\n</p><p id=\"hello\">Hello World with attr \"id=hello\"</p><div class=\"one two three\">This is a magic Div</div><div id=\"id_Motorola\" class=\"class_Rules\">Motorola Rules!</div><!-- Single Line Comment--><!--Multiline comment--></body></html>");;return buf.join("");
}