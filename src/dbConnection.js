
const Sequelize = require('sequelize');
const config = require('./models/config/config.json')[process.env.NODE_ENV]
console.log(config);

        let sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host,
            dialect: config.dialect,
            operatorsAliases: false,
        
            pool: {
            max: 5,
            min: 0, 
            acquire: 30000,
            idle: 10000
            },
        });
        

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        exports.getConnection = function(){
            return sequelize;
        }
