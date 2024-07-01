import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "juanydani123",
    database: "inmobiliaria",
});

export default pool;

