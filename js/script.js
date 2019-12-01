//Configuraciones y llamadas a los ditintos modos del editor, que proporcionan soporte para cada uno de los lenguajes admitidos
//Hemos decidido dar soporte a los lenguajes Python, Javascript, Ruby, Java, Css y Swift
window.eh = ace.edit("editor_python");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/python");

window.ec = ace.edit("editor_js");
ec.setTheme("ace/theme/cobalt");
ec.session.setMode("ace/mode/javascript");

window.eh = ace.edit("editor_ruby");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/ruby");

window.eh = ace.edit("editor_java");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/java");

window.eh = ace.edit("editor_css");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/css");

window.eh = ace.edit("editor_swift");
eh.setTheme("ace/theme/cobalt");
eh.session.setMode("ace/mode/swift");