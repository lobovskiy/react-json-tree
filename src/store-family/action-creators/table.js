import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTable } from '../../api';
import { delay } from '../../helpers';

export const fetchTable = createAsyncThunk(
  'table/fetchTable',
  async () => {
    const table = await getTable();
    await delay();

    return table;
  }
);
