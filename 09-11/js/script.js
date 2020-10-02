const calcular = function () {
    let nome = document.getElementById('nome').value
    let valor = document.getElementById('valorhr').value
    let quantidade = document.getElementById('horastrabalhadas').value
    let salariobruto = 0


    if (valor.length == 0 || quantidade.length == 0 || nome.length == 0) {
        $('#alert-erro').slideDown(400).delay(2000).slideUp(400);

    } else {
        salariobruto = parseFloat(valor) * parseFloat(quantidade)

        document.getElementById('salariobruto').value = salariobruto
        //alert('Cálculo realizado com sucesso!')
        $('#alert-sucesso').slideDown(400).delay(2000).slideUp(400);


    }
}
