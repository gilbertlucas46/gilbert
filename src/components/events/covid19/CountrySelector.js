import React, { useState } from 'react';
import useStats from '../../utils/events/covid19/useStats';
import {Stats} from './Stats';
import styled from 'styled-components';

const Select = styled.div`
  margin: 1.8rem 0;
  max-width: 680px;
  select.changed {
    border-bottom: 2px solid #ed2654;
    color: #fff;
  }
  label {
    width: 100%;
    background-color: transparent;
  }
  select {
    width: 100%;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid #bcb2b2;
    color: #bcb2b2;
    border-radius: 0;
    line-height: 3rem;
    height: 3.2rem;
    font-size: 1.2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 0px;
    background-image: url("data:image/svg+xml;base64,
        PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDkzLjI1OCA0OTMuMjU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTMuMjU4IDQ5My4yNTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PGcgaWQ9IlhNTElEXzYyMV8iPgoJPHBhdGggaWQ9IlhNTElEXzYyM18iIGQ9Ik0xMzEuNTY0LDIxOS4yNThoMjMwLjEzYzkuMzE0LDAsMTcuODU3LTUuMTYsMjIuMjAzLTEzLjM4OWM0LjM0LTguMjQ2LDMuNzY5LTE4LjE5My0xLjQ5NC0yNS44OTUgICBMMjY1LjkyLDkuNzcyQzI2MS43NSwzLjY4LDI1NC44NDYsMC4wMzMsMjQ3LjQ2MSwwYy03LjM3Ny0wLjAxOC0xNC4zMDMsMy41ODQtMTguNTA3LDkuNjU4TDExMC45MzUsMTc5Ljg2MyAgIGMtNS4zMTksNy42NjgtNS45MzgsMTcuNjY0LTEuNjA3LDI1Ljk0MUMxMTMuNjU5LDIxNC4wNjcsMTIyLjIyNSwyMTkuMjU4LDEzMS41NjQsMjE5LjI1OHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0JDQjJCMiIgZGF0YS1vbGRfY29sb3I9IiNFOUU5RTkiPjwvcGF0aD4KCTxwYXRoIGlkPSJYTUxJRF82MjJfIiBkPSJNMzYxLjY5NCwyNzMuOTk4aC0yMzAuMTNjLTkuMzM5LDAtMTcuOTA1LDUuMTkzLTIyLjIzNiwxMy40NTVjLTQuMzMxLDguMjc3LTMuNzExLDE4LjI3MywxLjYwNywyNS45MzkgICBsMTE4LjAxOSwxNzAuMjA1YzQuMjA0LDYuMDc0LDExLjEzLDkuNjc2LDE4LjUwNyw5LjY2YzcuMzg1LTAuMDMxLDE0LjI4OS0zLjY4MiwxOC40NTktOS43NzJsMTE2LjQ4My0xNzAuMjA1ICAgYzUuMjYzLTcuNjk5LDUuODM0LTE3LjY0OCwxLjQ5NC0yNS44OTVDMzc5LjU1MSwyNzkuMTU4LDM3MS4wMDgsMjczLjk5OCwzNjEuNjk0LDI3My45OTh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNCQ0IyQjIiIGRhdGEtb2xkX2NvbG9yPSIjRTlFOUU5Ij48L3BhdGg+CjwvZz48L2c+IDwvc3ZnPg==");
    background-position: 99% 50%;
    background-repeat: no-repeat;
    background-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('PH');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h2>Currently Showing {selectedCountry}</h2>
      <Select>
        <select
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
          value={selectedCountry}
        >
          {Object.entries(countries.countries).map(([country, code]) => (
            <option
            defaultValue={selectedCountry === countries.iso3[code]}
              key={code + country}
              value={countries.iso3[code]}
            >
              {country}
            </option>
          ))}
        </select>
      </Select>
      
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
