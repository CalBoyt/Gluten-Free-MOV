import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CommentList = () => {
    const [ comments, setComments ] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/comments?_expand=user`)
                .then(r => r.json())
                .then((commentArray) => {
                    setComments(commentArray)

                })
        },
        []
    )


    return <>

    {/* <button onClick={() => navigate("/commentForm")}>Create Comment</button> */}
          <h2>Comments</h2>
        
        <article className="comments">
            {
                comments.map(
                    (comment) => {
                        return <section className="comment">
                            <header className="has-text-danger">
                                {/* <Link to={`/comments/${comment.id}/edit`}>Comment {comment.id}</Link> */}
                                
                            </header>
                            <div class="card">
                            <section>{comment?.user?.username}'s comment:</section>
                            <div>{comment.comment}</div>
                            </div>
                        </section>
                        
                        
                    }
                )
            }
        </article>
    
    </>
}
