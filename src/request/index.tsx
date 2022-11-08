
import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

import {
  useQuery,
} from '@tanstack/react-query'
import { Megasena } from '../types/data';

interface ReactChildren {
  children: React.ReactNode;
}

interface MegaSenaContextData {
  megasena: Megasena;
  isLoading: boolean;
  refetch: () => void;
  setNumber(value: string): void;
  setValue(value: boolean): void;
  value?: boolean;
}

const MegaSenaContext = createContext<MegaSenaContextData>(
  {} as MegaSenaContextData
);

export const MegaSenaProvider: React.FC<ReactChildren> = ({ children }) => {
  const [number, setNumber] = useState('2343');

  const [value, setValue] = useState<boolean>();

  const {
    data: megasena,
    isLoading,
    refetch,
  } = useQuery(
    ['megasena', number],

    async () => {
      try {
        const response = await api.get(`/megasena/${number}`);

        const { data } = response;

        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );

  return (
    <MegaSenaContext.Provider
      value={{
        megasena,
        isLoading,
        refetch,
        setNumber,
        value,
        setValue
      }}
    >
      {children}
    </MegaSenaContext.Provider>
  );
};

export function useMegaSena(): MegaSenaContextData {
  const context = useContext(MegaSenaContext);

  if (!context) {
    throw new Error('useAuth must be used within an AutoProvider');
  }

  return context;
}