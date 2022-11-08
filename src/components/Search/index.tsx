import React, { useState } from 'react';
import { useMegaSena } from '../../request';

import { Container } from './styles';


const Search: React.FC = () => {
    const [value, setValue] = useState("");

    const { setNumber, megasena } = useMegaSena();
    return (
        <Container>
            <div className="result">
                <h1>Resultado</h1>
                <h3>Concurso</h3>
                <h3><p>{megasena?.numero}</p></h3>
                <h3><p>({megasena?.dataApuracao})</p></h3>
            </div>

            <div className="search">
                <h3>Buscar por concurso</h3>
                <input type="text" name="number" value={value} onChange={(e) => setValue(e.target.value)} />

                <button type='button' onClick={() => setNumber(value)}>Buscar</button>
            </div>
            
            <div className="divider"></div>
            
        </Container>
        
    );

}

export default Search;