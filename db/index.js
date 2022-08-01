const connection = require("./connection");

class Db {
  constructor(connection) {
    this.connection = connection;
  }
  findemployees(employeeid) {
    if (employeeid)
      return this.connection
        .promise()
        .query(`SELECT * FROM employee WHERE employeeid = ${employeeid}`);
    return this.connection.promise().query("SELECT * FROM employee");
  }
  finddeparment(deparmentid) {
    if (deparmentid)
      return this.connection
        .promise()
        .query(`SELECT * FROM deparment WHERE deparmentid = ${deparmentid}`);
    return this.connection.promise().query("SELECT * FROM employee");
  }
  findrole(id) {
    if (id)
      return this.connection
        .promise()
        .query(`SELECT * FROM role WHERE id = ${id}`);
    return this.connection.promise().query("SELECT * FROM employee");
  }
  addemployee(data) {
    if (data)
      return this.connection
        .promise()
        .query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(${data.firstname},${data.lastname},${data.roleid},${data.managerid})`);
    return this.connection.promise().query("SELECT * FROM employee");
  }
  adddeparment() {
    if (employeeid)
      return this.connection
        .promise()
        .query(`SELECT * FROM employee WHERE employeeid = ${employeeid}`);
    return this.connection.promise().query("SELECT * FROM employee");
  }
  addrole() {
    if (employeeid)
      return this.connection
        .promise()
        .query(`SELECT * FROM employee WHERE employeeid = ${employeeid}`);
    return this.connection.promise().query("SELECT * FROM employee");
  }
}

module.exports = new Db(connection);
