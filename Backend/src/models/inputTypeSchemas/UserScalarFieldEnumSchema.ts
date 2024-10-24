import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['userId','username','password','name','email','dataOfBirth','phoneNumber','adress','createdAt','updatedAt','deletedAt','status']);

export default UserScalarFieldEnumSchema;
