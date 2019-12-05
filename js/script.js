var vacioPython = `<div id="codigo"><div id="editor_python">
</div></div>`;
var helloPython = `<div id="codigo"><div id="editor_python">def: hello(name):
print("Hello! Nice to meet you " + name)
return name;
</div></div>`; 

var constructorPython = `<div id="codigo"><div id="editor_python">class Mascota():
nombre = ""
edad = 0

def __init__(self, nombre, edad):
    self.nombre = nombre
    self.edad = edad
    # Aquí pueden ir más cosas que se hacen en un constructor

def saludar(self):
    print("¡Hola! Me llamo {} y mi edad es {}".format(
        self.nombre, self.edad))


mascota = Mascota("Maggie", 3)
mascota.saludar()
otra_mascota = Mascota("Snowball", 1)
otra_mascota.saludar()
</div></div>`;

var vacioJS = `<div id="codigo"><div id="editor_js">
</div></div>`;

var helloJS = `<div id="codigo"><div id="editor_js">alert( 'Hello, world!' );</div></div>`;

var constructorJS = `<div id="codigo"><div id="editor_js">class Square extends Polygon {
    constructor(length) {
      // Aquí, llama al constructor de la clase padre con sus longitudes
      // contemplando la anchura y la altura del Polígono
      super(length, length);
      // Nota: En las clases derivadas, super() se debe llamar primero
      // Se puede utilizar "this". Dejando esto causará un error de 
      //referencia.
      this.name = 'Square';

    }
  
    get area() {
      return this.height * this.width;
    }
  
    set area(value) {
      this.area = value;
    } 
  }
  </div></div>`;

  var vacioRuby = `<div id="codigo"><div id="editor_ruby">
  </div></div>`;

  var helloRuby = `<div id="codigo"><div id="editor_ruby">=begin
  This program will
  print "Hello, world!".
  =end
       
  puts 'Hello, world!'    
  </div></div>`;
  
  var constructorRuby = `<div id="codigo"><div id="editor_ruby"># class name 
  class Geeks 
        
      # constructor 
      def initialize 
            
          # instance variable intialzation 
          @inst_1 = "GeeksforGeeks"
          @inst_2 = "Sudo Placement"
      end
        
      # display method 
      def display 
          puts "Value of First instance variable is: #{@inst_1}"
          puts "Value of Second instance variable is: #{@inst_2}"
      end
  end
    
  # creating object 
  obj1 = Geeks.new() 
    
  # calling display method 
  obj1.display()
  </div></div> `;

var vacioJava = `<div id="codigo"><div id="editor_java">
  </div></div>`;

var helloJava = `
   <div id="codigo">
              
   <div id="editor_java">
      /* Este es un programa simple en Java...
       NombreArchivo: "HelloWorld.java". */
       
       class HelloWorld
       {
           // Tu programa comienza con una llamada a main().
           // Imprime "Hola Mundo" a la ventana de la terminal.
           public static void main(String args[])
           {
               System.out.println("Hola Mundo");
           }
       } 
   </div>
</div>`;

var constructorJava = `<div id="codigo">
   <div id="editor_java">
   public class Employee {

    int empId;  
    String empName;  
         
    //parameterized constructor with two parameters
    Employee(int id, String name){  
        this.empId = id;  
        this.empName = name;  
    }  
    void info(){
         System.out.println("Id: "+empId+" Name: "+empName);
    }  
        
    public static void main(String args[]){  
     Employee obj1 = new Employee(10245,"Chaitanya");  
     Employee obj2 = new Employee(92232,"Negan");  
     obj1.info();  
     obj2.info();  
    }  
 }
   </div>
</div>`;

var vacioCss = `<div id="codigo"><div id="editor_css">
</div></div>`;

var css = `<div id="codigo">
    <div id="editor_css">
    html {
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
          
    article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
        display: block;
    }
          
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;   
    } 
    </div>
    </div>`;

var vacioSwift = `<div id="codigo"><div id="editor_swift">
    </div></div>`;

var swift = `<div id="codigo"><div id="editor_swift">
    // Hello, World! Program
    import Swift
    print("Hello, World!")
    </div></div>`;


var languageAux = ''; //Variable para almacenar el lenguaje del repositorio de codigo a editar
var count = 3; //Contador de repositorios de codigo
var isParent = ''; //Variable para almacenar que repositorio de codigo vamos a editar
var idCurrent = ''; //Variable para almacenar qué boton de añadir hemos pulsado

// // $("#sidebarToggle").on('click', function(e){
// $(document).ready(function(){
//     var slide = function (){
//     //Alto del elemento
//     var ancho=$('#navigation').width();
//     $('#editor_java').css({'left': ancho});
//     };
//     $('#editor_java').on('change keyup paste', slide);
//     setTimeout(slide, 500);
// })

function openForm(value, language, id) { //Abre el formulario
    document.getElementById("addLanguageForm").reset();
    document.getElementById("addCodeForm").reset();
    var elem = document.getElementById("addLanguage");
    elem.style.display = "none";
    elem = document.getElementById("addCode");
    elem.style.display = "none";

    
    var elem = document.getElementById(value);
    elem.style.display = "block";
    languageAux = language;
    idCurrent = 'addCode'+id+'';
    idParent = 'code'+id+'';
}

function cancel(idForm, idDiv) {
    document.getElementById(idForm).reset();
    var elem = document.getElementById(idDiv);
    elem.style.display = "none";
}

function createCode(){
    var nombre = document.addCodeForm.nombre.value;
    var current = document.getElementById(idCurrent);
    
    var newA = document.createElement('a');
    newA.setAttribute('class', 'dropdown-item');
    if(languageAux=='java'){
        newA.setAttribute('onclick', `openCode('vacio', 'java');`);
    }else if(languageAux=='python'){
        newA.setAttribute('onclick', `openCode('vacio', 'python');`);
    }else if(languageAux=='js'){
        newA.setAttribute('onclick', `openCode('vacio', 'js');`);
    }else if(languageAux='css'){
        newA.setAttribute('onclick', `openCode('vacio', 'css');`);
    }else if(languageAux='ruby'){
        newA.setAttribute('onclick', `openCode('vacio', 'ruby');`);
    }else{
        newA.setAttribute('onclick', `openCode('vacio', 'swift');`);
    }
    newA.innerHTML = nombre;
    document.getElementById(idParent).insertBefore(newA, current);  
    document.getElementById("addCodeForm").reset();
    var elem = document.getElementById("addCode");
    elem.style.display = "none";  
}

function createElem() {
    var lenguaje = document.addLanguageForm.title.value;
    var nombre = document.addLanguageForm.nombre.value;
    var newLi = document.createElement('li');
    count=count+1;
    newLi.setAttribute('class', 'nav-item dropdown');
    
    if (lenguaje.toUpperCase() == 'PYTHON') {
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <span>`+nombre+`</span>
    </a>
    <div class="dropdown-menu" id='code`+count+`' aria-labelledby="pagesDropdown">
        <a class="dropdown-item" onclick="openCode('hello', 'python');">Hello World</a>
        <a class="dropdown-item" onclick="openCode('const', 'python');">Constructor</a>
        <a class="dropdown-item" id="addCode`+count+`" onclick="openForm('addCode', 'python', '`+count+`');">+ AÑADIR</a>
    </div>`;
    } else if (lenguaje.toUpperCase() == 'JAVA') {
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <span>`+nombre+`</span>
    </a>
    <div class="dropdown-menu" id='code`+count+`' aria-labelledby="pagesDropdown">
        <a class="dropdown-item" onclick="openCode('hello', 'java');">Hello World</a>
        <a class="dropdown-item" onclick="openCode('const', 'java');">Constructor</a>
        <a class="dropdown-item" id="addCode`+count+`" onclick="openForm('addCode', 'java', '`+count+`');">+ AÑADIR</a>
    </div>`;
    } else if (lenguaje.toUpperCase() == 'JAVASCRIPT' || lenguaje.toUpperCase() == 'JAVA SCRIPT') {
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <span>`+nombre+`</span>
    </a>
    <div class="dropdown-menu" id='code`+count+`' aria-labelledby="pagesDropdown">
        <a class="dropdown-item" onclick="openCode('hello', 'js');">Hello World</a>
        <a class="dropdown-item" onclick="openCode('const', 'js');">Constructor</a>
        <a class="dropdown-item" id="addCode`+count+`" onclick="openForm('addCode', 'js', '`+count+`');">+ AÑADIR</a>
    </div>`;

    } else if (lenguaje.toUpperCase() == 'CSS') {
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <span>`+nombre+`</span>
    </a>
    <div class="dropdown-menu" id='code`+count+`' aria-labelledby="pagesDropdown">
        <a class="dropdown-item" onclick="openCode('hello', 'css');">Hello World</a>
        <a class="dropdown-item" onclick="openCode('const', 'css');">Constructor</a>
        <a class="dropdown-item" id="addCode`+count+`" onclick="openForm('addCode', 'css', '`+count+`');">+ AÑADIR</a>
    </div>`;
    } else if (lenguaje.toUpperCase() == 'RUBY') {
        newLi.innerHTML =`<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <span>`+nombre+`</span>
    </a>
    <div class="dropdown-menu" id='code`+count+`' aria-labelledby="pagesDropdown">
        <a class="dropdown-item" onclick="openCode('hello', 'ruby');">Hello World</a>
        <a class="dropdown-item" onclick="openCode('const', 'ruby');">Constructor</a>
        <a class="dropdown-item" id="addCode`+count+`" onclick="openForm('addCode', 'ruby', '`+count+`');">+ AÑADIR</a>
    </div>`;
    } else if (lenguaje.toUpperCase() == 'SWIFT') {
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <span>`+nombre+`</span>
    </a>
    <div class="dropdown-menu" id='code`+count+`' aria-labelledby="pagesDropdown">
        <a class="dropdown-item" onclick="openCode('hello', 'swift');">Hello World</a>
        <a class="dropdown-item" onclick="openCode('const', 'swift');">Constructor</a>
        <a class="dropdown-item" id="addCode`+count+`" onclick="openForm('addCode', 'swift', '`+count+`');">+ AÑADIR</a>
    </div>`;
    }else {
        newLi.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        <span>`+nombre+`</span>
    </a>
    <div class="dropdown-menu" id='code`+count+`' aria-labelledby="pagesDropdown">
        <a class="dropdown-item" onclick="openCode('hello', 'java');">Hello World</a>
        <a class="dropdown-item" onclick="openCode('const', 'java');">Constructor</a>
        <a class="dropdown-item" id="addCode`+count+`" onclick="openForm('addCode', 'java', '`+count+`');">+ AÑADIR</a>
    </div>`;
    }
    var current = document.getElementById('add');
        document.getElementById('navigation').insertBefore(newLi, current);
        document.getElementById("addLanguageForm").reset();
        var elem = document.getElementById("addLanguage");
        elem.style.display = "none";
}

//Funcion para mostrar el codigo
function openCode(codigo, lenguaje){
    var elem = document.getElementById('editor');
    var hijo = document.getElementById('codigo');
    hijo.parentNode.removeChild(hijo);
    elem.style.display="flex";

    if(lenguaje =='java'){
        if(codigo=='hello'){
            elem.innerHTML=helloJava;
            
        }else if(codigo=='const'){
            elem.innerHTML=constructorJava;
        }else{
            elem.innerHTML=vacioJava;
        }
        window.eh = ace.edit("editor_java");
        eh.setTheme("ace/theme/cobalt");
        eh.session.setMode("ace/mode/java");  
    }
    else if(lenguaje =='python'){
        if(codigo=='hello'){
            elem.innerHTML=helloPython;
            
        }else if(codigo=='const'){
            elem.innerHTML=constructorPython;
        }else{
            elem.innerHTML=vacioPython;
        }
        window.eh = ace.edit("editor_python");
        eh.setTheme("ace/theme/cobalt");
        eh.session.setMode("ace/mode/python");
    }else if(lenguaje == 'css'){
        if(codigo=='example'){
            elem.innerHTML=css;
        }else{
            elem.innerHTML=vacioCss;
        }
        window.eh = ace.edit("editor_css");
        eh.setTheme("ace/theme/cobalt");
        eh.session.setMode("ace/mode/css");
    }else if(lenguaje =='ruby'){
        if(codigo=='hello'){
            elem.innerHTML=helloRuby;
            
        } else if(codigo=='const'){
            elem.innerHTML=constructorRuby;
        }else{
            elem.innerHTML=vacioRuby;
        }
        window.eh = ace.edit("editor_ruby");
        eh.setTheme("ace/theme/cobalt");
        eh.session.setMode("ace/mode/ruby");
    }else if(lenguaje =='js'){
        if(codigo=='hello'){
            elem.innerHTML=helloJS;
            
        } else if(codigo=='const'){
            elem.innerHTML=constructorJS;
        }else{
            elem.innerHTML=vacioJS; 
        }
        window.ec = ace.edit("editor_js");
        ec.setTheme("ace/theme/cobalt");
        ec.session.setMode("ace/mode/javascript");
    }else if(lenguaje =='swift'){
        if(codigo='example'){
        elem.innerHTML=swift;
        }else{
            elem.innerHTML=vacioSwift;
        }
        window.eh = ace.edit("editor_swift");
        eh.setTheme("ace/theme/cobalt");
        eh.session.setMode("ace/mode/swift");
    }else{

    }
}


