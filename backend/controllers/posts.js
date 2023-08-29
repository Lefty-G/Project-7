const { Post } = require("../models");

exports.createPost = (req, res, next) => {
    let parsedPost
    let imageUrl = null
  
    if (req.file) {
      const url = req.protocol + '://' + req.get('host');
      imageUrl = url + '/images/' + req.file.filename
      parsedPost = JSON.parse(req.body.post);
    } else {
      parsedPost = req.body;
    };
    const post = new Post({
      email: parsedPost.email,
      post: parsedPost.post,
      imageUrl,
      usersRead: []
    });
    post.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully'
        })
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };


  exports.findAll = (req, res, next) => {
    Post.findAll().then(
      (posts) => {
        res.status(200).json(posts);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

  exports.getOnePost = (req, res, next) => {
    Post.findOne({
      _id: req.params.id
    }).then(
      (post) => {
        res.status(200).json(post);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error.message || error
        });
      }
    );
  };

  exports.usersRead = (req, res, next) => {
    const userId = req.body.userId;
    const postId = req.params.id;
    const read = req.body.read;
    Post.findOne({
      _id: postId
    }).then(
      (post) => {
            console.log('Post read');
            post.usersRead.push(userId);
            post.read++;
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error.message || error
        });
      }
    );
  };


  // case 0:
  //   console.log('Cancellin like/dislike')
  //   resetLikeStatus(sauce, userId);
  //   break;
  // case -1:
  //   console.log('sauce disliked')
  //   resetLikeStatus(sauce, userId);
  //   sauce.usersDisliked.push(userId);
  //   sauce.dislikes++;
  //   break;
  // default:
  //   throw 'Unrecognised like value'
  // Post.updateOne({ _id: req.params.id }, post).then(
  //   () => {
  //     res.status(200).json({
  //       message: 'Post read'
  //     });
  //   }
  // ).catch(
  //   (error) => {
  //     res.status(400).json({
  //       error: error.message || error
  //     });
  //   }
  // );