var date = new Date();
var greeting;

document.getElementById('a').style.display = 'none';

if (date.getMonth() === 11)  {

greeting = document.getElementById('a').style.display = 'block';

}


else if (date.getMonth() === 0  && date.getDate() < 7) {

greeting = document.getElementById('a').style.display = 'block'; 

    
}

document.image = greeting;