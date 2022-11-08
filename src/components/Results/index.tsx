import React, { useEffect } from 'react';
import { useMegaSena } from '../../request';

import { Circle, Circles, Container } from './styles';

const Results: React.FC = () => {
    const { megasena, isLoading, setValue } = useMegaSena();

    const dezenas = megasena?.listaDezenas.map((d) => {
        return d;
    });

    useEffect(() => {
        if (dezenas?.[0] % 2 === 0) {
            localStorage.setItem('@teste', 'light');
        } else {
            localStorage.setItem('@teste', 'dark');
        }
    }, [dezenas, setValue])

    // const isPar = dezenas?.[0] % 2 === 0;
    // const isImpar = dezenas?.[0] % 2 !== 0;

    // console.log(isImpar);

    return (
        <Container>
            <h1>Acumulou</h1>
            <p>Sorteio realizado no {megasena?.localSorteio} em {megasena?.nomeMunicipioUFSorteio}</p>

            {!isLoading ? (
                <Circles>
                    {megasena?.listaDezenas.map((dezenas) => (
                        <Circle>{dezenas}</Circle>
                    ))}
                </Circles>
            ) : <p style={{ textAlign: 'center' }}>Carregando...</p>}

            <div className="container">
                <p>Estimativa de prêmio do próximo concurso</p>
                <p>{megasena?.dataProximoConcurso}</p>
                <p style={{ fontSize: '35px' }}>R$ {megasena?.valorEstimadoProximoConcurso}</p>
            </div>
        </Container>
    );
}

export default Results;