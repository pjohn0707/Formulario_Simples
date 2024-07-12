import React, { useRef } from 'react';

function FormularioInput() {
    // Referência para o input
    const inputRef = useRef(null);

    // Função para limpar o valor do input
    const limparInput = () => {
        inputRef.current.value = '';
    };

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Digite algo..." />
            <button onClick={limparInput}>Limpar</button>
        </div>
    );
}

export default FormularioInput;
