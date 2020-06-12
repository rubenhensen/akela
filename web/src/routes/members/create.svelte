<script>
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import Icon from "@smui/textfield/icon/index";
  import Button, { Label } from "@smui/button";
  import Select, { Option } from "@smui/select";
  import { goto } from "@sapper/app";

  let name = "";
  let roles = [
    "Leiding",
    "Roverscout",
    "Explorer",
    "Scout",
    "Welp J.",
    "Welp M.",
    "Bever"
  ];
  let valueOutlined;

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
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function handleSubmit() {
    let url = API_URL + "/api/members";
    let data = {
      name: name,
      role: valueOutlined
    };
    postData(url, data).then(await goto("/members"));
  }
</script>

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
    margin-bottom: 0.8em;
  }

  :global(.mdc-select) {
    margin-bottom: 0.8em;
  }
</style>

<div class="center">
  <h2>Create new member</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <Textfield
        id="memberName"
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
      <Select
        input$required
        variant="outlined"
        bind:value={valueOutlined}
        label="Group">
        <Option value="" />
        {#each roles as role}
          <Option value={role} selected={valueOutlined === role}>{role}</Option>
        {/each}
      </Select>
    </div>
    <div>
      <Button type="submit" variant="raised">
        <Label>Save</Label>
      </Button>
    </div>
  </form>
</div>
