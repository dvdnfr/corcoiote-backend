import type { Invoice } from '../invoice.ts';
export const invoice: Invoice [] = [
    {
        id:1,
        value: 'R$ 1,99',
        customer_id: 1,
        status:"peding",
        created_at: "2026-07-10T09:00:00.000Z"
    },
    {
        id:2,
        value: 'R$ 5,25',
        customer_id: 2,
        status:"peding",
        created_at: "2026-07-12T14:20:00.000Z"
    },
    {
        id:3,
        value: 'R$ 12,99',
        customer_id: 3,
        status:"paid",
        created_at: "2026-07-14T18:45:00.000Z",
    }
];  