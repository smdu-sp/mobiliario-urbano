/** @format */

'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Usuario } from '.prisma/client';

export const columns: ColumnDef<Usuario>[] = [
	{
		accessorKey: 'nome',
		header: 'Nome',
	},
	{
		accessorKey: 'login',
		header: 'Usuário',
	},
	{
		accessorKey: 'email',
		header: 'E-mail',
	},
	{
		accessorKey: 'status',
		header: () => <p className='text-center'>Status</p>,
		cell: ({ row }) => {
			const status = row.original.status;
			return (
				<div className='flex items-center justify-center'>
					<Badge variant={`${status == false ? 'destructive' : 'default'}`}>
						{status ? 'Ativo' : 'Inativo'}
					</Badge>
				</div>
			);
		},
	},
];
