import { z } from 'zod';

export const MessengerScalarFieldEnumSchema = z.enum(['messengerId','content','boxChatId','userId','createdAt','updatedAt','deleteAt','status']);

export default MessengerScalarFieldEnumSchema;
