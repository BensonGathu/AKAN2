var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function submitted(){
    event.preventDefault()
    var date = new Date(form.DOB.value)
    var day = date.getDay()
    var akName
    var gender = form.gender.value
    if (gender == "male"){
        akName = maleNames[day]
    }else if (gender == "female"){
        akName = femaleNames[day]
    }
    document.getElementById("results").innerHTML = "<b> Your Akan name is "+ akName +"</b>"
}