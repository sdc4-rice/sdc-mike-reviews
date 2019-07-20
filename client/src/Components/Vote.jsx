import React from 'react';

function Vote (props) {
  return (
    <div id="vote_buttons">
                    <button id="upvote" onClick={props.vote} className={props._id} name="upvote">👍</button>
                    <button id="downvote" onClick={props.vote} className={props._id} name="downvote">👎</button>
                  </div>
  )
}

export default Vote
