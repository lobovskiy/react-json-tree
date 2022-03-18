import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTable } from '../api';

export const fetchFamilyTable = createAsyncThunk(
  'table/fetchFamily',
  async () => {
    await new Promise(res => setTimeout(() => res(), 2000))
    const table = await getTable();
    return table;
  }
)
