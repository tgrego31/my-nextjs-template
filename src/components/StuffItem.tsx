
'use client';

import { Stuff } from '@prisma/client';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { deleteStuff } from '@/lib/dbActions';

const StuffItem = ({ name, quantity, condition, id }: Stuff) => {
  const removeItem = async (itemId: number) => {
    await deleteStuff(itemId);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{condition}</td>
      <td>
        <Link href={`/edit/${id}`}>Edit</Link>
      </td>
      <td>
        <Button
          variant="danger"
          onClick={() => removeItem(id)}
        >
          <Trash />
        </Button>
      </td>
    </tr>
  );
};

export default StuffItem;



