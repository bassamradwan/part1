
// import React, { useState, useEffect } from 'react';
// import data from '../data/data.json';
// import './posts.css'

// function CommentList() {
//   const [CurrentUser, setcurrentUser] = useState([])
//   const [comments, setComments] = useState([]);
//   const [showInput, setShowInput] = useState(false);
//   const [selectedComment, setSelectedComment] = useState(null);
//   const [comment, setComment] = useState("");


//   useEffect(() => {
//     setcurrentUser(data.currentUser)
//     const sortedComments = data.comments.sort((a, b) => {
//       return new Date(b.createdAt) - new Date(a.createdAt);
//     });
//     setComments(sortedComments);
//   }, []);
//   const handleReplyClick = (comment) => {
//     setSelectedComment(comment);
//     setShowInput(true);
//   };
//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Create new reply
//     const newReply = {
//       id: Math.floor(Math.random() * 1000),
//       user: {
//         username: CurrentUser.username,
//         image: CurrentUser.image,
//       },
//       content: comment,
//       createdAt: new Date().toLocaleString(),
//       score: 0,
//     };
//     // Add new replyللتعليق المختار
//     const updatedComments = comments.map((c) => {
//       if (c === selectedComment) {
//         return {
//           ...c,
//           replies: [...c.replies, newReply],
//         };
//       }
//       return c;
//     });
//     setComments(updatedComments);
//     setShowInput(false);
//     setSelectedComment(null);
//     setComment('');
//   };


//   return (

//     <div className="comment-list-container">
//     {comments.map(comment => (
//       <div key={comment.id} className="comment-container">
//         <div className="card mb-3">
//           <div className="row g-0">
//             <div className="col-md-1">
//               <div className="d-flex flex-column align-items-center mypagination m-2">
//                 <button type="button" className="btn ">-</button>
//                 <span className="">{comment.score}</span>
//                 <button type="button" className="btn " >+</button>
//               </div>
//             </div>
//             <div className="col-md-11">
//               <div className='userinfo-container'>
//                 <div className='userinfo'>
//                 <img src={comment.user.image.png} className="img-fluid rounded-start " /> 
//                   <p>{comment.user.username}</p>
//                   <p className="card-text"><small className="text-body-secondary">{comment.createdAt}</small></p>
//                 </div>
//                 <a href='#' onClick={() => handleReplyClick(comment)}>Replay</a>
//               </div>
//               <div className="card-body">
//                 <h5 className="card-title">{comment.content}</h5>
//               </div>
//             </div>
//           </div>
//           <div>
//             {showInput && (
//               <form onSubmit={handleFormSubmit}>
//                 <div className='card-Replay mb-3'>
//                   <div className='card-replay'>
//                     <img src={CurrentUser.image.png} />
//                   </div>
//                   <label className='card-Replay-label' htmlFor="comment-input"></label>
//                   <textarea
//                     id="comment-input"
//                     value={comment}
//                     onChange={handleCommentChange}
//                     className='card-Replay-textarea'
//                   />
//                   <button type="submit" className='card-Replay-button'>Submit</button>
//                 </div>
//               </form>
//             )}
//           </div>
//           {comment.replies.length > 0 && (
//             <div className="replies">
//               {comment.replies.map(reply => (
//                 <div key={reply.id} className="reply-container">
//                   <div className="card mb-3">
//                     <div className="row g-0">
//                       <div className="col-md-1">
//                         <div className="d-flex flex-column align-items-center mypagination m-2">
//                           <button type="button" className="btn ">-</button>
//                           <span className="">{reply.score}</span>
//                           <button type="button" className="btn " >+</button>
//                         </div>
//                       </div>
//                       <div className="col-md-11">
//                         <div className='userinfo-container'>
//                           <div className='userinfo'>
//                             <img src={reply.user.image.png} className="img-fluid rounded-start " />
//                             <p>{reply.user.username}</p>
//                             <p className="card-text"><small className="text-body-secondary">{reply.createdAt}</small></p>
//                           </div>
//                           <a href='#' onClick={() => handleReplyClick(comment)}>Replay</a>

//                         </div>
//                         <div className="card-body">
//                           <h5 className="card-title">{reply.content}</h5>
//                         </div>
//                         <div>
//                           {showInput && (
//                             <form onSubmit={handleFormSubmit}>
//                               <div className='card-Replay mb-3'>
//                                 <div className='card-replay'>
//                                   <img src={CurrentUser.image.png} />
//                                 </div>
//                                 <label className='card-Replay-label' htmlFor="comment-input"></label>
//                                 <textarea
//                                   id="comment-input"
//                                   value={comment}
//                                   onChange={handleCommentChange}
//                                   className='card-Replay-textarea'
//                                 />
//                                 <button type="submit" className='card-Replay-button'>Submit</button>
//                               </div>
//                             </form>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     ))}
//     <div className='card-Replay '>
//       <div className='card-replay'>
//         <img src={CurrentUser.image.png} />
//       </div>
//       <label className='card-Replay-label' htmlFor="comment-input"></label>
//       <textarea
//         id="comment-input"
//         value={comment}
//         onChange={handleCommentChange}
//         className='card-Replay-textarea'
//       />
//       <button type="submit" className='card-Replay-button'>SEND</button>
//     </div>
//   </div> 

//   );
// }

// export default CommentList;

import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import './posts.css'

function CommentList() {
  const [currentUser, setCurrentUser] = useState([]);
  const [comments, setComments] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setCurrentUser(data.currentUser);
    const sortedComments = data.comments.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setComments(sortedComments);
  }, []);

  const handleReplyClick = (comment) => {
    setSelectedComment(comment);
    setShowInput(true);
  };

  const handleCommentChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Create new reply
    const newReply = {
      id: Math.floor(Math.random() * 1000),
      user: {
        username: currentUser.username,
        image: currentUser.image,
      },
      content: comment,
      createdAt: new Date().toLocaleString(),
      score: 0,
    };
    // Add new reply to selected comment
    const updatedComments = comments.map((c) => {
      if (c === selectedComment) {
        return {
          ...c,
          replies: [...c.replies, newReply],
        };
      }
      return c;
    });
    setComments(updatedComments);
    setShowInput(false);
    setSelectedComment(null);
    setComment('');
  };

  return (
    <>

      <div className="comment-list-container">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-container">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-1">
                  <div className="d-flex flex-column align-items-center mypagination m-2">
                    <button type="button" className="btn">
                      -
                    </button>
                    <span className="">{comment.score}</span>
                    <button type="button" className="btn">
                      +
                    </button>
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="userinfo-container">
                    <div className="userinfo">
                      <img
                        src={comment.user.image.png}
                        className="img-fluid rounded-start"
                      />
                      <p>{comment.user.username}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {comment.createdAt}
                        </small>
                      </p>
                    </div>
                    <a href="#" onClick={() => handleReplyClick(comment)}>
                      Replay
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{comment.content}</h5>
                  </div>
                </div>
              </div>
              <div>
                {showInput && selectedComment === comment && (
                  <form onSubmit={handleFormSubmit}>
                    <div className="card-Replay mb-3">
                      <div className="card-replay">
                        <img src={currentUser.image.png} />
                      </div>
                      <label className="card-Replay-label" htmlFor="comment-input"></label>
                      <textarea
                        id="comment-input"
                        value={comment}
                        onChange={handleCommentChange}
                        className="card-Replay-textarea"
                      />
                      <button type="submit" className="card-Replay-button">
                      Replay</button>
                    </div>
                  </form>
                )}
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="reply-container">
                    <div className="row g-0">
                      <div className="col-md-1">
                        <div className="d-flex flex-column align-items-center mypagination m-2">
                          <button type="button" className="btn">
                            -
                          </button>
                          <span className="">{reply.score}</span>
                          <button type="button" className="btn">
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-md-11">
                        <div className="userinfo-container">
                          <div className="userinfo">
                            <img
                              src={reply.user.image.png}
                              className="img-fluid rounded-start"
                            />
                            <p>{reply.user.username}</p>
                            <p className="card-text">
                              <small className="text-body-secondary">
                                {reply.createdAt}
                              </small>
                            </p>

                          </div>
                          <a href="#" onClick={() => handleReplyClick(comment)}>
                            Replay
                          </a>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{reply.content}</h5>
                        </div>
                      </div>
                      {showInput && selectedComment === comment && (
                  <form onSubmit={handleFormSubmit}>
                    <div className="card-Replay mb-3">
                      <div className="card-replay">
                        <img src={currentUser.image.png} />
                      </div>
                      <label className="card-Replay-label" htmlFor="comment-input"></label>
                      <textarea
                        id="comment-input"
                        value={comment}
                        onChange={handleCommentChange}
                        className="card-Replay-textarea"
                      />
                      <button type="submit" className="card-Replay-button">
                      Replay</button>
                    </div>
                  </form>
                )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        ))}
      </div>
      
    </>
  );
}

export default CommentList;
