document.getElementById('enviar').addEventListener('click', function() {
    const nomeCliente = document.getElementById('nome_cliente').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const valorCobrado = document.getElementById('valor_cobrado').value;
    const dataEntrega = document.getElementById('data_entrega').value;
    const formaPagamento = document.getElementById('forma_pagamento').value;

    const notaFiscalDiv = document.getElementById('nota_fiscal');
    notaFiscalDiv.innerHTML = `
        <div class="titulo">Nota Fiscal</div>
        <p style="text-align: center;">CNPJ : 44.435.890/0001-30</p>
        <div class="linha"></div>
        <p><strong>Nome do Cliente:</strong> ${nomeCliente}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Valor Cobrado:</strong> R$ ${valorCobrado}</p>
        <p><strong>Data de Entrega:</strong> ${dataEntrega}</p>
        <p><strong>Forma de Pagamento:</strong> ${formaPagamento}</p>
        <div class="linha"></div>
        <p style="text-align: center;">Obrigado pela preferência!</p>
    `;
});

document.getElementById('imprimir').addEventListener('click', function() {
    window.print();
});
