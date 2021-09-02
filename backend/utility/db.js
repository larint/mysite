"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const faunadb_1 = __importDefault(require("faunadb"));
let q = faunadb_1.default.query;
let client = new faunadb_1.default.Client({ secret: process.env.FAUNA_KEY });
class DB {
}
exports.DB = DB;
DB.create = async (collectionName, data) => {
    try {
        let result = await client.query(q.Create(q.Collection(collectionName), { data: data }));
    }
    catch (error) {
    }
};
DB.select = async (collectionName) => {
    try {
        let result = await client.query(q.Map(q.Paginate(q.Documents(q.Collection(collectionName)), { size: 3 }), q.Lambda("X", q.Get(q.Var("X")))));
        return result;
    }
    catch (error) {
        console.log(error);
    }
    return false;
};
DB.selectPost = async (slug) => {
    try {
        let result = await client.query(q.Get(q.Match(q.Index('post_by_slug'), slug)));
        return result;
    }
    catch (error) {
        console.log(error);
    }
    return false;
};
DB.test = async () => {
    let r = await client.query(q.Get(q.Match(q.Index('post_by_slug'), 'how-i-organize-my-work-with-code')));
    console.log(r);
};
