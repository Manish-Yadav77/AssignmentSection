const faker = require("faker");
const { id_ID } = require("faker/lib/locales");
console.log("hello world");

// require("mongodb")

const url =
  "mongodb+srv://wwwmanishboss969:VDSrsQdYzU54QYsO@cluster0.0jovk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient, Timestamp } = require("mongodb");
const Client = new MongoClient(url);
const dbName = "AggregationsData";
// [  here i created a new collection name students  ]

async function main() {
  try {
    await Client.connect();
    console.log("mongodb connect successfully...");
    // console.log(module.exports)
    const db = Client.db(dbName);
    const userCollection = db.collection("users");
    const reviewCollecion = db.collection("reviews");
    const paymentCollection = db.collection("payments");
    const orderCollection = db.collection("orders");
    const productCollection = db.collection("products");

    // await userCollection.insertMany(
    //     [
    //         { _id: 1, name: "Amit", age: 25, city: "Delhi", email: "amit@gmail.com",
    //         created_at: "2024-01-10T10:00:00Z" },
    //         { _id: 2, name: "Suman", age: 30, city: "Mumbai", email: "suman@yahoo.com",
    //         created_at: "2023-12-15T12:30:00Z" },
    //         { _id: 3, name: "Ravi", age: 22, city: "Bangalore", email: "ravi@gmail.com",
    //         created_at: "2024-02-20T08:45:00Z" },
    //         { _id: 4, name: "Priya", age: 27, city: "Kolkata", email: "priya@hotmail.com",
    //         created_at: "2024-03-01T15:20:00Z" },
    //         { _id: 5, name: "Vikram", age: 35, city: "Pune", email: "vikram@gmail.com",
    //         created_at: "2023-11-05T18:10:00Z" },
    //         { _id: 6, name: "Neha", age: 29, city: "Chennai", email: "neha@gmail.com",
    //         created_at: "2024-02-28T09:15:00Z" },
    //         { _id: 7, name: "Rahul", age: 32, city: "Hyderabad", email: "rahul@gmail.com",
    //         created_at: "2024-01-25T14:05:00Z" }
    //         ]
    // )

    // await reviewCollecion.insertMany(
    //     [
    //         { _id: 401, user_id: 1, product_id: 101, rating: 5, comment: "Excellent laptop!" },
    //         { _id: 402, user_id: 2, product_id: 102, rating: 4, comment: "Good phone, but battery could be better." },
    //         { _id: 403, user_id: 3, product_id: 103, rating: 3, comment: "Average quality shoes." },
    //         { _id: 404, user_id: 4, product_id: 104, rating: 4, comment: "Nice watch, looks premium." },
    //         { _id: 405, user_id: 5, product_id: 105, rating: 5, comment: "Amazing TV, great display!" }
    //         ]
    // )

    // await paymentCollection.insertMany(
    //     [
    //         { _id: 301, order_id: 201, amount: 50000, payment_method: "Credit Card",
    //         payment_date: "2024-03-02T12:30:00Z", status: "Success" },
    //         { _id: 302, order_id: 202, amount: 40000, payment_method: "UPI",
    //         payment_date: "2024-03-05T16:00:00Z", status: "Pending" },
    //         { _id: 303, order_id: 203, amount: 9000, payment_method: "Debit Card",
    //         payment_date: "2024-03-10T09:45:00Z", status: "Failed" }
    //         ]
    // )

    // await orderCollection.insertMany(
    //     [
    //         { _id: 201, user_id: 1, product_id: 101, quantity: 1, order_date:
    //         "2024-03-02T12:00:00Z", status: "Delivered" },
    //         { _id: 202, user_id: 2, product_id: 102, quantity: 2, order_date:
    //         "2024-03-05T15:45:00Z", status: "Shipped" },
    //         { _id: 203, user_id: 3, product_id: 103, quantity: 3, order_date:
    //         "2024-03-10T09:30:00Z", status: "Pending" },
    //         { _id: 204, user_id: 4, product_id: 104, quantity: 1, order_date:
    //         "2024-03-12T11:15:00Z", status: "Delivered" },
    //         { _id: 205, user_id: 5, product_id: 105, quantity: 1, order_date:
    //         "2024-03-14T08:50:00Z", status: "Cancelled" }
    //         ]
    // )

    // await productCollection.insertMany(
    //     [
    //         { _id: 101, name: "Laptop", category: "Electronics", price: 50000, stock: 10,
    //         rating: 4.5 },
    //         { _id: 102, name: "Mobile", category: "Electronics", price: 20000, stock: 15,
    //         rating: 4.2 },
    //         { _id: 103, name: "Shoes", category: "Fashion", price: 3000, stock: 50, rating:
    //         4.0 },
    //         { _id: 104, name: "Watch", category: "Fashion", price: 7000, stock: 30, rating:
    //         4.3 },
    //         { _id: 105, name: "TV", category: "Electronics", price: 40000, stock: 5, rating: 4.6
    //         },
    //         { _id: 106, name: "Headphones", category: "Electronics", price: 2500, stock: 25,
    //         rating: 4.1 },
    //         { _id: 107, name: "Jeans", category: "Fashion", price: 1500, stock: 60, rating: 4.0
    //         },
    //         { _id: 108, name: "T-Shirt", category: "Fashion", price: 1200, stock: 70, rating:
    //         3.9 },
    //         { _id: 109, name: "Refrigerator", category: "Appliances", price: 30000, stock: 8,
    //         rating: 4.7 },
    //         { _id: 110, name: "Microwave", category: "Appliances", price: 10000, stock: 12,
    //         rating: 4.4 }
    //         ]
    // )

    // console.log("data inserted of every collection successfully...");

    console.log();

    //     📌 50 Aggregation Pipeline Practice Questions

    //              1️⃣Basic Aggregations

    // 1. Find all users who are older than 30.

    // const ageStudent = await userCollection.aggregate([
    //    {$match:{age:{$gt:30}}}
    // ]
    // ).toArray();
    // console.log("all users older than 30",ageStudent);

    // 2. Find products that cost more than ₹10,000.

    // const gtProducts = await productCollection.aggregate([
    //     {$match:{price:{$gt:10000}}}
    // ]).toArray();

    // console.log("products that cost more than ₹10,000",gtProducts);

    // 3. Count total products in the database.

    // const totalProducts = (await productCollection.aggregate().toArray()).length;

    // console.log("total Products in database",totalProducts);

    // 4. Find users who registered after January 2024.

    // const timestamps = '2024-01-25T14:05:00Z'

    // const timestamps = new Date();
    // timestamps.setFullYear(timestamps.getFullYear()-1)

    // const userData = await userCollection.aggregate([
    //     {$match:{created_at:{$gt:timestamps}}}
    // ]).toArray();

    // console.log("users after 2024",userData);

    // 5. Get total stock of all fashion products.

    // const totalFashion = (await productCollection.aggregate([
    //     {$match:{category:{$eq:'Fashion'}}}
    // ]).toArray()).length

    // console.log("total fashion stocks",totalFashion);

    // 6. Find all users who live in Mumbai or Delhi.

    // const userData = await userCollection.aggregate([
    //     {$match: {$or:[
    //             { city: { $eq: 'Mumbai' } },
    //             { city: { $eq: 'Delhi' } }
    //           ]}
    //     }
    // ]).toArray();

    // console.log("all users who lived in Mumbai or Delhi",userData);

    // 7. Find products with a rating higher than 4.5.

    // const rating = await productCollection.aggregate([
    //     {$match:{rating:{$gt:4.5}}}
    // ]).toArray();

    // console.log("products above than 4.5 rating",rating);

    // 8. Sort products by price in descending order.

    // const sortProduct = await productCollection.aggregate([
    //     {$sort:{price:-1}}
    // ]).toArray();

    // console.log("sorted products in descending order",sortProduct);

    // 9. Display only product names and prices.

    // const products = await productCollection.aggregate([
    //     {$project:{name:1,price:1,_id:0}}
    // ]).toArray();

    // console.log("products only Names and Prices",products);

    // 10. Get the average price of all products.

    // const avgPrice = await productCollection.aggregate([
    //     {$group: {
    //         _id: null,
    //         averagePrice: { $avg: "$price" }
    //     }}
    // ]).toArray();

    // console.log("avg price",avgPrice);

    // ⃣Intermediate Aggregations

    // 11. Find the most expensive product in each category

    // const expensiveProduct = await productCollection.aggregate([
    //     {$group:{
    //         _id:'$category',
    //         expensiveProduct:{$max:"$price"}
    //     }}
    // ]).toArray();

    // console.log("expensive product in each category",expensiveProduct);

    // 12. Count how many users have placed an order.

    // const usersOrder = (await orderCollection.aggregate([
    //     {$match:{
    //         $or:[
    //             {status:{$eq:'Delivered'}},
    //             {status:{$eq:'Shipped'}},
    //         ]
    //     }}
    // ]).toArray()).length;

    // console.log("user that have placed orders",usersOrder);

    // 13. Get total sales amount for all orders.

    // const usersOrder = await paymentCollection.aggregate([
    //     {$group:{_id:null,totalRevenue:{$sum:'$amount}}}
    //     ]).toArray();

    //     console.log("total sales amount",usersOrder);

    // 14. Find orders that are still pending.

    // 1st Way...
    // const pendingOrders = await orderCollection.aggregate([
    // {$match:{status:'Pending'}}
    //     ]).toArray();

    //     console.log("orders that are still pending", pendingOrders);

    // 2nd Way...

    //     const pendingOrders = await orderCollection
    //   .aggregate([
    //     { $match: { status: { $eq: "Pending" } } },
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "OrderDetails",
    //       },
    //     },
    //     {
    //       $unwind: "$OrderDetails",
    //     },
    //     {
    //       $group: {
    //         _id: "$_id",
    //         productName: { $first: "$OrderDetails.name" },
    //       },
    //     },
    //     {
    //         $project: {
    //             _id: 0,
    //             orderId: "$_id",
    //             productName: 1,
    //         }
    //     }
    //   ])
    //   .toArray();

    //     console.log("orders that are still pending", pendingOrders);

    // 15. Find total earnings from delivered orders.

    // const usersOrder = await orderCollection.aggregate([
    //         {
    //             $match: {
    //                 status: { $eq: 'Delivered' }
    //             }
    //         },
    //         {$lookup:{
    //             from:"products",
    //             localField:"product_id",
    //             foreignField:"_id",
    //             as:"OrderDetails"
    //         }},
    //         {
    //             $unwind:'$OrderDetails'
    //         },
    //         {
    //             $group:{
    //                 _id:null,
    //                 totalEarnings:{$sum:{$multiply:['$quantity','$OrderDetails.price']}}
    //             }
    //         }
    //         ]).toArray();

    //         console.log("total earnings",usersOrder);

    // 16. Find top 3 most expensive products.

    // const mostExpensiveProduct = await productCollection.aggregate([
    //     {$sort:{price:-1}},
    //     {$limit:3}
    // ]).toArray();

    // console.log("top 3 expensive products",mostExpensiveProduct);

    // 17. Find users who haven't placed an order.

    // const usersWithoutOrders = await userCollection.aggregate([
    //     {
    //         $lookup: {
    //             from: "orders",
    //             localField: "_id",
    //             foreignField: "user_id",
    //             as: "orderDetails"
    //         }
    //     },
    //     {
    //         $match: {
    //             orderDetails: { $eq: [] }
    //         }
    //     },
    //     {
    //         $project: {
    //             _id: 0,
    //         }
    //     }
    // ]).toArray();

    // console.log("users without orders",usersWithoutOrders);

    // 18. Count how many orders were paid using UPI.

    // const paidUsingUpi = await paymentCollection
    //   .aggregate([
    //     {
    //       $match: {
    //         payment_method: "UPI",
    //       },
    //     },
    //     { $count: "UPI_Payment" },
    //   ])
    //   .toArray();

    // console.log("user who paid using UPI", paidUsingUpi);

    // 19. Find total revenue per category.

    // const totalRevenue = await orderCollection.aggregate([
    //     {$lookup:{
    //         from:"products",
    //         localField:"product_id",
    //         foreignField:'_id',
    //         as:'productDetails'
    //     }},
    //     {
    //         $unwind:'$productDetails'
    //     },
    //     {
    //         $group:{
    //             _id:'$productDetails.category',
    //             totalRevenue:{$sum:{$multiply:['$quantity','$productDetails.price']}}
    //         }
    //     }
    // ]).toArray()

    // console.log("total revenue",totalRevenue);

    // 20. Get all payments with a successful status.

    //     const statusCheck = await paymentCollection.aggregate([
    //         {$match:{
    //             status:'Success'
    //         }}
    //     ]).toArray()

    // console.log("payment",statusCheck);

    // ⃣Advanced Joins & Filters

    // 21. Join users with their orders.

    // const userOrder = await userCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "orders",
    //         localField: "_id",
    //         foreignField: "user_id",
    //         as: "userDetails",
    //       },
    //     },
    //     {
    //       $unwind:'$userDetails'
    //     }
    //   ])
    //   .toArray();

    // console.log("users with their orders", userOrder);

    // 22. Show all orders with user details.

    // const ordersusers = await orderCollection.aggregate([
    //   {$lookup:{
    //     from:'users',
    //     localField:'user_id',
    //     foreignField:'_id',
    //     as:'allOrdersData'
    //   }},
    //   {
    //     $unwind:'$allOrdersData'
    //   }
    // ]).toArray();

    // console.log("All orders with user Details",ordersusers);

    // 23. Show products with their reviews.

    // const productsReviews = await productCollection.aggregate([
    //   {$lookup:{
    //     from:'reviews',
    //     localField:'_id',
    //     foreignField:'product_id',
    //     as:'ProductsReviews'
    //   }},
    //   {$unwind:'$ProductsReviews'},
    //   {$project:{
    //     _id:0,
    //     name:1,
    //     reviews:'$ProductsReviews.comment'
    //   }}
    // ]).toArray();

    // console.log("Products with their Reviews",productsReviews);

    // 24. Find the highest-rated product.

    // const highrated = await reviewCollecion.aggregate([
    //   {$sort:{rating:-1}},
    //   {$limit:1},
    //   {$lookup:{
    //     from:'products',
    //     localField:'product_id',
    //     foreignField:'_id',
    //     as:'productData'
    //   }},
    //   {$unwind:'$productData'},
    //   {$project:{
    //     _id:0,
    //     rating:1,
    //     name:'$productData.name'
    //   }}
    // ]).toArray();

    // console.log("highest-rated product",highrated);

    // 25. Find the most frequently ordered product.

    // const mostFrequentProduct = await orderCollection.aggregate([
    //   {
    //     $group: {
    //       _id: "$product_id",
    //       orderCount: { $sum: 1 }
    //     }
    //   },
    //   {
    //     $sort: { orderCount: -1 }
    //   },
    //   {
    //     $limit: 1
    //   },
    //   {
    //     $lookup: {
    //       from: "products",
    //       localField: "_id",
    //       foreignField: "_id",
    //       as: "productDetails"
    //     }
    //   },
    //   {
    //     $unwind: "$productDetails"
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       productId: "$_id",
    //       productName: "$productDetails.name",
    //       orderCount: 1
    //     }
    //   }
    // ]).toArray();

    // console.log("Most frequently ordered product:", mostFrequentProduct);

    // 26. Get total payment amount per user.

    // const res = await paymentCollection.aggregate([
    //   {$lookup:{
    //     from:'orders',
    //     localField:'order_id',
    //     foreignField:'_id',
    //     as:'orderDetails'
    //   }},
    //   {$unwind:"$orderDetails"},
    //   {$group:{
    //     _id:'orderDetails.user_id',
    //     totalPayment:{$sum:'$amount'}
    //   }}
    // ]).toArray()

    // console.log("total payment ammoun per users",res);

    // 27. Find users who paid via credit card.

    // const paidCredit = await paymentCollection
    //   .aggregate([
    //     {$lookup:{
    //           from:'orders',
    //           localField:'order_id',
    //           foreignField:'_id',
    //           as:'orderDetails'
    //         }},
    //         {$unwind:"$orderDetails"},
    //    {$match:{payment_method:'Credit Card'}}
    //   ])
    //   .toArray();

    // console.log("total payment ammounts per users", paidCredit);

    // 28. Find users who gave a review rating less than 3.

    // const userReview = await reviewCollecion
    //   .aggregate([
    //    {$match:{rating:{$lt:4}}}
    //   ])
    //   .toArray();

    // console.log("users who gave rating less than 3", userReview);

    // 29. Get the most ordered product category

    // const orderedProduct = await orderCollection.aggregate([
    //   {$lookup:{
    //     from:'products',
    //     localField:'product_id',
    //     foreignField:'_id',
    //     as:'orderdProduct'
    //   }},
    //   {$unwind:'$orderdProduct'},
    //   {$group:{
    //     _id:'$orderdProduct.category',
    //     count:{$sum:1}
    //   }},
    //   {$sort:{count:-1}},
    //   {$limit:1}
    // ]).toArray();

    // console.log("ordered product",orderedProduct);

    // 30. Find the number of products each user bought.

    // const res = await orderCollection.aggregate([
    //   {$group:{
    //     _id:'$user_id',
    //     totalProducts:{$sum:'$quantity'}
    //   }}
    // ]).toArray();

    // console.log("number of products",res);

    // ⃣Complex Aggregations & Multi-stage Pipelines

    // 31. Find the total number of products sold in each category.

    // const orderedProduct = await orderCollection.aggregate([
    //   {$lookup:{
    //     from:'products',
    //     localField:'product_id',
    //     foreignField:'_id',
    //     as:'orderdProduct'
    //   }},
    //   {$unwind:'$orderdProduct'},
    //   {$group:{
    //     _id:'$orderdProduct.category',
    //     count:{$sum:"$quantity"}
    //   }}
    // ]).toArray();

    // console.log("ordered product",orderedProduct);

    // 32. Find the average rating of all products

    // const res = await productCollection.aggregate([
    //   {$group:{
    //     _id:null,
    //     totalAvg:{$avg:'$rating'}
    //   }}
    // ]).toArray();

    // console.log("avg rating",res);

    // 33. Get the list of all users along with their total order amount.

    // const res = await orderCollection.aggregate([
    //     {$lookup:{
    //       from:'products',
    //       localField:'product_id',
    //       foreignField:'_id',
    //       as:'orderdProduct'
    //     }},
    //     {$unwind:'$orderdProduct'},
    //     {$group:{
    //       _id:'$user_id',
    //       totalSum:{$sum:{$multiply:['$quantity','$orderdProduct.price']}}
    //     }}
    //   ]).toArray();

    //   console.log("ordered product",res);

    // 34. Show products with their corresponding buyer details.

    // const res = await orderCollection.aggregate([
    //     {$lookup:{
    //       from:'users',
    //       localField:'user_id',
    //       foreignField:'_id',
    //       as:'userDetails'
    //     }},
    //     {$unwind:'$userDetails'},
    //     {$lookup:{
    //       from:'products',
    //       localField:'product_id',
    //       foreignField:'_id',
    //       as:'productDetails'
    //     }},
    //     {$unwind:'$productDetails'}
    //   ]).toArray();

    //   console.log("ordered product",res);

    // 35. Find users who have spent more than ₹50,000.

    // const spentMore = await orderCollection.aggregate([
    //   {$lookup:{
    //     from:'products',
    //     localField:'product_id',
    //     foreignField:'_id',
    //     as:'productDetails'
    //   }},
    //   {$unwind:'$productDetails'},
    //   {$group:{
    //     _id:'$_id',
    //     spentData:{$sum:{$multiply:['$quantity','$productDetails.price']}}
    //   }},
    //   {$match:{
    //     spentData:{$gte:50000}
    //   }}
    // ]).toArray();

    // console.log("spent more", spentMore);

    // 36. Get the most popular product based on the number of orders.

    // const popularProduct = await orderCollection.aggregate([
    //   {$group:{
    //     _id:'$_id',
    //     count:{$sum:1}
    //   }},
    //   {$sort:{count:-1}},
    //   {$limit:1}
    // ]).toArray();

    // console.log("popular product",popularProduct);

    // 37. Find all users who placed an order in the last 30 days.

    // const time = new Date();
    // time.setDate(time.getDate()-30) /// previous 39 days minus only here fix it...

    // const placedOrders = await orderCollection
    //   .aggregate([
    //     { $match: { $and:[{status:{$eq:'Delivered'}},{order_date:{$gt:'2024-03-02T12:00:00Z'}}]} },
    //     {
    //       $lookup: {
    //         from: "users",
    //         localField: "user_id",
    //         foreignField: "_id",
    //         as: "userDetails",
    //       },
    //     },
    //     { $unwind: "$userDetails" },
    //   ])
    //   .toArray();

    // console.log("users who placed the order", placedOrders);

    // 38. Find the highest-grossing product

    // const highestGrossingProduct = await orderCollection.aggregate([
    //   {
    //     $lookup: {
    //       from: "products",
    //       localField: "product_id",
    //       foreignField: "_id",
    //       as: "productDetails"
    //     }
    //   },
    //   {
    //     $unwind: "$productDetails"
    //   },
    //   {
    //     $group: {
    //       _id: "$product_id",
    //       totalRevenue: { $sum: { $multiply: ["$quantity", "$productDetails.price"] } }
    //     }
    //   },
    //   {
    //     $sort: { totalRevenue: -1 }
    //   },
    //   {
    //     $limit: 1
    //   },
    //   {
    //     $lookup: {
    //       from: "products",
    //       localField: "_id",
    //       foreignField: "_id",
    //       as: "productDetails"
    //     }
    //   },
    //   {
    //     $unwind: "$productDetails"
    //   }
    // ]).toArray();

    // console.log("Highest-grossing product:", highestGrossingProduct);

    // 39. Count how many orders were cancelled.

    // const ordersCancelled = (await orderCollection.aggregate([
    //   {$match:{
    //     status:'Cancelled'
    //   }},
    //   // {$group:{
    //   //   _id:null,
    //   //   count:{$sum:1}
    //   // }}
    // ]).toArray()).length;

    // console.log("orders that are cancelled",ordersCancelled);

    // 40. Find the top 3 highest-paying customers.

  // const highestPaying = await orderCollection
  // .aggregate([
  //   // {$match:{status:'Delivered'}},
  //   {$lookup:{
  //     from:'products',
  //     localField:'product_id',
  //     foreignField:'_id',
  //     as:'productDetails'
  //   }},
  //   {$unwind:'$productDetails'},
  //   { $group: { _id: '$user_id', totalAmount: { $sum: {$multiply:['$quantity','$productDetails.price']}} } },
  //   { $sort: { totalAmount: -1 } },
  //   { $limit: 3 },
  //   {
  //     $lookup: {
  //       from: "users",
  //       localField: "_id",
  //       foreignField: "_id",
  //       as: "userDetails",
  //     },
  //   },
  //   { $unwind: "$userDetails" },
  // ])
  // .toArray();

  // console.log("highest paying",highestPaying);



//   ⃣Date-based & Conditional Aggregations


// 41. Find all orders placed in March 2024.

// const time = new Date();
// time.setFullYear(time.getFullYear()-1);
// time.setDate(time.getDate()-6);

// const orderPlaced = await orderCollection.aggregate([
//   {$match:{order_date:{$gt:'2024-03-02T12:00:00Z'}}}
// ]).toArray();

// console.log("order placed in march 2024",orderPlaced);



// 42. Get the count of products added in the last 6 months.


// const sixMonthsAgo = new Date();
// sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

// const recentProductsCount = await productCollection
//   .aggregate([
//     { $match: { created_at: { $gte: sixMonthsAgo } } },
//     { $count: "productsAdded" }
//   ])
//   .toArray();

// console.log("Count of products added in the last 6 months:", recentProductsCount);


// 43. Find the users who registered in the last year.

// const lastYear = new Date();
// lastYear.setFullYear(lastYear.getFullYear()-1);
// lastYear.setMonth(lastYear.getMonth()-2);
// lastYear.setDate(lastYear.getDate()-6)


// const lastYearusers = await userCollection.aggregate([
//   {$match:{created_at : {$gte:"2024-01-10T10:00:00Z"}}}
// ]).toArray();

// console.log(lastYearusers);


// 44. Count how many payments were made in January 2024

// const janf = new Date();
// janf.setFullYear(janf.getFullYear()-1);
// janf.setMonth(janf.getMonth()-2);
// janf.setDate(janf.getDate()-6)

// const janl = new Date();
// janl.setFullYear(janl.getFullYear()-1);
// janl.setMonth(janl.getMonth()-1);
// janl.setDate(janl.getDate()-6)

// const janPayments = (await userCollection.aggregate([
//   {$match:{$and:[{payment_date:{$gte:'2024-01-10T10:00:00Z'}},{payment_date:{$lte:'2024-02-10T10:00:00Z'}}]}},
//   // {$group:{
//   //   _id:null,
//   //   count:{$sum:1}
//   // }}
// ]).toArray()).length;

// console.log('Payments that are held in january',janPayments,"payments");



// 45. Get the total revenue generated in the last quarter.


// const oct = new Date();
// oct.setMonth(oct.getMonth()-5);
// oct.setDate(oct.getDate()-6)

// const dec = new Date();
// dec.setMonth(dec.getMonth()-2);
// dec.setDate(dec.getDate()-7)

// const revenue = await orderCollection.aggregate([
//   {$match:{
//     $and:[{order_date:{$gte:'2024-010-01T12:00:00Z'}},{order_date:{$lte:'2024-12-31T12:00:00Z'}}]
//   }},
//   {$lookup:{
//     from:'products',
//     localField:'product_id',
//     foreignField:'_id',
//     as:'productDetails'
//   }},
//   {$unwind:'$productDetails'},
//   {$group:{
//     _id:null,
//     totalRevenu:{$sum:{$multiply:['$quantity','$productDetails.price']}}
//   }}
// ]).toArray();

// console.log("total revenue in last quarter",revenue);



// 46. Find all orders where the product price was above ₹25,000.


// const productPrice = await orderCollection.aggregate([
//   {$lookup:{
//     from:'products',
//     localField:'product_id',
//     foreignField:'_id',
//     as:'productDetails'
//   }},
//   {$unwind:'$productDetails'},
//   {$group:{
//     _id:'$_id',
//     product_price:{$first:'$productDetails.price'}
//   }},
//   {$match:{product_price:{$gt:25000}}}
// ]).toArray();

// console.log("orders that are above ₹ 25000",productPrice);



// 47. Show users who haven’t reviewed any product.

// const review = await userCollection.aggregate([
//   {$lookup:{
//     from:"reviews",
//     localField:'_id',
//     foreignField:'user_id',
//     as:"reviewDetails"
//   }},
//   {$match:{reviewDetails:{$eq:[]}}}
// ]).toArray();

// console.log("users who haven't reviewed any products", review);


// 48. Find the number of products ordered per month in 2024.

// const productmonth = await orderCollection.aggregate([
//   {$group:{
//     _id:'$order_date',
//     monthproduct:{$first:'$quantity'}
//   }}
// ]).toArray();

// console.log("number of product in every month", productmonth);


// 49. Find the user who has placed the highest number of orders.


// const higherorder = await orderCollection.aggregate([
//   {$group:{
//     _id:'$order_date',
//     monthproduct:{$first:'$quantity'},
//     user_id:{$first:'$user_id'}
//   }},
//   {$sort:{monthproduct:-1}},
//   {$limit:1},
//   {$lookup:{
//     from:'users',
//     localField:'user_id',
//     foreignField:'_id',
//     as:'userDetails'
//   }},
//   {$unwind:'$userDetails'}
// ]).toArray();

// console.log("users who has placed the highest number of orders", higherorder);


// 50. Get the product with the highest review count.


// const highestReview = await reviewCollecion.aggregate([
//   {$group:{
//     _id:'$product_id',
//     reviewCount:{$sum:1}
//   }},
//   {$sort:{reviewCount:-1}},
//   {$limit:1},
//   {$lookup:{
//     from:'products',
//     localField:'_id',
//     foreignField:'_id',
//     as:'productDetails'
//   }},
//   {$unwind:'$productDetails'}
// ]).toArray();

// console.log("product with the highest review count",highestReview);


  } catch (error) {
    console.log(error);
  } finally {
    await Client.close();
  }
}

main().catch(console.error);
