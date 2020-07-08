import React from 'react';
import './Forms.css';

const Forms = () => {
    function handleSubmit() {
        //
    }

    return (
        <>
            <h1>Nos mostre qual o modelo de petição que deseja</h1>

            <p>Aqui você vai informar os dados principais de sua petição</p>

            <h3>Por que esse formulário é importante?</h3>

            <p>Este formulário nos ajuda a entender seu caso. 
                Preencha todos os campos</p>
            
            <form onSubmit={handleSubmit} className={'forms'}>
                <h3>Solicite sua petição</h3>
                <label>
                    Comarca:
                    <input type="text" name="comarca" />
                </label>
                <label>
                    Qualificação do autor:
                    <input type="text" name="author" />
                </label>
                <label>
                    Qualificação do réu:
                    <input type="text" name="réu" />
                </label>
                <label>
                    Dos Fatos:
                    <input type="text" name="fatos" />
                </label>
                <label>
                    Qual o tipo de ação?
                    <select>
                        <option value="atrasoVoo">Atraso de Vôo</option>
                        <option value="reajusteAns">Reajuste plano de saúde</option>
                        <option selected value="rescisaoTrab">Rescisão Trabalhista</option>
                    </select>
                </label>
                <button type="submit" className={'formsButton'}>
                    Solicitar Peça
                </button>
            </form>
        </>
    );
}

export default Forms;