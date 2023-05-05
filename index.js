/*
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/
const KEY_A = 'ai'
const KEY_E = 'enter'
const KEY_I = 'imes'
const KEY_O = 'ober'
const KEY_U = 'ufat'

var txt;

function encrypt(string){
    return string.replaceAll('a', KEY_A.toUpperCase()).replaceAll('e', KEY_E.toUpperCase()).replaceAll('i', KEY_I.toUpperCase()).replaceAll('o', KEY_O.toUpperCase()).replaceAll('u', KEY_U.toUpperCase()).toLowerCase()
}
function decrypt(string){
    return string.replaceAll(KEY_A, 'A').replaceAll(KEY_E, 'E').replaceAll(KEY_I, 'I').replaceAll(KEY_O, 'O').replaceAll(KEY_U, 'U').toLowerCase()
}
function resModel(res){
    if (res != "") {
        return `
        <div class="found">
                <textarea readonly>${res}</textarea> 
                <input type="button" value="Copiar" id="copy" class="btn" onclick="copy()">
            </div>
        `
    } else {
        return `
        <div class="searching">
            <img src="images/res-image.png" alt="Texto não encontrada">
            <h3>Nenhuma mensagem encontrada</h3>
            <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div> 
        `
    }
}
document.getElementById('encrypt').addEventListener('click', ()=> {
    txt = document.getElementById('text').value.toLowerCase()
    txt = encrypt(txt)
    document.querySelector(".res").innerHTML = resModel(txt)
})
document.getElementById('decrypt').addEventListener('click', ()=> {
    txt = document.getElementById('text').value.toLowerCase()
    txt = decrypt(txt)
    document.querySelector(".res").innerHTML = resModel(txt)
})
function copy() {
    navigator.clipboard.writeText(txt)
}