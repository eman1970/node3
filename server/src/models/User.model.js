import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            allowNull: false,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: false
        }

    }, { timestamps: true }
)

const UserModel = mongoose.model('user', UserSchema)
export default UserModel