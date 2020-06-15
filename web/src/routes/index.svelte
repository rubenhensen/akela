<script context="module">
  export async function preload({ params, query }) {
    const res1 = await this.fetch(API_URL + "/api/members", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    const members = await res1.json();

    const res2 = await this.fetch(API_URL + "/api/presence", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    const presence = await res2.json();

    let presenceMembers = presence.map(val => val.member);
    let diff = members.filter(
      ({ _id: id1 }) => !presenceMembers.some(({ _id: id2 }) => id2 === id1)
    );
    diff = diff.map(val => {
      return { member: val };
    });
    diff.forEach(val => (val.archived = false));
    diff.forEach(val => (val.cancelled = false));
    diff.forEach(val => (val.present = false));
    let counter = diff.length;
    for await (let data of diff) {
      const res3 = await this.fetch(API_URL + "/api/presence", {
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
    }
    const res4 = await this.fetch(API_URL + "/api/presence", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit

      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer" // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    const newPresence = await res4.json();

    return { newPresence };
  }
</script>

<script>
  export let newPresence = [];
  import Button, { Icon } from "@smui/button";
  import { appBarTitle } from "../stores";
  import { onMount } from "svelte";
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

  let clickedSimple = "nothing yet";
  let clickedDense = "nothing yet";
  let selectionTwoLine = "";
  // This value is updated when the component is initialized, based on the
  // selected Item's `selected` prop.
  let selectionIndex = null;
  let clickedGroup = "nothing yet";
  let selectedRadio = "Tom Hanks";
  let selectedCheckbox = ["Tom Hanks"];
  let clicked = 0;

  async function updatePresence(item) {
    let { _id } = item;
    const res1 = await fetch(API_URL + "/api/presence/" + _id, {
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
      body: JSON.stringify(item) // body data type must match "Content-Type" header
    });
    const members = await res1.json();
  }

  function sortByName(a, b) {
    let nameA = a.member.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.member.name.toUpperCase(); // ignore upper and lowercase
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

<svelte:head>
  <title>Akela</title>
</svelte:head>
<List
  class="demo-list"
  twoLine
  avatarList
  singleSelection
  bind:selectedIndex={selectionIndex}>
  <Subheader>Aangemeld</Subheader>
  {#each newPresence
    .sort(sortByName)
    .filter(t => !t.cancelled && !t.present) as item}
    <Item
      on:SMUI:action={() => {
        item.present = true;
        updatePresence(item);
        selectionTwoLine = item.member.name;
      }}
      selected={selectionTwoLine === item.member.name}>
      <Graphic
        style="background-image: url(https://via.placeholder.com/40x40.png?text={item.member.name
          .split(' ')
          .map(val => val.substring(0, 1))
          .join('')});" />
      <Text>
        <PrimaryText>{item.member.name}</PrimaryText>
        <SecondaryText>{item.member.role}</SecondaryText>
      </Text>
      <Meta>
        <Checkbox bind:group={selectedCheckbox} value={item.member.name} />
      </Meta>
    </Item>
  {/each}
  <Separator />
</List>
<List
  class="demo-list"
  twoLine
  avatarList
  singleSelection
  bind:selectedIndex={selectionIndex}>
  <Subheader>Aanwezig</Subheader>
  {#each newPresence
    .sort(sortByName)
    .filter(t => !t.cancelled && t.present) as item}
    <Item
      on:SMUI:action={() => {
        item.present = false;
        updatePresence(item);
        selectionTwoLine = item.member.name;
      }}
      selected={selectionTwoLine === item.member.name}>
      <Graphic
        style="background-image: url(https://via.placeholder.com/40x40.png?text={item.member.name
          .split(' ')
          .map(val => val.substring(0, 1))
          .join('')});" />
      <Text>
        <PrimaryText>{item.member.name}</PrimaryText>
        <SecondaryText>{item.member.role}</SecondaryText>
      </Text>
      <Meta>
        <Checkbox bind:group={selectedCheckbox} value={item.member.name} />
      </Meta>
    </Item>
  {/each}
  <Separator />
</List>
<List
  class="demo-list"
  twoLine
  avatarList
  singleSelection
  bind:selectedIndex={selectionIndex}>
  <Subheader>Afgemeld</Subheader>
  {#each newPresence.sort(sortByName).filter(t => t.cancelled) as item}
    <Item
      on:SMUI:action={() => (selectionTwoLine = item.member.name)}
      disabled
      selected={selectionTwoLine === item.member.name}>
      <Graphic
        style="background-image: url(https://via.placeholder.com/40x40.png?text={item.member.name
          .split(' ')
          .map(val => val.substring(0, 1))
          .join('')});" />
      <Text>
        <PrimaryText>{item.member.name}</PrimaryText>
        <SecondaryText>{item.member.role}</SecondaryText>
      </Text>
    </Item>
  {/each}
  <Separator />
</List>
