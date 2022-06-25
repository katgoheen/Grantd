import { Request, Response, Router } from 'express';
import { getConnection } from "typeorm";
import { createClient } from 'redis';
import * as nearAPI from "near-api-js";
const fs = require("fs");
import axios, { AxiosResponse } from 'axios';
import { FilterBy } from '@redis/client/dist/lib/commands/COMMAND_LIST';

/*
 Start redis:
    docker run --name some-redis -d redis redis-server --save 60 1 --loglevel warning
*/

const { connect } = nearAPI;

var port = 8080;
var host = "127.0.0.1";
var password = null;
const rpcendpoint = "https://rpc.testnet.near.org";

var redis = require("redis"),
    client = redis.createClient(port, host);

// if there is a password do the auth
if (password !== null){
  client.auth(password);
}

const router = Router();


// SPONSOR
router.get('/app/list', async (req: Request, res: Response) => {
    // Get the profile's associated NEAR account address.
    return res.status(200).json({});
});

router.get('/app/display', async (req: Request, res: Response) => {
    // Get the profile's associated NEAR account address.
    return res.status(200).json({});
});

router.get('/app/approve', async (req: Request, res: Response) => {
    // Get the profile's associated NEAR account address.
    return res.status(200).json({});
});


// DEVELOPER
router.post('/app/apply', async (req: Request, res: Response) => {
    // Send a form to the sponsor applying for grant 
    // (grant id, milestone)
})

export = router;