require('dotenv').config();
const express = require('express');
const supabase = require('./supabaseClient');
const app = express();
app.use(express.json());
const port = 3000;


// (1) fetching(to get the resource) the value of "user" table:
app.get('/user', async (req, res) => {
    const { data, error } = await supabase
        .from('user')
        .select();
    if (!error)
    { 
        res.json(data); 
    }
    else 
    { 
        res.send("no such table exists"); 
    }
})

// (2) fetching the value of "country" table:
app.get('/country', async (req, res) => {
    const { data, error } = await supabase
        .from('country')
        .select();
    if (!error) 
    {
        res.json(data);
    }
    else 
    {
        res.send("no such table exists");
    }
})


// (3) fetching the tuples with dynamic user_id":
// localhost:3000/user/60
app.get('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { data, error } = await supabase
        .from('user')
        .select()
        .eq('id', id);
    if (!error) 
    {
        res.json(data);
    }
    else 
    {
        res.send("no such id exists");
    }
})


// (4) creating a new record/tuple in "country" table:
app.post('/country', async (req, res) => {
    const country_name = req.body.country_name;
    const postcode = req.body.postcode;
    const road_no = req.body.road_no;
    
    const { data, error } = await supabase
        .from('country')
        .insert({ 'country_name': country_name, 'postcode': postcode, 'road_no': road_no });
    res.send("posted successfully ");
})

// (5) creating a new record/tuple in "user" table(to Insert):
app.post('/user', async (req, res) => {
    const id = req.body.id;
    const created_at = req.body.created_at;
    const name = req.body.name;
    const age = req.body.age;

    const { data, error } = await supabase
        .from('user')
        .insert({ 'id': id, 'created_at': created_at, 'name': name, 'age': age });
    if (!error) 
    {
        res.send("done successfully");
    }
})


// (6) deleting a tuple from "user" table:

app.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    const { data, error } = await supabase
        .from('user')
        .delete()
        .eq('id', id);
        if (!error) 
        {
            res.send("done successfully");
        }
})


// (7) put (to update) method(updating the user info):

app.put('/user', async (req, res) => {
    const prev_id = req.body.prev_id;
    const new_id = req.body.new_id;
    const { data, error } = await supabase
        .from('user')
        .update({ 'id': new_id })
        .eq('id', prev_id);
        if (!error) 
        {
            res.send("done successfully");
        }
})


app.listen(port);