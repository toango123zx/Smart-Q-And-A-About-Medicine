import { z } from 'zod';

export const BoxChatScalarFieldEnumSchema = z.enum(['boxChatId','name','userId','createdAt','updatedAt','deletedAt','status']);

export default BoxChatScalarFieldEnumSchema;
