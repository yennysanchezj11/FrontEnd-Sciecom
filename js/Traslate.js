var words;
var word=document.getElementById('textOriginLanguage');
var originalLanguaje=document.getElementById('OriginalLanguage');
var traslateLanguaje=document.getElementById('TraslateLanguage');
var exitWord;
loadWords();




function loadWords(){
    fetch('../resource/words.json')
    .then(response=>response.json())
    .then(response => words=response)
    .catch(function(error) {
        console.log('Hubo un problema con la lectura de archivos:' + error.message);
    });
}

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
            try {
                exitWord = words.find(x => x.spanish == word.value.trim());
                document.getElementById('textTraslateLanguage').value=exitWord.english;
            } catch (error) {
                alert("Error: Verifique la palabra ingresada")
            }
            
            break;
        default:
            break;
    }

}

function translateOfEnglish(){
    switch (traslateLanguaje.value) {
        case "español":
            try {
                exitWord = words.find(x=>x.english==word.value.trim())
                document.getElementById('textTraslateLanguage').value=exitWord.spanish;
            } catch (error) {
                alert("Error: Verifique la palabra ingresada")
            }
            break;
        default:
            break;
    }
}


function originalChangeImage(){
cleanTraductor()
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
cleanTraductor()
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


function cleanTraductor(){
    document.getElementById('textOriginLanguage').value=" ";
    document.getElementById('textTraslateLanguage').value=" ";
}