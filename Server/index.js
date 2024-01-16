import express from 'express'
import mongoose, { Schema } from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())


const modulSchema = new Schema({
    text: { type: String, required: true },
    title: { type: String, required: true }
}, { timestamps: true })

const Moduls = mongoose.model("Moduls", modulSchema)

app.get('/moduls', async (req, res) => {
    try {
        const moduls = await Moduls.find({})
        res.send(moduls)
    } catch (error) {
        res.status(500).json({ message: error })
    }

})
app.get('/moduls/:id', async (req, res) => {
    try {
        const moduls = await Moduls.findById(req.params.id)
        res.send(moduls)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


app.post('/moduls', async (req, res) => {
    try {
        const modul = new Moduls({
            text: req.body.text,
            title: req.body.title
        })
        await modul.save()
        res.send({ message: "Created" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})




app.delete('/moduls/:id', async (req, res) => {
    try {
        const moduls = await Moduls.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)
mongoose.connect(url)
    .then(() => console.log("Db connect"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log(`Example app listening on port `)
})