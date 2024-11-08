const express = require('express')
const userController = express.Router()
const db = require('../db/dbConfig.js')

// * * * *  ROUTES * * * *
// * * ALL USERS
userController.get('/', async (req, res) => {
  try {
    const users = await db.any('SELECT * FROM jobs_users')
    res.status(200).json(users)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})
// * * SINGLE USER
userController.get('/:id', async (req, res) => {
  // const id = req.params.id
   const {id} = req.params
  try {
    const user = await db.any('SELECT * FROM jobs_users WHERE id=$1',[id])
    res.status(200).json(user)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})

// * * CREATE USER
userController.post('/', async (req, res) => {
  const {fname, lname, email, phone, street, city, state, zip, jobs_role, pwd,create_dt, last_updated} = req.body
  // const id = req.params.id
  
  try {
    const newUser = await db.one('INSERT INTO jobs_users (fname, lname, email, phone, street, city, state, zip, jobs_role, pwd,create_dt, last_updated) VALUES ($1, $2, $3, $4, $5) RETURNING *', [fname, lname, email, phone, street, city, state, zip, jobs_role, pwd,create_dt, last_updated]);
       res.status(201).json(newUser)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})
// * * delete USER
userController.delete('/:id', async (req, res) => {
  const id = req.params.id
 
  
  try {
    const deletedUser = await db.one('DELETE FROM users03 WHERE id = $1, RETURNING id', [fname, lname, city, website, created_at]);
       res.status(201).json(newUser)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})


module.exports = userController;