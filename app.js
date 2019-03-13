let COFFEE_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

let emailTextBox = document.getElementById("emailTextBox")
let coffeeTextBox = document.getElementById("coffeeTextBox")
let deleteemailTextBox = document.getElementById("deleteemailTextBox")

let btnFetchCoffeeOrders = document.getElementById("btnFetchCoffeeOrders")
let btnAddOrder = document.getElementById("btnAddOrder")
let btnDeleteOrder = document.getElementById("btnDeleteOrder")
let emailList = document.getElementById("coffeeorders")

let emailInput = emailTextBox.value
let coffeeInput = coffeeTextBox.value
let deleteEmailInput = deleteemailTextBox.value

btnFetchCoffeeOrders.addEventListener('click',function(){
    fetch(COFFEE_URL)
    .then(function(response) {
        return response.json();
}).then(function(myJson) {
    //loop(item)
    let orderList = Object.keys(myJson).map((email) => {
        let order = myJson[email]
        return `<li>${order.coffee}</li>
                <li>${order.emailAddress}</li>`
    })
    emailList.innerHTML = orderList.join('')
})
})


btnAddOrder.addEventListener('click',function(){
    let paramsToSend = {emailAddress: emailTextBox.value, coffee: coffeeTextBox.value}
    fetch(COFFEE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paramsToSend)
      })

})



btnDeleteOrder.addEventListener('click',function(){
    let emailVariable = deleteemailTextBox.value
    let newURL = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${emailVariable}`
    fetch(newURL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })

})