import { Grid } from '@mui/material'
import React from 'react'
import TalentsSwitchMode from '../../../../components/app/talents/TalentsSwitchMode'
import AtNoResult from '../../../../components/AtLayout/AtNoResult'
import { useAppSelector } from '../../../../utils/hooks/reduxHook'
import { Column, SortTypes } from '../../../../utils/redux/types/settings.type'
import { getActiveTab } from '../../../../utils/redux/selectors/settings.selector'
import { ListingStatus } from '@yjcapp/app'

const AllTalentsView: React.FunctionComponent = () => {
  const talents = useAppSelector((state) => state.talents)
  const settings = useAppSelector((state) => state.settings)
  const activeTab = useAppSelector((state) => getActiveTab(state))
  let listTalents = talents.listTalents

  if (!activeTab.status) {
    listTalents = listTalents.filter((talent: any) => talent.status !== ListingStatus.Declined)
  }

  const groupBy = (array: any[], key: string) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const sortByStatus = () => {
    const listTalentsByGroup: string | any[] = []
    const statusGroup = groupBy(listTalents, 'status')

    return listTalentsByGroup.concat(statusGroup.inbound, statusGroup.shortlisted, statusGroup.accepted)
  }

  if (settings.sort && listTalents.length > 0) {
    switch (settings.sort) {
      case SortTypes.Alphabetical:
        listTalents = listTalents.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
        break;
      case SortTypes.MostRecent:
        listTalents = listTalents.sort((a: any, b: any) => (a.appliedDate < b.appliedDate) ? 1 : -1)
        break;
      case SortTypes.Status:
        listTalents = sortByStatus()
        break;
    }

    listTalents.filter(item => item)
  }

  return listTalents.length === 0 ? (
    <AtNoResult sentence={`No Talents`} />
  ) : (
    <Grid container={true} spacing={2.5} marginTop={0} alignItems={'stretch'}>
      <Grid item={true} xs={12}>
        <TalentsSwitchMode
          listTalents={listTalents}
          displayStatusTag={true}
          tableColumns={[
            Column.Talent,
            Column.Applied,
            Column.Availability,
            Column.Status,
            Column.Skills,
          ]}
        />
      </Grid>
    </Grid>
  )
}

export default AllTalentsView
