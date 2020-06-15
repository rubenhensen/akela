<script context="module">
  export async function preload() {
    const res = await this.fetch(API_URL + "/api/users", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    const users = await res.json();

    const res2 = await this.fetch(API_URL + '/api/users/me', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    const profile = await res2.json();

    return { users, profile };
  }
</script>

<script>
    import {loggedIn} from '../stores.js';
    import Paper, {Title, Subtitle, Content} from '@smui/paper';
    import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
    import List, {
      Item,
      Graphic,
      Meta,
      Separator,
      Subheader,
      Text,
      PrimaryText,
      SecondaryText
    } from "@smui/list";
    import Textfield, { Input, Textarea } from "@smui/textfield";

    export let users;
    export let profile;
    let buttonVariant = 'outlined';
    let wantsToEdit = false;

    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    async function logOut() {
        let res;
        if (process.browser) res = await fetch(API_URL + '/api/auth/logout', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        const profile = await res.json();
        if (res.ok) {
            return profile;
        } else {
            throw new Error(profile.message);
        }
    }

    function editUser() {
      wantsToEdit = true;
    }

  function handleSubmit() {
    let url = API_URL + `/api/users/${profile.user._id}`;
    let data = {
      name: profile.user.name,
      email: profile.user.email,
      _id: profile.user._id
    };
    postData(url, data).then(() => wantsToEdit = false);
  }
</script>
    <div class="paper-container center">
        <Paper class="paper-demo">
          <Title>{profile.user.name}</Title>
          <Subtitle>{profile.user.email}</Subtitle>
          {#if wantsToEdit}
          <form on:submit|preventDefault={handleSubmit}>
            <div>
              <Textfield
                input$required
                id="profileName"
                type="text"
                variant="outlined"
                withLeadingIcon
                bind:value={profile.user.name}
                label="Name"
                input$aria-controls="helper-text-outlined-b"
                input$aria-describedby="helper-text-outlined-b">
              </Textfield>
            </div>
            <div>
              <Textfield
                input$required
                id="profileEmail"
                type="text"
                variant="outlined"
                withLeadingIcon
                bind:value={profile.user.email}
                label="E-mail"
                input$aria-controls="helper-text-outlined-b"
                input$aria-describedby="helper-text-outlined-b">
              </Textfield>
            </div>
            <div>
              <Button type="submit" variant="raised">
                <Label>Save</Label>
              </Button>
            </div>
          </form>
          {:else}
          <Button on:click={editUser}>Edit</Button>
          {/if}
{#if $loggedIn}
	<!--    <Button variant={buttonVariant} on:click={logOut}>Logout</Button>-->
{/if}
        </Paper>
    </div>

    <div class="paper-container">
        <Paper class="paper-demo">
  <List
    class="demo-list"
    twoLine
    avatarList
    singleSelection>
  <Subheader>Other users</Subheader>
    {#each users as user (user._id)}
      {#if user._id !== profile.user._id}
      <Item>
        <Graphic
          style="background-image:
          url(https://via.placeholder.com/40x40.png?text={user.name
            .split(' ')
            .map(val => val.substring(0, 1))
            .join('')});" />
        <Text>
          <PrimaryText>{user.name}</PrimaryText>
          <SecondaryText>{user.email}</SecondaryText>
        </Text>
      </Item>
      <Separator />
      {/if}
    {/each}
  </List>
        </Paper>
    </div>
<style>
    .paper-container {
        margin: .8em;
    }
  .center {
    text-align: center;
  }

  form {
    display: inline-block;
  }

  :global(.mdc-text-field) {
    margin-bottom: 0.8em;
  }

  :global(.mdc-select) {
    margin-bottom: 0.8em;
  }
</style>
