import React from 'react'
import AccountantInfoCard from '../components/Accountants/AccountantInfoCard'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator'
import useAccountantsData from '../hooks/useAccountantsData'
import Grid from '../components/StyledComponents/Grid'
import MoreInfoButton from '../components/StyledComponents/MoreInfoButton'

const AccountantsView = () => {
    const { isLoading, accountants, loadMore } = useAccountantsData()

    return (
      <React.Fragment>
        <Grid>
          {isLoading && !accountants.length ? (
            <LoadingIndicator />
          ) : (
            <>
              {accountants.map((accountant) => (
                <AccountantInfoCard key={accountant.login.uuid} accountant={accountant} />
              ))}
              {isLoading && <LoadingIndicator />}
            </>
          )}
        </Grid>
        <MoreInfoButton onClick={loadMore}>Załaduj więcej</MoreInfoButton>
      </React.Fragment>
    )
  }

export default AccountantsView