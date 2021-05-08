const fullToday = new Date();
const today = () => {
    const todayNumber = fullToday.getDay();
    if(todayNumber == 1){
        return 'Segunda-feira';
    } else if(todayNumber == 2){
        return 'Terça-feira';
    } else if(todayNumber == 3){
        return 'Quarta-feira';
    } else if(todayNumber == 4){
        return 'Quinta-feira';
    } else if(todayNumber == 5){
        return 'Sexta-feira';
    } else if(todayNumber == 6){
        return 'Sábado';
    } else if(todayNumber == 7){
        return 'Domingo';
    }
};
const time = fullToday.getHours() + "h" + fullToday.getMinutes();
const date = "Hoje é " + today() + ", e são " + time;

document.getElementById("date").innerHTML = date;

if(today() === 'Domingo'){
    document.getElementById("isStudyDay").innerHTML = "Hoje é seu dia de descanso... Volte amanhã :D";
    document.getElementById("list").innerHTML = "";
} else {
    if(today() === 'Segunda-feira'){
        if(time >= 23) {
            document.getElementById("isStudyDay").innerHTML = "Está tarde. :( Hora de dormir!";
            document.getElementById("list").innerHTML = "";
        } else {
            document.getElementById("item1").innerHTML = "CSS";
            document.getElementById("item2").innerHTML = "PHP";
            document.getElementById("item3").innerHTML = "Git";
        }
    } else if(today() === 'Terça-feira'){
        if(time >= 23) {
            document.getElementById("isStudyDay").innerHTML = "Está tarde. :( Hora de dormir!";
            document.getElementById("list").innerHTML = "";
        } else {
            document.getElementById("item1").innerHTML = "CSS";
            document.getElementById("item2").innerHTML = "PHP";
            document.getElementById("item3").innerHTML = "Git";
        }

    } else if(today() === 'Quarta-feira'){
        if(time >= 23) {
            document.getElementById("isStudyDay").innerHTML = "Está tarde. :( Hora de dormir!";
            document.getElementById("list").innerHTML = "";
        } else {
            document.getElementById("item1").innerHTML = "JavaScript";
            document.getElementById("item2").innerHTML = "HTML";
            document.getElementById("item3").innerHTML = "Java";
        }

    } else if(today() === 'Quinta-feira'){
        if(time >= 23) {
            document.getElementById("isStudyDay").innerHTML = "Está tarde. :( Hora de dormir!";
            document.getElementById("list").innerHTML = "";
        } else {
            document.getElementById("item1").innerHTML = "CSS";
            document.getElementById("item2").innerHTML = "JQuery";
            document.getElementById("item3").innerHTML = "JavaScript";
        }

    } else if(today() === 'Sexta-feira'){
        if(time >= 23) {
            document.getElementById("isStudyDay").innerHTML = "Está tarde. :( Hora de dormir!";
            document.getElementById("list").innerHTML = "";
        } else {
            document.getElementById("item1").innerHTML = "HTML";
            document.getElementById("item2").innerHTML = "Java";
            document.getElementById("item3").innerHTML = "Photoshop";
        }

    } else if(today() === 'Sábado'){
        if(time >= 23) {
            document.getElementById("isStudyDay").innerHTML = "Está tarde. :( Hora de dormir!";
            document.getElementById("list").innerHTML = "";
        } else {
            document.getElementById("item1").innerHTML = "CSS";
            document.getElementById("item2").innerHTML = "PHP";
            document.getElementById("item3").innerHTML = "Git";
        }
    }
}