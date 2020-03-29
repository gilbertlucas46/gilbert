import React from 'react';
import styled from 'styled-components';
import useStats from '../../utils/events/covid19/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  display: grid;
  @media (min-width:1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width:768px) and (max-width:1199px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: .5rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const Stats = ({ url }) => {
  const { stats, loading, error } = useStats(url);
  // console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <>
      <StatGrid>
        <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
        </StatBlock>
        <StatBlock>
          <h3>Deaths:</h3>
          <span>{stats.deaths.value}</span>
        </StatBlock>
        <StatBlock>
          <h3>Recovered:</h3>
          <span>{stats.recovered.value}</span>
        </StatBlock>
      </StatGrid>
      {console.log(stats)}
    </>
  )
}

export { Stats };