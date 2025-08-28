/*
 Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

const str1 = "http://google.com";
const str2 = "http://google.co.jp";
const str3 = "www.xakep.ru";
const str4 = "https://youtube.com";
const str5 = "d3qwu4d9u4917tx.info/error"; //--> d3qwu4d9u4917tx
const str6 = "https://www.ubkuead7acxgdvhzn4snnhmg3.de/error";

function domainName(url){

    /* ---FUNCIONA CON LOS EJEMPLOS DADOS (hasta el str5)EN MI TERMINAL ------

    let end = "----------final del ejemplo---------";
    let domain = url.split(".")
    if (/\/\//.test(domain[0])) {  // condicional: Si tiene  "//" en el string
        let result = domain[0].split("//");
        console.log(result[1]);
    } else if(domain[0].includes("www")){
        console.log(domain[1]);
    } else {
        console.log(domain[0])
    }

    return end;

    */

    let domain = url.split(".")
    if(/\/\//.test(domain[0])){
        let result =domain[0].split("//")
        if(result[1] !== "www"){
            return result[1];
        }else{
            return domain[1];
        }
        
    } else if(domain[0].includes("www")){
        return domain[1];
    }else{
        return domain[0]
    }

    /*
     ---------- Sacado de Code Warss ---------
        Con la funcion replace puede reemplazar ciertos strings dados por
            lo que se indique, en este como el valor dado es  ''´, entonces es reemplazdo con nada.

     url = url.replace("https://", '');
     url = url.replace("http://", '');
     url = url.replace("www.", '');
     return url.split('.')[0];

    */
}
    



console.log(domainName(str1));
console.log(domainName(str2));
console.log(domainName(str3));
console.log(domainName(str4));
console.log(domainName(str5));
console.log(domainName(str6));