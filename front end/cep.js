
class Cep {
    constructor(num_cep){this.num_cep=num_cep;}
    getCep(){
        var url = "https://viacep.com.br/ws/22071101/json/";
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();
        console.log(xhttp.responseText);
    }
}
