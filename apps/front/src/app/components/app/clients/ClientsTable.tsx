import { Box } from '@mui/material'
import React, { useState } from 'react'
import { grey, grey3 } from '../../../utils/colors'
import { Client } from '../../../utils/redux/types/clients.type'
import { Column } from '../../../utils/redux/types/settings.type'
import AtButton, {
  AtButtonKind,
  AtButtonVariant,
} from '../../AtButton/AtButton'
import AtTable from '../../AtTable/AtTable'
import AtTableBody from '../../AtTable/AtTableBody'
import AtTableCell from '../../AtTable/AtTableCell'
import AtTableHead from '../../AtTable/AtTableHead'
import { AtTableRow } from '../../AtTable/AtTableRow'
import AtTypography from '../../AtTypography/AtTypography'
import ClientLogo from './ClientLogo'

const ClientsTable: React.FunctionComponent<ClientTableProps> = (
  props: ClientTableProps,
) => {
  const [position, setPosition] = useState<number | null>(null)

  const haveToDisplay = (column: Column) => {
    return props.tableColumns?.includes(column)
  }

  return (
    <AtTable>
      <AtTableHead>
        <AtTableRow>
          {haveToDisplay(Column.Client) && <AtTableCell>Client</AtTableCell>}

          {haveToDisplay(Column.Received) && (
            <AtTableCell>Received</AtTableCell>
          )}

          {haveToDisplay(Column.Listings) && (
            <AtTableCell>Listings</AtTableCell>
          )}

          {haveToDisplay(Column.Assignees) && (
            <AtTableCell>Assignees</AtTableCell>
          )}

          {haveToDisplay(Column.Email) && <AtTableCell>Email</AtTableCell>}

          {haveToDisplay(Column.Phone) && <AtTableCell>Phone</AtTableCell>}

          {haveToDisplay(Column.CompanyUrl) && (
            <AtTableCell align="right">Company Url</AtTableCell>
          )}
        </AtTableRow>
      </AtTableHead>
      <AtTableBody position={position}>
        {props.clients.map((client: Client) => (
          <AtTableRow
            key={client.id}
            hover={true}
            onClick={() => props.openClient(client.id)}
            setPosition={setPosition}
          >
            {haveToDisplay(Column.Client) && (
              <AtTableCell>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  textOverflow={'ellipsis'}
                  whiteSpace={'nowrap'}
                >
                  <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                    <Box width={'28px'} height={'28px'}>
                      <ClientLogo logo={client.logo} />
                    </Box>

                    <Box display={'flex'} flexDirection={'column'}>
                      <AtTypography variant={'body1'} bold={true}>
                        {client.name}
                      </AtTypography>
                      <AtTypography
                        variant={'caption'}
                        color={grey}
                        bold={true}
                      >
                        {client.industry}
                      </AtTypography>
                    </Box>
                  </Box>
                </Box>
              </AtTableCell>
            )}

            {haveToDisplay(Column.Received) && (
              <AtTableCell>
                <AtTypography>{client.received}</AtTypography>
              </AtTableCell>
            )}

            {haveToDisplay(Column.Listings) && (
              <AtTableCell>
                <AtTypography>{client.listings}</AtTypography>
              </AtTableCell>
            )}

            {haveToDisplay(Column.Assignees) && (
              <AtTableCell>
                <AtTypography>
                  {client.assignee ?? (
                    <Box display={'flex'} gap={'10px'}>
                      <AtTypography color={grey3}>Nobody assigned</AtTypography>

                      <AtButton
                        kind={AtButtonKind.Default}
                        variant={AtButtonVariant.Text}
                        name={'Assign now'}
                        fontSize={'14px'}
                      />
                    </Box>
                  )}
                </AtTypography>
              </AtTableCell>
            )}

            {haveToDisplay(Column.Email) && (
              <AtTableCell>
                <AtTypography>{client.email}</AtTypography>
              </AtTableCell>
            )}

            {haveToDisplay(Column.Phone) && (
              <AtTableCell>
                <AtTypography>{client.phoneNumber}</AtTypography>
              </AtTableCell>
            )}

            {haveToDisplay(Column.CompanyUrl) && (
              <AtTableCell align={'right'}>{client.companyUrl}</AtTableCell>
            )}
          </AtTableRow>
        ))}
      </AtTableBody>
    </AtTable>
  )
}

interface ClientTableProps {
  clients: Client[]
  openClient: (id: number) => void
  tableColumns?: Column[]
}

export default ClientsTable