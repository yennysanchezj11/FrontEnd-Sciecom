
var words=[{
    spanish:"hola",
    english:"hello",
    },
    {
    spanish:"saber",
    english:"know",
    },
    {
    spanish:"muchos",
    english:"many",
    },
    {
    spanish:"gustar",
    english:"like",
    },
    {
    spanish:"cosa",
    english:"thing",
    },
    {
    spanish:"numero",
    english:"number",
    },
    {
    spanish:"gente",
    english:"people",
    },
    {
    spanish:"despues",
    english:"after",
    }
]

var word=document.getElementById('textOriginLanguage');
var originalLanguaje=document.getElementById('OriginLanguage');
var traslateLanguaje=document.getElementById('TraslateLanguage');
var exitWord;



function findWord(){
    switch (originalLanguaje.value) {
        case "español":
            translateOfSpanish();
            break;
        case "ingles":
            translateOfEnglish();
            break;
    
        default:
            break;
    }
}

function translateOfSpanish(){
    switch (traslateLanguaje.value) {
        case "ingles":
            exitWord = words.find(x => x.spanish == word.value);
            console.log("hola");
            console.log(exitWord.english);
            document.getElementById('textTraslateLanguage').value=exitWord.english;
            break;
        default:
            break;
    }

}

function translateOfEnglish(){
    switch (traslateLanguaje.value) {
        case "español":
            exitWord = words.find(x => x.english == word.value);
            console.log("hola");
            console.log(exitWord.spanish);
            document.getElementById('textTraslateLanguage').value=exitWord.spanish;
            break;
        default:
            break;
    }
}


function originalChangeImage(){
    console.log("entro a imagen original");
   switch (originalLanguaje.value) {
       case "español":
           document.getElementById("OriginalImage").src="../resource/Español.jpeg";
           break;
        case "ingles":
            document.getElementById("OriginalImage").src="../resource/Ingles.jpeg";
            break;
       default:
           break;
   }
}

function traslateChangeImage(){
       console.log("entro a imagen traducir");
    switch (traslateLanguaje.value) {
        case "español":
            document.getElementById("TraslateImage").src="../resource/Español.jpeg";
            break;
         case "ingles":
             document.getElementById("OriginalImage").src="../resource/Ingles.jpeg";
             break;
        default:
            break;
    }
}

