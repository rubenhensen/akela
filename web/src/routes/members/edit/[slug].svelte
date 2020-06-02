<script context="module">
    export async function preload({ params, query }) {
        // the `slug` parameter is available because
        // this file is called [slug].svelte
        const res = await this.fetch(API_URL + `/api/members/${params.slug}`, {
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
        const data = await res.json();
        let {role, _id, name} = await data;
        if (res.status === 200) {
            return {role, _id, name};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    export let name;
    export let role;
    export let _id;

    import Textfield, {Input, Textarea} from '@smui/textfield';
    import Icon from '@smui/textfield/icon/index';
    import Button, {Label} from '@smui/button';
    import Select, {Option} from '@smui/select';


    let roles = ["Leiding", "Roverscout", "Explorer", "Scout", "Welp J.", "Welp M.", "Bever"];
    let valueOutlined;

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    async function deleteData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                // 'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    function handleSubmit() {
        let url = API_URL + `/api/members/${_id}`;
        let data = {
            name,
            role,
            _id
        }
        postData(url, data);
    }

    function handleDelete() {
        let url = API_URL + `/api/members/${_id}`;
        deleteData(url);
    }
</script>

<!--<p>Name: {name}</p>-->
<!--<p>Role: {role}</p>-->
<!--<p>_id: {_id}</p>-->




<div class="center">
    <h2>Edit member</h2>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <Textfield variant="outlined" withLeadingIcon bind:value={name} label="Name"
                       input$aria-controls="helper-text-outlined-b" input$aria-describedby="helper-text-outlined-b">
                <Icon class="material-icons">person</Icon>
            </Textfield>
            <!--        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>-->
            <!--        <pre class="status">Value: {valueOutlinedB}</pre>-->
        </div>
        <div>
            <Select variant="outlined" bind:value={role} label="Group">
<!--                <Option value=""></Option>-->
                {#each roles as roleOption}
                    <Option value={roleOption} selected={role === roleOption}>{roleOption}</Option>
                {/each}
            </Select>
            <!--        <HelperText id="helper-text-outlined-b">Helper Text</HelperText>-->
            <!--        <pre class="status">Value: {valueOutlinedB}</pre>-->
        </div>
        <div>
            <Button type="submit" variant="raised"><Label>Save</Label></Button>
            <Button type="button" variant="raised" on:click={handleDelete}><Label>Delete</Label></Button>
        </div>
    </form>
</div>

<style>
    h2 {
        text-align: center;
        margin: 1em 0;
    }

    .center {
        text-align: center;
        /*margin: 0 auto;*/
    }

    form {
        display: inline-block;
    }

    :global(.mdc-text-field) {
        margin-bottom: .8em;
    }

    :global(.mdc-select) {
        margin-bottom: .8em;
    }

</style>