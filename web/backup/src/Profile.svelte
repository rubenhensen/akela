<script>
    let profile = {
        "user": {
            "role": "",
            "_id": "",
            "name": "",
            "email": "",
            "createdAt": "",
            "updatedAt": "",
            "__v": null
        },
        "token": ""
    };

    async function getData(url = '') {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            // headers: {
            //     'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    function handleSubmit() {
        let url = 'http://localhost:3000/api/users/me';
        let data = {};
        getData(url).then(data => profile = data);
    }

    function log() {
        console.log("clicked");
    }
</script>

<h2>Profile</h2>

    <button on:click={handleSubmit}>
        Get profile
    </button>



<p>name: {profile.user.name}</p>
<p>_id: {profile.user._id}</p>
<p>role: {profile.user.role}</p>
<p>email: {profile.user.email}</p>
<p>createdAt: {profile.user.createdAt}</p>
<p>__v: {profile.user.__v}</p>
<p>token: {profile.token}</p>


<style>

</style>
