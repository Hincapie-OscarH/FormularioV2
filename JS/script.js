function verifySpaces(){
    const name = document.getElementById('name').value
    const lastName = document.getElementById('lastName').value
    const numCard = document.getElementById('numCard').value
    const endDate = document.getElementById('endDate').value
    const cvvCode = document.getElementById('cvvCode').value

    const array = [name, lastName, numCard, endDate, cvvCode]

    let banderita = true

    //console.log(array)
    //console.log(array.length)

    for(let contador = 0; contador <= array.length; contador++){
        if (array[contador] === ""){
        console.log(contador)
        console.log(array[contador])   
        banderita = false     
        }
    }

    if (banderita === true){
        swal({
            title: "Transacción exitosa",
            text: "Datos correctos",
            icon: "success",
            button: "Aceptar",
          });
    } else {
        swal({
            title: "Transacción fallida",
            text: "Digite los datos correctamente",
            icon: "error",
            button: "Aceptar",
          });
        }
}