var displayArea = document.getElementById("display");
var individual = document.getElementById("individual");
var totalTip = document.getElementById("total-tip");

displayArea.style.display = "none";

function CalculateTip(){
    var numPeople = document.getElementById("peopleInput").value;
    var billAmount = document.getElementById("billInput").value;
    var service = document.getElementById("service").value;
    var tipAmount;
    var each;
    

    if(billAmount === "" || document.getElementById("service").selectedIndex == "0" || numPeople === "")
    {
        alert("Please fill all required fields!!");
    }

    else{ 
        tipAmount = (service * billAmount).toFixed(2);
        each = (tipAmount / numPeople).toFixed(2);
        displayArea.style.display = "block";
        totalTip.innerText = tipAmount;
        if(numPeople === "0"){
            individual.innerText = "Sorry!!!!,You can split";
        }
        else{
        individual.textContent = each + " $ / each";
        }
    }

    

}




     

