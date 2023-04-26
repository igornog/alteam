import { createAsyncThunk } from '@reduxjs/toolkit'
import { Client } from '../types/clients.type'
import { clientService } from '../../services'

export const handleClients = createAsyncThunk(
  'clients/initClients',
  async () => {
    return await clientService
  },
)

export const handleSetClientName = createAsyncThunk(
  'clients/setClientName',
  async (clientName: string) => {
    return clientName
  },
)

export const handleSelectClient = createAsyncThunk(
  'talents/selectClient',
  async (idClient: number | null) => {
    return idClient
  },
)

export const handleCreateClient = createAsyncThunk(
  'clients/createClient',
  async (client: Client, { rejectWithValue }) => {
    try {
      return await clientService.createClient(client)
    } catch (err) {
      return rejectWithValue(err)
    }
  },
)
