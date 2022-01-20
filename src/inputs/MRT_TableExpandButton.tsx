import React, { FC } from 'react';
import { IconButton, TableCell } from '@mui/material';
import { Row } from 'react-table';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { useMaterialReactTable } from './useMaterialReactTable';

interface Props {
  row: Row;
}

export const MRT_TableExpandButton: FC<Props> = ({ row }) => {
  return (
    <TableCell
      style={{ width: '2rem' }}
      size="small"
      variant="head"
      {...row.getToggleRowExpandedProps({
        style: {
          paddingLeft: `${row.depth * 1.5 + 0.25}rem`,
        },
      })}
    >
      <IconButton>
        <ArrowForwardIosIcon
          fontSize="small"
          style={{
            transform: row.isExpanded ? 'rotate(90deg)' : 'rotate(0)',
            transition: 'transform 0.2s',
          }}
        />
      </IconButton>
    </TableCell>
  );
};