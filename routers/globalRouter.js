import express from "express";
import passport from "passport";
import routes from "../routes";

import {home, search} from "../controllers/videoController";
import {
    getJoin, 
    getLogin,
    logout,
    postLogin,
    postJoin,
    githubLogin,
    postsGitHubLogIn,
    getMe,
    facebookLogin,
    postFacebookLogIn} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.home, home);

globalRouter.get(routes.logout, onlyPrivate, logout);
globalRouter.get(routes.search, search);

globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
    routes.gitHubCallback, 
    passport.authenticate('github',{ failtureRedirect: "/login"}),
    postsGitHubLogIn
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
    routes.facebookCallback, 
    passport.authenticate('facebook', { failureRedirect: "/login"}),
    postFacebookLogIn)

export default globalRouter;
