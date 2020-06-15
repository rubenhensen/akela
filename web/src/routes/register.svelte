<script>
  import { goto } from "@sapper/app";
  import { loggedIn } from "../stores.js";
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import Icon from "@smui/textfield/icon/index";
  import Button, { Label } from "@smui/button";

  let name = "";
  let email = "";
  let password = "";

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function handleSubmit() {
    let url = API_URL + "/api/auth/signup";
    let data = {
      name: name,
      email: email,
      password: password
    };
    postData(url, data).then(await goto("/signin"));
  }
</script>

<style>
  h2 {
    text-align: center;
  }

  img {
    width: 70%;
    max-width: 400px;
    margin: 0 0 1em 0;
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

  span {
    margin: 0 0.8em;
  }
</style>

<svelte:head>
  <title>Akela</title>
</svelte:head>

<div class="center">

  <img alt="MBG logo" src="logozondertekst.svg" />
  <h2>Register</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <Textfield
        input$required
        type="text"
        variant="outlined"
        withLeadingIcon
        bind:value={name}
        label="Name"
        input$aria-controls="helper-text-outlined-b"
        input$aria-describedby="helper-text-outlined-b">
        <Icon class="material-icons">person</Icon>
      </Textfield>
    </div>
    <div>
      <Textfield
        input$required
        type="email"
        variant="outlined"
        withLeadingIcon
        bind:value={email}
        label="E-mail"
        input$aria-controls="helper-text-outlined-b"
        input$aria-describedby="helper-text-outlined-b">
        <Icon class="material-icons">email</Icon>
      </Textfield>
    </div>
    <div>
      <Textfield
        input$required
        variant="outlined"
        withLeadingIcon
        bind:value={password}
        label="Password"
        input$aria-controls="helper-text-outlined-b"
        input$aria-describedby="helper-text-outlined-b"
        type="password">
        <Icon class="material-icons">lock</Icon>
      </Textfield>
    </div>
    <div>
      <Button type="submit" variant="raised">
        <Label>Register</Label>
      </Button>
      <span>- or -</span>
      <Button type="button" on:click={() => goto('/signin')} ripple={false}>
        <Label>Log in</Label>
      </Button>
    </div>
  </form>
</div>
