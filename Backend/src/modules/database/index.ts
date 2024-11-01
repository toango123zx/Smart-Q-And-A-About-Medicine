// import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// // const { PrismaClient } = require('@prisma/client');
// import { PrismaClient } from '@prisma/client';
// // const PrismaService = new PrismaClient();

// export { PrismaClient, PrismaClientKnownRequestError };

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaService } from './prisma.service';

import { Prisma } from '@prisma/client';

export { PrismaService, Prisma, PrismaClientKnownRequestError };