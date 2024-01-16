var userName = prompt("Enter your name", "Name");

var userGender = prompt("Enter your Gender", "Gender");

var userAge = prompt("Enter your Age", "Age");

if(userAge <= 0)
{
    alert("Please enter a proper Age");
}

var confirm = confirm("Do you want ot skip welcomig message?");

if(!confirm)
{
    if(userGender == "female")
    {
        alert("Hello Ms "+userName);

    }
    else if(userGender == "male")
    {
        alert("Hello Mr "+userName);

    }
    else{

        alert("Hello "+userName);

    }
}




