


document.querySelector(".place").addEventListener("click", function(){
    var total = 0;
    var val;
    var items = [];
    var cost = 0;
    var inp = document.querySelector(".one");
    if(inp.value === "")
    {
        total += 0;
    }
    else{
        temp= parseInt(inp.value);
        total += temp;
        var costForOne = inp.name*temp;
        cost+=costForOne;
        items.push(document.querySelector(".titleone").innerText);
    }

    var inp = document.querySelector(".two");
    if(inp.value === "")
    {
        total += 0;
    }
    else{
        temp= parseInt(inp.value);
        total += temp;
        costForOne = inp.name*temp;
        cost+=costForOne;
        items.push(document.querySelector(".titletwo").innerText);
    }
    var inp = document.querySelector(".three");
    if(inp.value === "")
    {
        total += 0;
    }
    else{
        temp= parseInt(inp.value);
        total += temp;
        costForOne = inp.name*temp;
        cost+=costForOne;
        items.push(document.querySelector(".titlethree").innerText);
    }
    var inp = document.querySelector(".four");
    if(inp.value === "")
    {
        total += 0;
    }
    else{
        temp= parseInt(inp.value);
        total += temp;
        costForOne = inp.name*temp;
        cost+=costForOne;
        items.push(document.querySelector(".titlefour").innerText);
    }
    var inp = document.querySelector(".five");
    if(inp.value === "")
    {
        total += 0;
    }
    else{
        temp= parseInt(inp.value);
        total += temp;
        costForOne = inp.name*temp;
        cost+=costForOne;
        items.push(document.querySelector(".titlefive").innerText);
    }
    var inp = document.querySelector(".six");
    if(inp.value === "")
    {
        total += 0;
    }
    else{
        temp= parseInt(inp.value);
        total += temp;
        costForOne = inp.name*temp;
        cost+=costForOne;
        items.push(document.querySelector(".titlesix").innerText);
    }
    var inp = document.querySelector(".seven");
    if(inp.value === "")
    {
        total += 0;
    }
    else{
        temp= parseInt(inp.value);
        total += temp;
        costForOne = inp.name*temp;
        cost+=costForOne;
        items.push(document.querySelector(".titleseven").innerText);
    }
    var inp = document.querySelector(".eight");
    if(inp.value === "")
    {
        total += 0;
    }
    else{
        temp= parseInt(inp.value);
        total += temp;
        costForOne = inp.name*temp;
        cost+=costForOne;
        items.push(document.querySelector(".titleeight").innerText);
    }
if(total == 0)
{
    alert("Select atleast 1 item to place an Order!!");
}
else{
    alert("The total number of items selected is: \n"+total);
    alert("The items selected are\n" +items);
    alert("The total cost of the order is: \n "+cost +"Rs");
    val = confirm("Confirm your order");
    if(val == true)
    {
        alert("Your order is placed successfully!! :) \n Thank You!!");
    }
    else{
        alert("Order unsuccessful!! :(");
    } 
} 
})

var checkOut = {
    price : cost,
    list :items,
    amount : total
};