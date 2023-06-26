import { RequestLoader } from '@components/Loader/RequestLoader';
import { MeetSpaceXSeoButton } from '@components/MeetSpaceXSeoButton';
import { SpaceXLaunchCard } from '@components/SpaceXLaunchCard/SpaceXLaunchCard';
import { useGetSpaceXLaunchesQuery } from '@gql/graphql';
import React from 'react';

import './App.css';

function App() {
  const { data, error, loading } = useGetSpaceXLaunchesQuery();

  return (
    <div className="App">
      <p>Иллюстрация работы компонента MeetSpaceXSeoButton:</p>
      <MeetSpaceXSeoButton />

      <p>Иллюстрация работы компонента SpaceXLaunchCard:</p>

      <RequestLoader loading={loading} error={error}>
        {!error ? (
          <div className="App-grid">
            {data?.launches?.map((item) => (
              <SpaceXLaunchCard
                key={item?.id}
                id={item?.id}
                mission_name={item?.mission_name}
                launch_date_local={item?.launch_date_local}
                details={item?.details}
                rocket={{ rocket_name: item?.rocket?.rocket_name }}
                price={24000}
              />
            ))}
          </div>
        ) : (
          <p>{JSON.stringify(error)}</p>
        )}
      </RequestLoader>
    </div>
  );
}

export default App;
