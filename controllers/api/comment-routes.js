const router = require('express').Router();
const { Post, Comment } = require('../../models');

//GET /api/comments ============================================================================
router.get('/', (req,res) => {
    Comment.findAll({
        include:
            {
                model: Post,
                attributes: ['title', 'post_text']
            }   

    })
    .then(dbCommentData => {
        res.json(dbCommentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//POST ======================================================================================
router.post('/', (req,res) => {
    //check session
    if(req.session){
        Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
    
});


//DELETE ====================================================================================
router.delete('/:id', (req,res) => {
    Comment.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData){
            res.status(404).json({ message: 'No such comment found' });
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });


});



module.exports = router

