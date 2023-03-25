const express = require('express');
const supabase = require('./supabaseClient');
const app = express();
app.use(express.json());
const port = 3000;


// GET to get the resource
// PUT to update
// POST to Insert
// DELETE to delete



// (1) fetching the value of "user" table:
app.get('/user', async (req, res) => {
    const { data, error } = await supabase
        .from('user')
        .select();
    // console.log(data,error);
    if (!error) res.json(data);
    else console.log("no such table exists");
})

// (2) fetching the value of "country" table:
app.get('/country', async (req, res) => {
    const { data, error } = await supabase
        .from('country')
        .select();
    if (!error) res.json(data);
    else console.log("no such table exists");
})


// (3) fetching the tuples with dynamic user_id":
app.get('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { data, error } = await supabase
        .from('user')
        .select();
    var flag = 0;
    if (!error) {
        for (let i = 0; i < data.length; i++) {
            if (id === data[i].id) {
                res.json(data[i]);
                flag = 1;
            }
        }
    }
    if (!flag && !error) res.send("no such tuple having this id exists");
})

// (4) creating a new record/tuple in "country" table:
app.post('/country', async (req, res) => {
    const { data, error } = await supabase
        .from('country')
        .insert({ 'country_name': 'asdf', 'postcode': 194423, 'area': 15462.25 });
    console.log('post okay');
})

// (5) creating a new record/tuple in "user" table:
app.post('/user', async (req, res) => {
    const { data, error } = await supabase
        .from('user')
        .insert({ 'id': 66, 'created_at': "2022-07-21 14:08:04+00", 'name': "asd", 'age': 15 });
    if (!error) res.send("done successfully");
})


// (6) deleting a tuple from "user" table:

app.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    const { data, error } = await supabase
        .from('user')
        .delete()
        .eq('id', id);
    if (!error) res.send("done successfully");
})


// (7) put method(updating the user info):

app.put('/user/:id', async (req, res) => {
    const id = req.params.id;
    const { data, error } = await supabase
        .from('user')
        .update({ 'id': 20 })
        .eq('id', id);
    if (!error) res.send("done successfully");

})


app.listen(port);