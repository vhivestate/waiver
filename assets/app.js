function getInput() {
    var input = document.getElementsByTagName("input");
    var name = document.querySelector("input[name='name']").value;
    console.dir(name);
    console.log(input);
    window.alert('submitted');


// function getBday() {
    var bday = document.querySelector("input[name='bday']").value;
    console.dir(bday);


// function getId() {
    var id = document.querySelector("input[id='license']").id;
    var idCheck = document.querySelector("input[id='license']").checked;
    var passport = document.querySelector("input[id='passport']").id;
    var ppCheck = document.querySelector("input[id='passport']").checked;
    var idNumber = document.querySelector("input[name='idNum']").value;

    console.dir(id);
    console.dir(idCheck);
    console.dir(passport);
    console.dir(ppCheck);
    console.dir(idNumber);


// function getArtist() {
    var artist0 = document.querySelector("input[name='Garrett']").id;
    var check0 = document.querySelector("input[name='Garrett']").checked;

    var artist1 = document.querySelector("input[name='Jo']").id;
    var check1 = document.querySelector("input[name='Jo']").checked;

    console.dir(artist0);
    console.dir(check0);
    console.dir(artist1);
    console.dir(check1);

    const waiver = {
        name : name,
        birthday : bday,
        
    }

// function getCertify() {
    var box1 = document.querySelector("input[name='box1']").labels[0].innerText;
    var check1 = document.querySelector("input[name='box1']").checked;

    var box2 = document.querySelector("input[name='box2']").labels[0].innerText;
    var check2 = document.querySelector("input[name='box2']").checked;

    var box3 = document.querySelector("input[name='box3']").labels[0].innerText;
    var check3 = document.querySelector("input[name='box3']").checked;

    var box4 = document.querySelector("input[name='box4']").labels[0].innerText;
    var check4 = document.querySelector("input[name='box4']").checked;

    var box5 = document.querySelector("input[name='box5']").labels[0].innerText;
    var check5 = document.querySelector("input[name='box5']").checked;

    var box6 = document.querySelector("input[name='box6']").labels[0].innerText;
    var check6 = document.querySelector("input[name='box6']").checked;

    var box7 = document.querySelector("input[name='box7']").labels[0].innerText;
    var check7 = document.querySelector("input[name='box7']").checked;

    console.dir(box1);
    console.dir(check1);
    console.dir(box2);
    console.dir(check2);
    console.dir(box3);
    console.dir(check3);
    console.dir(box4);
    console.dir(check4);
    console.dir(box5);
    console.dir(check5);
    console.dir(box6);
    console.dir(check6);
    console.dir(box7);
    console.dir(check7);

// function getSign() {
    var sign = document.querySelector("input[name='signature']").name;
    var signature = document.querySelector("input[name='signature']").value;
    var date = document.querySelector("input[name='date']").name;
    var dateInput = document.querySelector("input[name='date']").value;

    console.dir(date);
    console.dir(dateInput)
    console.dir(sign);
            console.dir(signature)
}
