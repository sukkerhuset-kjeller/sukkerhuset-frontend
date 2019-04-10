import React from 'react';
import styled from 'styled-components';
import MailLink from './MailLink';

const StyledTable = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;

  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }

  td {
    padding: 5px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    font-weight: 300;

    @media (max-width: 600px) {
      display: flex;
      flex-flow: column nowrap;
      border: none;
      padding: 0;
      &:first-child {
        border-top: 1px solid #ddd;
      }
      &:last-child {
        border-bottom: 1px solid #ddd;
      }
    }
  }

  tr:first-child td {
    font-weight: normal;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const Table = ({ table }) => {
  return table ? (
    <StyledTable>
      <tbody>
        {table.rows.map((row, rindex) => (
          <tr key={rindex}>
            {row.cells.map((cell, cindex) => (
              <td key={cindex}>
                {cell.includes('mailto:') ? <MailLink link={cell} /> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  ) : (
    <></>
  );
};

export default React.memo(Table);
