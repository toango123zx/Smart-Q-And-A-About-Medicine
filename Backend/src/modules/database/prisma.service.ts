import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
const { PrismaClient } = require('@prisma/client');
const PrismaService = new PrismaClient();

export { PrismaService, PrismaClientKnownRequestError };