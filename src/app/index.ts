import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';

import { User } from './user';
import { prismaClient } from '../clients/db';

export async function initServer() {
    const app = express();

    app.use(bodyParser.json());

    // prismaClient.user.create({
    //     data: {
    //         em
    //     }
    // })

    const graphqlServer = new ApolloServer({
        typeDefs: `
            ${User.types}
            type Query {
                ${User.queries}
            }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
            },
        },
    });

    await graphqlServer.start();

    app.use("/graphql", expressMiddleware(graphqlServer));

    return app;
}