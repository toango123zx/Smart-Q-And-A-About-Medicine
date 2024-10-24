import { z } from 'zod';

export const StatusSchema = z.enum(['active','inactive']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

export default StatusSchema;
