import mongoose from 'mongoose';
const connection = {};

async function connectDb() {
  /* const db = await mongoose.connect(process.env.MONGO_SRV, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }); */
  await mongoose
    .connect(
      process.env.MONGO_SRV,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
      () => {
        console.log('DB CONNECTION IS SETUP');
      }
    )
    .catch((err) => console.log(err));
}

export default connectDb;
