import { createDraftSafeSelector } from '@reduxjs/toolkit'
import { Client } from '../types/clients.type'

export const getActiveClient = createDraftSafeSelector(
  [(state) => state.clients],
  ({ selectedClient, listClients }) => {
    console.log(selectedClient)
    console.log(listClients)
    return selectedClient 
      ? new Client(
          listClients.find((client: Client) => client.id === selectedClient),
        )
      : new Client({})
  },
)
