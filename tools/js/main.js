var bIconSizeForm=document.getElementById('bIconSizeForm');
var bIconSizesSelected=[];

const str_process = "In conversion...";
const str_readingFile = "Reading file...";
const str_pleaseLoadFile = "No files have been selected, please select the file you want to convert first.";
const str_converSuccess = "Conversion is complete!";
const str_convertFailed = "Conversion failed! Error encountered.";
const str_browserNotSupport = "Your browser does not support the latest HTML5 technology, please use the new version of the browser.";
const str_noiconsize = "Conversion failed! Please select the icon size!";

var inputFile, options = null, outputfile = "";
var outputArea=document.getElementById("outputArea");
var imagelist=document.getElementById("imagelist");

var bfileBtn=document.getElementById("bfileBtn");
var bfile=document.getElementById("bfile");

bfileBtn.addEventListener('click', ()=> {
    bfile.click();
}, false);

var curFileInput=document.getElementById("curFileInput");
var convertBtn=document.getElementById('convertBtn');


function outputInfo(e) {
    outputArea.innerHTML = e;
}
function _Hex(e, t) {
    for (var n = []; t > 0; t--) {
        n.push(String.fromCharCode(255 & e)),
        e >>= 8;
    }
    return n.join("");
}
function _collapseData(e, t) {
    for (var n, o, a, i = e.length, r = i ? e[0].length : 0, u = "", s = []; t > 0; t--)
        u += "\0";
    for (n = 0; n < i; n++) {
        for (o = 0; o < r; o++)
            a = e[n][o],
            s.push(String.fromCharCode(a[2]) + String.fromCharCode(a[1]) + String.fromCharCode(a[0]) + (void 0 === a[3] ? "ÿ" : String.fromCharCode(a[3])));
        s.push(u)
    }
    return s.join("");
}
function getRowsFromImg(e) {
    var t = e.width, 
    n = e.height, 
    o = e.getContext("2d").getImageData(0, 0, t, n), 
    a = [];
    for (h = n - 1; h >= 0; h--) {
        var i = [];
        for (w = 0; w < t; w++) {
            var r = [], u = 4 * (h * t + w);
            r.push(o.data[u + 0]),
            r.push(o.data[u + 1]),
            r.push(o.data[u + 2]),
            r.push(o.data[u + 3]),
            i.push(r)
        }
        a.push(i)
    }
    return a;
}
function imagesToIco(e) {
    var t, 
    n = [];
    for (x = 0; x < e.length; x++) {
        (p = e[x]).width,
        p.height,
        p.getContext("2d");
        var o, a, i, r = getRowsFromImg(p), 
        u = r.length, 
        s = u ? r[0].length : 0, 
        d = 3 * s % 4, 
        l = (4 * s + d) * u, 
        f = 40 + l + 64, 
        c = new Array(s * u * 2 / 8 + 1).join("\0");

        o = _Hex(2 * u, 4),
        a = _Hex(s, 4),
        l = _Hex(l, 4),
        f = _Hex(f, 4),
        i = "(\0\0\0" + a + o + "\0 \0\0\0\0\0" + l + "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0" + _collapseData(r, d) + c,
        n.push(i)
    }
    for (
        imgsNum = _Hex(e.length, 2),
        t = "\0\0\0" + imgsNum,
        offset = t.length + 16 * e.length,
        x = 0; 
        x < e.length; 
        x++
    ) {
        var p;
        (p = e[x]).width, 
        p.height;
        t = t + _Hex(p.width, 1) + _Hex(p.height, 1) + "\0\0\0 \0" + _Hex(n[x].length, 4) + _Hex(offset, 4),
        offset += n[x].length
    }
    for (x = 0; x < e.length; x++) {
        t += n[x];
    }
    return "data:image/x-icon;base64," + btoa(t); // data:image/vnd.microsoft.icon;
}
function convertDo(e, t, n) {
    convertBtn.addEventListener("click", () => {
        var selectedBicoSizes=bIconSizeForm.elements.bIcosize;
        selectedBicoSizes.forEach(function(item,index,arr) {
            if(arr[index].checked) {
                var bIcoSizeVal=arr[index].value;
                bIcoSizeVal=parseInt(bIcoSizeVal);
                bIconSizesSelected.push(bIcoSizeVal);
            }
        });
        console.log('.ico sizes are: '+ bIconSizesSelected);

        t = t.toLowerCase(),
        outputfile = t.replace(".jpg", "").replace(".png", "").replace(".gif", "") + ".ico",
        options = n,
        o=bIconSizesSelected;


        outputInfo('🔄 ' + str_process);

        if (0 == o.length){
            return void outputInfo(str_noiconsize);
        }
        var r = [];
        const u = new Image();
        u.onload = function() {
            var arr1=[];
            var arr2=[];
            for (var e = 0; o[e]; ++e) {
                const t = document.createElement("canvas"), 
                n = t.getContext("2d");
                t.width = o[e],
                t.height = o[e],
                n.drawImage(u, 0, 0, u.width, u.height, 0, 0, t.width, t.height),

                r.push(t),
                arr1.push(t);

                const a = document.createElement("span");
                a.innerHTML = '<small>' + t.width + "x" + t.height + '</small>',
                arr2.push(a);
            }

            var counter=0;
            for(var iCanvas of r) {
                var t = imagesToIco([iCanvas]);
                if (t) {
                    var n = t, 
                    a = (t.length / 1024).toFixed(2).toString();
                    outputInfo('🗹&nbsp;'+str_converSuccess);

                    var outputfilename="favicon-"+iCanvas.width + "x" + iCanvas.height + ".ico";

                    imagelist.appendChild(arr1[counter]);
                    imagelist.appendChild(arr2[counter]);
                    imagelist.insertAdjacentHTML("beforeend", "&nbsp;🠞&nbsp;<a download='" + outputfilename + "' href='" + n + "'>💾 " + outputfilename + "</a> ("+a+" k)<br>");
                } else {
                    outputInfo(str_convertFailed);
                }
                counter++;
            }
        },
        u.src = e;
    }, false);
}

function readFileAsDataURL(file) {
  return new Promise((resolve,reject) => {
      let fileredr = new FileReader();
      fileredr.onload = () => resolve(fileredr.result);
      fileredr.onerror = () => reject(fileredr);
      fileredr.readAsDataURL(file);
  });
}


function bReady() {
    window.File && window.FileReader && window.FileList && window.Blob || outputInfo(str_browserNotSupport);
    
    bfile.addEventListener("change", (ev) => {
        let inputFile = ev.currentTarget.files[0];
        if(!inputFile) return;
        curFileInput.innerHTML = 'ℹ Uploaded <strong>' + inputFile.name + '</strong> successfully.';

        readFileAsDataURL(inputFile).then((b64str) => {
            if (void 0 !== inputFile) {
                outputInfo(str_readingFile),
                imagelist.innerHTML = "";

                outputInfo('📐 Please proceed to select '+ "<button class='btn btn-sm btn-outline-dark rounded-0 p-0 pl-1 pr-1' disabled type='button'><small>Convert ❯❯</small></button>" +' after <u>all required</u> icon dimensions have been specified.');

                e=b64str;
                var n=b64str.split(",");
                convertDo(e, inputFile.name, {
                    scale: n[0]
                });
            } else {
                console.log("Request failed. " + t);
                outputInfo(str_pleaseLoadFile);
            }
        });
    }, false);
}
document.addEventListener("DOMContentLoaded", function() {
    bReady();
}, !1);

function copyTextToClipboard(inputEleId) {
   let copyTextEle = document.getElementById(inputEleId);
   navigator.clipboard.writeText(copyTextEle.innerText);
}

var faviconHTMLCodeSnippet=document.getElementById('faviconHTMLCodeSnippet');
function encodeHTMLChars(rawStr) {
    return rawStr.replace(/[\u00A0-\u9999<>\&]/g, ((i) => `&#${i.charCodeAt(0)};`));
}
var htmlStrToEncode='<link rel="icon" href="favicon-16x16.ico" type="image/x-icon" sizes="16x16">';

const copyText='<small>⧉ Copy HTML</small>';
const btnClass='btn btn-sm btn-outline-dark rounded-0 copyBtn ml-2 p-0 pl-1 pr-1';

async function renderFaviconHTMLDisplay() {
    faviconHTMLCodeSnippet.insertAdjacentHTML('beforeend', '<code id="codeSnippet0" class="small">'+encodeHTMLChars(htmlStrToEncode)+'</code><button type="button" class="'+btnClass+'" value="codeSnippet0">'+copyText+'</button><br>');

    htmlStrToEncode='<link rel="icon" href="favicon-32x32.ico" type="image/x-icon" sizes="32x32">';
    await faviconHTMLCodeSnippet.insertAdjacentHTML('beforeend', '<code id="codeSnippet1" class="small">'+encodeHTMLChars(htmlStrToEncode)+'</code><button type="button" class="'+btnClass+'" value="codeSnippet1">'+copyText+'</button><br>');

    htmlStrToEncode='<link rel="icon" href="favicon-48x48.ico" type="image/x-icon" sizes="48x48">'; 
    await faviconHTMLCodeSnippet.insertAdjacentHTML('beforeend', '<code id="codeSnippet2" class="small">'+encodeHTMLChars(htmlStrToEncode)+'</code><button type="button" class="'+btnClass+'" value="codeSnippet2">'+copyText+'</button>');

    var copyBtnOutputBtnArr = document.getElementsByClassName('copyBtn');
    for(var cBtn of copyBtnOutputBtnArr) {
        cBtn.addEventListener('click', (evt) => {
           var inputEleId=evt.currentTarget.value;
           copyTextToClipboard(inputEleId);
        }, false);
    }
}
renderFaviconHTMLDisplay();


/* Copyright Year (i.e. Current Year) */
const yearDisplay=document.getElementById('yearDisplay');
yearDisplay.innerHTML=new Date().getFullYear();