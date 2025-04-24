const Task = require('../Models/Task');
const User = require('../Models/User');

exports.createTask = async (req, res) => {
    try {
        const { title, description, status, type, dueDate } = req.body;

        if (!title || !description || !status || !type || !dueDate) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields!'
            });
        }

        const userId = req.user._id.toString();

        const task = await Task.create({
            title,
            description,
            status,
            type,
            dueDate: dueDate,
            userId
        });

        const user = await User.findById(userId);
        user.Tasks.push(task._id);
        await user.save();

        res.status(201).json({
            success: true,
            message: 'Task created successfully!',
            task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task!',
            error: error.message
        });
    }
};

// get all daily tasks for a user

// get all weekly tasks for a user

// get all monthly tasks for a user