<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(API_URL + "/api/members", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    const members = await res.json();

    return { members };
  }
</script>

<script>
  export let members;
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import Button, { Icon } from "@smui/button";
  import List, {
    Group,
    Item,
    Graphic,
    Meta,
    Label,
    Separator,
    Subheader,
    Text,
    PrimaryText,
    SecondaryText
  } from "@smui/list";
  import Radio from "@smui/radio";
  import Checkbox from "@smui/checkbox";

  let selectionIndex = null;
  let selectedCheckbox = [];
  let selectionTwoLine = "";

  async function addMember() {
    await goto("/members/create");
  }
  onMount(async () => {
    const res = await fetch(API_URL + "/api/members", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    members = await res.json();
  });

  function sortByName(a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  }
</script>

<style>

</style>

{#if members}
  <List
    class="demo-list"
    twoLine
    avatarList
    singleSelection
    bind:selectedIndex={selectionIndex}>
    {#each members
      .sort(sortByName)
      .filter(t => !t.present && !t.cancelled) as member (member._id)}
      <Item>
        <Graphic
          style="background-image:
          url(https://via.placeholder.com/40x40.png?text={member.name
            .split(' ')
            .map(val => val.substring(0, 1))
            .join('')});" />
        <Text>
          <PrimaryText>{member.name}</PrimaryText>
          <SecondaryText>{member.role}</SecondaryText>
        </Text>
        <Meta>
          <Button
            on:click={() => goto('members/edit/' + member._id)}
            type="button"
            class="btn-sm float-right ml-auto p-2"
            color="primary">
            edit
          </Button>
        </Meta>
      </Item>
      <Separator />
    {/each}
  </List>
{:else}
  <p style="color: red; text-align: center">No members</p>
{/if}

<div style="text-align: center">
  <Button id="addMemberButton" on:click={addMember}>Add member</Button>
</div>
