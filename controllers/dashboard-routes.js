const router = require('express').Router();
const sequelize = require('../config/connection.js');
const {Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth.js')

router.get('/', withAuth, (req,res) => {
    Post.findAll({
        where: {
            //use the id of the user from the session
            user_id: req.session.user_id
        },

        attributes: ['id', 'post_text', 'title', 'created_at'],

        include:[
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },

            {
                model: User,
                attributes: ['Username']
            }
        ]
    })
    .then(dbPostData => {
        //serialize data before passing it to the template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggeIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//==========edit blog===============================================================
router.get('/edit/:id', withAuth, (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },

        attributes: ['id', 'post_text', 'title', 'created_at'],

        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },

            {
                model: User,
                attributes: ['username']
            }
        ]

    })
    .then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No blogs found with this id '});
            return
        }
        //serialize the data
        const post = dbPostData.get({ plain: true });

        //pass data to the template
        res.render('edit-blog', { 
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

})

module.exports = router;