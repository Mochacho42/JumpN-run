let tID;
let pika = [pika1, pika2, pika3, pika4, pika5];
let frame = document.getElementById('image');

for (let i = 1; i<6; i++){
    'pika' + i = new Image;
    pika[i].src = 'images/pika'+ i +'.gif';
}

for (i = 1; i < 6; i++){
    tID = setInterval( () => { 
        frame.appendChild(pika[i]);
    }
}, 100);
