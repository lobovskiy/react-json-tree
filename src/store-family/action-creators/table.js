import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTable } from '../../api';
import { delay } from '../../helpers';

export const fetchTable = createAsyncThunk(
  'table/fetchTable',
  async () => {
    await delay();
    const table = await getTable();

    return table;
  }
);
