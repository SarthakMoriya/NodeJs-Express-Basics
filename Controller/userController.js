import { v4 as uuidv4 } from 'uuid';



let users = [
    {
        firstname: "Sarthak",
        lastname: "Moriya",
        age: 19
    }
]

export const getUsers = (req, res) => {
    res.status(200).json({
        data: users
    })
}

export const createUser = (req, res) => {
    const finalUser = { ...req.body, id: uuidv4() }
    res.status(201).json({
        status: 'sucsex',
        data: finalUser
    })

    users.push(finalUser);
}

export const getUser = (req, res) => {
    const id = req.params.id

    const user = users.find(user => user.id === id)

    res.send(user)
}

export const deleteUser = (req, res) => {
    const id = req.params.id

    users = users.filter(user => user.id !== id)

    res.send(`User with id:${id} deleted!`)
}

export const updateUser = (req, res) => {
    const user = users.find(user => user.id === req.params.id)
    if (req.body.firstname) user.firstname = req.body.firstname
    if (req.body.lastname) user.lastname = req.body.lastname
    if (req.body.age) user.age = req.body.age

    res.send(`User with id:${req.params.id} updated`)
}