const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample product data
const products = [
    {
        id: 1,
        name: 'Red Rose Bouquet',
        price: 10,  // Price is now a number
        image: 'https://www.juneflowers.com/wp-content/uploads/2022/09/red_rose_of_love.jpg',
        description: 'A beautiful red rose for all occasions.'
    },
    {
        id: 2,
        name: 'Tulip Bouquet',
        price: 15,  // Price is now a number
        image: 'https://m.media-amazon.com/images/I/51aFomSk7eL.jpg',
        description: 'A vibrant bouquet of tulips for a cheerful occasion.'
    },
    {
        id: 3,
        name: 'Sunflower',
        price: 12,  // Price is now a number
        image: 'https://freshknots.in/wp-content/uploads/2022/12/2-540x540.jpg',
        description: 'A bright sunflower for a sunny disposition.'
    },
    {
        id: 4,
        name: 'Vase - Glass',
        price: 20,  // Price is now a number
        image: 'https://m.media-amazon.com/images/I/81c31B0GLoS._AC_UF894,1000_QL80_.jpg',
        description: 'A stylish glass vase perfect for any bouquet.'
    },
    {
        id: 5,
        name: 'Gift Box',
        price: 25,  // Price is now a number
        image: 'https://s.alicdn.com/@sc04/kf/Ha43d33d21a4944618de3a2067dda36deS.jpg_720x720q50.jpg',
        description: 'A beautiful gift box filled with assorted flowers.'
    },
    {
        id: 6,
        name: 'Custom Bouquet',
        price: 30,  // Price is now a number
        image: 'https://s.alicdn.com/@sc04/kf/H2080985af4d041d0bc70c25d5c56f413a.jpg_720x720q50.jpg',
        description: 'Create your own bouquet with a selection of flowers.'
    },
    {
        id: 7,
        name: 'Orchid Bouquet',
        price: 35,  // Price is now a number
        image: 'https://www.farmerica.in/wp-content/uploads/2024/07/flower2.jpeg',
        description: 'A beautiful orchid bouquet for a sophisticated touch.'
    },
    {
        id: 8,
        name: 'Lily Arrangement',
        price: 22,  // Price is now a number
        image: 'https://www.flowers2indore.com/productimages/FLH1656-VA_big.jpg',
        description: 'Elegant lilies arranged to perfection.'
    }
];

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get products
app.get('/api/products', (req, res) => {
    res.json(products); // Sends the products array as JSON
});

// Serve the index.html file (home page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});

// Serve cart.html (cart page)
app.get('/cart.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'), (err) => {
        if (err) {
            res.status(err.status).end();
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});