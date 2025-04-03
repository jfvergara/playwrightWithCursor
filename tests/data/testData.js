const testData = {
    users: {
        admin: {
            username: 'admin',
            password: 'admin123',
            role: 'administrator'
        },
        standard: {
            username: 'user',
            password: 'user123',
            role: 'standard'
        }
    },
    products: {
        valid: {
            name: 'Test Product',
            price: '99.99',
            description: 'Test product description'
        },
        invalid: {
            name: '',
            price: 'invalid',
            description: ''
        }
    },
    api: {
        endpoints: {
            login: '/api/login',
            products: '/api/products',
            users: '/api/users'
        },
        statusCodes: {
            success: 200,
            created: 201,
            badRequest: 400,
            unauthorized: 401,
            notFound: 404
        }
    }
};

module.exports = testData; 