function convertPDF(){

let file=document.getElementById("pdfUpload").files[0];

if(!file){
alert("Upload PDF first");
return;
}

document.getElementById("result").innerHTML=
"Processing... (Backend needed for real conversion)";
}

function convertImage(){

let file=document.getElementById("imageUpload").files[0];

if(!file){
alert("Upload image first");
return;
}

let reader=new FileReader();

reader.onload=function(e){

document.getElementById("preview").innerHTML=
`<img src="${e.target.result}" width="200">`;

};

reader.readAsDataURL(file);

}

// word to pdf
function convertWord(){

let fileInput = document.getElementById("wordFile");
let file = fileInput.files[0];

if(!file){
alert("Please upload a Word file");
return;
}

let reader = new FileReader();

reader.onload = function(e){

let content = e.target.result;

let preview = document.getElementById("preview");

preview.innerHTML = `
<div id="docContent" style="background:white;color:black;padding:20px;">
<h2>Word Document Preview</h2>
<p>${content}</p>
</div>
<button onclick="downloadPDF()">Download PDF</button>
`;

};

reader.readAsText(file);

}

function downloadPDF(){

let element = document.getElementById("docContent");

html2pdf()
.from(element)
.save("converted.pdf");

}