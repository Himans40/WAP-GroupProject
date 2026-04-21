import React,{useState,useEffect} from 'react'
import styles from "./Main.module.css"

function Main() {
  const API_URL_POSTS = "http://localhost:3700/posts";
  const API_URL_USERS = "http://localhost:3700/users"


  const [posts, setPosts] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const [users,setUsers]=useState([]);
  const [fetchUserError,setFetchUserError]=useState(null);

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(API_URL_USERS);
        if (!response.ok) throw Error("Users data Not Recieved");
        const userItems = await response.json();
        console.log(userItems);
        setUsers(userItems);
        setFetchUserError(null);
      } catch (err) {
        setFetchUserError(err.message);
      }
    };
    fetchUser();
  }, []);


  useEffect(() => {
    const fetchpost = async () => {
      try {
        const response = await fetch(API_URL_POSTS);
        if (!response.ok) throw Error("Posts data Not Recieved");
        const postItems = await response.json();
        console.log(postItems);
        setPosts(postItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };
    fetchpost();
  }, []);
  return (
      <div className={styles.mainBody}>
        <div className={styles.postsContainer}>
          {(fetchError && <p>{`Error:${fetchError}`}</p>)||(fetchUserError && <p>{`Error:${fetchUserError}`}</p>)}
          {!fetchError &&
            posts.map((post) => {
              return (
                <div key={post.id}>
                  <div className={styles.postSeprator}></div>
                  <div className={styles.postItem}>
                    <h3>userName</h3>
                    <h2>{post.title}</h2>
                    <p className={styles.post}>{post.content}</p>
                    {post.images && <img src={post.images[0]} alt="" />}
                    <p>{post.votes}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
  )
}

export default Main
