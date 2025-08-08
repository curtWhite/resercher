"use strict";
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 4969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  lf: () => (/* binding */ BlogPosts),
  Rj: () => (/* binding */ Categories),
  U4: () => (/* binding */ ResearchPapers),
  $G: () => (/* binding */ Tags),
  Q: () => (/* binding */ Users),
  U_: () => (/* binding */ checkHashedPassword),
  zu: () => (/* binding */ hashedPassword),
  rC: () => (/* binding */ users)
});

// UNUSED EXPORTS: Comments, getDatabase

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./app/api/mongodb/index.tsx

const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (!process.env.MONGODB_URI) {
    throw new Error("Please add your MongoDB URI to .env.local");
}
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new external_mongodb_.MongoClient(uri, options);
    clientPromise = client.connect();
}
console.log("MongoDB client initialized", clientPromise.then(()=>"Connected to MongoDB").catch((err)=>`Failed to connect: ${err}`));
/* harmony default export */ const mongodb = (clientPromise);

// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(3600);
;// CONCATENATED MODULE: ./app/lib/db.ts
// import { MongoClient } from "mongodb";


// const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");
async function getDatabase() {
    const client = await mongodb;
    return client.db("researcher-db");
}
// Mock Users, Categories, Tags, Research Papers, Blog Posts, and Comments
// These are used for testing and development purposes
// Mock Users
const users = async ()=>{
    const db = await getDatabase();
    const usersCollection = db.collection("users");
    return usersCollection.find({}).toArray();
};
const hashedPassword = async (password)=>{
    const salt = await bcryptjs/* default.genSalt */.ZP.genSalt(10);
    const hash = await bcryptjs/* default.hash */.ZP.hash(password, salt);
    return hash;
};
const checkHashedPassword = async (password, hash)=>{
    return await bcryptjs/* default.compare */.ZP.compare(password, hash);
};
class Users {
    static async getAll() {
        const db = await getDatabase();
        const usersCollection = db.collection("users");
        return usersCollection.find({}).toArray();
    }
    static async create(user) {
        const db = await getDatabase();
        const usersCollection = db.collection("users");
        await usersCollection.insertOne(user);
    }
    static async findByEmail(email) {
        const db = await getDatabase();
        const usersCollection = db.collection("users");
        return usersCollection.find({
            email
        }).toArray();
    }
    static async findById(id) {
        const db = await getDatabase();
        const usersCollection = db.collection("users");
        return usersCollection.findOne({
            id
        });
    }
    static async update(id, data) {
        const db = await getDatabase();
        const usersCollection = db.collection("users");
        return await usersCollection.updateOne({
            id
        }, {
            $set: data
        });
    }
    static async delete(id) {
        const db = await getDatabase();
        const usersCollection = db.collection("users");
        return await usersCollection.deleteOne({
            id
        });
    }
}
// Mock Categories
class Categories {
    static async getAll() {
        const db = await getDatabase();
        const categoriesCollection = db.collection("categories");
        return categoriesCollection.find({}).toArray();
    }
    static async create(category) {
        const db = await getDatabase();
        const categoriesCollection = db.collection("categories");
        await categoriesCollection.insertOne(category);
    }
    static async findById(id) {
        const db = await getDatabase();
        const categoriesCollection = db.collection("categories");
        return categoriesCollection.findOne({
            id
        });
    }
    static async findBySlug(slug) {
        const db = await getDatabase();
        const categoriesCollection = db.collection("categories");
        return categoriesCollection.findOne({
            slug
        });
    }
    static async update(id, data) {
        const db = await getDatabase();
        const categoriesCollection = db.collection("categories");
        return await categoriesCollection.updateOne({
            id
        }, {
            $set: data
        });
    }
    static async delete(id) {
        const db = await getDatabase();
        const categoriesCollection = db.collection("categories");
        return await categoriesCollection.deleteOne({
            id
        });
    }
}
// Mock Tags
class Tags {
    static async getAll() {
        const db = await getDatabase();
        const tagsCollection = db.collection("tags");
        return tagsCollection.find({}).toArray();
    }
    static async create(tag) {
        const db = await getDatabase();
        const tagsCollection = db.collection("tags");
        await tagsCollection.insertOne(tag);
    }
    static async findById(id) {
        const db = await getDatabase();
        const tagsCollection = db.collection("tags");
        return tagsCollection.findOne({
            id
        });
    }
    static async findBySlug(slug) {
        const db = await getDatabase();
        const tagsCollection = db.collection("tags");
        return tagsCollection.findOne({
            slug
        });
    }
    static async update(id, data) {
        const db = await getDatabase();
        const tagsCollection = db.collection("tags");
        return await tagsCollection.updateOne({
            id
        }, {
            $set: data
        });
    }
    static async delete(id) {
        const db = await getDatabase();
        const tagsCollection = db.collection("tags");
        return await tagsCollection.deleteOne({
            id
        });
    }
}
class ResearchPapers {
    static async getAll() {
        const db = await getDatabase();
        const papersCollection = db.collection("research-papers");
        return papersCollection.find({}).toArray();
    }
    static async create(paper) {
        const db = await getDatabase();
        const papersCollection = db.collection("research-papers");
        await papersCollection.insertOne(paper);
    }
    static async findById(id) {
        const db = await getDatabase();
        const papersCollection = db.collection("research-papers");
        return papersCollection.findOne({
            id
        });
    }
    static async findByUserId(userId) {
        const db = await getDatabase();
        const papersCollection = db.collection("research-papers");
        return papersCollection.find({
            userId
        }).toArray();
    }
    static async update(id, data) {
        const db = await getDatabase();
        const papersCollection = db.collection("research-papers");
        return await papersCollection.updateOne({
            id
        }, {
            $set: data
        });
    }
    static async delete(id) {
        const db = await getDatabase();
        const papersCollection = db.collection("research-papers");
        return await papersCollection.deleteOne({
            id
        });
    }
    static async filterByKeys(keys) {
        const db = await getDatabase();
        const papersCollection = db.collection("research-papers");
        return papersCollection.find({
            $or: keys
        }).toArray();
    }
}
class BlogPosts {
    static async getAll() {
        const db = await getDatabase();
        const postsCollection = db.collection("blogs");
        return postsCollection.find({}).toArray();
    }
    static async create(post) {
        const db = await getDatabase();
        const postsCollection = db.collection("blogs");
        await postsCollection.insertOne(post);
    }
    static async findById(id) {
        const db = await getDatabase();
        const postsCollection = db.collection("blogs");
        return postsCollection.findOne({
            id
        });
    }
    static async update(id, data) {
        const db = await getDatabase();
        const postsCollection = db.collection("blogs");
        return await postsCollection.updateOne({
            id
        }, {
            $set: data
        });
    }
    static async delete(id) {
        const db = await getDatabase();
        const postsCollection = db.collection("blogs");
        return await postsCollection.deleteOne({
            id
        });
    }
}
class Comments {
    static async getAll() {
        const db = await getDatabase();
        const commentsCollection = db.collection("comments");
        return commentsCollection.find({}).toArray();
    }
    static async create(comment) {
        const db = await getDatabase();
        const commentsCollection = db.collection("comments");
        await commentsCollection.insertOne(comment);
    }
    static async findById(id) {
        const db = await getDatabase();
        const commentsCollection = db.collection("comments");
        return commentsCollection.findOne({
            id
        });
    }
    static async update(id, data) {
        const db = await getDatabase();
        const commentsCollection = db.collection("comments");
        return await commentsCollection.updateOne({
            id
        }, {
            $set: data
        });
    }
    static async delete(id) {
        const db = await getDatabase();
        const commentsCollection = db.collection("comments");
        return await commentsCollection.deleteOne({
            id
        });
    }
}


/***/ })

};
;