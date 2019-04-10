import React from 'react';
import styled from 'styled-components';
import MailLink from './MailLink';

const StyledTable = styled.div`
  overflow-x: auto;

  table {
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border-spacing: 0;
    border-collapse: collapse;

    tr {
      &:nth-child(odd) {
        background-color: #f9f9f9;
      }
      td {
        padding: 5px;
        line-height: 1.42857143;
        vertical-align: top;
        border-top: 1px solid #ddd;
        font-weight: 300;
        white-space: nowrap;
      }
    }
  }
`;

const Table = ({ table }) => {
  return table ? (
    <StyledTable>
      <table>
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
      </table>
    </StyledTable>
  ) : (
    <></>
  );
};

export default React.memo(Table);
