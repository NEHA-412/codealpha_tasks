const mongoose = require('mongoose');
const Product = require('C:\Users\nehas\Desktop\Ecommerce store\server\models\product'); // Assuming you have a Product model defined in 'models/Product.js'

// Sample product data to seed into the database
const products = [
    {
        name: 'Red Rose Bouquet',
        price: $10,
        image: 'https://www.juneflowers.com/wp-content/uploads/2022/09/red_rose_of_love.jpg',
        description: 'A beautiful red rose for all occasions.'
    },
    {
        name: 'Tulip Bouquet',
        price: $15,
        image: 'https://m.media-amazon.com/images/I/51aFomSk7eL.jpg',
        description: 'A vibrant bouquet of tulips for a cheerful occasion.'
    },
    {
        name: 'Sunflower',
        price: $12,
        image: 'https://freshknots.in/wp-content/uploads/2022/12/2-540x540.jpg',
        description: 'A bright sunflower for a sunny disposition.'
    },
    {
        name: 'Vase - Glass',
        price: $20,
        image: 'https://m.media-amazon.com/images/I/81c31B0GLoS._AC_UF894,1000_QL80_.jpg',
        description: 'A stylish glass vase perfect for any bouquet.'
    },
    {
        name: 'Gift Box',
        price: $25,
        image: 'https://s.alicdn.com/@sc04/kf/Ha43d33d21a4944618de3a2067dda36deS.jpg_720x720q50.jpg',
        description: 'A beautiful gift box filled with assorted flowers.'
    },
    {
        name: 'Custom Bouquet',
        price: $30,
        image: 'https://s.alicdn.com/@sc04/kf/H2080985af4d041d0bc70c25d5c56f413a.jpg_720x720q50.jpg',
        description: 'Create your own bouquet with a selection of flowers.'
    },
    {
        name: 'Orchid Bouquet',
        price: $35,
        image: 'https://www.farmerica.in/wp-content/uploads/2024/07/flower2.jpeg',
        description: 'A beautiful orchid bouquet for a sophisticated touch.'
    },
    {
        name: 'Lily Arrangement',
        price: $22,
        image: 'https://www.flowers2indore.com/productimages/FLH1656-VA_big.jpg',
        description: 'Elegant lilies arranged to perfection.'
    }
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flower-shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database connected!');
    seedDatabase();
})
.catch(err => {
    console.error('Error connecting to database:', err);
});

// Function to seed the database with product data
async function seedDatabase() {
    try {
        // First, clear the existing data
        await Product.deleteMany({});

        // Insert the product data into the database
        const createdProducts = await Product.insertMany(products);
        console.log(`${createdProducts.length} products have been added to the database.`);

        // Close the connection after seeding
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding the database:', err);
    }
}
