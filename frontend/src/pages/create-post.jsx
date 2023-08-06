import MiscNav from '../components/misc-nav'

function CreatePost() {

const getUserDetails = JSON.parse(localStorage.getItem('userDetails'));

console.log(getUserDetails);
    
return (
        <>
            <MiscNav />
            <div className="user-card">
                <div className="user-card--picture">Image here</div>
                <div id="username" className="user-card--username">{ getUserDetails.email }</div>
            </div>
            <div className="post-input"></div>
            <div className="post-input-additions">
                <div className="post-input-additions--add-photo"></div>
                <div className="post-input-additions--add-video"></div>
                <div className="post-input-additions--tag-people"></div>
            </div>
        </>
    )
}

export default CreatePost