import PropTypes from 'prop-types';

const userData=[
    {
        name:"Catherine",
        place:"Salem",
        position:"Software Engineer",
        skills:["UI/UX","Java","HTML","CSS","JavaScript","React"],
        online:true,
        profile:"images/1.png",
    },
    {
        name:"Angel",
        place:"New York",
        position:"Web Developer",
        skills:["NextJS","Java","HTML","CSS","JavaScript","React","MongoDB"],
        online:false,
        profile:"images/2.png",
    },
    {
        name:"Robert",
        place:"San Francisco",
        position:"AI Engineer",
        skills:["AI","ML","Java","HTML","CSS","JavaScript","React","MySQL"],
        online:true,
        profile:"images/3.png",
    }
];

function User(props)
{
    return <div className='card-container'>
        <span className={props.online?"pro online":"pro offline"}> {props.online?"ONLINE":"OFFLINE"} </span>
        <img className='img' src={props.profile} alt='' width={100}/>
        <h3>{props.name}</h3>
        <h3>{props.place}</h3>
        <p>{props.position}</p>
        <div className='buttons'>
            <button className='primary'>Message</button>
            <button className='primary outline'>Following</button>
        </div>
        <div className='skills'>
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}

export const Cards = () => {
  return <>
  {userData.map((user,index)=>(
    <User key={index} name={user.name} place={user.place} position={user.position} online={user.online} profile={user.profile} skills={user.skills}/>
  ))}
  </>
}

User.propTypes={
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};