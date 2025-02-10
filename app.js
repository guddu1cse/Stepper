let step = 0;
const status = [
    "add contact details for further communications." , 
    "add shiping address for succeessful delivery",
    "complete payment for complete the order",
    "Ready to get delivered!",
    "Order delivered successfully!🎉"
];

function next(){
    step++;
    if(step>4) step=4;
    render(step);
}

function prev(){
    step--;
    if(step<0)step=0;
    initial();
    render(step);
}

function btnRender(stage){
    if(stage == 0) document.getElementById("prev").disabled = true;
    else document.getElementById("prev").disabled = false;
    if(stage == 4) {
        document.getElementById("next").disabled = true;
        document.getElementById("next").innerText = "Finish";
    }
    else {
        document.getElementById("next").disabled = false;
        document.getElementById("next").innerText = "Next";
    }
}

function initial(){
    for(let i=0; i<4; i++){
        document.getElementById(`point${i+1}`).innerText = `${i+1}`;
        document.getElementById(`point${i+1}`).style.background = `grey`;

        if(i+1<=3){
            document.getElementById(`line${i+1}`).style.background = `gray`;
        }
    }
    document.getElementById("point1").style.background = `blue`;
    document.getElementById("status").innerHTML = `<p>${status[0]}<p>`;
    btnRender(0);
}

function render(stage){
    for(let i=0 ; i<stage ; i++){
        const point = document.getElementById(`point${i+1}`);
        point.innerText = "";
        point.style.background = `url("./ok.svg") no-repeat center/cover`;

        if(i<=2){
            const line = document.getElementById(`line${i+1}`);
            line.style.background = `green`;
        }

        if(i<3)document.getElementById(`point${i+2}`).style.backgroundColor = `blue`;
    }
    //status
    document.getElementById("status").innerHTML = `<p>${status[stage]}<p>`;
    btnRender(stage);
}

initial();