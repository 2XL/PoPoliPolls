function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (Array, String, args, console, title, undefined) {
jade_mixins["list"] = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<ul>");
var args = Array.prototype.slice.call(arguments);
buf.push("<!-- its not an real array maybe we cannot iterate through it-->");
// iterate args
;(function(){
  var $$obj = args;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul>");
};
jade_mixins["input"] = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<li" + (jade.attr("id", name.replace(/\s/g, '-'), true, false)) + "><label>" + (jade.escape(null == (jade_interp = name + ':') ? "" : jade_interp)) + "</label>");
block && block();
buf.push("</li>");
};
jade_mixins["copyleft"] = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("(&#596;)");
};
jade_mixins["person"] = function(name, hit){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<li>" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + " hit:  " + (jade.escape((jade_interp = hit) == null ? '' : jade_interp)) + " results</li>");
};
buf.push("<!DOCTYPE html><html><head><title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</title><link rel=\"stylesheet\" href=\"/stylesheets/style.css\"><script src=\"/javascript/script.js\"></script><script src=\"script.js\" type=\"text/javascript\"></script></head><body>");
var author = "Chenglong.Zou"
var date = "Today is Yesterday's Tomorrow."
String.prototype.title_case = function(){
return this.replace(/\w\S*/g, function(txt){
return txt.chartAt(0).toUnicode() + txt.substr(1).toLowerCase();
})
}
buf.push("<h1>Hello World</h1><p><This>is a comment</This><This>is a comment</This></p><p>This is another comment\nThis is another comment\nThis is another comment<br>This is another comment</p><p>This is magic\nThis is magic 2\nThis is a html tag <br>\nThis is magic <b>bold</b>\n</p><p id=\"hello\">Hello World with attr \"id=hello\"</p><div class=\"one two three\">This is a magic Div</div><div id=\"id_Motorola\" class=\"class_Rules\">Motorola Rules!</div><!-- Single Line Comment--><!--Multiline comment\n--><ol><li class=\"first\"><a href=\"#\">TOP</a></li><li><a href=\"#\">MID</a></li><li class=\"last\"><a href=\"#\">BOT</a></li></ol><ul><li class=\"first\"><b><a href=\"#\">Stack in one line</a></b></li></ul><p>  I am " + (jade.escape((jade_interp = author) == null ? '' : jade_interp)) + "!</p>");
var magic_url = "www.google.es"
buf.push("<a" + (jade.attr("href", "" + (magic_url) + "", true, true)) + "></a>");
var my_magic_array = [0,1,2,3]
buf.push("<pre>" + (jade.escape((jade_interp = my_magic_array[2]) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = my_magic_array[2]) == null ? '' : jade_interp)) + "\n" + (jade.escape((jade_interp = my_magic_array[1]) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = my_magic_array[3]) == null ? '' : jade_interp)) + "\n</pre>");
var my_tag = "magicTAG"
buf.push("<" + (my_tag) + ">This is a magic Tag Section</" + (my_tag) + ">");
var i = {type: "text", name: "Cheng"}
buf.push("<input" + (jade.attr("type", i.type, true, true)) + (jade.attr("name", i.name, true, true)) + ">");
var content = "Hello<em>World</em>"
buf.push("<p>" + (null == (jade_interp = content) ? "" : jade_interp) + "</p><p>" + (jade.escape(null == (jade_interp = content) ? "" : jade_interp)) + "</p><p>" + (jade.escape(null == (jade_interp = args) ? "" : jade_interp)) + "</p>");
var name = "Jade"
if (name == "Bob"){
buf.push("<h3>Hello Bob</h3>");
} else {
buf.push("<h2>Hello " + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</h2>");
}
var greeting = ( name== 'Bob' ? 'Hello' : 'My name is')
buf.push("<h1>" + (jade.escape((jade_interp = greeting) == null ? '' : jade_interp)) + " " + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</h1><h2>" + (jade.escape(null == (jade_interp = greeting + ", " + name) ? "" : jade_interp)) + "</h2>");
var list = ['one', 'two', 'three']
buf.push("<ul></ul>");
for (var idx in list){
buf.push("<li>" + (jade.escape(null == (jade_interp = list[idx]) ? "" : jade_interp)) + "</li>");
console.log(list[idx])
}
var magic = "Joe"
if ( magic == "Cheng")
{
buf.push("<h1>Hello Master Cheng</h1>");
}
else if ( magic == "Joe")
{
buf.push("<h2>Hello GrandMaster Joe</h2>");
}
else
{
buf.push("<h3>Hello " + (jade.escape((jade_interp = magic) == null ? '' : jade_interp)) + "...</h3>");
}
var action = "Exit"
if (!( action == "Continue"))
{
buf.push("<h4>Continue</h4>");
}
else
{
buf.push("<h5>Exit</h5>");
}
buf.push("\n");
var girl = "Joanna"
switch (girl){
case "Joanna":
buf.push("<p6>She is hot</p6>");
  break;
case "Sara":
buf.push("<p6>She is crazy</p6>");
  break;
default:
buf.push("<p6>She is a man</p6>");
  break;
}
buf.push("<ul>");
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul><select>");
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var item = $$obj[i];

buf.push("<option" + (jade.attr("value", i, true, true)) + ">Item " + (jade.escape((jade_interp = item) == null ? '' : jade_interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var item = $$obj[i];

buf.push("<option" + (jade.attr("value", i, true, true)) + ">Item " + (jade.escape((jade_interp = item) == null ? '' : jade_interp)) + "</option>");
    }

  }
}).call(this);

buf.push("</select><p>  While looping</p><ul></ul>");
var i = 0
while (i < list.length)
{
buf.push("<li>" + (jade.escape(null == (jade_interp = list[i]) ? "" : jade_interp)) + "</li>");
i++
}
buf.push("");
jade_mixins["person"] = function(name, hit){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<li>" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + " hit:  " + (jade.escape((jade_interp = hit) == null ? '' : jade_interp)) + " results</li>");
};
buf.push("<ul id=\"persons\">");
jade_mixins["person"]("Cheng", 1);
jade_mixins["person"]("Aaron", 2);
buf.push("</ul>");
jade_mixins["copyleft"] = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("(&#596;)");
};
buf.push("<p>");
jade_mixins["copyleft"]();
buf.push(" - PoPuliPolls</p>");
jade_mixins["input"] = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<li" + (jade.attr("id", name.replace(/\s/g, '-'), true, true)) + "><label>" + (jade.escape(null == (jade_interp = name + ':') ? "" : jade_interp)) + "</label>");
block && block();
buf.push("</li>");
};
buf.push("<form><ul>");
jade_mixins["input"].call({
block: function(){
buf.push("<input type=\"text\">");
}
}, 'favorite color');
jade_mixins["input"].call({
block: function(){
buf.push("<textarea>type your comment here.</textarea>");
}
}, 'comments');
buf.push("</ul></form>");
jade_mixins["list"] = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<ul>");
var args = Array.prototype.slice.call(arguments);
buf.push("<!-- its not an real array maybe we cannot iterate through it-->");
// iterate args
;(function(){
  var $$obj = args;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = item) ? "" : jade_interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul>");
};
jade_mixins["list"]('one','two','three');
buf.push("</body></html>");}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"String" in locals_for_with?locals_for_with.String:typeof String!=="undefined"?String:undefined,"args" in locals_for_with?locals_for_with.args:typeof args!=="undefined"?args:undefined,"console" in locals_for_with?locals_for_with.console:typeof console!=="undefined"?console:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}