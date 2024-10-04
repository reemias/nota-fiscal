document.addEventListener('DOMContentLoaded', () => {
    const historico = document.getElementById('historico');
    const adicionarClienteBtn = document.getElementById('adicionar');
    const adicionarItemBtn = document.querySelector('footer #adicionar');
    const imprimirBtn = document.getElementById('imprimir');

    function adicionarAoHistorico(texto, podeExcluir = false) {
        const div = document.createElement('div');
        div.className = 'historico-item';
        div.textContent = texto;

        if (podeExcluir) {
            const excluirBtn = document.createElement('button');
            excluirBtn.textContent = 'Excluir';
            excluirBtn.onclick = () => div.remove();
            div.appendChild(excluirBtn);
        }

        historico.appendChild(div);
    }

    adicionarClienteBtn.addEventListener('click', () => {
        const cliente = document.getElementById('cliente').value;
        const numeroCliente = document.getElementById('numero_cliente').value;
        if (cliente && numeroCliente) {
            adicionarAoHistorico(`nome do cliente : ${cliente}`);
            adicionarAoHistorico(`Número: ${numeroCliente}`);
        }
    });

    adicionarItemBtn.addEventListener('click', () => {
        const servico = document.getElementById('servico').value;
        const valor = document.getElementById('valor').value;
        const dataServico = document.getElementById('data_servico').value;
        if (servico && valor && dataServico) {
            adicionarAoHistorico(`Serviço: ${servico},___________ Valor: R$  :${valor},_______________ Data: ${dataServico}`, true);
        }
    });

    imprimirBtn.addEventListener('click', () => {
        window.print();
    });
});
