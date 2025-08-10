// import { MongoClient } from "mongodb";

import { ObjectId } from "mongodb";
import clientPromise from "../api/mongodb";
import {
  User as UserBase,
  BlogPost,
  ResearchPaper,
  Category,
  Tag,
  Comment
} from "../types";

type User = Omit<UserBase, '_id'> & { _id?: ObjectId | string | undefined };
import bcrypt from "bcryptjs";

// const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");
export async function getDatabase() {
  const client = await clientPromise;
  return client.db("researcher-db");
}

// Mock Users, Categories, Tags, Research Papers, Blog Posts, and Comments
// These are used for testing and development purposes

// Mock Users
export const users = async () => {
  const db = await getDatabase();
  const usersCollection = db.collection<User>('users');
  return usersCollection.find({}).toArray();
}

export const hashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

export const checkHashedPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
}

export class Users {

  static async getAll() {
    const db = await getDatabase();
    const usersCollection = db.collection<User>('users');
    return usersCollection.find({}).toArray();
  }

  static async create(user: User) {
    const db = await getDatabase();
    const usersCollection = db.collection<User>('users');
    await usersCollection.insertOne(user);
  }
  static async findByEmail(email: string) {
    const db = await getDatabase();
    const usersCollection = db.collection<User>('users');
    return usersCollection.find({ email }).toArray();
  }

  static async findById(id: string) {
    const db = await getDatabase();
    const usersCollection = db.collection<User>('users');
    try {
      // Use 'as any' to satisfy the type checker if User._id is string
      return await usersCollection.findOne({ _id: new ObjectId(id) } as any);
    } catch (error) {
      console.error('Error finding user by ID:', error);
      return null;
    }
  }

  static async update(id: string, data: Partial<User>) {
    const db = await getDatabase();
    const usersCollection = db.collection<User>('users');
    return await usersCollection.updateOne({ _id: new ObjectId(id) }, { $set: data });
  }

  static async delete(id: string) {
    const db = await getDatabase();
    const usersCollection = db.collection<User>('users');
    return await usersCollection.deleteOne({ _id: new ObjectId(id) });
  }

}




// Mock Categories
export class Categories {
  static async getAll() {
    const db = await getDatabase();
    const categoriesCollection = db.collection<Category>('categories');
    return categoriesCollection.find({}).toArray();
  }

  static async create(category: Category) {
    const db = await getDatabase();
    const categoriesCollection = db.collection<Category>('categories');
    await categoriesCollection.insertOne(category);
  }

  static async findById(id: string) {
    const db = await getDatabase();
    const categoriesCollection = db.collection<Category>('categories');
    return categoriesCollection.findOne({ id });
  }
  static async findBySlug(slug: string) {
    const db = await getDatabase();
    const categoriesCollection = db.collection<Category>('categories');
    return categoriesCollection.findOne({ slug });
  }
  static async update(id: string, data: Partial<Category>) {
    const db = await getDatabase();
    const categoriesCollection = db.collection<Category>('categories');
    return await categoriesCollection.updateOne({ id }, {
      $set: data
    });
  }

  static async delete(id: string) {
    const db = await getDatabase();
    const categoriesCollection = db.collection<Category>('categories');
    return await categoriesCollection.deleteOne({ id });
  }
}

// Mock Tags
export class Tags {
  static async getAll() {
    const db = await getDatabase();
    const tagsCollection = db.collection<Tag>('tags');
    return tagsCollection.find({}).toArray();
  }

  static async create(tag: Tag) {
    const db = await getDatabase();
    const tagsCollection = db.collection<Tag>('tags');
    await tagsCollection.insertOne(tag);
  }

  static async findById(id: string) {
    const db = await getDatabase();
    const tagsCollection = db.collection<Tag>('tags');
    return tagsCollection.findOne({ id });
  }

  static async findBySlug(slug: string) {
    const db = await getDatabase();
    const tagsCollection = db.collection<Tag>('tags');
    return tagsCollection.findOne({ slug });
  }

  static async update(id: string, data: Partial<Tag>) {
    const db = await getDatabase();
    const tagsCollection = db.collection<Tag>('tags');
    return await tagsCollection.updateOne({ id }, { $set: data });
  }

  static async delete(id: string) {
    const db = await getDatabase();
    const tagsCollection = db.collection<Tag>('tags');
    return await tagsCollection.deleteOne({ id });
  }
}

export class ResearchPapers {
  static async getAll() {
    const db = await getDatabase();
    const papersCollection = db.collection<ResearchPaper>('research-papers');
    return papersCollection.find({}).toArray();
  }

  static async create(paper: ResearchPaper) {
    const db = await getDatabase();
    const papersCollection = db.collection<ResearchPaper>('research-papers');
    await papersCollection.insertOne(paper);
  }

  static async findById(id: string) {
    const db = await getDatabase();
    const papersCollection = db.collection<ResearchPaper>('research-papers');
    return papersCollection.findOne({ id });
  }

  static async findByUserId(userId: string) {
    const db = await getDatabase();
    const papersCollection = db.collection<ResearchPaper>('research-papers');
    return papersCollection.find({ userId }).toArray();
  }

  static async update(id: string, data: Partial<ResearchPaper>) {
    const db = await getDatabase();
    const papersCollection = db.collection<ResearchPaper>('research-papers');
    return await papersCollection.updateOne({ id }, { $set: data });
  }

  static async delete(id: string) {
    const db = await getDatabase();
    const papersCollection = db.collection<ResearchPaper>('research-papers');
    return await papersCollection.deleteOne({ id });
  }

  static async filterByKeys(keys: any) {
    const db = await getDatabase();
    const papersCollection = db.collection<ResearchPaper>('research-papers');
    return papersCollection.find({ $or: keys }).toArray();
  }
}

// const _categories = {
//     "Physical sciences":["Sub Category","Physics","Astronomy and planetary science","Chemistry","Materials science","Mathematics and computing","Engineering","Nanoscience and technology","Optics and photonics","Energy science and technology"],
//     "Earth and environmental sciences":["","Climate sciences","Ecology","Environmental sciences","Solid Earth sciences","Planetary science","Environmental social sciences","Biogeochemistry","Ocean sciences","Hydrology","Natural hazards","Limnology","Space physics"],
//     "Biological sciences":["","Genetics","Microbiology","Neuroscience","Ecology","Immunology","Evolution","Cancer","Cell biology","Biochemistry","Molecular biology","Zoology","Developmental biology","Biological techniques","Structural biology","Physiology","Biotechnology","Computational biology and bioinformatics","Drug discovery","Stem cells","Plant sciences","Psychology","Biophysics","Chemical biology","Systems biology"],
//     "Health sciences":["","Diseases","Health care","Medical research","Anatomy","Pathogenesis","Biomarkers","Risk factors","Neurology","Signs and symptoms","Endocrinology","Health occupations"],
//     "Scientific community and society":["","Scientific community","Social sciences","Business and industry","Developing world","Agriculture","Water resources","Geography","Energy and society","Forestry"]
//               }

// const categoriesLoader = async () => {
//   const db = await getDatabase();
//   const categoriesCollection = db.collection<Category>('categories');
//   // categoriesCollection.insertMany(
//   const cats = []
//   Object.keys(_categories).map((name, index) => {
//     const category = {
//       name: name,
//       description:name,
//       slug: name.toLowerCase().replace(/\s+/g, '-'),
//       parent: null
//     }
//     _categories[name].map((subCategory: any) => {
//       const subCat = {
//         name: subCategory,
//         description: subCategory,
//         slug: subCategory.toLowerCase().replace(/\s+/g, '-'),
//         parent: category.slug
//       }
//       cats.push(subCat);
//     })
//     cats.push(category);
//   })
//   return await categoriesCollection.insertMany(cats);
// }

export class BlogPosts {
  static async getAll() {
    // await categoriesLoader()
    const db = await getDatabase();
    const postsCollection = db.collection<BlogPost>('blogs');
    return postsCollection.find({}).toArray();
  }

  static async create(post: BlogPost) {
    const db = await getDatabase();
    const postsCollection = db.collection<BlogPost>('blogs');
    await postsCollection.insertOne(post);
  }

  static async findById(id: string) {
    const db = await getDatabase();
    const postsCollection = db.collection<BlogPost>('blogs');
    return postsCollection.findOne({ id });
  }

  static async update(id: string, data: Partial<BlogPost>) {
    const db = await getDatabase();
    const postsCollection = db.collection<BlogPost>('blogs');
    return await postsCollection.updateOne({ id }, { $set: data });
  }

  static async delete(id: string) {
    const db = await getDatabase();
    const postsCollection = db.collection<BlogPost>('blogs');
    return await postsCollection.deleteOne({ id });
  }
}

export class Comments {
  static async getAll() {
    const db = await getDatabase();
    const commentsCollection = db.collection<Comment>('comments');
    return commentsCollection.find({}).toArray();
  }

  static async create(comment: Comment) {
    const db = await getDatabase();
    const commentsCollection = db.collection<Comment>('comments');
    await commentsCollection.insertOne(comment);
  }

  static async findById(id: string) {
    const db = await getDatabase();
    const commentsCollection = db.collection<Comment>('comments');
    return commentsCollection.findOne({ id });
  }

  static async update(id: string, data: Partial<Comment>) {
    const db = await getDatabase();
    const commentsCollection = db.collection<Comment>('comments');
    return await commentsCollection.updateOne({ id }, { $set: data });
  }

  static async getAllByPostId(postId: string) {

    const db = await getDatabase();
    const commentsCollection = db.collection<Comment>('comments');
    const comments = await commentsCollection.find({ postId }).toArray();
    const all = await Promise.all(comments.map(async comment => ({ ...comment, user: !comment.userId.includes('user') && await Users.findById(comment.userId) })))
    return all;
  }

  static async delete(id: string) {
    const db = await getDatabase();
    const commentsCollection = db.collection<Comment>('comments');
    return await commentsCollection.deleteOne({ id });
  }
}





