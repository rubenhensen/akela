<script>
  import { loggedIn } from "../stores.js";
  import { goto } from "@sapper/app";

  import Textfield, { Input, Textarea } from "@smui/textfield";
  import Icon from "@smui/textfield/icon/index";
  import Button, { Label } from "@smui/button";
  import { onMount } from "svelte";

  let email = "";
  let password = "";
  let valueOutlinedB = "";

  let selected;
  let promise;
  let clicked;

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const login = await response.json(); // parses JSON response into native JavaScript objects
    if (response.ok) {
      return login;
    } else {
      throw new Error(login.errors.message);
    }
  }

  function handleSubmit() {
    let url = API_URL + "/api/auth/signin";
    let data = {
      email: email,
      password: password
    };
    promise = postData(url, data);
    promise
      .then(() => loggedIn.update(n => true))
      .then(async () => await goto("/"));
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

<div class="center">

  <img alt="MBG logo" src="logozondertekst.svg" />
  <h2>Sign in</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <Textfield
        id="email"
        input$required
        variant="outlined"
        withLeadingIcon
        bind:value={email}
        label="E-mail"
        type="email"
        input$aria-controls="helper-text-outlined-b"
        input$aria-describedby="helper-text-outlined-b">
        <Icon class="material-icons">email</Icon>
      </Textfield>
    </div>
    <div>
      <Textfield
        id="password"
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
      <Button type="submit" id="submit" variant="raised">
        <Label>Log in</Label>
      </Button>
      <span>- or -</span>
      <Button type="button" on:click={() => goto('/register')} ripple={false}>
        <Label>Register</Label>
      </Button>
    </div>
  </form>
</div>

{#await promise}
{:then}
{:catch error}
  <p style="color: red">{error}</p>


{/await}
