import React from 'react'

function WelcomObject(props){
    const {name, age, username} = props.children;

    const lienTraget = {
href: "http://elmouelhia.free.fr/",
target: "_blank",
name:"link"
}

    // const [ville, boulvard, cp] = props.children ;
    return <div>
        <h1>Welcom {name} a {age} annees with a username {username}</h1>
        <p>
Voici un lien vers ma page,
<a {...lienTraget}> Cliquez pour visiter</a>
</p>
        </div>
}

export default WelcomObject;