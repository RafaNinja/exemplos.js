let valores = [];

const add = () => {
    const valorInput = document.getElementById('valor');
    const valor = parseInt(valorInput.value, 10);
    if (!isNaN(valor)) {
        valores.push(valor);
        atualizarLista();
        valorInput.value = '';
    } else {
        alert('Por favor, insira um número válido.');
    }
};

const atualizarLista = () => {
    const ul = document.getElementById('valores');
    ul.innerHTML = '';
    valores.forEach(valor => {
        const li = document.createElement('li');
        li.textContent = valor;
        ul.appendChild(li);
    });
};

const ordenar = () => {
    const algoritmo = document.getElementById('algoritmo').value;
    switch (algoritmo) {
        case 'bubble_sort':
            valores = bubble_sort(valores);
            break;
        case 'selection_sort':
            valores = selection_sort(valores);
            break;
        case 'quick_sort':
            valores = quick_sort(valores, 0, valores.length - 1);
            break;
        default:
            alert('Algoritmo de ordenação não reconhecido.');
            return;
    }
    atualizarLista();
};

const misturar = () => {
    shuffle(valores, valores.length * 2);
    atualizarLista();
};
