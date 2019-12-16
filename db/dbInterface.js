const {
    pool
} = require('./connection');


//Funktioniert
const getUsers = async () => {
    const client = await pool.connect();
    try {
        const res = await client.query("SELECT * FROM users");
        // console.log(res.rows);
        return res.rows;
    } catch (error) {

    }
}
//Funktioniert
const addUser = async (uD) => {
    const client = await pool.connect();

    try {
        await client.query("INSERT INTO users values (DEFAULT, $1,$2,$3)", [uD.username, uD.email, uD.password]);
        const res = await client.query("SELECT * FROM users");
        return res.rows
    } catch (error) {

    }
}



module.exports = {
    getUsers,
    addUser,
}