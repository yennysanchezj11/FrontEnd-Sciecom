
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
var originalLanguaje=document.getElementById('OriginalLanguage');
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
            document.getElementById('textTraslateLanguage').value=exitWord.spanish;
            break;
        default:
            break;
    }
}


function originalChangeImage(){
   switch (originalLanguaje.value) {
       case "español":
           document.getElementById("imageOriginalLanguaje").src="../resource/Español.jpeg";
           break;
        case "ingles":
            document.getElementById("imageOriginalLanguaje").src="../resource/Ingles.jpeg";
            break;
       default:
           break;
   }
}

function traslateChangeImage(){
    switch (traslateLanguaje.value) {
        case "español":
            document.getElementById("imageTraslateLanguaje").src="../resource/Español.jpeg";
            break;
         case "ingles":
             document.getElementById("imageTraslateLanguaje").src="../resource/Ingles.jpeg";
             break;
        default:
            break;
    }
}

